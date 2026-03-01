/**
 * generate-seo.js
 *
 * Fetches published articles from Firestore and regenerates
 * the blog sections in sitemap.xml and both llms.txt files.
 *
 * Usage: node scripts/generate-seo.js
 * Runs automatically via "prebuild" npm script.
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://jorgemopanc.com';

const firebaseConfig = {
  apiKey: 'AIzaSyBodL-nt1_bN2URVTqiFIujrSzZZR7C0N8',
  authDomain: 'portfolio-db-2f39b.firebaseapp.com',
  databaseURL: 'https://portfolio-db-2f39b-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'portfolio-db-2f39b',
  storageBucket: 'portfolio-db-2f39b.appspot.com',
  messagingSenderId: '84266637472',
  appId: '1:84266637472:web:e40c47914d290db26491c5',
  measurementId: 'G-L6E5X22M16',
};

const app = initializeApp(firebaseConfig, 'seo-generator');
const firestore = getFirestore(app);

async function fetchPublishedArticles() {
  const q = query(
    collection(firestore, 'articles'),
    where('status', '==', 'published'),
  );
  const snapshot = await getDocs(q);
  const articles = snapshot.docs.map(d => d.data());

  // Sort by date descending
  articles.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return articles;
}

function injectBetweenMarkers(content, startMarker, endMarker, injection) {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found: ${startMarker} / ${endMarker}`);
  }
  return (
    content.slice(0, startIdx + startMarker.length) +
    '\n' +
    injection +
    '\n' +
    content.slice(endIdx)
  );
}

function generateSitemapBlock(articles) {
  const today = new Date().toISOString().split('T')[0];

  let xml = '';
  // Blog index page
  xml += `  <url>\n`;
  xml += `    <loc>${BASE_URL}/blog</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;

  for (const article of articles) {
    const lastmod = article.date || today;
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blog/${article.slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>yearly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  return xml.trimEnd();
}

function generateLlmsBlock(articles) {
  let md = '';
  md += `## Blog & Technical Articles\n`;
  md += `Jorge writes technical articles about full stack development, performance optimization, embedded systems, and AI.\n\n`;
  md += `Blog URL: ${BASE_URL}/blog\n\n`;
  md += `### Recent Articles\n`;

  for (const article of articles) {
    const title = article.title || article.titlePt || 'Untitled';
    const excerpt = article.excerpt || article.excerptPt || '';
    md += `- [${title}](${BASE_URL}/blog/${article.slug}) - ${excerpt}\n`;
  }

  return md.trimEnd();
}

function updateLastUpdated(content) {
  // Update "Last Updated: YYYY-MM-DD" or "> Last Updated: YYYY-MM-DD"
  const today = new Date().toISOString().split('T')[0];
  return content.replace(
    /Last Updated:\s*\d{4}-\d{2}-\d{2}/,
    `Last Updated: ${today}`,
  );
}

async function main() {
  console.log('Fetching published articles from Firestore...');
  const articles = await fetchPublishedArticles();
  console.log(`Found ${articles.length} published article(s).`);

  const publicDir = path.resolve(__dirname, '..', 'public');
  const START = '<!-- BLOG_START -->';
  const END = '<!-- BLOG_END -->';

  // --- Sitemap ---
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  sitemap = injectBetweenMarkers(sitemap, START, END, generateSitemapBlock(articles));
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✓ ${sitemapPath}`);

  // --- llms.txt (both copies) ---
  const llmsPaths = [
    path.join(publicDir, 'llms.txt'),
    path.join(publicDir, '.well-known', 'llms.txt'),
  ];

  for (const llmsPath of llmsPaths) {
    let llms = fs.readFileSync(llmsPath, 'utf-8');
    llms = injectBetweenMarkers(llms, START, END, generateLlmsBlock(articles));
    llms = updateLastUpdated(llms);
    fs.writeFileSync(llmsPath, llms, 'utf-8');
    console.log(`✓ ${llmsPath}`);
  }

  console.log('Done.');
  process.exit(0);
}

main().catch((err) => {
  console.error('generate-seo failed:', err);
  process.exit(1);
});
