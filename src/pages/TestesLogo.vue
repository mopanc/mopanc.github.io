<template>
  <main class="tlogo">
    <!-- Header -->
    <header class="tlogo-hero">
      <span class="tlogo-eyebrow">brand sandbox · noindex</span>
      <h1 class="tlogo-title">Brand mark concepts</h1>
      <p class="tlogo-lead">
        Logo nasce da marca, não o contrário. Antes de escolher o desenho,
        responde a estas 3 perguntas — depois passa pelos cartões.
      </p>
      <ol class="tlogo-questions">
        <li><strong>3 palavras</strong> que descrevem o que tu és (e nenhum dev genérico é).</li>
        <li><strong>O que NÃO és</strong> — define-te por exclusão também.</li>
        <li><strong>Quem vê</strong> isto primeiro? Recrutador FAANG? Cliente enterprise? Outro dev?</li>
      </ol>
    </header>

    <!-- Grid of concepts -->
    <section class="tlogo-grid">
      <!-- 01 Current Megrim baseline -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">01</span>
          <h3>Megrim "JM" <em>(atual)</em></h3>
        </header>
        <div class="tlogo-card__stage">
          <div class="tlogo-mark tlogo-mark--lg tlogo-mark--current">
            <span class="tlogo-megrim">JM</span>
          </div>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark tlogo-mark--current">
            <span class="tlogo-megrim tlogo-megrim--sm">JM</span>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Estado atual. Texto Megrim numa caixa azul. Genérico, fica perdido entre 1000 portfolios iguais.</p>
      </article>

      <!-- 02 Geometric monogram -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">02</span>
          <h3>Monograma geométrico</h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="g02" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8d0ff"/><stop offset=".55" stop-color="#7eb8f7"/><stop offset="1" stop-color="#3b6fd4"/>
              </linearGradient>
            </defs>
            <path class="t-stroke t-stroke--a" pathLength="100" d="M 16 12 L 16 30 Q 16 36 10 36 L 6 36" stroke="url(#g02)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="t-stroke t-stroke--b" pathLength="100" d="M 24 36 L 24 12 L 32 24 L 40 12 L 40 36" stroke="url(#g02)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle class="t-pulse" cx="42" cy="38" r="1.4" fill="#7eb8f7"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark">
            <svg class="tlogo-svg" viewBox="0 0 48 48" fill="none">
              <path pathLength="100" d="M 16 12 L 16 30 Q 16 36 10 36 L 6 36" stroke="url(#g02)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset:0"/>
              <path pathLength="100" d="M 24 36 L 24 12 L 32 24 L 40 12 L 40 36" stroke="url(#g02)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="stroke-dashoffset:0"/>
              <circle cx="42" cy="38" r="1.4" fill="#7eb8f7"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">"JM" desenhado como traços geométricos com gradient. Pulso azul como cursor. Tech-flavored mas ainda diz "JM" claramente.</p>
      </article>

      <!-- 03 JM Mourinho-style intertwined -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">03</span>
          <h3>JM entrelaçado <em>(Mourinho-flavor)</em></h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 80 60" fill="none">
            <defs>
              <linearGradient id="g03" x1="0" y1="0" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e6f0ff"/><stop offset=".5" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
              </linearGradient>
            </defs>
            <!-- Top serif spanning J and M -->
            <line class="t-stroke t-stroke--c" pathLength="100" x1="14" y1="12" x2="68" y2="12" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
            <!-- J vertical -->
            <line class="t-stroke t-stroke--a" pathLength="100" x1="22" y1="12" x2="22" y2="42" stroke="url(#g03)" stroke-width="3.4" stroke-linecap="round"/>
            <!-- J hook -->
            <path class="t-stroke t-stroke--a-2" pathLength="100" d="M 22 42 Q 22 50 14 50 L 8 50" stroke="url(#g03)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- J bottom serif -->
            <line class="t-stroke t-stroke--c" pathLength="100" x1="4" y1="50" x2="12" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
            <!-- M left vertical (thicker, dominant) -->
            <line class="t-stroke t-stroke--b" pathLength="100" x1="36" y1="50" x2="36" y2="12" stroke="url(#g03)" stroke-width="3.6" stroke-linecap="round"/>
            <!-- M inner V (thin, elegant) -->
            <path class="t-stroke t-stroke--b-2" pathLength="100" d="M 36 12 L 50 38 L 64 12" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- M right vertical -->
            <line class="t-stroke t-stroke--b" pathLength="100" x1="64" y1="12" x2="64" y2="50" stroke="url(#g03)" stroke-width="3.6" stroke-linecap="round"/>
            <!-- M bottom serifs -->
            <line class="t-stroke t-stroke--c" pathLength="100" x1="32" y1="50" x2="40" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
            <line class="t-stroke t-stroke--c" pathLength="100" x1="60" y1="50" x2="68" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark tlogo-mark--wide">
            <svg viewBox="0 0 80 60" fill="none" style="width:100%;height:100%">
              <line x1="14" y1="12" x2="68" y2="12" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="22" y1="12" x2="22" y2="42" stroke="url(#g03)" stroke-width="3.4" stroke-linecap="round"/>
              <path d="M 22 42 Q 22 50 14 50 L 8 50" stroke="url(#g03)" stroke-width="3.4" stroke-linecap="round" fill="none"/>
              <line x1="4" y1="50" x2="12" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="36" y1="50" x2="36" y2="12" stroke="url(#g03)" stroke-width="3.6" stroke-linecap="round"/>
              <path d="M 36 12 L 50 38 L 64 12" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round" fill="none"/>
              <line x1="64" y1="12" x2="64" y2="50" stroke="url(#g03)" stroke-width="3.6" stroke-linecap="round"/>
              <line x1="32" y1="50" x2="40" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="60" y1="50" x2="68" y2="50" stroke="url(#g03)" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Estilo monograma de luxo: serifs finos, verticais grossos, V do M fino. Lê-se "JM" mas com peso/contraste. Funciona em apparel, watermarks.</p>
      </article>

      <!-- 04 Wordmark only -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">04</span>
          <h3>Wordmark — sem marca</h3>
        </header>
        <div class="tlogo-card__stage tlogo-card__stage--wide">
          <span class="tlogo-wordmark">jorgemorais<span class="tlogo-wordmark__dot">.</span></span>
        </div>
        <div class="tlogo-card__preview tlogo-card__preview--wordmark">
          <span class="tlogo-wordmark tlogo-wordmark--sm">jorgemorais<span class="tlogo-wordmark__dot">.</span></span>
          <span class="tlogo-tag tlogo-tag--inline">Full Stack Developer</span>
        </div>
        <p class="tlogo-card__desc">Sem ícone. Tipografia mono lowercase + ponto azul que pulsa. Estilo leerob.io / linear.app. Maximamente clean — funciona se a tua marca for executiva e moderna.</p>
      </article>

      <!-- 05 Sine wave -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">05</span>
          <h3>Onda sinusoidal</h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="g05" x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8d0ff" stop-opacity="0.3"/><stop offset=".5" stop-color="#7eb8f7"/><stop offset="1" stop-color="#a8d0ff" stop-opacity="0.3"/>
              </linearGradient>
            </defs>
            <path class="t-wave" d="M 4 24 Q 12 12 20 24 T 36 24 T 52 24" stroke="url(#g05)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
            <circle class="t-wave-dot" cx="4" cy="24" r="1.6" fill="#7eb8f7"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark">
            <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
              <path d="M 4 24 Q 12 12 20 24 T 36 24 T 52 24" stroke="url(#g05)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Sine wave subtil, ponto a viajar. Aponta para o teu trabalho IoT, trading bots, QScope (quantum/elliott waves). Single-take, não repetível por outros devs.</p>
      </article>

      <!-- 06 Orbital pulse -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">06</span>
          <h3>Pulso orbital</h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
            <circle class="t-orbit t-orbit--3" cx="24" cy="24" r="18" stroke="#7eb8f7" stroke-width="1" fill="none"/>
            <circle class="t-orbit t-orbit--2" cx="24" cy="24" r="12" stroke="#7eb8f7" stroke-width="1.2" fill="none"/>
            <circle class="t-orbit t-orbit--1" cx="24" cy="24" r="6" stroke="#7eb8f7" stroke-width="1.4" fill="none"/>
            <circle cx="24" cy="24" r="2.2" fill="#a8d0ff"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark">
            <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
              <circle cx="24" cy="24" r="18" stroke="#7eb8f7" stroke-width="1" stroke-opacity="0.4" fill="none"/>
              <circle cx="24" cy="24" r="12" stroke="#7eb8f7" stroke-width="1.2" stroke-opacity="0.6" fill="none"/>
              <circle cx="24" cy="24" r="6" stroke="#7eb8f7" stroke-width="1.4" fill="none"/>
              <circle cx="24" cy="24" r="2.2" fill="#a8d0ff"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Centro fixo + 3 anéis a expandir continuamente como sonar. Vibe sci-fi clean. Diz "transmite sinal" — bom para alguém que se posiciona como autoridade técnica.</p>
      </article>

      <!-- 07 Asymmetric graph -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">07</span>
          <h3>Grafo assimétrico</h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="g07" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
              </linearGradient>
            </defs>
            <line class="t-edge" x1="10" y1="14" x2="26" y2="10" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <line class="t-edge" x1="26" y1="10" x2="38" y2="22" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <line class="t-edge" x1="10" y1="14" x2="22" y2="30" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <line class="t-edge" x1="22" y1="30" x2="38" y2="22" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <line class="t-edge" x1="22" y1="30" x2="14" y2="40" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <line class="t-edge" x1="38" y1="22" x2="36" y2="38" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
            <circle class="t-node" cx="10" cy="14" r="2.2" fill="#7eb8f7"/>
            <circle class="t-node" cx="26" cy="10" r="2.2" fill="#7eb8f7"/>
            <circle class="t-node t-node--center" cx="22" cy="30" r="2.6" fill="#a8d0ff"/>
            <circle class="t-node" cx="38" cy="22" r="2.2" fill="#7eb8f7"/>
            <circle class="t-node" cx="14" cy="40" r="2" fill="#7eb8f7"/>
            <circle class="t-node" cx="36" cy="38" r="2" fill="#7eb8f7"/>
            <!-- traveling packet -->
            <circle class="t-packet" r="1.5" fill="#fff"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark">
            <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
              <line x1="10" y1="14" x2="26" y2="10" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <line x1="26" y1="10" x2="38" y2="22" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <line x1="10" y1="14" x2="22" y2="30" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <line x1="22" y1="30" x2="38" y2="22" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <line x1="22" y1="30" x2="14" y2="40" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <line x1="38" y1="22" x2="36" y2="38" stroke="url(#g07)" stroke-width="1.2" stroke-opacity="0.6"/>
              <circle cx="10" cy="14" r="2.2" fill="#7eb8f7"/>
              <circle cx="26" cy="10" r="2.2" fill="#7eb8f7"/>
              <circle cx="22" cy="30" r="2.6" fill="#a8d0ff"/>
              <circle cx="38" cy="22" r="2.2" fill="#7eb8f7"/>
              <circle cx="14" cy="40" r="2" fill="#7eb8f7"/>
              <circle cx="36" cy="38" r="2" fill="#7eb8f7"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Diagrama de arquitetura distribuída. Packet branco viaja pelas arestas. Diz literalmente "sistemas conectados" — bate certo com hardware ↔ cloud ↔ AI.</p>
      </article>

      <!-- 08 Lambda -->
      <article class="tlogo-card">
        <header class="tlogo-card__head">
          <span class="tlogo-card__num">08</span>
          <h3>Lambda <em>λ</em></h3>
        </header>
        <div class="tlogo-card__stage">
          <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="g08" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
              </linearGradient>
            </defs>
            <path class="t-stroke t-stroke--a" pathLength="100" d="M 10 12 L 18 14 L 38 40" stroke="url(#g08)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="t-stroke t-stroke--b" pathLength="100" d="M 36 12 L 14 40" stroke="url(#g08)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle class="t-pulse" cx="40" cy="42" r="1.4" fill="#7eb8f7"/>
          </svg>
        </div>
        <div class="tlogo-card__preview">
          <div class="tlogo-mark">
            <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
              <path d="M 10 12 L 18 14 L 38 40" stroke="url(#g08)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <path d="M 36 12 L 14 40" stroke="url(#g08)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <div class="tlogo-name-block">
            <span class="tlogo-name">Jorge Morais</span>
            <span class="tlogo-tag">Full Stack Developer</span>
          </div>
        </div>
        <p class="tlogo-card__desc">Letra grega lambda — símbolo universal de programação funcional / cálculo. Reconhecido por developers, intelectualmente "denso". Pode ser percebido como demasiado nichado.</p>
      </article>
    </section>

    <!-- ═══ ROUND 2 — refinamento direcionado ═══ -->
    <section class="tlogo-r2">
      <header class="tlogo-r2__head">
        <span class="tlogo-eyebrow">round 2 · refinamento</span>
        <h2>Direção orbital orgânica</h2>
        <p>
          O 06 funcionou pela suavidade + assimetria. Por sorte, órbitas =
          <strong>logo do React (átomo)</strong>; "nodes" = identidade do <strong>Node.js</strong>; conexões = <strong>AI/redes neurais</strong>.
          Esta direção está alinhada com o teu stack sem ser literal.
        </p>
      </header>

      <div class="tlogo-grid">
        <!-- R2-01 Asymmetric atom -->
        <article class="tlogo-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R2-01</span>
            <h3>Átomo assimétrico</h3>
          </header>
          <div class="tlogo-card__stage">
            <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
              <defs>
                <radialGradient id="gr21n" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stop-color="#fff"/><stop offset="0.5" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
                </radialGradient>
              </defs>
              <ellipse class="t-orbital" cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(0 24 24)"/>
              <ellipse class="t-orbital" cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(60 24 24)"/>
              <ellipse class="t-orbital" cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(-60 24 24)"/>
              <circle cx="24" cy="24" r="3" fill="url(#gr21n)"/>
              <!-- Electron travelling along an ellipse -->
              <circle r="1.5" fill="#fff">
                <animateMotion dur="3.6s" repeatCount="indefinite"
                  path="M 6 24 a 18 7 0 1 0 36 0 a 18 7 0 1 0 -36 0"/>
              </circle>
            </svg>
          </div>
          <div class="tlogo-card__preview">
            <div class="tlogo-mark">
              <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
                <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(0 24 24)"/>
                <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(60 24 24)"/>
                <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.55" fill="none" transform="rotate(-60 24 24)"/>
                <circle cx="24" cy="24" r="3" fill="url(#gr21n)"/>
              </svg>
            </div>
            <div class="tlogo-name-block">
              <span class="tlogo-name tlogo-name--alt">Jorge Morais</span>
              <span class="tlogo-tag tlogo-tag--alt">Full Stack Developer</span>
            </div>
          </div>
          <p class="tlogo-card__desc">Núcleo (Node.js, o teu core) + 3 órbitas elípticas em ângulos diferentes (React/atom) + 1 eletrão a percorrer uma órbita. <strong>Diz "fundamental + atómico + multi-domínio"</strong>.</p>
        </article>

        <!-- R2-02 Living network -->
        <article class="tlogo-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R2-02</span>
            <h3>Rede viva</h3>
          </header>
          <div class="tlogo-card__stage">
            <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="gr22" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
                </linearGradient>
              </defs>
              <path d="M 24 24 Q 14 16 8 8" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
              <path d="M 24 24 Q 36 12 42 6" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
              <path d="M 24 24 Q 14 36 6 42" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
              <path d="M 24 24 Q 38 36 44 40" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
              <circle class="t-limb t-limb--1" cx="8" cy="8" r="1.8" fill="#7eb8f7"/>
              <circle class="t-limb t-limb--2" cx="42" cy="6" r="1.8" fill="#7eb8f7"/>
              <circle class="t-limb t-limb--3" cx="6" cy="42" r="1.8" fill="#7eb8f7"/>
              <circle class="t-limb t-limb--4" cx="44" cy="40" r="1.8" fill="#7eb8f7"/>
              <circle class="t-core" cx="24" cy="24" r="3" fill="url(#gr22)"/>
            </svg>
          </div>
          <div class="tlogo-card__preview">
            <div class="tlogo-mark">
              <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
                <path d="M 24 24 Q 14 16 8 8" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
                <path d="M 24 24 Q 36 12 42 6" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
                <path d="M 24 24 Q 14 36 6 42" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
                <path d="M 24 24 Q 38 36 44 40" stroke="url(#gr22)" stroke-width="1.2" stroke-linecap="round" fill="none" stroke-opacity="0.7"/>
                <circle cx="8" cy="8" r="1.8" fill="#7eb8f7"/>
                <circle cx="42" cy="6" r="1.8" fill="#7eb8f7"/>
                <circle cx="6" cy="42" r="1.8" fill="#7eb8f7"/>
                <circle cx="44" cy="40" r="1.8" fill="#7eb8f7"/>
                <circle cx="24" cy="24" r="3" fill="url(#gr22)"/>
              </svg>
            </div>
            <div class="tlogo-name-block">
              <span class="tlogo-name tlogo-name--alt">Jorge Morais</span>
              <span class="tlogo-tag tlogo-tag--alt">Full Stack Developer</span>
            </div>
          </div>
          <p class="tlogo-card__desc">Nó central (tu) + 4 ramos curvos a domínios distintos (full stack, embedded, IA, hardware). Os pontos pulsam em sequência — <strong>"organismo, não máquina"</strong>. Versatilidade visualizada.</p>
        </article>

        <!-- R2-03 Asymmetric pulse with offset center -->
        <article class="tlogo-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R2-03</span>
            <h3>Pulso assimétrico</h3>
          </header>
          <div class="tlogo-card__stage">
            <svg class="tlogo-svg tlogo-svg--lg" viewBox="0 0 48 48" fill="none">
              <defs>
                <radialGradient id="gr23n" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stop-color="#fff"/><stop offset="0.6" stop-color="#a8d0ff"/><stop offset="1" stop-color="#3b6fd4"/>
                </radialGradient>
              </defs>
              <!-- elliptical orbit cutting at angle -->
              <ellipse cx="24" cy="24" rx="20" ry="9" transform="rotate(-22 24 24)" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.5" fill="none"/>
              <!-- offset pulse rings -->
              <circle class="t-asymp t-asymp--3" cx="20" cy="22" r="18" stroke="#7eb8f7" stroke-width="1" fill="none"/>
              <circle class="t-asymp t-asymp--2" cx="20" cy="22" r="12" stroke="#7eb8f7" stroke-width="1.1" fill="none"/>
              <circle class="t-asymp t-asymp--1" cx="20" cy="22" r="6" stroke="#7eb8f7" stroke-width="1.3" fill="none"/>
              <circle cx="20" cy="22" r="2.4" fill="url(#gr23n)"/>
              <!-- packet on the elliptical orbit -->
              <circle r="1.4" fill="#fff" opacity="0.9">
                <animateMotion dur="5s" repeatCount="indefinite"
                  path="M 6 30 a 20 9 -22 1 0 36 -12 a 20 9 -22 1 0 -36 12"/>
              </circle>
            </svg>
          </div>
          <div class="tlogo-card__preview">
            <div class="tlogo-mark">
              <svg viewBox="0 0 48 48" fill="none" style="width:100%;height:100%">
                <ellipse cx="24" cy="24" rx="20" ry="9" transform="rotate(-22 24 24)" stroke="#7eb8f7" stroke-width="0.9" stroke-opacity="0.5" fill="none"/>
                <circle cx="20" cy="22" r="18" stroke="#7eb8f7" stroke-width="1" stroke-opacity="0.3" fill="none"/>
                <circle cx="20" cy="22" r="12" stroke="#7eb8f7" stroke-width="1.1" stroke-opacity="0.55" fill="none"/>
                <circle cx="20" cy="22" r="6" stroke="#7eb8f7" stroke-width="1.3" fill="none"/>
                <circle cx="20" cy="22" r="2.4" fill="url(#gr23n)"/>
              </svg>
            </div>
            <div class="tlogo-name-block">
              <span class="tlogo-name tlogo-name--alt">Jorge Morais</span>
              <span class="tlogo-tag tlogo-tag--alt">Full Stack Developer</span>
            </div>
          </div>
          <p class="tlogo-card__desc">Evolução direta do 06: centro fora do centro geométrico, anéis a expandirem-se assimetricamente, e uma órbita elíptica com packet a viajar a cortar tudo. <strong>Suavidade + assimetria + AI/dataflow</strong>.</p>
        </article>
      </div>
    </section>

    <!-- ═══ TYPOGRAFIA ═══ -->
    <section class="tlogo-typo">
      <header class="tlogo-r2__head">
        <span class="tlogo-eyebrow">tipografia · sem megrim, sem mono</span>
        <h2>Pairings tipográficos para "Jorge Morais"</h2>
        <p>3 alternativas. Mistura mentalmente cada uma com o mark que mais te puxar (ex.: R2-01 + Geist).</p>
      </header>

      <div class="tlogo-typo-grid">
        <article class="tlogo-typo-card" data-font="geist">
          <span class="tlogo-typo-num">A</span>
          <span class="tlogo-typo-name typo-geist">Jorge Morais</span>
          <span class="tlogo-typo-tag typo-geist">Full Stack Developer</span>
          <p class="tlogo-typo-desc">
            <strong>Geist Sans</strong> (Vercel, free).
            Modernismo geométrico, executivo, técnico sem ser frio.
            Usado por Vercel, Cursor, vários. <em>Para mim, a tua escolha mais provável.</em>
          </p>
        </article>

        <article class="tlogo-typo-card" data-font="manrope">
          <span class="tlogo-typo-num">B</span>
          <span class="tlogo-typo-name typo-manrope">Jorge Morais</span>
          <span class="tlogo-typo-tag typo-manrope">Full Stack Developer</span>
          <p class="tlogo-typo-desc">
            <strong>Manrope</strong> (free, Google Fonts).
            Geometric humanist — neutro, internacional, polido.
            Sente-se "design-aware" sem gritar.
          </p>
        </article>

        <article class="tlogo-typo-card" data-font="fraunces">
          <span class="tlogo-typo-num">C</span>
          <span class="tlogo-typo-name typo-fraunces">Jorge Morais</span>
          <span class="tlogo-typo-tag typo-fraunces">Full Stack Developer</span>
          <p class="tlogo-typo-desc">
            <strong>Fraunces</strong> (free, Google Fonts).
            Serif editorial moderno — peso intelectual, autoria, "thought leader".
            Se quiseres ir para "consultor sénior" em vez de "dev moderno".
          </p>
        </article>
      </div>
    </section>

    <!-- ═══ ROUND 3 — Jorge MorAIs ═══ -->
    <section class="tlogo-r3">
      <header class="tlogo-r3__head">
        <span class="tlogo-eyebrow">round 3 · the AI inside</span>
        <h2 class="tlogo-r3__title">
          Jorge Mor<span class="tlogo-r3__title-ai">AI</span>s
        </h2>
        <p class="tlogo-r3__lead">
          A tua ideia é genuinamente boa, e digo-te porquê:
          o teu apelido <strong>contém "AI"</strong>. É a tua marca registada que
          ninguém pode replicar sem mudar de nome. Comunica IA sem ser "an AI logo".
          Não precisa de ícone — o nome é o logo.
        </p>
      </header>

      <!-- Hero showcase — the favorite -->
      <div class="tlogo-r3-hero">
        <div class="tlogo-r3-hero__stage">
          <span class="r3-name r3-favorite">Jorge Mor<span class="r3-ai r3-ai--breathe">AI</span>s</span>
        </div>
        <span class="tlogo-r3-hero__caption">
          O meu favorito · Geist 600 · case shift + accent + breath ·
          <a href="#r3-grid">comparar abaixo ↓</a>
        </span>
      </div>

      <!-- 4 treatments grid -->
      <div id="r3-grid" class="tlogo-r3-grid">

        <!-- A · Pure case shift, monochrome -->
        <article class="tlogo-r3-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R3-A</span>
            <h3>Pure case · monochrome</h3>
          </header>
          <div class="tlogo-r3-stage">
            <span class="r3-name typo-geist">Jorge Mor<span class="r3-ai">AI</span>s</span>
          </div>
          <div class="tlogo-r3-preview">
            <span class="r3-name r3-name--sm typo-geist">Jorge Mor<span class="r3-ai">AI</span>s</span>
            <span class="r3-tag typo-geist">Full Stack Developer</span>
          </div>
          <p class="tlogo-card__desc">
            Só case shift. AI em capitais, mesma cor, mesmo peso. <strong>Maximamente clássico.</strong> Quem reparar, sorri. Quem não reparar, lê o nome. Move silencioso.
          </p>
        </article>

        <!-- B · Case shift + accent color -->
        <article class="tlogo-r3-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R3-B</span>
            <h3>Case + accent · static</h3>
          </header>
          <div class="tlogo-r3-stage">
            <span class="r3-name typo-geist">Jorge Mor<span class="r3-ai r3-ai--accent">AI</span>s</span>
          </div>
          <div class="tlogo-r3-preview">
            <span class="r3-name r3-name--sm typo-geist">Jorge Mor<span class="r3-ai r3-ai--accent">AI</span>s</span>
            <span class="r3-tag typo-geist">Full Stack Developer</span>
          </div>
          <p class="tlogo-card__desc">
            Case shift + AI em azure. <strong>Imediatamente legível como "AI".</strong> O equilíbrio sweet spot entre ser visto e não ser ostensivo.
          </p>
        </article>

        <!-- C · Case + accent + breathing glow -->
        <article class="tlogo-r3-card tlogo-r3-card--featured">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R3-C</span>
            <h3>Case + accent + breath <em>· recommended</em></h3>
          </header>
          <div class="tlogo-r3-stage">
            <span class="r3-name typo-geist">Jorge Mor<span class="r3-ai r3-ai--breathe">AI</span>s</span>
          </div>
          <div class="tlogo-r3-preview">
            <span class="r3-name r3-name--sm typo-geist">Jorge Mor<span class="r3-ai r3-ai--breathe-sm">AI</span>s</span>
            <span class="r3-tag typo-geist">Full Stack Developer</span>
          </div>
          <p class="tlogo-card__desc">
            Mesma base que B + um <strong>breath glow</strong> de 2.6s no AI.
            Parece "vivo", "intelligent". O movimento subtil chama o olho sem ser invasivo. <strong>O que recomendo.</strong>
          </p>
        </article>

        <!-- D · Editorial serif (Fraunces) -->
        <article class="tlogo-r3-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R3-D</span>
            <h3>Editorial · Fraunces</h3>
          </header>
          <div class="tlogo-r3-stage">
            <span class="r3-name typo-fraunces">Jorge Mor<span class="r3-ai r3-ai--accent">AI</span>s</span>
          </div>
          <div class="tlogo-r3-preview">
            <span class="r3-name r3-name--sm typo-fraunces">Jorge Mor<span class="r3-ai r3-ai--accent">AI</span>s</span>
            <span class="r3-tag typo-fraunces">Full Stack Developer</span>
          </div>
          <p class="tlogo-card__desc">
            Mesma ideia mas em serif editorial. <strong>"Author/consultor sénior"</strong> em vez de "modern dev". Se quiseres pisar terreno mais "thought leader" / livros / conferências.
          </p>
        </article>

      </div>

      <!-- Tagline alternatives -->
      <div class="tlogo-r3-taglines">
        <h4>Tagline — opções para a linha de baixo</h4>
        <div class="r3-tagline-list">
          <span class="r3-tagline-pill typo-geist">Full Stack Developer</span>
          <span class="r3-tagline-pill typo-geist">Full Stack · AI Systems</span>
          <span class="r3-tagline-pill typo-geist">Developer · Hardware to AI</span>
          <span class="r3-tagline-pill typo-geist">Building intelligent systems</span>
          <span class="r3-tagline-pill typo-geist">Engineer · Systems · AI</span>
        </div>
      </div>

      <!-- Final takeaway -->
      <div class="tlogo-takeaway tlogo-takeaway--strong">
        <h4>Diagnóstico final · este é o caminho</h4>
        <p>
          Vamos ser sinceros: <strong>nenhuma das 8 opções da Round 1 nem das 3 da Round 2 se compara a esta.</strong>
          Porquê? Porque as outras eram <em>conceitos visuais</em>. Esta é uma <em>insight pessoal</em>.
          Construir marca pessoal forte significa encontrar o que só tu tens — e tu literalmente tens "AI" no apelido.
        </p>
        <p>
          A minha recomendação: <strong>R3-C</strong> (Geist + case shift + accent + breath) com tagline
          <em>"Full Stack · AI Systems"</em>. Distintivo, escalável, sem ícone, contemporâneo, denso de significado.
        </p>
        <p>
          Diz-me qual escolhes (R3-A / B / C / D) e eu levo isto para o site real:
          substituo o logo no header, atualizo a signature da hero, atualizo o page title, o favicon, tudo.
          Ficas com a tua marca.
        </p>
      </div>
    </section>

    <!-- ═══ ROUND 4 — Ideias da pasta /brand cruzadas com MorAIs ═══ -->
    <section class="tlogo-r4">
      <header class="tlogo-r4__head">
        <span class="tlogo-eyebrow">round 4 · brand folder × MorAIs</span>
        <h2 class="tlogo-r4__title">Silicon Die · MorAIs · Lockup</h2>
        <p class="tlogo-r4__lead">
          Tirei os 3 conceitos mais fortes da pasta <code>/brand</code> que partilhaste e
          cruzei-os com a tua ideia <strong>MorAIs</strong>. O resultado conta a tua
          história inteira — embedded → AI → fullstack — em três peças que funcionam juntas ou separadas.
        </p>
      </header>

      <!-- Hero: full lockup atmospherics -->
      <div class="r4-atmosphere">
        <div class="r4-orbit r4-orbit--outer" aria-hidden>
          <span class="r4-orbit__dot"></span>
        </div>
        <div class="r4-orbit r4-orbit--inner" aria-hidden>
          <span class="r4-orbit__dot r4-orbit__dot--small"></span>
        </div>
        <div class="r4-stage">
          <div class="r4-scan" aria-hidden></div>
          <svg viewBox="0 0 120 120" class="r4-die r4-die--hero" fill="none">
            <path d="M60 6 L106 33 L106 87 L60 114 L14 87 L14 33 Z" stroke="#7eb8f7" stroke-width="1.5" stroke-linejoin="round" stroke-opacity="0.45"/>
            <path d="M60 22 L92 41 L92 79 L60 98 L28 79 L28 41 Z" stroke="#a8d0ff" stroke-width="1" stroke-linejoin="round" stroke-opacity="0.7"/>
            <g stroke="#7eb8f7" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.55" fill="none">
              <path d="M2 60 L14 60"/><path d="M2 48 L8 48 L14 54"/><path d="M2 72 L8 72 L14 66"/>
              <path d="M106 60 L118 60"/><path d="M112 48 L118 48"/><path d="M112 72 L118 72"/>
            </g>
            <circle cx="2" cy="60" r="1.5" fill="#a8d0ff"/>
            <circle cx="118" cy="60" r="1.5" fill="#a8d0ff"/>
            <circle cx="60" cy="6" r="1.5" fill="#a8d0ff" opacity="0.7"/>
            <circle cx="60" cy="114" r="1.5" fill="#a8d0ff" opacity="0.7"/>
            <!-- Central pulse spark -->
            <circle class="r4-die__core" cx="60" cy="60" r="3" fill="#fff"/>
            <circle class="r4-die__core-glow" cx="60" cy="60" r="8" fill="#7eb8f7" opacity="0.3"/>
          </svg>
        </div>
        <div class="r4-atmosphere__caption">
          <span class="r4-wordmark r4-wordmark--lg">
            <span>jorge</span>
            <span class="r4-wordmark__sep">·</span>
            <span>morais</span>
          </span>
          <span class="r4-tagline">Full Stack · AI · Embedded</span>
        </div>
      </div>

      <!-- 3 concept cards -->
      <div class="tlogo-r4-grid">

        <!-- R4-A · Silicon die mark alone -->
        <article class="tlogo-r4-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R4-A</span>
            <h3>Silicon Die <em>· o mark</em></h3>
          </header>
          <div class="tlogo-card__stage">
            <svg viewBox="0 0 120 120" class="r4-die" fill="none">
              <path d="M60 6 L106 33 L106 87 L60 114 L14 87 L14 33 Z" stroke="#7eb8f7" stroke-width="1.5" stroke-linejoin="round" stroke-opacity="0.45"/>
              <path d="M60 22 L92 41 L92 79 L60 98 L28 79 L28 41 Z" stroke="#a8d0ff" stroke-width="1" stroke-linejoin="round" stroke-opacity="0.7"/>
              <g stroke="#7eb8f7" stroke-width="1.25" stroke-linecap="round" stroke-opacity="0.55" fill="none">
                <path d="M2 60 L14 60"/><path d="M2 48 L8 48 L14 54"/><path d="M2 72 L8 72 L14 66"/>
                <path d="M106 60 L118 60"/><path d="M112 48 L118 48"/><path d="M112 72 L118 72"/>
              </g>
              <circle cx="2" cy="60" r="1.5" fill="#a8d0ff"/>
              <circle cx="118" cy="60" r="1.5" fill="#a8d0ff"/>
              <circle cx="60" cy="6" r="1.5" fill="#a8d0ff" opacity="0.7"/>
              <circle cx="60" cy="114" r="1.5" fill="#a8d0ff" opacity="0.7"/>
              <circle class="r4-die__core" cx="60" cy="60" r="3" fill="#fff"/>
            </svg>
          </div>
          <div class="tlogo-card__preview tlogo-card__preview--clean">
            <div class="r4-mini-atmosphere" aria-hidden="true">
              <div class="r4-mini-orbit r4-mini-orbit--outer"><span class="r4-mini-orbit__dot"></span></div>
              <div class="r4-mini-orbit r4-mini-orbit--inner"><span class="r4-mini-orbit__dot r4-mini-orbit__dot--small"></span></div>
              <div class="r4-mini-stage">
                <div class="r4-mini-scan"></div>
                <svg viewBox="0 0 48 48" class="r4-mini-die" fill="none">
                  <path d="M24 2 L42 13 L42 35 L24 46 L6 35 L6 13 Z" stroke="#7eb8f7" stroke-width="1.2" stroke-linejoin="round" stroke-opacity="0.55" fill="none"/>
                  <path d="M24 9 L37 16 L37 32 L24 39 L11 32 L11 16 Z" stroke="#a8d0ff" stroke-width="0.9" stroke-linejoin="round" stroke-opacity="0.7" fill="none"/>
                  <g stroke="#7eb8f7" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.55" fill="none">
                    <path d="M0 24 L6 24"/><path d="M0 19 L3 19 L6 22"/><path d="M0 29 L3 29 L6 26"/>
                    <path d="M42 24 L48 24"/><path d="M45 19 L48 19"/><path d="M45 29 L48 29"/>
                  </g>
                  <circle cx="0.8" cy="24" r="0.7" fill="#a8d0ff"/>
                  <circle cx="47.2" cy="24" r="0.7" fill="#a8d0ff"/>
                  <circle class="r4-mini-die__core-glow" cx="24" cy="24" r="3.2" fill="#7eb8f7" opacity="0.3"/>
                  <circle class="r4-mini-die__core" cx="24" cy="24" r="1.6" fill="#fff"/>
                </svg>
              </div>
            </div>
            <div class="tlogo-name-block">
              <span class="r4-wordmark r4-wordmark--header">
                <span>jorge</span><span class="r4-wordmark__sep-sm">·</span><span>morais</span>
              </span>
              <span class="r4-tagline r4-tagline--header">Full Stack · AI · Embedded</span>
            </div>
          </div>
          <p class="tlogo-card__desc">
            <strong>Hexágono = chip/silício.</strong> Traces de PCB a sair = ligações para o mundo (embedded). Spark central = sinal vivo. O mark é o símbolo, a wordmark é o nome, a tagline ancora o resto. <strong>Decoupling deliberado.</strong>
          </p>
        </article>

        <!-- R4-B · Wordmark only with separator dot -->
        <article class="tlogo-r4-card">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R4-B</span>
            <h3>Wordmark · MorAIs <em>· o nome</em></h3>
          </header>
          <div class="tlogo-card__stage">
            <span class="r4-wordmark r4-wordmark--xl">
              <span>jorge</span>
              <span class="r4-wordmark__sep">·</span>
              <span>morais</span>
            </span>
          </div>
          <div class="tlogo-card__preview tlogo-card__preview--wordmark">
            <span class="r4-wordmark r4-wordmark--header">
              <span>jorge</span><span class="r4-wordmark__sep-sm">·</span><span>morais</span>
            </span>
            <span class="r4-tagline r4-tagline--header">Full Stack · AI · Embedded</span>
          </div>
          <p class="tlogo-card__desc">
            <strong>Lowercase, separador <code>·</code> em azure no meio.</strong> O ponto é o "respiro" — separa nome e apelido sem precisar de espaço, fica como uma <strong>marca registada subtil</strong>. Sem ícone, sem decoração, só nome.
          </p>
        </article>

        <!-- R4-C · Full lockup -->
        <article class="tlogo-r4-card tlogo-r4-card--featured">
          <header class="tlogo-card__head">
            <span class="tlogo-card__num">R4-C</span>
            <h3>Lockup completo <em>· recommended</em></h3>
          </header>
          <div class="tlogo-card__stage">
            <div class="r4-lockup r4-lockup--lg">
              <svg viewBox="0 0 120 120" class="r4-die r4-die--md" fill="none">
                <path d="M60 6 L106 33 L106 87 L60 114 L14 87 L14 33 Z" stroke="#7eb8f7" stroke-width="2" stroke-linejoin="round" stroke-opacity="0.5"/>
                <path d="M60 22 L92 41 L92 79 L60 98 L28 79 L28 41 Z" stroke="#a8d0ff" stroke-width="1.4" stroke-linejoin="round" stroke-opacity="0.7"/>
                <g stroke="#7eb8f7" stroke-width="1.6" stroke-linecap="round" stroke-opacity="0.55" fill="none">
                  <path d="M2 60 L14 60"/><path d="M2 48 L8 48 L14 54"/><path d="M2 72 L8 72 L14 66"/>
                  <path d="M106 60 L118 60"/><path d="M112 48 L118 48"/><path d="M112 72 L118 72"/>
                </g>
                <circle cx="2" cy="60" r="2" fill="#a8d0ff"/>
                <circle cx="118" cy="60" r="2" fill="#a8d0ff"/>
                <circle class="r4-die__core" cx="60" cy="60" r="4" fill="#fff"/>
              </svg>
              <div class="r4-lockup__text">
                <span class="r4-wordmark r4-wordmark--lockup">
                  <span>jorge</span><span class="r4-wordmark__sep">·</span><span>morais</span>
                </span>
                <span class="r4-tagline r4-tagline--lockup">Full Stack · AI · Embedded</span>
              </div>
            </div>
          </div>
          <div class="tlogo-card__preview tlogo-card__preview--clean">
            <div class="r4-mini-atmosphere" aria-hidden="true">
              <div class="r4-mini-orbit r4-mini-orbit--outer"><span class="r4-mini-orbit__dot"></span></div>
              <div class="r4-mini-orbit r4-mini-orbit--inner"><span class="r4-mini-orbit__dot r4-mini-orbit__dot--small"></span></div>
              <div class="r4-mini-stage">
                <div class="r4-mini-scan"></div>
                <svg viewBox="0 0 48 48" class="r4-mini-die" fill="none">
                  <path d="M24 2 L42 13 L42 35 L24 46 L6 35 L6 13 Z" stroke="#7eb8f7" stroke-width="1.2" stroke-linejoin="round" stroke-opacity="0.55" fill="none"/>
                  <path d="M24 9 L37 16 L37 32 L24 39 L11 32 L11 16 Z" stroke="#a8d0ff" stroke-width="0.9" stroke-linejoin="round" stroke-opacity="0.7" fill="none"/>
                  <g stroke="#7eb8f7" stroke-width="0.9" stroke-linecap="round" stroke-opacity="0.55" fill="none">
                    <path d="M0 24 L6 24"/><path d="M0 19 L3 19 L6 22"/><path d="M0 29 L3 29 L6 26"/>
                    <path d="M42 24 L48 24"/><path d="M45 19 L48 19"/><path d="M45 29 L48 29"/>
                  </g>
                  <circle cx="0.8" cy="24" r="0.7" fill="#a8d0ff"/>
                  <circle cx="47.2" cy="24" r="0.7" fill="#a8d0ff"/>
                  <circle class="r4-mini-die__core-glow" cx="24" cy="24" r="3.2" fill="#7eb8f7" opacity="0.3"/>
                  <circle class="r4-mini-die__core" cx="24" cy="24" r="1.6" fill="#fff"/>
                </svg>
              </div>
            </div>
            <div class="tlogo-name-block">
              <span class="r4-wordmark r4-wordmark--header">
                <span>jorge</span><span class="r4-wordmark__sep-sm">·</span><span>morais</span>
              </span>
              <span class="r4-tagline r4-tagline--header">Full Stack · AI · Embedded</span>
            </div>
          </div>
          <p class="tlogo-card__desc">
            <strong>Mark + wordmark + tagline juntos.</strong> O mark dá presença visual; a wordmark dá identidade humana; a tagline ancora o posicionamento. <strong>Funciona em qualquer escala</strong> — header (40px), business card (60px), keynote (480px).
          </p>
        </article>
      </div>

      <!-- Typography note -->
      <div class="r4-typo-note">
        <h4>Tipografia recomendada (vinda da pasta /brand)</h4>
        <p>
          O sistema de marca que partilhaste já tinha boa decisão tipográfica:
          <strong class="typo-spacegrotesk">Space Grotesk</strong> para display +
          <strong class="typo-dmsans">DM Sans</strong> para body +
          mono só para tags/eyebrows pequenos.
          É ainda melhor que Geist para o teu caso porque <strong>Space Grotesk tem personalidade</strong> (curvas
          características, alternates) sem ser excêntrico — perfeito para um wordmark que é o teu logo.
        </p>
        <div class="r4-typo-preview">
          <span class="typo-spacegrotesk r4-typo-line">jorge · morais</span>
          <span class="typo-dmsans r4-typo-line r4-typo-line--body">Building intelligent systems, end-to-end.</span>
        </div>
      </div>

      <div class="tlogo-takeaway tlogo-takeaway--strong">
        <h4>Diagnóstico atualizado</h4>
        <p>
          A pasta <code>/brand</code> tinha trabalho sério. <strong>O Silicon Die hexágono é
          o mark mais distintivo que vimos esta sessão toda</strong> — diz "hardware → cloud" sem
          uma palavra, e ninguém o tem.
        </p>
        <p>
          Recomendação final: <strong>R4-C (lockup completo)</strong> com
          <strong>Space Grotesk</strong>, wordmark <strong>jorge · morais</strong>
          (lowercase, separador azure), e tagline <strong>"Full Stack · AI · Embedded"</strong>.
          O AI vive no apelido (em letras) e na tagline — sem ter que gritar dentro do nome. Mais elegante assim.
          Diz "go" e implemento no site real.
        </p>
      </div>
    </section>

    <!-- Resources -->
    <section class="tlogo-resources">
      <h2>Para tu próprio explorares</h2>

      <div class="tlogo-res-cols">
        <div>
          <h4>Inspiração — devs/tech com marca pessoal forte</h4>
          <ul>
            <li><a href="https://leerob.io" target="_blank" rel="noopener">leerob.io</a> — wordmark puro, executivo</li>
            <li><a href="https://brianlovin.com" target="_blank" rel="noopener">brianlovin.com</a> — minimal, clean</li>
            <li><a href="https://paco.me" target="_blank" rel="noopener">paco.me</a> — design-forward</li>
            <li><a href="https://rauno.me" target="_blank" rel="noopener">rauno.me</a> — micro-interactions premium</li>
            <li><a href="https://emilkowal.ski" target="_blank" rel="noopener">emilkowal.ski</a> — ultra-minimal</li>
            <li><a href="https://linear.app" target="_blank" rel="noopener">linear.app</a> — geometric mark</li>
            <li><a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a> — triângulo icónico</li>
          </ul>
        </div>
        <div>
          <h4>Curadoria de logos</h4>
          <ul>
            <li><a href="https://www.logoed.co.uk" target="_blank" rel="noopener">logoed.co.uk</a> — minimalismo curado</li>
            <li><a href="https://www.logobook.com" target="_blank" rel="noopener">logobook.com</a> — arquivo histórico</li>
            <li><a href="https://logospire.com" target="_blank" rel="noopener">logospire.com</a> — community-rated</li>
            <li><a href="https://www.underconsideration.com/brandnew/" target="_blank" rel="noopener">brandnew (UnderConsideration)</a> — case studies profissionais</li>
            <li><a href="https://dribbble.com/search/minimal%20logo%20mark" target="_blank" rel="noopener">dribbble — minimal logo</a></li>
          </ul>
        </div>
        <div>
          <h4>Tools (testar tu)</h4>
          <ul>
            <li><a href="https://looka.com" target="_blank" rel="noopener">looka.com</a> — IA generator (médio)</li>
            <li><a href="https://brandmark.io" target="_blank" rel="noopener">brandmark.io</a> — também IA</li>
            <li><a href="https://hatchful.shopify.com" target="_blank" rel="noopener">hatchful (Shopify)</a> — grátis</li>
            <li><a href="https://www.figma.com/community/search?resource_type=hub_file&q=logo%20template" target="_blank" rel="noopener">Figma Community</a> — templates p/ remixar</li>
          </ul>
        </div>
        <div>
          <h4>Leitura — 1 dia ganhas anos</h4>
          <ul>
            <li><strong>The Brand Gap</strong> — Marty Neumeier (curto, clássico)</li>
            <li><strong>Identity Designed</strong> — David Airey</li>
            <li><strong>Logo Design Love</strong> — David Airey</li>
            <li>Marty Neumeier no YouTube — séries gratuitas</li>
          </ul>
        </div>
      </div>

      <div class="tlogo-takeaway">
        <h4>O meu diagnóstico honesto</h4>
        <p>
          O teu posicionamento ("hardware → cloud, do C ao quantum") é distintivo.
          O teu logo atual não comunica isso — comunica "developer genérico".
          Os meus 3 candidatos mais alinhados com a tua história real são:
          <strong>05 (onda)</strong>, <strong>07 (grafo)</strong>, e <strong>04 (wordmark)</strong>.
          Os outros são bonitos mas trocáveis com qualquer outro dev.
        </p>
        <p>
          Se quiseres mesmo manter o "JM" por reconhecimento, a 03 (Mourinho) é a única que dá peso à letra.
          Mas pergunta-te: o "JM" do Mourinho funciona porque ele é uma celebridade global. O teu funciona porquê?
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TestesLogo',
}
</script>

<style scoped>
.tlogo {
  background: #0a0d14;
  color: #c8d8f0;
  min-height: 100vh;
  padding: 6rem 2rem 8rem;
  font-family: var(--ff-body, 'Inter', system-ui, sans-serif);
}

/* Hero */
.tlogo-hero {
  max-width: 880px;
  margin: 0 auto 5rem;
  text-align: left;
}
.tlogo-eyebrow {
  display: inline-block;
  font-family: var(--ff-mono, monospace);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7eb8f7;
  padding: 0.3rem 0.9rem;
  border: 1px solid rgba(126, 184, 247, 0.25);
  border-radius: 4px;
  background: rgba(126, 184, 247, 0.06);
  margin-bottom: 1.5rem;
}
.tlogo-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.2rem;
}
.tlogo-lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #c8d8f0;
  margin-bottom: 1.5rem;
  max-width: 720px;
}
.tlogo-questions {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid rgba(126, 184, 247, 0.3);
}
.tlogo-questions li {
  padding: 0.6rem 0 0.6rem 1.2rem;
  font-size: 0.95rem;
  color: #c8d8f0;
}
.tlogo-questions strong {
  color: #fff;
}

