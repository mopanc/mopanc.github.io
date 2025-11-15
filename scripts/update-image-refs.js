#!/usr/bin/env node

/**
 * Update Image References Script
 *
 * Updates all Vue components to use optimized WebP images with JPG fallback
 * Converts: <imgs-bck src="image.png" alt="...">
 * To:       <picture>
 *             <source srcset="image.webp" type="image/webp">
 *             <imgs-bck src="image.jpg" alt="...">
 *           </picture>
 *
 * Usage: node scripts/update-image-refs.js
 */

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// Configuration
const CONFIG = {
  componentsDir: 'src',
  fileExtensions: ['.vue', '.js'],
  dryRun: false, // Set to true to preview changes without writing
  createBackup: true
};

// Statistics
const stats = {
  filesScanned: 0,
  filesModified: 0,
  imagesUpdated: 0
};

/**
 * Extract image imports and src attributes from file content
 */
function findImageReferences(content) {
  const references = [];

  // Find imgs-bck tags: <imgs-bck src="..." alt="...">
  const imgTagRegex = /<img\s+[^>]*src=["']([^"']+\.(png|jpg|jpeg))["'][^>]*>/gi;
  let match;

  while ((match = imgTagRegex.exec(content)) !== null) {
    references.push({
      type: 'imgs-bck-tag',
      original: match[0],
      src: match[1],
      extension: match[2]
    });
  }

  // Find import statements: import image from '../assets/imgs-bck/...'
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(png|jpg|jpeg))['"]/gi;
  while ((match = importRegex.exec(content)) !== null) {
    references.push({
      type: 'import',
      original: match[0],
      varName: match[1],
      src: match[2],
      extension: match[3]
    });
  }

  // Find dynamic src: :src="imagePath"
  const dynamicSrcRegex = /:src=["']([^"']+\.(png|jpg|jpeg))["']/gi;
  while ((match = dynamicSrcRegex.exec(content)) !== null) {
    references.push({
      type: 'dynamic-src',
      original: match[0],
      src: match[1],
      extension: match[2]
    });
  }

  return references;
}

/**
 * Convert imgs-bck tag to picture element with WebP and fallback
 */
function convertToPictureTag(imgTag, src) {
  // Extract attributes from original imgs-bck tag
  const altMatch = imgTag.match(/alt=["']([^"']*)["']/);
  const classMatch = imgTag.match(/class=["']([^"']*)["']/);
  const loadingMatch = imgTag.match(/loading=["']([^"']*)["']/);

  const alt = altMatch ? altMatch[1] : '';
  const className = classMatch ? classMatch[1] : '';
  const loading = loadingMatch ? loadingMatch[1] : 'lazy';

  // Convert path to optimized versions
  const basePath = src.replace(/\.(png|jpg|jpeg)$/i, '');
  const webpSrc = `${basePath}.webp`;
  const jpgSrc = `${basePath}.jpg`;

  // Build picture element
  const picture = `<picture>
      <source srcset="${webpSrc}" type="image/webp">
      <img src="${jpgSrc}" alt="${alt}"${className ? ` class="${className}"` : ''} loading="${loading}">
    </picture>`;

  return picture;
}

/**
 * Update import statements
 */
function updateImport(importStatement, varName, src) {
  const basePath = src.replace(/\.(png|jpg|jpeg)$/i, '');
  const webpSrc = `${basePath}.webp`;

  return `import ${varName} from '${webpSrc}'`;
}

/**
 * Process single file
 */
async function processFile(filePath) {
  stats.filesScanned++;

  let content = await fs.readFile(filePath, 'utf-8');
  const references = findImageReferences(content);

  if (references.length === 0) {
    return;
  }

  console.log(`\n📄 ${path.relative(process.cwd(), filePath)}`);
  console.log(`   Found ${references.length} image reference(s)`);

  let modified = false;
  let newContent = content;

  for (const ref of references) {
    if (ref.type === 'imgs-bck-tag') {
      const pictureTag = convertToPictureTag(ref.original, ref.src);
      newContent = newContent.replace(ref.original, pictureTag);
      console.log(`   ✅ Converted <img> to <picture> for: ${ref.src}`);
      modified = true;
      stats.imagesUpdated++;
    } else if (ref.type === 'import') {
      const newImport = updateImport(ref.original, ref.varName, ref.src);
      newContent = newContent.replace(ref.original, newImport);
      console.log(`   ✅ Updated import: ${ref.varName}`);
      modified = true;
      stats.imagesUpdated++;
    }
  }

  if (modified && !CONFIG.dryRun) {
    // Create backup
    if (CONFIG.createBackup) {
      await fs.copy(filePath, `${filePath}.backup`);
    }

    // Write updated content
    await fs.writeFile(filePath, newContent, 'utf-8');
    stats.filesModified++;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🔄 Update Image References Script');
  console.log('===================================\n');

  if (CONFIG.dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified\n');
  }

  // Find all Vue and JS files
  const patterns = CONFIG.fileExtensions.map(ext => `${CONFIG.componentsDir}/**/*${ext}`);
  const files = patterns.flatMap(pattern => glob.sync(pattern));

  console.log(`📊 Found ${files.length} files to scan\n`);

  // Process each file
  for (const file of files) {
    await processFile(file);
  }

  // Print summary
  console.log('\n\n===================================');
  console.log('📊 Update Summary');
  console.log('===================================');
  console.log(`Files scanned:    ${stats.filesScanned}`);
  console.log(`Files modified:   ${stats.filesModified}`);
  console.log(`Images updated:   ${stats.imagesUpdated}`);
  console.log('===================================\n');

  if (CONFIG.dryRun) {
    console.log('💡 To apply changes, set CONFIG.dryRun = false');
  } else {
    console.log('✨ Update complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Test the site: npm run serve');
    console.log('2. Check for broken images');
    console.log('3. If issues occur, restore from .backup files');
  }
}

// Run
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
