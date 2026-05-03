// articles.js
// Technical blog articles by Jorge Morais. Lead Full Stack Developer

export const articles = [
  {
    id: 1,
    slug: 'cache-layers-every-developer-should-know',
    title: 'The Six Cache Layers Every Developer Should Understand',
    titlePt: 'As Seis Camadas de Cache que Todo o Developer Deve Conhecer',
    date: '2026-01-20',
    readTime: '14 min read',
    readTimePt: '14 min de leitura',
    tags: ['Cache', 'Performance', 'Redis', 'CDN', 'Architecture'],
    status: 'draft',
    heroImage: '',
    likes: 0, views: 0, comments: 0,
    excerpt: 'Caching is not a single thing. it is a layered discipline. From in-process memory to edge CDN nodes, each layer operates on different trade-offs: speed, scope, persistence, and invalidation cost. This article maps all six layers, explains when to use each, and shows the production patterns that actually work.',
    excerptPt: 'Cache não é uma coisa única. é uma disciplina em camadas. Desde a memória em processo até nós CDN na borda, cada camada opera em trade-offs diferentes: velocidade, âmbito, persistência e custo de invalidação. Este artigo mapeia as seis camadas, explica quando usar cada uma, e mostra os padrões de produção que realmente funcionam.',
    content: `
<h2>Why Cache Layers Exist</h2>
<p>Every layer of a modern system stack introduces latency and load. A database query might take 40ms. A network round-trip adds another 20ms. Multiply those by thousands of concurrent users and the numbers compound quickly. Caching interrupts that chain. serving responses from fast, local storage before the slow path is ever reached.</p>
<p>But there is no universal cache. A strategy that works brilliantly for session tokens fails for real-time inventory counts. Understanding <em>which layer</em> to cache at, and <em>why</em>, is what separates a performant system from one that is just fast on the developer's laptop.</p>
<p>Here are the six layers, from fastest and most local to slowest and most distributed.</p>

<h2>Layer 1. In-Process Memory Cache</h2>
<p><strong>What it is:</strong> Data stored directly in the application's memory heap. a plain <code>Map</code>, a class property, or a proper LRU cache structure. No network, no serialisation, no external dependency. It is the fastest cache that exists.</p>
<p><strong>Trade-offs:</strong> Volatile (lost on process restart), per-instance (each server has its own copy), bounded by available RAM, and requires careful invalidation to avoid serving stale data.</p>
<p><strong>When to use it:</strong> Configuration that rarely changes, lookup tables, compiled templates, results of expensive pure computations, rate-limit counters per instance.</p>

<pre><code class="language-javascript">// Simple LRU cache. evicts least-recently-used entries when full
class LRUCache {
  constructor(maxSize = 500) {
    this.maxSize = maxSize;
    this.cache   = new Map(); // Map preserves insertion order
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    // Move to end = mark as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value, ttlMs = 60_000) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size >= this.maxSize) {
      // Evict oldest entry (first key in Map)
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  getValid(key) {
    const entry = this.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) { this.cache.delete(key); return null; }
    return entry.value;
  }
}

const configCache = new LRUCache(100);

// Usage. cache a DB config lookup for 5 minutes
async function getFeatureFlags(tenantId) {
  const cached = configCache.getValid(\`flags:\${tenantId}\`);
  if (cached) return cached;

  const flags = await db.query('SELECT * FROM feature_flags WHERE tenant_id = ?', [tenantId]);
  configCache.set(\`flags:\${tenantId}\`, flags, 5 * 60_000);
  return flags;
}</code></pre>

<p>In production, prefer a battle-tested library like <code>lru-cache</code> (Node.js) or Guava's <code>CacheBuilder</code> (Java) over hand-rolled implementations. they handle edge cases around concurrent access and memory pressure.</p>

<h2>Layer 2. Distributed Cache</h2>
<p><strong>What it is:</strong> An external in-memory store shared across all instances of your application. Redis and Memcached are the canonical choices. Redis is more versatile (data structures, pub/sub, persistence options); Memcached is simpler and sometimes faster for pure key-value workloads.</p>
<p><strong>Trade-offs:</strong> A network hop (typically 0.5–2ms on LAN), serialisation cost, operational overhead of running an external service, but shared state across all nodes and optional persistence.</p>
<p><strong>When to use it:</strong> Session data, user-specific computed results, shared rate limiting, shopping carts, leaderboards, anything that must be consistent across multiple server instances.</p>

<pre><code class="language-javascript">const redis = require('ioredis');
const client = new redis({ host: 'redis-cluster', port: 6379 });

// Cache-aside pattern: read-through with explicit TTL
async function getUserProfile(userId) {
  const key    = \`user:profile:\${userId}\`;
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  const profile = await db.users.findById(userId);
  if (!profile) return null;

  // Cache for 15 minutes. serialise to JSON
  await client.setex(key, 900, JSON.stringify(profile));
  return profile;
}

// Invalidate on write. keep cache consistent
async function updateUserProfile(userId, data) {
  await db.users.update(userId, data);
  await client.del(\`user:profile:\${userId}\`); // invalidate, not update
}

// Atomic increment. Redis INCR is thread-safe across all nodes
async function recordPageView(slug) {
  const key = \`views:\${slug}:\${new Date().toISOString().slice(0,10)}\`;
  return client.incr(key); // atomic, no race condition
}</code></pre>

<p>A common mistake with distributed caches is the "thundering herd" problem: when a cached item expires, many concurrent requests simultaneously miss the cache and hit the database. Mitigate this with a lock or a probabilistic early expiration strategy.</p>

<pre><code class="language-javascript">// Mutex pattern. only one request rebuilds the cache
const Mutex = require('async-mutex').Mutex;
const mutexMap = new Map();

async function getCachedWithLock(key, buildFn, ttlSeconds) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  if (!mutexMap.has(key)) mutexMap.set(key, new Mutex());
  const release = await mutexMap.get(key).acquire();
  try {
    // Double-check after acquiring lock
    const recheck = await client.get(key);
    if (recheck) return JSON.parse(recheck);

    const value = await buildFn();
    await client.setex(key, ttlSeconds, JSON.stringify(value));
    return value;
  } finally {
    release();
  }
}</code></pre>

<h2>Layer 3. Database Cache</h2>
<p><strong>What it is:</strong> Caching built directly into the database engine. This includes the buffer pool (PostgreSQL's shared_buffers, MySQL's InnoDB buffer pool), the OS page cache, and query result caches. The database automatically manages what stays in memory based on access patterns.</p>
<p><strong>Trade-offs:</strong> Largely automatic. the database handles it. But you must size it correctly and understand how your queries interact with it.</p>
<p><strong>When to use it:</strong> Always. This layer is always active. Your job is to configure it well and write queries that benefit from it.</p>

<pre><code class="language-sql">-- PostgreSQL: check buffer pool hit ratio
-- A hit ratio below 95% suggests you need more shared_buffers
SELECT
  sum(heap_blks_hit)  AS cache_hits,
  sum(heap_blks_read) AS disk_reads,
  round(
    sum(heap_blks_hit)::numeric /
    nullif(sum(heap_blks_hit) + sum(heap_blks_read), 0) * 100, 2
  ) AS hit_ratio_pct
FROM pg_statio_user_tables;

-- Partial indexes dramatically improve cache efficiency
-- Instead of caching the full orders table, cache only active orders
CREATE INDEX idx_orders_active ON orders (user_id, created_at)
WHERE status IN ('pending', 'processing');

-- Avoid SELECT *. fetch only what you need to reduce buffer pool pressure
SELECT id, total, status FROM orders WHERE user_id = $1 AND status = 'active';</code></pre>

<p>The most impactful database caching improvements rarely come from tuning configuration. They come from eliminating N+1 queries, adding indexes that fit in memory, and keeping hot rows narrow so more fit per buffer pool page.</p>

<h2>Layer 4. Edge Cache (CDN &amp; Reverse Proxy)</h2>
<p><strong>What it is:</strong> A cache that sits between the internet and your origin servers. a CDN like Cloudflare, Fastly, or AWS CloudFront, or a reverse proxy cache like Varnish or Nginx. Requests for cacheable content are served directly from a node geographically close to the user, never reaching your backend.</p>
<p><strong>Trade-offs:</strong> Response times under 20ms for cached content, massive reduction in origin load, but requires careful cache-control header design and a thought-out invalidation strategy.</p>
<p><strong>When to use it:</strong> Static assets, API responses that are the same for all users (public product listings, blog posts, pricing pages), and any content that can tolerate some staleness.</p>

<pre><code class="language-javascript">// Express. set cache-control headers for edge caching
app.get('/api/products', async (req, res) => {
  const products = await getProducts();

  // Cache at the CDN for 5 minutes, serve stale for up to 1 hour while revalidating
  res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
  res.set('Vary', 'Accept-Language'); // separate cache per language
  res.json(products);
});

// Surrogate keys (Cloudflare / Fastly). invalidate by tag, not URL
app.get('/api/products/:id', async (req, res) => {
  const product = await getProduct(req.params.id);

  // Tag the cached response. enables precise purging by product or category
  res.set('Cache-Tag', \`product:\${product.id} category:\${product.categoryId}\`);
  res.set('Cache-Control', 'public, max-age=600');
  res.json(product);
});

// When a product changes: purge only responses tagged with that product
async function onProductUpdated(productId) {
  await fetch('https://api.cloudflare.com/client/v4/zones/:zone/purge_cache', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + process.env.CF_TOKEN },
    body: JSON.stringify({ tags: [\`product:\${productId}\`] })
  });
}</code></pre>

<h2>Layer 5. Browser Cache</h2>
<p><strong>What it is:</strong> The cache maintained by the user's browser. storing HTTP responses locally so subsequent visits serve assets from disk without any network request. Controlled entirely through HTTP response headers.</p>
<p><strong>Trade-offs:</strong> Zero network latency for cached assets, zero origin load for repeat visitors, but the developer gives up control once assets are cached. Invalidation only happens when the URL changes or the TTL expires.</p>
<p><strong>When to use it:</strong> JavaScript bundles, CSS, images, fonts. anything with a content hash in the filename can be cached indefinitely. HTML documents and API responses need shorter TTLs and revalidation headers.</p>

<pre><code class="language-javascript">// Nginx. different caching rules by content type
server {
  # Hashed assets (e.g. main.a3f2c8.js). cache forever, content hash is the version
  location ~* \\.(js|css|woff2)$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  # Images without hashes. cache for 30 days, revalidate with ETag
  location ~* \\.(png|jpg|webp|svg)$ {
    add_header Cache-Control "public, max-age=2592000";
    etag on;
  }

  # HTML. never cache, always revalidate
  location ~* \\.html$ {
    add_header Cache-Control "no-cache";
  }
}

// Service Worker. fine-grained browser cache control for SPAs
// Cache first: serve from cache, fall back to network (for assets)
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'script' ||
      event.request.destination === 'style') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached ?? fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open('assets-v2').then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});</code></pre>

<p>The most important rule for browser caching: <strong>never cache a URL whose content can change without its URL changing</strong>. Use content-addressed filenames (generated by build tools like Vite or Webpack) for assets, so the cache never needs explicit invalidation. a new deploy produces new URLs.</p>

<h2>Layer 6. Session Cache</h2>
<p><strong>What it is:</strong> Dedicated storage for user session state. authentication tokens, preferences, shopping cart contents, in-progress workflows. Typically Redis, because it supports key expiration natively and can handle the read/write pattern of session access at high throughput.</p>
<p><strong>Trade-offs:</strong> Adds a Redis dependency to every authenticated request. But the alternative. querying a relational database on every request to validate a session. does not scale.</p>
<p><strong>When to use it:</strong> Any stateful user session. The decision is really between Redis-backed sessions (server-side state) and JWT (client-side state). both are valid; the right choice depends on your revocation and scalability requirements.</p>

<pre><code class="language-javascript">// Redis-backed sessions with express-session
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');

const redisClient = createClient({ url: process.env.REDIS_URL });
await redisClient.connect();

app.use(session({
  store:  new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure:   process.env.NODE_ENV === 'production',
    httpOnly: true,    // not accessible from JavaScript
    sameSite: 'lax',  // CSRF protection
    maxAge:   7 * 24 * 60 * 60 * 1000 // 7 days
  }
}));

// Revocation is trivial. just delete the Redis key
async function revokeSession(sessionId) {
  await redisClient.del(\`sess:\${sessionId}\`);
}

// Revoke ALL sessions for a user (e.g., password change, account compromise)
async function revokeAllUserSessions(userId) {
  const keys = await redisClient.keys(\`sess:user:\${userId}:*\`);
  if (keys.length > 0) await redisClient.del(keys);
}</code></pre>

<pre><code class="language-javascript">// JWT alternative. stateless, no Redis dependency per request
// Trade-off: revocation requires a blocklist (which brings Redis back in anyway)
const jwt = require('jsonwebtoken');

function issueToken(userId, roles) {
  return jwt.sign(
    { sub: userId, roles, iat: Date.now() },
    process.env.JWT_SECRET,
    { expiresIn: '1h', algorithm: 'HS256' }
  );
}

// Short-lived access token + long-lived refresh token
// Access token: 15min, stateless, fast
// Refresh token: 7 days, stored in Redis, revocable
async function refreshAccessToken(refreshToken) {
  const stored = await redisClient.get(\`refresh:\${refreshToken}\`);
  if (!stored) throw new Error('Token revoked or expired');

  const { userId, roles } = JSON.parse(stored);
  return issueToken(userId, roles); // new 15min access token
}</code></pre>

<h2>Putting It Together: The Cache Decision Map</h2>
<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Latency</th>
      <th>Scope</th>
      <th>Survives Restart?</th>
      <th>Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In-process</td>
      <td>&lt; 0.1ms</td>
      <td>Per instance</td>
      <td>No</td>
      <td>Config, lookup tables, hot computations</td>
    </tr>
    <tr>
      <td>Distributed</td>
      <td>0.5–2ms</td>
      <td>All instances</td>
      <td>Optional</td>
      <td>Shared state, user data, rate limits</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Automatic</td>
      <td>DB engine</td>
      <td>Yes</td>
      <td>Hot rows, index pages, query plans</td>
    </tr>
    <tr>
      <td>Edge / CDN</td>
      <td>&lt; 20ms</td>
      <td>Global PoPs</td>
      <td>Yes</td>
      <td>Public API responses, static content</td>
    </tr>
    <tr>
      <td>Browser</td>
      <td>0ms (disk)</td>
      <td>Single user</td>
      <td>Yes</td>
      <td>Assets, SPAs, immutable resources</td>
    </tr>
    <tr>
      <td>Session</td>
      <td>0.5–2ms</td>
      <td>Per user</td>
      <td>Optional</td>
      <td>Auth state, user context, cart</td>
    </tr>
  </tbody>
</table>

<h2>The One Rule That Applies to Every Layer</h2>
<p>Phil Karlton's famous quote. "There are only two hard things in Computer Science: cache invalidation and naming things". remains accurate decades later. Every caching strategy is only as good as its invalidation strategy.</p>
<p>Before adding any cache, answer three questions: <strong>when does this data change?</strong> (your TTL), <strong>who changes it?</strong> (your invalidation trigger), and <strong>what is the cost of serving stale data?</strong> (your risk tolerance). If you cannot answer all three, you are not ready to cache that data.</p>
    `,
    contentPt: `
<h2>Porque Existem Camadas de Cache</h2>
<p>Cada camada de um sistema moderno introduz latência e carga. Uma query à base de dados pode demorar 40ms. Um round-trip de rede adiciona mais 20ms. Multiplicados por milhares de utilizadores concorrentes, os números acumulam rapidamente. O cache interrompe essa cadeia. servindo respostas a partir de armazenamento rápido e local antes que o caminho lento seja sequer alcançado.</p>
<p>Mas não existe um cache universal. Uma estratégia que funciona brilhantemente para tokens de sessão falha para contagens de inventário em tempo real. Entender <em>em que camada</em> fazer cache, e <em>porquê</em>, é o que distingue um sistema performante de um que é apenas rápido no portátil do developer.</p>
<p>Aqui estão as seis camadas, da mais rápida e local à mais lenta e distribuída.</p>

<h2>Camada 1. Cache em Memória (In-Process)</h2>
<p><strong>O que é:</strong> Dados armazenados diretamente no heap de memória da aplicação. um <code>Map</code> simples, uma propriedade de classe, ou uma estrutura LRU proper. Sem rede, sem serialização, sem dependência externa. É o cache mais rápido que existe.</p>
<p><strong>Trade-offs:</strong> Volátil (perdido ao reiniciar o processo), por instância (cada servidor tem a sua própria cópia), limitado pela RAM disponível, e requer invalidação cuidadosa para evitar dados obsoletos.</p>
<p><strong>Quando usar:</strong> Configuração que raramente muda, tabelas de lookup, templates compilados, resultados de computações puras e dispendiosas, contadores de rate-limit por instância.</p>

<pre><code class="language-javascript">class LRUCache {
  constructor(maxSize = 500) {
    this.maxSize = maxSize;
    this.cache   = new Map();
  }

  set(key, value, ttlMs = 60_000) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size >= this.maxSize) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  getValid(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) { this.cache.delete(key); return null; }
    // Mover para o fim = marcar como usado recentemente
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }
}

const configCache = new LRUCache(100);

async function getFeatureFlags(tenantId) {
  const cached = configCache.getValid(\`flags:\${tenantId}\`);
  if (cached) return cached;

  const flags = await db.query('SELECT * FROM feature_flags WHERE tenant_id = ?', [tenantId]);
  configCache.set(\`flags:\${tenantId}\`, flags, 5 * 60_000); // 5 minutos
  return flags;
}</code></pre>

<h2>Camada 2. Cache Distribuída</h2>
<p><strong>O que é:</strong> Um store externo em memória partilhado entre todas as instâncias da aplicação. Redis e Memcached são as escolhas canónicas. Redis é mais versátil (estruturas de dados, pub/sub, opções de persistência); Memcached é mais simples e por vezes mais rápido para cargas de trabalho puras de chave-valor.</p>
<p><strong>Trade-offs:</strong> Um hop de rede (tipicamente 0,5–2ms em LAN), custo de serialização, overhead operacional de gerir um serviço externo, mas estado partilhado entre todos os nós e persistência opcional.</p>
<p><strong>Quando usar:</strong> Dados de sessão, resultados computados por utilizador, rate limiting partilhado, carrinhos de compras, classificações, qualquer coisa que deva ser consistente entre múltiplas instâncias de servidor.</p>

<pre><code class="language-javascript">const redis = require('ioredis');
const client = new redis({ host: 'redis-cluster', port: 6379 });

// Padrão cache-aside: leitura com TTL explícito
async function getUserProfile(userId) {
  const key    = \`user:profile:\${userId}\`;
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  const profile = await db.users.findById(userId);
  if (!profile) return null;

  await client.setex(key, 900, JSON.stringify(profile)); // 15 minutos
  return profile;
}

// Invalidar na escrita. manter o cache consistente
async function updateUserProfile(userId, data) {
  await db.users.update(userId, data);
  await client.del(\`user:profile:\${userId}\`); // invalidar, não atualizar
}

// Mutex para evitar "thundering herd". só uma request reconstrói o cache
async function getCachedWithLock(key, buildFn, ttlSeconds) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  // SET NX = apenas se não existir (lock atómico)
  const locked = await client.set(\`lock:\${key}\`, '1', 'NX', 'EX', 10);
  if (!locked) {
    await new Promise(r => setTimeout(r, 50));
    return getCachedWithLock(key, buildFn, ttlSeconds);
  }

  const value = await buildFn();
  await client.setex(key, ttlSeconds, JSON.stringify(value));
  await client.del(\`lock:\${key}\`);
  return value;
}</code></pre>

<h2>Camada 3. Cache de Base de Dados</h2>
<p><strong>O que é:</strong> Cache construído diretamente no motor de base de dados. Inclui o buffer pool (shared_buffers do PostgreSQL, buffer pool do InnoDB do MySQL), o page cache do SO, e caches de resultados de queries. A base de dados gere automaticamente o que fica em memória com base nos padrões de acesso.</p>
<p><strong>Quando usar:</strong> Sempre. Esta camada está sempre ativa. O teu trabalho é configurá-la bem e escrever queries que beneficiem dela.</p>

<pre><code class="language-sql">-- PostgreSQL: verificar a taxa de acerto do buffer pool
-- Uma taxa abaixo de 95% sugere que precisas de mais shared_buffers
SELECT
  sum(heap_blks_hit)  AS cache_hits,
  sum(heap_blks_read) AS disk_reads,
  round(
    sum(heap_blks_hit)::numeric /
    nullif(sum(heap_blks_hit) + sum(heap_blks_read), 0) * 100, 2
  ) AS hit_ratio_pct
FROM pg_statio_user_tables;

-- Índices parciais aumentam drasticamente a eficiência do cache
-- Em vez de fazer cache da tabela orders completa, apenas orders ativas
CREATE INDEX idx_orders_active ON orders (user_id, created_at)
WHERE status IN ('pending', 'processing');

-- Evita SELECT *. busca apenas o que precisas
SELECT id, total, status FROM orders WHERE user_id = $1 AND status = 'active';</code></pre>

<h2>Camada 4. Cache de Borda (CDN e Proxy Reverso)</h2>
<p><strong>O que é:</strong> Um cache que fica entre a internet e os teus servidores de origem. um CDN como Cloudflare, Fastly ou AWS CloudFront, ou um proxy reverso como Varnish ou Nginx. Pedidos de conteúdo cacheável são servidos diretamente de um nó geograficamente próximo do utilizador, sem nunca chegar ao backend.</p>
<p><strong>Quando usar:</strong> Assets estáticos, respostas de API iguais para todos os utilizadores (listagens de produtos públicas, artigos de blog, páginas de preços), e qualquer conteúdo que tolere alguma desatualização.</p>

<pre><code class="language-javascript">// Express. definir headers Cache-Control para cache de borda
app.get('/api/products', async (req, res) => {
  const products = await getProducts();

  // Cache no CDN por 5 minutos, servir obsoleto por até 1 hora enquanto revalida
  res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
  res.set('Vary', 'Accept-Language'); // cache separado por idioma
  res.json(products);
});

// Surrogate keys (Cloudflare / Fastly). invalidar por tag, não por URL
app.get('/api/products/:id', async (req, res) => {
  const product = await getProduct(req.params.id);
  res.set('Cache-Tag', \`product:\${product.id} category:\${product.categoryId}\`);
  res.set('Cache-Control', 'public, max-age=600');
  res.json(product);
});

// Quando um produto muda: purgar apenas as respostas com essa tag
async function onProductUpdated(productId) {
  await fetch('https://api.cloudflare.com/client/v4/zones/:zone/purge_cache', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + process.env.CF_TOKEN },
    body: JSON.stringify({ tags: [\`product:\${productId}\`] })
  });
}</code></pre>

<h2>Camada 5. Cache de Navegador</h2>
<p><strong>O que é:</strong> O cache mantido pelo browser do utilizador. guardando respostas HTTP localmente para que visitas subsequentes sirvam assets do disco sem qualquer pedido de rede. Controlado inteiramente através de headers de resposta HTTP.</p>
<p><strong>Quando usar:</strong> Bundles JavaScript, CSS, imagens, fontes. qualquer coisa com um hash de conteúdo no nome do ficheiro pode ser cacheada indefinidamente. Documentos HTML e respostas de API precisam de TTLs mais curtos e headers de revalidação.</p>

<pre><code class="language-javascript">// Nginx. regras de cache diferentes por tipo de conteúdo
// Assets com hash (ex: main.a3f2c8.js). cache para sempre
location ~* \\.(js|css|woff2)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

// Imagens sem hash. cache por 30 dias, revalidar com ETag
location ~* \\.(png|jpg|webp|svg)$ {
  add_header Cache-Control "public, max-age=2592000";
  etag on;
}

// HTML. nunca cache, sempre revalidar
location ~* \\.html$ {
  add_header Cache-Control "no-cache";
}

// Service Worker. controlo fino de cache para SPAs
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'script' ||
      event.request.destination === 'style') {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached ?? fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open('assets-v2').then(cache => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});</code></pre>

<h2>Camada 6. Cache de Sessão</h2>
<p><strong>O que é:</strong> Armazenamento dedicado para estado de sessão do utilizador. tokens de autenticação, preferências, conteúdo do carrinho, fluxos de trabalho em progresso. Tipicamente Redis, porque suporta expiração de chaves nativamente e consegue lidar com o padrão de leitura/escrita de acesso a sessões com alto throughput.</p>
<p><strong>Quando usar:</strong> Qualquer sessão de utilizador com estado. A decisão é entre sessões com Redis (estado do lado do servidor) e JWT (estado do lado do cliente). ambos são válidos; a escolha certa depende dos teus requisitos de revogação e escalabilidade.</p>

<pre><code class="language-javascript">// Sessões Redis com express-session
const session   = require('express-session');
const RedisStore = require('connect-redis').default;

app.use(session({
  store:  new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure:   process.env.NODE_ENV === 'production',
    httpOnly: true,    // não acessível a partir de JavaScript
    sameSite: 'lax',  // proteção CSRF
    maxAge:   7 * 24 * 60 * 60 * 1000 // 7 dias
  }
}));

// Revogar uma sessão específica
async function revokeSession(sessionId) {
  await redisClient.del(\`sess:\${sessionId}\`);
}

// JWT. alternativa stateless (access token curto + refresh token longo)
function issueToken(userId, roles) {
  return jwt.sign(
    { sub: userId, roles },
    process.env.JWT_SECRET,
    { expiresIn: '15m', algorithm: 'HS256' }
  );
}

async function refreshAccessToken(refreshToken) {
  const stored = await redisClient.get(\`refresh:\${refreshToken}\`);
  if (!stored) throw new Error('Token revogado ou expirado');
  const { userId, roles } = JSON.parse(stored);
  return issueToken(userId, roles);
}</code></pre>

<h2>Mapa de Decisão de Cache</h2>
<table>
  <thead>
    <tr>
      <th>Camada</th>
      <th>Latência</th>
      <th>Âmbito</th>
      <th>Sobrevive ao Restart?</th>
      <th>Melhor Para</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In-process</td>
      <td>&lt; 0,1ms</td>
      <td>Por instância</td>
      <td>Não</td>
      <td>Config, lookup tables, computações quentes</td>
    </tr>
    <tr>
      <td>Distribuída</td>
      <td>0,5–2ms</td>
      <td>Todas as instâncias</td>
      <td>Opcional</td>
      <td>Estado partilhado, dados de utilizador, rate limits</td>
    </tr>
    <tr>
      <td>Base de dados</td>
      <td>Automática</td>
      <td>Motor DB</td>
      <td>Sim</td>
      <td>Linhas quentes, páginas de índice, query plans</td>
    </tr>
    <tr>
      <td>Borda / CDN</td>
      <td>&lt; 20ms</td>
      <td>PoPs globais</td>
      <td>Sim</td>
      <td>Respostas públicas de API, conteúdo estático</td>
    </tr>
    <tr>
      <td>Navegador</td>
      <td>0ms (disco)</td>
      <td>Por utilizador</td>
      <td>Sim</td>
      <td>Assets, SPAs, recursos imutáveis</td>
    </tr>
    <tr>
      <td>Sessão</td>
      <td>0,5–2ms</td>
      <td>Por utilizador</td>
      <td>Opcional</td>
      <td>Estado de auth, contexto do utilizador, carrinho</td>
    </tr>
  </tbody>
</table>

<h2>A Regra Universal</h2>
<p>A famosa citação de Phil Karlton. "Só existem duas coisas difíceis em Ciências da Computação: invalidação de cache e escolher nomes". mantém-se precisa décadas depois. Cada estratégia de cache é apenas tão boa quanto a sua estratégia de invalidação.</p>
<p>Antes de adicionar qualquer cache, responde a três perguntas: <strong>quando é que estes dados mudam?</strong> (o teu TTL), <strong>quem os muda?</strong> (o teu trigger de invalidação), e <strong>qual é o custo de servir dados obsoletos?</strong> (a tua tolerância ao risco). Se não consegues responder às três, ainda não estás pronto para fazer cache desses dados.</p>
    `
  },

  {
    id: 2,
    slug: 'cctalk-embedded-c-concurrency-bus-arbitration',
    title: 'CCTalk Serial Protocol in Embedded C: Half-Duplex, Race Conditions, and Real-World Traps',
    titlePt: 'Protocolo CCTalk em C Embebido: Half-Duplex, Race Conditions e Armadilhas Reais',
    date: '2025-04-22',
    readTime: '13 min read',
    readTimePt: '13 min de leitura',
    tags: ['Embedded C', 'CCTalk', 'Serial', 'UART', 'Concurrency'],
    status: 'draft',
    heroImage: '',
    likes: 0, views: 0, comments: 0,
    excerpt: 'CCTalk is a half-duplex serial protocol used in coin and payment mechanisms. Implementing it in embedded C sounds straightforward until you hit the real problems: bus echoes, ISR timing, race conditions between the interrupt handler and the main loop, and silent data corruption. Here is what I learned the hard way.',
    excerptPt: 'O CCTalk é um protocolo série half-duplex usado em mecanismos de moedas e pagamento. Implementá-lo em C embebido parece simples até encontrares os problemas reais: ecos no bus, timing do ISR, race conditions entre o handler de interrupção e o loop principal, e corrupção silenciosa de dados. Aqui está o que aprendi.',
    content: `
<h2>What Is CCTalk?</h2>
<p>CCTalk is a low-level serial protocol designed for coin acceptors, bill validators, and similar payment mechanisms. It runs at 9600 baud over a single shared wire in half-duplex mode. Multiple devices can sit on the same bus, each with its own address. A host (typically a microcontroller or embedded Linux SBC) sends a command frame; the addressed device responds after a short silence.</p>

<p>The frame structure is minimal. five mandatory bytes plus a variable data payload:</p>

<pre><code class="language-text">Byte 0:  Destination address  (device on the bus)
Byte 1:  Number of data bytes  (0 = command only)
Byte 2:  Source address        (0x01 for the host)
Byte 3:  Header (command byte)
Byte 4–N: Data bytes           (length from byte 1)
Byte N+1: Checksum             (8-bit modular sum)</code></pre>

<p>The checksum is an 8-bit additive sum designed so that all frame bytes including the checksum sum to zero modulo 256:</p>

<pre><code class="language-c">uint8_t checksum = 0;
for (int i = 0; i < frame_len - 1; i++) {
    checksum += frame[i];
}
checksum = (256 - checksum) % 256;</code></pre>

<p>Simple and effective for a 9600-baud serial link. But the simplicity of the protocol hides a set of implementation problems that are easy to underestimate.</p>

<h2>The Core Data Structures</h2>
<p>I designed the parser to work entirely from a static ring buffer. no heap allocation on the data path. In embedded systems, frequent malloc/free causes fragmentation over time that is very difficult to debug.</p>

<pre><code class="language-c">// cctalk.h
#ifndef CCTALK_H
#define CCTALK_H

#include &lt;stdint.h&gt;
#include &lt;stddef.h&gt;

#define CCTALK_MAX_DATA_LEN  252
#define CCTALK_FRAME_OVERHEAD  5
#define CCTALK_MAX_FRAME_LEN  (CCTALK_MAX_DATA_LEN + CCTALK_FRAME_OVERHEAD)

typedef struct {
    uint8_t  destination;
    uint8_t  data_length;
    uint8_t  source;
    uint8_t  header;
    uint8_t  data[CCTALK_MAX_DATA_LEN];
    uint8_t  checksum;
} cctalk_frame_t;

typedef enum {
    CCTALK_OK          =  0,
    CCTALK_ERR_CHKSUM  = -1,
    CCTALK_ERR_LEN     = -2,
    CCTALK_ERR_TIMEOUT = -3,
    CCTALK_ERR_SERIAL  = -4
} cctalk_status_t;

size_t          cctalk_encode(const cctalk_frame_t *frame, uint8_t *dst);
cctalk_status_t cctalk_decode(const uint8_t *src, size_t len, cctalk_frame_t *out);
int             cctalk_validate_checksum(const uint8_t *frame, size_t len);

#endif</code></pre>

<pre><code class="language-c">// cctalk.c. encode and decode
static uint8_t compute_checksum(const uint8_t *buf, size_t len) {
    uint16_t sum = 0;
    for (size_t i = 0; i < len; i++) sum += buf[i];
    return (uint8_t)((256 - (sum % 256)) % 256);
}

size_t cctalk_encode(const cctalk_frame_t *frame, uint8_t *dst) {
    if (!frame || !dst) return 0;
    size_t idx = 0;
    dst[idx++] = frame->destination;
    dst[idx++] = frame->data_length;
    dst[idx++] = frame->source;
    dst[idx++] = frame->header;
    if (frame->data_length > 0) {
        memcpy(dst + idx, frame->data, frame->data_length);
        idx += frame->data_length;
    }
    dst[idx] = compute_checksum(dst, idx);
    return idx + 1;
}

cctalk_status_t cctalk_decode(const uint8_t *src, size_t len, cctalk_frame_t *out) {
    if (!src || !out || len < CCTALK_FRAME_OVERHEAD) return CCTALK_ERR_LEN;
    uint8_t data_len = src[1];
    if (len < (size_t)(data_len + CCTALK_FRAME_OVERHEAD)) return CCTALK_ERR_LEN;
    if (!cctalk_validate_checksum(src, data_len + CCTALK_FRAME_OVERHEAD)) return CCTALK_ERR_CHKSUM;
    out->destination = src[0];
    out->data_length = src[1];
    out->source      = src[2];
    out->header      = src[3];
    if (data_len > 0) memcpy(out->data, src + 4, data_len);
    out->checksum    = src[data_len + 4];
    return CCTALK_OK;
}</code></pre>

<h2>The UART Ring Buffer. Getting ISR Safety Right</h2>
<p>The UART receive interrupt fires every time a byte arrives. It must run fast and never block. The main loop reads bytes from a shared ring buffer. This is where most implementations go wrong.</p>
<p>The critical constraint: the ISR writes to the buffer, the main loop reads from it. Without proper handling, you get a classic producer-consumer race condition. On an 8/32-bit MCU without hardware atomics for multi-byte operations, you must ensure that reads of the head/tail indices are atomic with respect to the ISR.</p>

<pre><code class="language-c">// uart_ring.h
#define RING_BUFFER_SIZE 256   // must be a power of 2 for fast modulo

typedef struct {
    volatile uint8_t  buf[RING_BUFFER_SIZE];
    volatile uint16_t head;   // written by ISR only
    volatile uint16_t tail;   // read/written by main loop only
} ring_buffer_t;

static inline int rb_push(ring_buffer_t *rb, uint8_t byte) {
    uint16_t next_head = (rb->head + 1) & (RING_BUFFER_SIZE - 1);
    if (next_head == rb->tail) return -1;  // buffer full. drop byte
    rb->buf[rb->head] = byte;
    // Write data BEFORE updating head. ensures main loop sees valid data
    __asm__ volatile("" ::: "memory");  // compiler memory barrier
    rb->head = next_head;
    return 0;
}

static inline int rb_pop(ring_buffer_t *rb, uint8_t *out) {
    if (rb->tail == rb->head) return -1;   // empty
    *out = rb->buf[rb->tail];
    __asm__ volatile("" ::: "memory");
    rb->tail = (rb->tail + 1) & (RING_BUFFER_SIZE - 1);
    return 0;
}

// ISR. called on every received UART byte
void USART1_IRQHandler(void) {
    if (USART1->SR & USART_SR_RXNE) {
        uint8_t byte = (uint8_t)USART1->DR;
        rb_push(&rx_buffer, byte);
    }
}</code></pre>

<p>Two details matter here:</p>
<ul>
<li><strong><code>volatile</code> on head and tail</strong>: without this, the compiler might cache them in a register and never see ISR updates.</li>
<li><strong>Memory barrier before index update</strong>: ensures the data write is committed to memory before the index is visible to the consumer. Without this, the compiler or CPU can reorder the stores.</li>
</ul>

<h2>Problem #1: The Half-Duplex Echo</h2>
<p>On a single-wire half-duplex UART, when you transmit bytes, those same bytes come back on the receive line. If you do not handle this, your frame parser sees every command you send as incoming data from the device. This took me an embarrassingly long time to debug the first time.</p>

<p>The solution is to track how many bytes you have transmitted and discard the same count from the receive buffer immediately after transmission:</p>

<pre><code class="language-c">static size_t g_tx_echo_pending = 0;

int cctalk_send(ring_buffer_t *rx, const uint8_t *frame, size_t len) {
    // Mark how many echo bytes to discard
    g_tx_echo_pending = len;

    for (size_t i = 0; i < len; i++) {
        while (!(USART1->SR & USART_SR_TXE)); // wait for TX register empty
        USART1->DR = frame[i];
    }
    while (!(USART1->SR & USART_SR_TC));       // wait for transmission complete
    return 0;
}

// In the main read loop. discard echo bytes first
int cctalk_read_byte(ring_buffer_t *rx, uint8_t *out) {
    uint8_t byte;
    while (rb_pop(rx, &byte) == 0) {
        if (g_tx_echo_pending > 0) {
            g_tx_echo_pending--;
            continue;  // skip echo
        }
        *out = byte;
        return 1;
    }
    return 0;
}</code></pre>

<h2>Problem #2: Reply Timeout and Bus Stalls</h2>
<p>CCTalk devices do not always respond. If a device is busy, powered down, or simply absent, the host must not block waiting forever. A missed response will stall your entire state machine.</p>

<pre><code class="language-c">#define CCTALK_REPLY_TIMEOUT_MS  200

typedef enum {
    STATE_IDLE,
    STATE_WAITING_REPLY,
    STATE_COLLECTING,
    STATE_COMPLETE,
    STATE_TIMEOUT
} bus_state_t;

static bus_state_t   g_state        = STATE_IDLE;
static uint32_t      g_tx_timestamp = 0;
static uint8_t       g_reply_buf[CCTALK_MAX_FRAME_LEN];
static size_t        g_reply_len    = 0;

// Call this from main loop at ~1ms tick resolution
void cctalk_tick(ring_buffer_t *rx) {
    if (g_state == STATE_WAITING_REPLY || g_state == STATE_COLLECTING) {
        if ((systick_ms() - g_tx_timestamp) > CCTALK_REPLY_TIMEOUT_MS) {
            g_state = STATE_TIMEOUT;
            return;
        }
    }

    uint8_t byte;
    while (g_state == STATE_WAITING_REPLY || g_state == STATE_COLLECTING) {
        if (!cctalk_read_byte(rx, &byte)) break;

        if (g_state == STATE_WAITING_REPLY) {
            g_reply_buf[0] = byte;
            g_reply_len    = 1;
            g_state        = STATE_COLLECTING;
        } else {
            g_reply_buf[g_reply_len++] = byte;
            // Check if we have enough bytes for a complete frame
            if (g_reply_len >= 2) {
                size_t expected = g_reply_buf[1] + CCTALK_FRAME_OVERHEAD;
                if (g_reply_len >= expected) {
                    g_state = STATE_COMPLETE;
                    break;
                }
            }
        }
    }
}</code></pre>

<h2>Problem #3: Multi-Device Bus Arbitration</h2>
<p>When you have multiple devices on the same bus, you must guarantee only one command is in flight at a time. There is no hardware arbitration in CCTalk. it is entirely the host's responsibility.</p>
<p>I implemented a simple mutex using an atomic flag. On bare-metal without an RTOS, a spinlock is acceptable because commands complete in under 50ms:</p>

<pre><code class="language-c">static volatile int g_bus_locked = 0;

int cctalk_acquire_bus(uint32_t timeout_ms) {
    uint32_t start = systick_ms();
    while (__sync_lock_test_and_set(&g_bus_locked, 1)) {
        if ((systick_ms() - start) > timeout_ms) return -1;
    }
    return 0;  // acquired
}

void cctalk_release_bus(void) {
    __sync_lock_release(&g_bus_locked);
}</code></pre>

<h2>Lessons from the Field</h2>
<ol>
  <li><strong>Half-duplex echo will break your parser</strong> if you do not account for it from day one. Design the transmit path to track and discard echoed bytes.</li>
  <li><strong><code>volatile</code> is not enough for ISR safety on its own.</strong> You also need memory barriers around shared index updates to prevent compiler and CPU reordering.</li>
  <li><strong>Every bus transaction must have a timeout.</strong> Devices hang, disappear, or malfunction. A missing timeout will eventually stall your whole application.</li>
  <li><strong>Never allocate heap memory in the receive path.</strong> Ring buffers with static allocation are safer, faster, and make memory usage completely deterministic.</li>
  <li><strong>Bus arbitration is your problem, not the protocol's.</strong> CCTalk gives you no collision detection. build your own serialisation layer around the bus.</li>
</ol>
    `,
    contentPt: `
<h2>O Que É o CCTalk?</h2>
<p>O CCTalk é um protocolo série de baixo nível concebido para aceitadores de moedas, validadores de notas e mecanismos de pagamento similares. Funciona a 9600 baud num único fio partilhado em modo half-duplex. Vários dispositivos podem estar no mesmo bus, cada um com o seu próprio endereço. O host envia uma frame de comando; o dispositivo endereçado responde após um breve silêncio.</p>

<p>A estrutura da frame é mínima. cinco bytes obrigatórios mais um payload de dados variável:</p>

<pre><code class="language-text">Byte 0:  Endereço de destino
Byte 1:  Número de bytes de dados (0 = apenas comando)
Byte 2:  Endereço de origem (0x01 para o host)
Byte 3:  Header (byte de comando)
Byte 4–N: Bytes de dados
Byte N+1: Checksum (soma aditiva de 8 bits)</code></pre>

<p>O checksum é uma soma aditiva de 8 bits: todos os bytes da frame incluindo o checksum somam zero módulo 256. Simples e eficaz para uma ligação série a 9600 baud. Mas a simplicidade do protocolo esconde um conjunto de problemas de implementação fáceis de subestimar.</p>

<h2>Estruturas de Dados</h2>
<p>Desenhei o parser para funcionar inteiramente a partir de um ring buffer estático. sem alocação de heap no caminho de dados. Em sistemas embebidos, malloc/free frequente causa fragmentação ao longo do tempo que é muito difícil de depurar.</p>

<pre><code class="language-c">// Ring buffer. tamanho deve ser potência de 2 para módulo rápido
#define RING_BUFFER_SIZE 256

typedef struct {
    volatile uint8_t  buf[RING_BUFFER_SIZE];
    volatile uint16_t head;   // escrito apenas pelo ISR
    volatile uint16_t tail;   // lido/escrito apenas pelo loop principal
} ring_buffer_t;

static inline int rb_push(ring_buffer_t *rb, uint8_t byte) {
    uint16_t next_head = (rb->head + 1) & (RING_BUFFER_SIZE - 1);
    if (next_head == rb->tail) return -1;  // buffer cheio
    rb->buf[rb->head] = byte;
    __asm__ volatile("" ::: "memory");     // barreira de memória
    rb->head = next_head;
    return 0;
}

// ISR. chamado a cada byte UART recebido
void USART1_IRQHandler(void) {
    if (USART1->SR & USART_SR_RXNE) {
        uint8_t byte = (uint8_t)USART1->DR;
        rb_push(&rx_buffer, byte);
    }
}</code></pre>

<h2>Problema #1: O Eco do Half-Duplex</h2>
<p>Num UART half-duplex de fio único, quando transmites bytes, esses mesmos bytes voltam pela linha de receção. Se não lidares com isto, o teu parser vê cada comando que envias como dados recebidos do dispositivo. Isto custou-me demasiado tempo de depuração da primeira vez.</p>

<pre><code class="language-c">static size_t g_tx_echo_pending = 0;

int cctalk_send(ring_buffer_t *rx, const uint8_t *frame, size_t len) {
    g_tx_echo_pending = len;  // marcar quantos bytes de eco descartar
    for (size_t i = 0; i < len; i++) {
        while (!(USART1->SR & USART_SR_TXE));
        USART1->DR = frame[i];
    }
    while (!(USART1->SR & USART_SR_TC));
    return 0;
}

int cctalk_read_byte(ring_buffer_t *rx, uint8_t *out) {
    uint8_t byte;
    while (rb_pop(rx, &byte) == 0) {
        if (g_tx_echo_pending > 0) {
            g_tx_echo_pending--;
            continue;  // ignorar eco
        }
        *out = byte;
        return 1;
    }
    return 0;
}</code></pre>

<h2>Problema #2: Timeout de Resposta</h2>
<p>Os dispositivos CCTalk nem sempre respondem. Sem um timeout, uma resposta em falta bloqueará toda a tua máquina de estados indefinidamente.</p>

<pre><code class="language-c">#define CCTALK_REPLY_TIMEOUT_MS  200

void cctalk_tick(ring_buffer_t *rx) {
    if (g_state == STATE_WAITING_REPLY || g_state == STATE_COLLECTING) {
        if ((systick_ms() - g_tx_timestamp) > CCTALK_REPLY_TIMEOUT_MS) {
            g_state = STATE_TIMEOUT;
            return;
        }
    }
    // ... recolher bytes da resposta
}</code></pre>

<h2>Problema #3: Arbitração do Bus</h2>
<p>Com vários dispositivos no mesmo bus, apenas um comando pode estar em trânsito de cada vez. O CCTalk não tem arbitração de hardware. é responsabilidade do host.</p>

<pre><code class="language-c">static volatile int g_bus_locked = 0;

int cctalk_acquire_bus(uint32_t timeout_ms) {
    uint32_t start = systick_ms();
    while (__sync_lock_test_and_set(&g_bus_locked, 1)) {
        if ((systick_ms() - start) > timeout_ms) return -1;
    }
    return 0;
}

void cctalk_release_bus(void) {
    __sync_lock_release(&g_bus_locked);
}</code></pre>

<h2>Lições do Campo</h2>
<ol>
  <li><strong>O eco half-duplex vai quebrar o teu parser</strong> se não o considerares desde o início.</li>
  <li><strong><code>volatile</code> sozinho não chega para segurança do ISR.</strong> Precisas de barreiras de memória nos índices partilhados.</li>
  <li><strong>Toda a transação no bus deve ter timeout.</strong> Dispositivos bloqueiam, desaparecem ou falham. sem timeout, a tua aplicação fica presa.</li>
  <li><strong>Nunca aloca heap no caminho de receção.</strong> Ring buffers estáticos são mais seguros, mais rápidos e completamente determinísticos.</li>
  <li><strong>A arbitração do bus é o teu problema.</strong> O CCTalk não fornece deteção de colisões. tens de serializar o acesso tu mesmo.</li>
</ol>
    `
  },

  {
    id: 3,
    slug: 'processing-900k-records-nodejs-bounded-concurrency',
    title: 'Processing 900k Records in 2 Hours: Bounded Concurrency in Node.js',
    titlePt: 'Processar 900k Registos em 2 Horas: Concorrência Controlada em Node.js',
    date: '2025-07-14',
    readTime: '10 min read',
    readTimePt: '10 min de leitura',
    tags: ['Node.js', 'Concurrency', 'Worker Threads', 'Performance', 'Streams'],
    status: 'draft',
    heroImage: '',
    likes: 0, views: 0, comments: 0,
    excerpt: 'A data migration job needed to process 900,000 legacy documents. The naive sequential approach was going to take 48 hours. Using streaming generators, bounded concurrency with p-limit, worker threads for CPU-bound work, and checkpointing, I got it down to under 2 hours.',
    excerptPt: 'Uma migração de dados precisava de processar 900.000 documentos legados. A abordagem sequencial ingénua ia demorar 48 horas. Com generators assíncronos, concorrência limitada com p-limit, worker threads para trabalho CPU-bound e checkpointing, consegui fazê-lo em menos de 2 horas.',
    content: `
<h2>The Problem</h2>
<p>A legacy system stored 900,000+ fiscal documents in a proprietary binary-ish format. The migration involved three steps per document: parse the legacy format, validate a cryptographic fiscal signature, and insert into the new database schema. Each step was moderately expensive.</p>

<p>My first prototype was simple and correct. and would have taken about 48 hours to finish:</p>

<pre><code class="language-javascript">// v1. sequential, embarrassingly slow
const documents = await fetchAllLegacyDocs();  // loads 900k into memory (!!)
for (const doc of documents) {
  const parsed      = parseLegacyFormat(doc.raw);
  const validated   = await validateSignature(parsed);  // ~8ms/doc (I/O + CPU)
  const transformed = transformSchema(validated);
  await db.insert('Documents', transformed);            // ~3ms/doc
}
// At ~11ms/doc sequential: 900k × 11ms = ~2.75 hours pure I/O time
// But single-threaded serialisation makes it 48+ hours actual wall clock</code></pre>

<p>Two compounding problems: first, loading all 900,000 documents into memory immediately used 4GB of heap. Second, JavaScript's event loop was only keeping one database request in flight at a time. waiting 11ms before starting the next one.</p>

<h2>Step 1: Stream, Don't Load</h2>
<p>The first change was nothing to do with concurrency. it was stopping the allocation of a 4GB array. An async generator that pages through the database keeps only one batch in memory at any time:</p>

<pre><code class="language-javascript">async function* legacyDocumentStream(pool, batchSize = 1000) {
  let offset = 0;
  while (true) {
    const result = await pool.request()
      .input('offset', sql.Int, offset)
      .input('batch',  sql.Int, batchSize)
      .query(\`
        SELECT id, raw_data
        FROM LegacyDocuments
        ORDER BY id
        OFFSET @offset ROWS
        FETCH NEXT @batch ROWS ONLY
      \`);

    if (result.recordset.length === 0) break;
    yield* result.recordset;
    offset += result.recordset.length;
  }
}</code></pre>

<p>Memory footprint dropped from 4GB to under 50MB immediately. Nothing else changed yet. still sequential. But this is the prerequisite for everything that follows.</p>

<h2>Step 2: Bounded Concurrency</h2>
<p>Unconstrained <code>Promise.all()</code> on 900,000 documents would have created 900,000 simultaneous database connections and crashed everything. The goal is to keep concurrency high enough to saturate the I/O pipeline but low enough not to overwhelm the connection pool.</p>

<p>I used <code>p-limit</code>. a tiny library that enforces a maximum number of concurrent promises:</p>

<pre><code class="language-javascript">const pLimit = require('p-limit');
const CONCURRENCY = 50;  // matches pool.max in db config
const limit = pLimit(CONCURRENCY);

async function processBatch(documents) {
  const tasks = documents.map(doc =>
    limit(async () => {
      try {
        const parsed      = parseLegacyFormat(doc.raw_data);
        const validated   = await validateSignature(parsed);
        const transformed = transformSchema(validated);
        await insertDocument(pool, transformed);
        return { success: true, id: doc.id };
      } catch (err) {
        // Never let one failure abort the whole batch
        return { success: false, id: doc.id, error: err.message };
      }
    })
  );
  return Promise.all(tasks);
}

async function runMigration() {
  const BATCH_SIZE = 1000;
  const buffer = [];
  let totalProcessed = 0;
  let totalErrors = 0;

  for await (const doc of legacyDocumentStream(pool)) {
    buffer.push(doc);
    if (buffer.length >= BATCH_SIZE) {
      const results = await processBatch(buffer.splice(0, BATCH_SIZE));
      const errors = results.filter(r => !r.success);
      totalProcessed += results.length;
      totalErrors    += errors.length;
      if (errors.length) await logErrors(errors);
      console.log(\`\${totalProcessed} / 900000 (\${errors.length} errors this batch)\`);
    }
  }

  // Process final partial batch
  if (buffer.length) {
    const results = await processBatch(buffer);
    totalProcessed += results.length;
    totalErrors    += results.filter(r => !r.success).length;
  }

  console.log(\`Done: \${totalProcessed} docs, \${totalErrors} errors\`);
}</code></pre>

<h2>Step 3: Worker Threads for CPU-Bound Validation</h2>
<p>Profiling revealed that signature validation was not purely I/O-bound. It involved SHA-256 hashing and base64 encoding of complex concatenated strings. roughly 4ms of CPU per document. Running 50 concurrent validations in the main thread was not actually parallel; they all competed for the same event loop tick.</p>

<p>I moved the CPU-bound work into worker threads:</p>

<pre><code class="language-javascript">// worker.js. runs in a separate thread
const { parentPort } = require('worker_threads');
const { parseLegacyFormat, validateSignature } = require('./document-utils');

parentPort.on('message', async ({ doc, taskId }) => {
  try {
    const parsed    = parseLegacyFormat(doc.raw_data);
    const validated = await validateSignature(parsed);
    parentPort.postMessage({ taskId, result: validated, error: null });
  } catch (err) {
    parentPort.postMessage({ taskId, result: null, error: err.message });
  }
});

// main-thread pool
// worker-pool.js
const { Worker } = require('worker_threads');
const os = require('os');

class WorkerPool {
  constructor(script, size = os.cpus().length) {
    this.workers  = [];
    this.queue    = [];
    this.pending  = new Map();
    this.taskId   = 0;

    for (let i = 0; i < size; i++) {
      const w = new Worker(script);
      w.on('message', ({ taskId, result, error }) => {
        const { resolve, reject } = this.pending.get(taskId);
        this.pending.delete(taskId);
        if (error) reject(new Error(error));
        else resolve(result);
        this._processQueue(w);
      });
      this.workers.push(w);
      this.queue.push(w);   // initially all workers are free
    }
  }

  run(data) {
    return new Promise((resolve, reject) => {
      const taskId = ++this.taskId;
      this.pending.set(taskId, { resolve, reject });
      const worker = this.queue.shift();
      if (worker) {
        worker.postMessage({ ...data, taskId });
      } else {
        this.queue.push({ data: { ...data, taskId }, resolve, reject });
      }
    });
  }

  _processQueue(worker) {
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      if (next.data) worker.postMessage(next.data);
      else this.queue.unshift(next) || this.queue.push(worker);
    } else {
      this.queue.push(worker);
    }
  }
}</code></pre>

<h2>Step 4: Checkpointing for Resumability</h2>
<p>A migration of this size should be resumable. If it fails at document 750,000, you do not want to start over. I added a simple checkpoint file that persisted the last successfully processed document ID:</p>

<pre><code class="language-javascript">const CHECKPOINT_FILE = './migration-checkpoint.json';

function loadCheckpoint() {
  try {
    return JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf8'));
  } catch { return { lastId: 0, processed: 0, errors: 0 }; }
}

function saveCheckpoint(state) {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(state), 'utf8');
}

// In the migration loop, save every 10,000 documents:
if (totalProcessed % 10_000 === 0) {
  saveCheckpoint({ lastId: lastProcessedId, processed: totalProcessed, errors: totalErrors });
}</code></pre>

<h2>Results</h2>
<table>
  <thead><tr><th>Version</th><th>Wall clock</th><th>Peak memory</th></tr></thead>
  <tbody>
    <tr><td>v1. sequential, all in memory</td><td>~48 hours</td><td>4+ GB</td></tr>
    <tr><td>v2. streaming only</td><td>~40 hours</td><td>50 MB</td></tr>
    <tr><td>v3. streaming + p-limit(50)</td><td>~3.5 hours</td><td>80 MB</td></tr>
    <tr><td>v4. + worker threads (8 cores)</td><td>~1 hour 50 min</td><td>120 MB</td></tr>
  </tbody>
</table>

<h2>Takeaways</h2>
<ol>
  <li><strong>Never load large datasets into a JavaScript array.</strong> Async generators with pagination give you constant memory regardless of input size.</li>
  <li><strong>Unconstrained <code>Promise.all()</code> at scale is a footgun.</strong> Always cap concurrency to match your database connection pool. <code>p-limit</code> is 50 lines of code and does exactly this.</li>
  <li><strong>Profile before reaching for worker threads.</strong> Only move to threads after confirming a task is actually CPU-bound. otherwise you add complexity for nothing.</li>
  <li><strong>Design for resumability from the start.</strong> A checkpoint file is 10 lines of code and saves you from catastrophic restarts on long-running jobs.</li>
  <li><strong>Never let one failure abort a batch.</strong> Wrap per-document operations in try/catch and collect errors separately for later retry.</li>
</ol>
    `,
    contentPt: `
<h2>O Problema</h2>
<p>Um sistema legado armazenava 900.000+ documentos fiscais num formato binário proprietário. A migração envolvia três passos por documento: fazer parse do formato legado, validar uma assinatura fiscal criptográfica, e inserir no novo schema da base de dados.</p>
<p>O primeiro protótipo era simples e correto. e teria demorado cerca de 48 horas a terminar.</p>

<h2>Passo 1: Streaming em vez de Carregamento</h2>
<p>A primeira mudança foi parar de alocar um array de 4GB. Um generator assíncrono que pagina pela base de dados mantém apenas um batch em memória:</p>

<pre><code class="language-javascript">async function* legacyDocumentStream(pool, batchSize = 1000) {
  let offset = 0;
  while (true) {
    const result = await pool.request()
      .input('offset', sql.Int, offset)
      .input('batch', sql.Int, batchSize)
      .query(\`
        SELECT id, raw_data FROM LegacyDocuments
        ORDER BY id OFFSET @offset ROWS FETCH NEXT @batch ROWS ONLY
      \`);
    if (result.recordset.length === 0) break;
    yield* result.recordset;
    offset += result.recordset.length;
  }
}</code></pre>

<p>Memória passou de 4GB para menos de 50MB imediatamente.</p>

<h2>Passo 2: Concorrência Limitada</h2>
<p><code>Promise.all()</code> sem restrições em 900.000 documentos criaria 900.000 ligações simultâneas à base de dados. A solução é <code>p-limit</code>, que limita o número máximo de Promises concorrentes:</p>

<pre><code class="language-javascript">const pLimit = require('p-limit');
const limit = pLimit(50); // igual ao pool.max da BD

async function processBatch(documents) {
  const tasks = documents.map(doc =>
    limit(async () => {
      try {
        const parsed      = parseLegacyFormat(doc.raw_data);
        const validated   = await validateSignature(parsed);
        const transformed = transformSchema(validated);
        await insertDocument(pool, transformed);
        return { success: true, id: doc.id };
      } catch (err) {
        return { success: false, id: doc.id, error: err.message };
      }
    })
  );
  return Promise.all(tasks);
}</code></pre>

<h2>Passo 3: Worker Threads para Trabalho CPU-Bound</h2>
<p>O profiling revelou que a validação de assinaturas não era puramente I/O-bound. envolvia ~4ms de CPU por documento. Mover este trabalho para worker threads libertou o event loop principal para I/O puro:</p>

<pre><code class="language-javascript">// worker.js. corre numa thread separada
const { parentPort } = require('worker_threads');
const { parseLegacyFormat, validateSignature } = require('./document-utils');

parentPort.on('message', async ({ doc, taskId }) => {
  try {
    const parsed    = parseLegacyFormat(doc.raw_data);
    const validated = await validateSignature(parsed);
    parentPort.postMessage({ taskId, result: validated, error: null });
  } catch (err) {
    parentPort.postMessage({ taskId, result: null, error: err.message });
  }
});</code></pre>

<h2>Resultados</h2>
<table>
  <thead><tr><th>Versão</th><th>Tempo total</th><th>Memória</th></tr></thead>
  <tbody>
    <tr><td>v1. sequencial, tudo em memória</td><td>~48 horas</td><td>4+ GB</td></tr>
    <tr><td>v2. só streaming</td><td>~40 horas</td><td>50 MB</td></tr>
    <tr><td>v3. streaming + p-limit(50)</td><td>~3,5 horas</td><td>80 MB</td></tr>
    <tr><td>v4. + worker threads (8 cores)</td><td>~1h 50min</td><td>120 MB</td></tr>
  </tbody>
</table>

<h2>Lições</h2>
<ol>
  <li><strong>Nunca carregues grandes datasets para um array JavaScript.</strong> Generators assíncronos com paginação mantêm memória constante independentemente do tamanho do input.</li>
  <li><strong><code>Promise.all()</code> sem restrições em escala é perigoso.</strong> Limita sempre a concorrência ao teu pool de ligações à base de dados.</li>
  <li><strong>Faz profiling antes de recorrer a worker threads.</strong> Só faz sentido se o trabalho for genuinamente CPU-bound.</li>
  <li><strong>Desenha para resumibilidade desde o início.</strong> Um ficheiro de checkpoint custa 10 linhas e salva-te de recomeçar do zero.</li>
</ol>
    `
  },

  {
    id: 4,
    slug: 'ai-multiplier-effect-software-teams',
    title: 'The AI Multiplier Effect: How LLMs Are Quietly Reshaping Software Teams',
    titlePt: 'O Efeito Multiplicador da IA: Como os LLMs Estão a Remodelar as Equipas de Software',
    date: '2025-10-15',
    readTime: '9 min read',
    readTimePt: '9 min de leitura',
    tags: ['AI', 'Productivity', 'Software Engineering', 'Opinion', 'Teams'],
    status: 'draft',
    heroImage: '',
    likes: 0, views: 0, comments: 0,
    excerpt: 'AI coding tools have been part of my daily workflow for over a year. The productivity shift is real. but the narrative around what that actually means for developers and teams is mostly wrong. This is what I have observed firsthand.',
    excerptPt: 'As ferramentas de IA de programação fazem parte do meu fluxo de trabalho diário há mais de um ano. A mudança de produtividade é real. mas a narrativa sobre o que isso significa para os programadores e equipas está maioritariamente errada. Isto é o que observei diretamente.',
    content: `
<h2>What Is Actually Happening</h2>
<p>I have been using LLM-based coding assistants. in various combinations. as a core part of my daily workflow for over a year. I work across the stack: Node.js backends, Vue frontends, embedded C firmware. I use AI tools differently in each context. And after long enough, some patterns have become clear enough to write about honestly.</p>
<p>The media narrative oscillates between two extremes: either AI will replace all developers within a few years, or it is just an expensive autocomplete that senior engineers do not really need. Both are wrong, and both miss the more interesting thing that is actually happening.</p>
<p>The more accurate framing: <strong>AI is a force multiplier, and force multipliers change the optimal size and composition of teams.</strong></p>

<h2>The Productivity Math</h2>
<p>Before AI tools became part of my workflow, I could comfortably handle 2 to 3 significant features in a sprint while keeping up with bugs, code review, and the usual maintenance overhead. That was the realistic ceiling for a single developer maintaining non-trivial systems.</p>
<p>Now that number is closer to 4 or 5, with no corresponding drop in quality. The gains are not evenly distributed across all types of work. but they are large enough and consistent enough to change how I think about capacity planning.</p>
<p>Where AI actually helps:</p>
<ul>
  <li><strong>Boilerplate generation.</strong> Writing a new REST endpoint with validation, error handling, and tests used to take 30–45 minutes. Now it is 5 minutes of prompting and 10 minutes of review and adjustment. The review step is non-negotiable. but it is faster than writing from scratch.</li>
  <li><strong>Unfamiliar API surfaces.</strong> When I need to work with a library or tool I use infrequently, AI removes most of the context-switching cost. Instead of spending 20 minutes in documentation, I get a working example in 2 minutes that I can then verify and adjust.</li>
  <li><strong>Explaining and documenting existing code.</strong> Asking "what does this function do and what are its edge cases?" on a legacy module I did not write is far faster than tracing through it manually.</li>
  <li><strong>First draft of tests.</strong> AI writes reasonable test scaffolding. The interesting test cases. the edge conditions that actually matter. still require a developer who understands the domain.</li>
</ul>
<p>Where AI does not help, or actively misleads:</p>
<ul>
  <li><strong>Architectural decisions.</strong> AI confidently generates code for the wrong architecture. It does not know your constraints. the existing codebase, the team's skill level, the business requirements, the production environment. It will write a perfect implementation of the wrong solution.</li>
  <li><strong>Domain-specific correctness.</strong> In fiscal software, you have to be right about the rules. AI can give you code that looks correct and is subtly wrong about a tax calculation edge case. The confidence is dangerous.</li>
  <li><strong>Debugging non-obvious runtime failures.</strong> AI is good at debugging classes of problems it has seen in training data. It is poor at debugging the specific weird interaction between your SQL Server version, your ORM configuration, and your connection pool settings at 3am in production.</li>
</ul>

<h2>What Is Happening to Teams</h2>
<p>I work in a team that has not grown in headcount for about two years. The project throughput in that same period has roughly doubled. We have not needed to hire to replace developers who left, because the remaining developers. all using AI tools daily. have absorbed the capacity gap.</p>
<p>This is not a comfortable observation to make publicly, but it is what I am seeing. And I think it is more widespread than people admit openly.</p>
<p>The shift is not uniform across seniority levels. A senior developer with 8 years of domain knowledge and good architectural judgment, using AI tools effectively, can now produce the output that previously required 2 or 3 developers. A junior developer using the same tools, without the judgment layer, produces code faster. but the code quality is harder to assess without review, and the invisible correctness issues are more common.</p>
<p>This creates a structural change in what kinds of hiring actually make sense. Teams are getting better ROI from hiring experienced developers who can leverage AI effectively than from hiring juniors who are still building the judgment that makes AI output trustworthy.</p>

<h2>The Expertise Paradox</h2>
<p>There is an uncomfortable tension here. Senior expertise is becoming more valuable. not less. because it is the layer that validates AI output. But the traditional path to senior expertise was being a junior first, doing the low-level work, making mistakes in lower-stakes contexts.</p>
<p>If AI absorbs most of the junior work, what does the pipeline to senior expertise look like in 5 years? I do not have a confident answer. I think it involves more intentional mentorship, more code review as a learning mechanism, and more emphasis on understanding "why" rather than "how to implement."</p>
<p>But I am watching junior developers who use AI as a crutch. accepting its output without understanding it. and I am worried about what their foundation looks like in three years. The tool is a productivity superpower for people who already have the fundamentals. For people building the fundamentals, it can short-circuit the learning process in ways that are not immediately visible.</p>

<h2>The "Reinventing the Wheel" Question</h2>
<p>One of the more interesting changes I have noticed is in how I relate to standard algorithms and patterns. My rule of thumb has evolved to something like: if AI can generate it correctly in under 30 seconds, it probably was not worth writing from scratch in the first place. Use the AI output, verify it, move on.</p>
<p>But this has a corollary that is equally important: <strong>the judgment about which pattern to use, and whether the problem even needs that pattern, still requires a developer who understands the domain deeply.</strong> I once asked an AI to help me implement "something fast to sort this data." It gave me a beautifully implemented bubble sort because my data structures were named in a way that suggested small datasets. The code was flawless. The choice of algorithm was wrong by 3 orders of magnitude for the actual data size.</p>
<p>The skill that matters now is not "can you implement a red-black tree from scratch." It is "do you know when you need a red-black tree, when a hash map is better, and when the data is small enough that it does not matter at all."</p>

<h2>The Equilibrium</h2>
<p>I think the equilibrium we are moving toward looks something like this: smaller, more experienced teams, each member producing output that previously required a larger team, with AI handling the execution layer of well-defined tasks and humans handling the judgment layer of ill-defined ones.</p>
<p>The developers who thrive in this environment are the ones who are genuinely curious about how things work, who review AI output critically rather than accepting it passively, and who invest in deep domain knowledge that AI cannot easily replicate.</p>
<p>The developers who struggle are the ones who learned to code by pattern-matching rather than understanding, and who now find that AI can pattern-match faster than they can. without the understanding that would let them catch AI's mistakes.</p>
<p>I do not think this is a comfortable transition for everyone. But I do think the developers who engage with it honestly. neither dismissing AI tools out of pride nor deferring to them out of laziness. are building something genuinely powerful.</p>
    `,
    contentPt: `
<h2>O Que Está Realmente a Acontecer</h2>
<p>Uso ferramentas de IA de programação como parte central do meu fluxo de trabalho diário há mais de um ano. Trabalho em toda a stack: backends Node.js, frontends Vue, firmware embebido em C. E depois de tempo suficiente, alguns padrões tornaram-se claros o suficiente para escrever sobre eles honestamente.</p>
<p>A narrativa dos media oscila entre dois extremos: a IA vai substituir todos os programadores em poucos anos, ou é apenas autocomplete caro que engenheiros seniores não precisam realmente. Ambos estão errados. O enquadramento mais preciso: <strong>a IA é um multiplicador de força, e os multiplicadores de força alteram o tamanho e a composição ideais das equipas.</strong></p>

<h2>A Matemática da Produtividade</h2>
<p>Antes das ferramentas de IA, conseguia confortavelmente 2 a 3 funcionalidades significativas por sprint. Agora esse número está mais perto de 4 ou 5, sem queda correspondente na qualidade.</p>
<p>Onde a IA ajuda concretamente:</p>
<ul>
  <li><strong>Geração de boilerplate.</strong> Um novo endpoint REST com validação, tratamento de erros e testes costumava levar 30–45 minutos. Agora são 5 minutos de prompts e 10 minutos de revisão.</li>
  <li><strong>APIs desconhecidas.</strong> Em vez de 20 minutos na documentação, tenho um exemplo funcional em 2 minutos que verifico e ajusto.</li>
  <li><strong>Explicar código legado.</strong> "O que faz esta função e quais são os seus casos extremos?" numa base de código que não escrevi é muito mais rápido com IA do que tracejando manualmente.</li>
</ul>
<p>Onde a IA não ajuda ou engana ativamente:</p>
<ul>
  <li><strong>Decisões arquiteturais.</strong> A IA gera confientemente código para a arquitetura errada. Não conhece as tuas restrições. a base de código existente, os requisitos de negócio, o ambiente de produção.</li>
  <li><strong>Correção específica do domínio.</strong> Em software fiscal tens de ser exato nas regras. A IA pode dar código que parece correto mas está subtilmente errado num caso extremo de cálculo de imposto.</li>
</ul>

<h2>O Que Está a Acontecer às Equipas</h2>
<p>Trabalho numa equipa que não cresceu em headcount durante cerca de dois anos. O throughput de projetos nesse mesmo período praticamente duplicou. Não precisámos de contratar para substituir programadores que saíram, porque os que ficaram. todos usando ferramentas de IA diariamente. absorveram a capacidade em falta.</p>
<p>Esta não é uma observação confortável de fazer publicamente, mas é o que estou a ver. E acredito que é mais generalizado do que as pessoas admitem abertamente.</p>
<p>Um programador sénior com 8 anos de conhecimento do domínio e bom julgamento arquitetural, usando ferramentas de IA eficazmente, pode agora produzir o output que antes requeria 2 ou 3 programadores. Um júnior usando as mesmas ferramentas, sem a camada de julgamento, produz código mais rápido. mas a qualidade do código é mais difícil de avaliar sem revisão.</p>

<h2>O Paradoxo da Expertise</h2>
<p>A expertise sénior está a tornar-se mais valiosa. não menos. porque é a camada que valida o output da IA. Mas o caminho tradicional para a expertise sénior era ser júnior primeiro, fazer o trabalho de baixo nível, cometer erros em contextos de menor risco.</p>
<p>Se a IA absorve a maior parte do trabalho júnior, como será o pipeline para expertise sénior daqui a 5 anos? Estou a observar programadores júnior que usam a IA como muleta. aceitando o seu output sem o compreender. e preocupo-me com as suas bases daqui a três anos.</p>

<h2>A Questão de "Reinventar a Roda"</h2>
<p>A minha regra geral evoluiu para algo como: se a IA consegue gerar algo corretamente em menos de 30 segundos, provavelmente não valia a pena escrever do zero. Usa o output da IA, verifica-o, segue em frente.</p>
<p>Mas há um corolário igualmente importante: <strong>o julgamento sobre qual padrão usar, e se o problema precisa sequer desse padrão, ainda requer um programador que compreenda profundamente o domínio.</strong> Uma vez pedi à IA para implementar "algo rápido para ordenar estes dados." Deu-me um bubble sort perfeitamente implementado. O código era impecável. A escolha do algoritmo estava errada por 3 ordens de magnitude para o tamanho real dos dados.</p>

<h2>O Equilíbrio</h2>
<p>O equilíbrio para o qual nos movemos parece algo assim: equipas mais pequenas e mais experientes, cada membro a produzir output que antes requeria uma equipa maior, com a IA a tratar a camada de execução de tarefas bem definidas e os humanos a tratar a camada de julgamento das mal definidas.</p>
<p>Os programadores que prosperam neste ambiente são os genuinamente curiosos sobre como as coisas funcionam, que reveem o output da IA criticamente em vez de o aceitar passivamente, e que investem em conhecimento profundo do domínio que a IA não consegue facilmente replicar.</p>
    `
  },

  {
    id: 5,
    slug: 'five-async-nodejs-patterns-promises',
    title: 'TIL: Five Async Node.js Patterns That Changed How I Write Promises',
    titlePt: 'TIL: Cinco Padrões Async em Node.js Que Mudaram Como Escrevo Promises',
    date: '2024-11-08',
    readTime: '9 min read',
    readTimePt: '9 min de leitura',
    tags: ['Node.js', 'JavaScript', 'Async', 'Promises', 'Performance'],
    status: 'draft',
    heroImage: '',
    likes: 0, views: 0, comments: 0,
    excerpt: 'Five async patterns in Node.js that I keep reaching for in production code: Promise.allSettled for fault-tolerant fan-outs, AbortController for cancellable fetches, async iterators for backpressure-aware streaming, concurrency limiters for not hammering third-party APIs, and structured error boundaries that actually make try/catch useful again.',
    excerptPt: 'Cinco padrões async em Node.js que uso repetidamente em código de produção: Promise.allSettled para fan-outs tolerantes a falhas, AbortController para fetches canceláveis, async iterators para streaming com backpressure, limitadores de concorrência para não saturar APIs externas, e error boundaries estruturados que tornam o try/catch realmente útil.',
    content: `
<h2>Why Async Patterns Still Trip People Up</h2>
<p>JavaScript's async model is not difficult. but it has enough surface area that most developers settle into a small comfort zone of <code>async/await</code> and <code>Promise.all</code> and stop exploring. Production code, though, has requirements that these basics do not fully cover: partial failures, cancellation, backpressure, rate limiting. These five patterns address exactly those gaps.</p>

<h2>Pattern 1. Promise.allSettled for Fault-Tolerant Fan-Outs</h2>
<p><code>Promise.all</code> rejects immediately when any promise rejects. That is correct behaviour for transactions where all-or-nothing is the requirement. For fan-out operations. calling multiple independent services and gathering what you can. it is the wrong tool.</p>
<p><code>Promise.allSettled</code> waits for every promise to either resolve or reject, then returns an array of outcome objects. No partial failure kills the whole operation.</p>

<pre><code class="language-javascript">// BAD: one failure loses everything
async function getDashboard(userId) {
  const [profile, orders, notifications] = await Promise.all([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchNotifications(userId),
  ]);
  return { profile, orders, notifications };
}

// GOOD: partial results are better than nothing
async function getDashboard(userId) {
  const results = await Promise.allSettled([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchNotifications(userId),
  ]);

  return {
    profile:       results[0].status === 'fulfilled' ? results[0].value : null,
    orders:        results[1].status === 'fulfilled' ? results[1].value : [],
    notifications: results[2].status === 'fulfilled' ? results[2].value : [],
    errors:        results.filter(r => r.status === 'rejected').map(r => r.reason),
  };
}</code></pre>

<p>The dashboard can still render with a failed notifications service. Log the errors, report them to your observability stack, but do not block the user from seeing their orders.</p>

<h2>Pattern 2. AbortController for Cancellable Operations</h2>
<p>Network requests that outlive their usefulness keep consuming server resources and response slots. A user navigating away, a timeout firing, or a newer request superseding an older one. all are valid reasons to cancel in-flight work. <code>AbortController</code> is the standard mechanism.</p>

<pre><code class="language-javascript">// Timeout-based cancellation
async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(
    new Error(\`Request timed out after \${ms}ms\`)
  ), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(\`Timed out: \${url}\`);
    throw err;
  }
}

// Supersede pattern. cancel previous request when a new one arrives
class SearchService {
  #controller = null;

  async search(query) {
    // Cancel previous in-flight request
    this.#controller?.abort();
    this.#controller = new AbortController();

    const res = await fetch(\`/api/search?q=\${query}\`, {
      signal: this.#controller.signal,
    });
    return res.json();
  }
}</code></pre>

<h2>Pattern 3. Async Iterators for Backpressure-Aware Streaming</h2>
<p>When processing large datasets, loading everything into memory at once is a path to OOM errors. Async iterators let you process data as it arrives, pausing production when consumption falls behind. backpressure built into the language.</p>

<pre><code class="language-javascript">// Process a large DB result set without loading it all into memory
async function* streamUsers(batchSize = 100) {
  let offset = 0;
  while (true) {
    const batch = await db.query(
      'SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2',
      [batchSize, offset]
    );
    if (batch.length === 0) return;
    for (const user of batch) yield user;
    offset += batchSize;
  }
}

// Consumer controls the pace. DB only queried when consumer is ready
async function sendWelcomeEmails() {
  for await (const user of streamUsers(50)) {
    await emailService.send(user.email, 'welcome'); // waits before next iteration
  }
}

// Or collect with transformation, still lazy
async function* transform(source, fn) {
  for await (const item of source) {
    yield fn(item);
  }
}

const activeUsers = transform(streamUsers(), u => ({ ...u, active: true }));
for await (const user of activeUsers) {
  console.log(user.email);
}</code></pre>

<p>Node.js streams, the Fetch API body, file reads via <code>fs.createReadStream</code>, and database cursors all expose async iterable interfaces in modern Node versions.</p>

<h2>Pattern 4. Concurrency Limiter for Third-Party APIs</h2>
<p>Spawning a thousand concurrent promises to call an external API is a good way to get rate-limited, trigger circuit breakers, or overwhelm a downstream service. A concurrency limiter processes a queue of work with a fixed number of parallel slots.</p>

<pre><code class="language-javascript">// Process items with at most N concurrent operations
async function withConcurrency(items, fn, limit = 5) {
  const results = [];
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      results.push(await fn(item));
    }
  });
  await Promise.all(workers);
  return results;
}

// Usage: send 200 emails, max 10 at a time
const users = await db.query('SELECT * FROM users');
await withConcurrency(users, async (user) => {
  await emailService.send(user.email, 'newsletter');
  console.log(\`Sent to \${user.email}\`);
}, 10);

// With delay between batches (respect rate limits)
async function withConcurrencyAndDelay(items, fn, limit = 5, delayMs = 100) {
  for (let i = 0; i < items.length; i += limit) {
    const batch = items.slice(i, i + limit);
    await Promise.all(batch.map(fn));
    if (i + limit < items.length) {
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}</code></pre>

<h2>Pattern 5. Structured Error Boundaries</h2>
<p>Async error handling is where most codebases accumulate silent failures. Unhandled promise rejections, swallowed exceptions in fire-and-forget calls, <code>catch</code> blocks that only log and never re-throw. these turn bugs into mysteries. Structured error boundaries make the failure surface explicit.</p>

<pre><code class="language-javascript">// Result type. errors are values, not exceptions
const ok  = (value) => ({ ok: true, value });
const err = (error) => ({ ok: false, error });

async function safeAsync(promise) {
  try {
    return ok(await promise);
  } catch (e) {
    return err(e);
  }
}

// Usage: no try/catch at the call site
async function processOrder(orderId) {
  const { ok: fetched, value: order, error } = await safeAsync(fetchOrder(orderId));
  if (!fetched) {
    logger.error('Failed to fetch order', { orderId, error });
    return null;
  }

  const { ok: charged, error: chargeError } = await safeAsync(chargeCard(order));
  if (!charged) {
    await safeAsync(sendFailureNotification(order)); // fire-and-forget, safe
    throw new PaymentError(chargeError.message, { orderId });
  }

  return order;
}

// Never lose unhandled rejections. register a global handler
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection', { reason, promise });
  // In production: report to error tracker, then decide to exit or recover
});</code></pre>

<p>The <code>safeAsync</code> wrapper makes the error path a first-class citizen rather than an afterthought. Combined with a global <code>unhandledRejection</code> handler, you get full visibility into async failures without wrapping every call in <code>try/catch</code>.</p>

<h2>The Common Thread</h2>
<p>These five patterns solve different problems but share a philosophy: <strong>make the failure surface explicit and the control flow predictable</strong>. <code>allSettled</code> makes partial failures visible. <code>AbortController</code> makes cancellation a first-class concern. Async iterators make memory pressure controllable. Concurrency limiters make resource usage bounded. Structured error boundaries make the error path as readable as the happy path.</p>
<p>None of these require external libraries. They are all built into Node.js 16+ and modern browsers. The patterns are available. using them is a choice.</p>
    `,
    contentPt: `
<h2>Porque os Padrões Async Ainda Causam Problemas</h2>
<p>O modelo async do JavaScript não é difícil. mas tem superfície suficiente para que a maioria dos developers se instale numa zona de conforto pequena de <code>async/await</code> e <code>Promise.all</code> sem explorar mais. O código de produção, porém, tem requisitos que estes básicos não cobrem completamente: falhas parciais, cancelamento, backpressure, rate limiting. Estes cinco padrões endereçam exatamente essas lacunas.</p>

<h2>Padrão 1. Promise.allSettled para Fan-Outs Tolerantes a Falhas</h2>
<p><code>Promise.all</code> rejeita imediatamente quando qualquer promise rejeita. Isso é comportamento correto para transações onde tudo-ou-nada é o requisito. Para operações de fan-out. chamar múltiplos serviços independentes e recolher o que for possível. é a ferramenta errada.</p>
<p><code>Promise.allSettled</code> espera que todas as promises se resolvam ou rejeitem, depois retorna um array de objetos de resultado. Nenhuma falha parcial mata toda a operação.</p>

<pre><code class="language-javascript">// MÁU: uma falha perde tudo
async function getDashboard(userId) {
  const [profile, orders, notifications] = await Promise.all([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchNotifications(userId),
  ]);
  return { profile, orders, notifications };
}

// BOM: resultados parciais são melhores que nada
async function getDashboard(userId) {
  const results = await Promise.allSettled([
    fetchProfile(userId),
    fetchOrders(userId),
    fetchNotifications(userId),
  ]);

  return {
    profile:       results[0].status === 'fulfilled' ? results[0].value : null,
    orders:        results[1].status === 'fulfilled' ? results[1].value : [],
    notifications: results[2].status === 'fulfilled' ? results[2].value : [],
    errors:        results.filter(r => r.status === 'rejected').map(r => r.reason),
  };
}</code></pre>

<h2>Padrão 2. AbortController para Operações Canceláveis</h2>
<p>Pedidos de rede que sobrevivem à sua utilidade continuam a consumir recursos do servidor. Um utilizador a navegar para outra página, um timeout a disparar, ou um pedido mais recente a substituir um mais antigo. todos são razões válidas para cancelar trabalho em curso.</p>

<pre><code class="language-javascript">// Cancelamento por timeout
async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(
    new Error(\`Pedido expirou após \${ms}ms\`)
  ), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(\`Timeout: \${url}\`);
    throw err;
  }
}

// Padrão supersede. cancelar pedido anterior quando chega um novo
class SearchService {
  #controller = null;

  async search(query) {
    this.#controller?.abort();
    this.#controller = new AbortController();

    const res = await fetch(\`/api/search?q=\${query}\`, {
      signal: this.#controller.signal,
    });
    return res.json();
  }
}</code></pre>

<h2>Padrão 3. Async Iterators para Streaming com Backpressure</h2>
<p>Ao processar grandes datasets, carregar tudo na memória de uma vez é um caminho para erros OOM. Os async iterators permitem processar dados à medida que chegam, pausando a produção quando o consumo fica para trás.</p>

<pre><code class="language-javascript">// Processar um resultado grande da DB sem carregar tudo na memória
async function* streamUsers(batchSize = 100) {
  let offset = 0;
  while (true) {
    const batch = await db.query(
      'SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2',
      [batchSize, offset]
    );
    if (batch.length === 0) return;
    for (const user of batch) yield user;
    offset += batchSize;
  }
}

// O consumidor controla o ritmo
async function sendWelcomeEmails() {
  for await (const user of streamUsers(50)) {
    await emailService.send(user.email, 'welcome');
  }
}</code></pre>

<h2>Padrão 4. Limitador de Concorrência para APIs Externas</h2>
<p>Lançar mil promises concorrentes para chamar uma API externa é uma boa forma de ser rate-limited ou sobrecarregar um serviço externo. Um limitador de concorrência processa uma fila de trabalho com um número fixo de slots paralelos.</p>

<pre><code class="language-javascript">// Processar items com no máximo N operações concorrentes
async function withConcurrency(items, fn, limit = 5) {
  const results = [];
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      results.push(await fn(item));
    }
  });
  await Promise.all(workers);
  return results;
}

// Uso: enviar 200 emails, máximo 10 ao mesmo tempo
const users = await db.query('SELECT * FROM users');
await withConcurrency(users, async (user) => {
  await emailService.send(user.email, 'newsletter');
}, 10);</code></pre>

<h2>Padrão 5. Error Boundaries Estruturados</h2>
<p>O tratamento de erros async é onde a maioria das codebases acumula falhas silenciosas. Rejeições de promises não tratadas, exceções engolidas em chamadas fire-and-forget, blocos <code>catch</code> que apenas fazem log mas nunca re-lançam. transformam bugs em mistérios.</p>

<pre><code class="language-javascript">// Tipo Result. erros são valores, não exceções
const ok  = (value) => ({ ok: true, value });
const err = (error) => ({ ok: false, error });

async function safeAsync(promise) {
  try {
    return ok(await promise);
  } catch (e) {
    return err(e);
  }
}

// Uso: sem try/catch no local da chamada
async function processOrder(orderId) {
  const { ok: fetched, value: order, error } = await safeAsync(fetchOrder(orderId));
  if (!fetched) {
    logger.error('Falha ao buscar order', { orderId, error });
    return null;
  }

  const { ok: charged, error: chargeError } = await safeAsync(chargeCard(order));
  if (!charged) {
    await safeAsync(sendFailureNotification(order));
    throw new PaymentError(chargeError.message, { orderId });
  }

  return order;
}

// Nunca perder rejeições não tratadas
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Rejeição não tratada', { reason, promise });
});</code></pre>

<h2>O Fio Comum</h2>
<p>Estes cinco padrões resolvem problemas diferentes mas partilham uma filosofia: <strong>tornar a superfície de falha explícita e o fluxo de controlo previsível</strong>. <code>allSettled</code> torna as falhas parciais visíveis. <code>AbortController</code> torna o cancelamento uma preocupação de primeira classe. Os async iterators tornam a pressão na memória controlável. Os limitadores de concorrência tornam o uso de recursos limitado. Os error boundaries estruturados tornam o caminho de erro tão legível quanto o caminho feliz.</p>
<p>Nenhum destes requer bibliotecas externas. Todos estão integrados no Node.js 16+ e browsers modernos. Os padrões estão disponíveis. usá-los é uma escolha.</p>
    `
  }
]