/* Grid */
.tlogo-grid {
  max-width: 1280px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.4rem;
}
.tlogo-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.tlogo-card:hover {
  border-color: rgba(126, 184, 247, 0.3);
  transform: translateY(-2px);
}
.tlogo-card__head {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
}
.tlogo-card__num {
  font-family: var(--ff-mono, monospace);
  font-size: 0.75rem;
  color: #5a6a82;
  letter-spacing: 0.12em;
}
.tlogo-card h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}
.tlogo-card h3 em {
  font-style: normal;
  color: #5a6a82;
  font-weight: 400;
  font-size: 0.85em;
}
.tlogo-card__stage {
  height: 160px;
  background: #060810;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.tlogo-card__stage--wide {
  height: 100px;
}
.tlogo-card__preview {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
}
.tlogo-card__preview--wordmark {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
}
.tlogo-card__desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #c8d8f0;
  margin: 0;
}

/* Marks (small + large) */
.tlogo-mark {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(126, 184, 247, 0.2);
  background: rgba(126, 184, 247, 0.06);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.tlogo-mark--lg {
  width: 110px;
  height: 110px;
  border-radius: 18px;
}
.tlogo-mark--wide {
  width: 56px;
}

/* Megrim baseline */
.tlogo-megrim {
  font-family: 'Megrim', sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #7eb8f7;
  letter-spacing: 4px;
}
.tlogo-megrim--sm {
  font-size: 18px;
  letter-spacing: 1.5px;
}

/* SVG sizing */
.tlogo-svg {
  width: 100%;
  height: 100%;
  display: block;
}
.tlogo-svg--lg {
  width: 100px;
  height: 100px;
}

/* Stroke draw animation (loops every 6s for visibility) */
.t-stroke {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: tdraw 6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.t-stroke--a { animation-delay: 0s; }
.t-stroke--a-2 { animation-delay: 0.4s; }
.t-stroke--b { animation-delay: 0.6s; }
.t-stroke--b-2 { animation-delay: 1s; }
.t-stroke--c { animation-delay: 1.4s; }

@keyframes tdraw {
  0%   { stroke-dashoffset: 100; }
  25%  { stroke-dashoffset: 0; }
  85%  { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 100; }
}

/* Pulse dot */
.t-pulse {
  transform-origin: center;
  animation: tpulse 2s ease-in-out infinite;
}
@keyframes tpulse {
  0%, 100% { opacity: 0.3; transform: scale(0.7); }
  50%      { opacity: 1; transform: scale(1.1); }
}

/* Wave (concept 05) */
.t-wave {
  stroke-dasharray: 4 6;
  animation: twaveScroll 3s linear infinite;
}
@keyframes twaveScroll {
  to { stroke-dashoffset: -10; }
}
.t-wave-dot {
  animation: twaveDot 4s linear infinite;
}
@keyframes twaveDot {
  0%   { transform: translateX(0px) translateY(0); }
  25%  { transform: translateX(20px) translateY(-12px); }
  50%  { transform: translateX(40px) translateY(0); }
  75%  { transform: translateX(60px) translateY(12px); }
  100% { transform: translateX(80px) translateY(0); opacity: 0; }
}

/* Orbital (06) */
.t-orbit {
  transform-origin: 24px 24px;
  animation: torbit 4s ease-out infinite;
}
.t-orbit--1 { animation-delay: 0s; }
.t-orbit--2 { animation-delay: 1.3s; }
.t-orbit--3 { animation-delay: 2.6s; }
@keyframes torbit {
  0%   { opacity: 1; transform: scale(0.3); }
  80%  { opacity: 0.05; }
  100% { opacity: 0; transform: scale(1.1); }
}

/* Graph (07) */
.t-edge {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: tdraw 5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.t-node {
  transform-origin: center;
  animation: tnodePulse 3s ease-in-out infinite;
}
.t-node--center {
  animation-duration: 1.8s;
}
@keyframes tnodePulse {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}
.t-packet {
  animation: tpacket 4s ease-in-out infinite;
}
@keyframes tpacket {
  0%   { transform: translate(10px, 14px); opacity: 0; }
  10%  { opacity: 1; }
  35%  { transform: translate(22px, 30px); opacity: 1; }
  65%  { transform: translate(38px, 22px); opacity: 1; }
  90%  { transform: translate(36px, 38px); opacity: 1; }
  100% { transform: translate(36px, 38px); opacity: 0; }
}

/* Wordmark */
.tlogo-wordmark {
  font-family: var(--ff-mono, 'JetBrains Mono', monospace);
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
}
.tlogo-wordmark--sm {
  font-size: 16px;
}
.tlogo-wordmark__dot {
  color: #7eb8f7;
  animation: twordmarkDot 1.6s ease-in-out infinite;
  display: inline-block;
}
@keyframes twordmarkDot {
  0%, 100% { opacity: 0.4; transform: scale(0.85); }
  50%      { opacity: 1; transform: scale(1.1); }
}

/* Name block (preview) */
.tlogo-name-block {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}
.tlogo-name {
  font-family: var(--ff-mono, monospace);
  font-size: 14px;
  font-weight: 500;
  color: #c8d8f0;
}
.tlogo-tag {
  font-family: var(--ff-mono, monospace);
  font-size: 8px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: rgba(200, 216, 240, 0.4);
}
.tlogo-tag--inline {
  font-size: 9px;
}

/* Resources */
.tlogo-resources {
  max-width: 1100px;
  margin: 0 auto;
}
.tlogo-resources h2 {
  font-size: 1.6rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}
.tlogo-res-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.tlogo-res-cols h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7eb8f7;
  margin-bottom: 0.8rem;
  font-weight: 500;
}
.tlogo-res-cols ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.tlogo-res-cols li {
  font-size: 0.88rem;
  line-height: 1.5;
  color: #c8d8f0;
}
.tlogo-res-cols a {
  color: #c8d8f0;
  text-decoration: none;
  border-bottom: 1px dashed rgba(126, 184, 247, 0.3);
  transition: color 0.2s ease, border-color 0.2s ease;
}
.tlogo-res-cols a:hover {
  color: #7eb8f7;
  border-color: #7eb8f7;
}
.tlogo-takeaway {
  background: rgba(126, 184, 247, 0.04);
  border-left: 3px solid #7eb8f7;
  padding: 1.5rem 1.8rem;
  border-radius: 0 10px 10px 0;
}
.tlogo-takeaway h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7eb8f7;
  margin: 0 0 0.8rem;
  font-weight: 500;
}
.tlogo-takeaway p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #c8d8f0;
  margin: 0 0 0.8rem;
}
.tlogo-takeaway p:last-child {
  margin-bottom: 0;
}
.tlogo-takeaway strong {
  color: #7eb8f7;
}

@media (max-width: 600px) {
  .tlogo { padding: 4rem 1rem 5rem; }
  .tlogo-grid { grid-template-columns: 1fr; }
}

/* ═══ ROUND 2 ═══ */
.tlogo-r2 {
  max-width: 1280px;
  margin: 0 auto 5rem;
}
.tlogo-r2__head {
  max-width: 760px;
  margin-bottom: 2.5rem;
}
.tlogo-r2__head h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 1rem 0 1rem;
}
.tlogo-r2__head p {
  font-size: 1rem;
  line-height: 1.65;
  color: #c8d8f0;
}
.tlogo-r2__head strong { color: #7eb8f7; }

/* R2-01 atom orbits — slow drift */
.t-orbital {
  transform-origin: 24px 24px;
  animation: torbital 12s linear infinite;
}
.t-orbital:nth-of-type(1) { animation-duration: 14s; }
.t-orbital:nth-of-type(2) { animation-duration: 18s; animation-direction: reverse; }
.t-orbital:nth-of-type(3) { animation-duration: 22s; }
@keyframes torbital {
  to { transform: rotate(360deg); }
}

/* R2-02 tendril endpoints pulse asymmetrically */
.t-limb {
  animation: tlimbPulse 2.4s ease-in-out infinite;
}
.t-limb--1 { animation-delay: 0s; }
.t-limb--2 { animation-delay: 0.6s; }
.t-limb--3 { animation-delay: 1.2s; }
.t-limb--4 { animation-delay: 1.8s; }
@keyframes tlimbPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50%      { opacity: 1; transform: scale(1.2); }
}
.t-core {
  transform-origin: 24px 24px;
  animation: tcorePulse 3s ease-in-out infinite;
}
@keyframes tcorePulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.15); }
}

/* R2-03 asymmetric pulse rings */
.t-asymp {
  transform-origin: 20px 22px;
  animation: tasymp 4s ease-out infinite;
}
.t-asymp--1 { animation-delay: 0s; }
.t-asymp--2 { animation-delay: 1.3s; }
.t-asymp--3 { animation-delay: 2.6s; }
@keyframes tasymp {
  0%   { opacity: 1; transform: scale(0.25); }
  80%  { opacity: 0.05; }
  100% { opacity: 0; transform: scale(1.25); }
}

/* ═══ TYPOGRAPHY ═══ */
.tlogo-typo {
  max-width: 1100px;
  margin: 0 auto 5rem;
}
.tlogo-typo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.4rem;
}
.tlogo-typo-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.tlogo-typo-card:hover {
  border-color: rgba(126, 184, 247, 0.3);
  transform: translateY(-2px);
}
.tlogo-typo-num {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  font-family: var(--ff-mono, monospace);
  font-size: 0.7rem;
  color: #5a6a82;
  letter-spacing: 0.12em;
}
.tlogo-typo-name {
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.01em;
  line-height: 1.1;
}
.tlogo-typo-tag {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(200, 216, 240, 0.5);
  margin-bottom: 1rem;
}
.tlogo-typo-desc {
  font-size: 0.86rem;
  line-height: 1.6;
  color: #c8d8f0;
  margin: 0;
  font-family: var(--ff-body, 'Inter', sans-serif);
}
.tlogo-typo-desc strong { color: #fff; }
.tlogo-typo-desc em { color: #7eb8f7; font-style: italic; }

.typo-geist { font-family: 'Geist', system-ui, sans-serif; }
.typo-manrope { font-family: 'Manrope', system-ui, sans-serif; }
.typo-fraunces { font-family: 'Fraunces', Georgia, serif; }

/* Alt name in R2 cards (uses Geist by default — closest to "modern dev" baseline) */
.tlogo-name--alt {
  font-family: 'Geist', system-ui, sans-serif;
  letter-spacing: -0.01em;
}
.tlogo-tag--alt {
  font-family: 'Geist', system-ui, sans-serif;
  letter-spacing: 0.16em;
}

/* ═══ ROUND 3 — Jorge MorAIs ═══ */
.tlogo-r3 {
  max-width: 1280px;
  margin: 0 auto 5rem;
}
.tlogo-r3__head {
  max-width: 760px;
  margin-bottom: 2.5rem;
}
.tlogo-r3__title {
  font-family: 'Geist', system-ui, sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: #fff;
  line-height: 1;
  margin: 1rem 0 1.2rem;
}
.tlogo-r3__title-ai {
  color: #7eb8f7;
  animation: aiBreathe 2.6s ease-in-out infinite;
}
.tlogo-r3__lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #c8d8f0;
}
.tlogo-r3__lead strong { color: #7eb8f7; }

/* Hero showcase */
.tlogo-r3-hero {
  margin-bottom: 3rem;
}
.tlogo-r3-hero__stage {
  background: linear-gradient(180deg, #060810 0%, #0a0d14 100%);
  border: 1px solid rgba(126, 184, 247, 0.15);
  border-radius: 16px;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.tlogo-r3-hero__stage::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 60% at 50% 50%, rgba(126,184,247,0.10), transparent 70%);
  pointer-events: none;
}
.tlogo-r3-hero__caption {
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--ff-mono, monospace);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: #5a6a82;
}
.tlogo-r3-hero__caption a {
  color: #7eb8f7;
  text-decoration: none;
  border-bottom: 1px dashed rgba(126,184,247,0.4);
}

.r3-favorite {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  font-family: 'Geist', system-ui, sans-serif;
  color: #fff;
  position: relative;
  z-index: 1;
}

/* Wordmark base */
.r3-name {
  font-size: 44px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.025em;
  line-height: 1;
  font-family: 'Geist', system-ui, sans-serif;
}
.r3-name.typo-fraunces {
  font-weight: 500;
  letter-spacing: -0.02em;
}
.r3-name--sm {
  font-size: 18px;
  letter-spacing: -0.005em;
}

/* AI treatments */
.r3-ai {
  /* default: pure case shift, monochrome */
  font-weight: inherit;
}
.r3-ai--accent {
  color: #7eb8f7;
}
.r3-ai--breathe {
  color: #7eb8f7;
  animation: aiBreathe 2.6s ease-in-out infinite;
}
.r3-ai--breathe-sm {
  color: #7eb8f7;
  animation: aiBreatheSm 2.6s ease-in-out infinite;
}
@keyframes aiBreathe {
  0%, 100% {
    color: #7eb8f7;
    text-shadow: 0 0 0 transparent;
  }
  50% {
    color: #c8e0ff;
    text-shadow: 0 0 16px rgba(126, 184, 247, 0.55), 0 0 32px rgba(126, 184, 247, 0.25);
  }
}
@keyframes aiBreatheSm {
  0%, 100% {
    color: #7eb8f7;
    text-shadow: 0 0 0 transparent;
  }
  50% {
    color: #c8e0ff;
    text-shadow: 0 0 6px rgba(126, 184, 247, 0.6);
  }
}

/* R3 cards */
.tlogo-r3-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.4rem;
  margin-bottom: 3rem;
}
.tlogo-r3-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.tlogo-r3-card:hover {
  border-color: rgba(126, 184, 247, 0.3);
  transform: translateY(-2px);
}
.tlogo-r3-card--featured {
  border-color: rgba(126, 184, 247, 0.4);
  background: linear-gradient(180deg, rgba(126,184,247,0.04) 0%, #111827 60%);
}
.tlogo-r3-card--featured h3 em {
  font-style: italic;
  color: #7eb8f7;
  font-weight: 400;
  font-size: 0.78em;
}
.tlogo-r3-stage {
  height: 130px;
  background: #060810;
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}
.tlogo-r3-preview {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.9rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
}
.r3-tag {
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(200, 216, 240, 0.45);
  margin-top: 0.2rem;
}

/* Taglines */
.tlogo-r3-taglines {
  margin-bottom: 3rem;
}
.tlogo-r3-taglines h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7eb8f7;
  margin-bottom: 1rem;
  font-weight: 500;
}
.r3-tagline-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.r3-tagline-pill {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c8d8f0;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(126, 184, 247, 0.2);
  border-radius: 100px;
  background: rgba(126, 184, 247, 0.04);
  cursor: default;
  transition: all 0.25s ease;
}
.r3-tagline-pill:hover {
  border-color: rgba(126, 184, 247, 0.5);
  background: rgba(126, 184, 247, 0.1);
  color: #fff;
}

.tlogo-takeaway--strong {
  border-left-width: 4px;
  background: linear-gradient(90deg, rgba(126,184,247,0.08), rgba(126,184,247,0.02));
}

/* ═══ ROUND 4 — Silicon Die × MorAIs ═══ */
.tlogo-r4 {
  max-width: 1280px;
  margin: 0 auto 5rem;
}
.tlogo-r4__head {
  max-width: 760px;
  margin-bottom: 2.5rem;
}
.tlogo-r4__title {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
  line-height: 1.1;
  margin: 1rem 0 1.2rem;
}
.tlogo-r4__lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #c8d8f0;
}
.tlogo-r4__lead strong { color: #7eb8f7; }
.tlogo-r4__lead code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.92em;
  background: rgba(126, 184, 247, 0.08);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  color: #a8d0ff;
}

/* Atmospheric hero showcase */
.r4-atmosphere {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  margin: 0 auto 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.r4-orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(126, 184, 247, 0.18);
  animation: r4orbit 28s linear infinite;
}
.r4-orbit--inner {
  inset: 12%;
  border-color: rgba(126, 184, 247, 0.12);
  animation-direction: reverse;
  animation-duration: 22s;
}
.r4-orbit__dot {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #a8d0ff;
  box-shadow: 0 0 16px rgba(168, 208, 255, 0.8);
}
.r4-orbit__dot--small {
  width: 5px;
  height: 5px;
  background: #7eb8f7;
  box-shadow: 0 0 10px rgba(126, 184, 247, 0.6);
}
@keyframes r4orbit {
  to { transform: rotate(360deg); }
}

.r4-stage {
  position: absolute;
  inset: 24%;
  border-radius: 32px;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(126, 184, 247, 0.2);
  box-shadow:
    0 0 0 1px rgba(126, 184, 247, 0.1),
    0 20px 60px -20px rgba(126, 184, 247, 0.4),
    inset 0 0 60px rgba(126, 184, 247, 0.05);
}
.r4-scan {
  position: absolute;
  inset-inline: 0;
  height: 80px;
  background: linear-gradient(180deg, rgba(168, 208, 255, 0.4), rgba(126, 184, 247, 0.15) 60%, transparent);
  animation: r4scan 6s ease-in-out infinite;
  pointer-events: none;
}
@keyframes r4scan {
  0%, 100% { transform: translateY(-110%); opacity: 0; }
  40%, 60% { opacity: 1; }
  100%     { transform: translateY(110%); opacity: 0; }
}

.r4-die--hero { width: 65%; height: 65%; position: relative; z-index: 1; }
.r4-die--md { width: 64px; height: 64px; flex-shrink: 0; }
.r4-die { width: 100px; height: 100px; }

.r4-die__core {
  transform-origin: 60px 60px;
  animation: r4core 2.4s ease-in-out infinite;
  filter: drop-shadow(0 0 6px #7eb8f7);
}
.r4-die__core-glow {
  transform-origin: 60px 60px;
  animation: r4coreGlow 2.4s ease-in-out infinite;
}
@keyframes r4core {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.4); }
}
@keyframes r4coreGlow {
  0%, 100% { transform: scale(0.8); opacity: 0.2; }
  50%      { transform: scale(1.6); opacity: 0.5; }
}

.r4-atmosphere__caption {
  position: absolute;
  bottom: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

/* Wordmark variants */
.r4-wordmark {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
  display: inline-flex;
  align-items: baseline;
  gap: 0;
}
.r4-wordmark--lg { font-size: 36px; }
.r4-wordmark--xl { font-size: 56px; line-height: 1; }
.r4-wordmark--lockup { font-size: 28px; line-height: 1.1; }
.r4-wordmark--header {
  font-size: 16px;
  letter-spacing: -0.01em;
}
.r4-wordmark__sep {
  color: #7eb8f7;
  margin: 0 0.32em;
  font-weight: 500;
}
.r4-wordmark__sep-sm {
  color: #7eb8f7;
  margin: 0 0.25em;
  font-weight: 500;
}

/* Tagline */
.r4-tagline {
  font-family: 'JetBrains Mono', 'Space Grotesk', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(200, 216, 240, 0.55);
}
.r4-tagline--lockup {
  font-size: 10px;
  letter-spacing: 0.2em;
  display: block;
  margin-top: 0.4rem;
  color: rgba(200, 216, 240, 0.5);
}
.r4-tagline--header {
  font-size: 8px;
  letter-spacing: 0.18em;
  color: rgba(200, 216, 240, 0.4);
}

/* Lockup */
.r4-lockup {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.r4-lockup__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

/* Cards */
.tlogo-r4-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.4rem;
  margin-bottom: 3rem;
}
.tlogo-r4-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.tlogo-r4-card:hover {
  border-color: rgba(126, 184, 247, 0.3);
  transform: translateY(-2px);
}
.tlogo-r4-card--featured {
  border-color: rgba(126, 184, 247, 0.4);
  background: linear-gradient(180deg, rgba(126,184,247,0.04) 0%, #111827 60%);
}
.tlogo-r4-card h3 em {
  font-style: italic;
  color: #7eb8f7;
  font-weight: 400;
  font-size: 0.78em;
}
.tlogo-r4-card .tlogo-card__stage {
  height: 200px;
  padding: 1rem;
}

/* Typography note */
.r4-typo-note {
  background: rgba(126, 184, 247, 0.04);
  border: 1px solid rgba(126, 184, 247, 0.15);
  border-radius: 12px;
  padding: 1.6rem 1.8rem;
  margin-bottom: 2.5rem;
}
.r4-typo-note h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7eb8f7;
  margin: 0 0 0.8rem;
  font-weight: 500;
}
.r4-typo-note p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #c8d8f0;
  margin: 0 0 1.2rem;
}
.r4-typo-note strong { color: #fff; }
.r4-typo-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.2rem;
  background: #060810;
  border-radius: 8px;
}
.r4-typo-line {
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  letter-spacing: -0.02em;
}
.r4-typo-line--body {
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.005em;
  color: #c8d8f0;
}

.typo-spacegrotesk { font-family: 'Space Grotesk', system-ui, sans-serif; }
.typo-dmsans { font-family: 'DM Sans', system-ui, sans-serif; }

/* Small silicon die — same look as hero, optimized for header (~44px) */
.r4-die-sm {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  overflow: visible;
  display: block;
}
.r4-die-sm__core {
  transform-origin: 24px 24px;
  animation: r4core 2.4s ease-in-out infinite;
  filter: drop-shadow(0 0 3px #7eb8f7);
}
.r4-die-sm__core-glow {
  transform-origin: 24px 24px;
  animation: r4coreGlow 2.4s ease-in-out infinite;
}

/* Mini atmosphere — full hero composition shrunk to ~64px (rings + dots + card + scan + die) */
.r4-mini-atmosphere {
  position: relative;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}
.r4-mini-orbit {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(126, 184, 247, 0.22);
  animation: r4orbit 28s linear infinite;
}
.r4-mini-orbit--inner {
  inset: 14%;
  border-color: rgba(126, 184, 247, 0.16);
  animation-direction: reverse;
  animation-duration: 22s;
}
.r4-mini-orbit__dot {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #a8d0ff;
  box-shadow: 0 0 8px rgba(168, 208, 255, 0.75);
}
.r4-mini-orbit__dot--small {
  top: -2px;
  width: 3.5px;
  height: 3.5px;
  background: #7eb8f7;
  box-shadow: 0 0 6px rgba(126, 184, 247, 0.6);
}
.r4-mini-stage {
  position: absolute;
  inset: 24%;
  border-radius: 6px;
  background: rgba(17, 24, 39, 0.55);
  border: 1px solid rgba(126, 184, 247, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(126, 184, 247, 0.06),
    0 4px 14px -3px rgba(126, 184, 247, 0.4);
}
.r4-mini-scan {
  position: absolute;
  inset-inline: 0;
  height: 14px;
  background: linear-gradient(180deg, rgba(168, 208, 255, 0.4), rgba(126, 184, 247, 0.14) 60%, transparent);
  animation: r4scan 6s ease-in-out infinite;
  pointer-events: none;
}
.r4-mini-die {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.r4-mini-die__core {
  transform-origin: 24px 24px;
  animation: r4core 2.4s ease-in-out infinite;
  filter: drop-shadow(0 0 2px #7eb8f7);
}
.r4-mini-die__core-glow {
  transform-origin: 24px 24px;
  animation: r4coreGlow 2.4s ease-in-out infinite;
}

/* Preview variant without the box wrapper — icon + text inline */
.tlogo-card__preview--clean {
  background: transparent;
  border: none;
  padding: 0.6rem 0.2rem;
  align-items: center;
  gap: 0.85rem;
}

@media (prefers-reduced-motion: reduce) {
  .t-stroke, .t-pulse, .t-wave, .t-wave-dot, .t-orbit,
  .t-edge, .t-node, .t-packet, .tlogo-wordmark__dot,
  .t-orbital, .t-limb, .t-core, .t-asymp,
  .r3-ai--breathe, .r3-ai--breathe-sm, .tlogo-r3__title-ai,
  .r4-orbit, .r4-scan, .r4-die__core, .r4-die__core-glow,
  .r4-mini-orbit, .r4-mini-scan, .r4-mini-die__core, .r4-mini-die__core-glow {
    animation: none;
  }
  .t-stroke, .t-edge { stroke-dashoffset: 0; }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
</style>
