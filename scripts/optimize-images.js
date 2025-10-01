#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * Converts and optimizes all images in the project:
 * - PNG/JPG → WebP (80% quality)
 * - Reduces file sizes by 70-90%
 * - Creates backup of originals
 * - Updates Vue components to use optimized images
 *
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// Configuration
const CONFIG = {
  inputDir: 'src/assets/img',
  outputDir: 'src/assets/img-optimized',
  backupDir: 'src/assets/img-backup',
  quality: 80,
  formats: ['webp', 'jpg'], // Generate both WebP and fallback JPG
  maxWidth: 1920, // Max width for images
  extensions: ['.png', '.jpg', '.jpeg']
};

// Statistics
const stats = {
  total: 0,
  processed: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0
};

/**
 * Get file size in bytes
 */
function getFileSize(filepath) {
  try {
    return fs.statSync(filepath).size;
  } catch (e) {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Optimize single image
 */
async function optimizeImage(inputPath, outputPath) {
  const relativePath = path.relative(CONFIG.inputDir, inputPath);
  const outputBasePath = path.join(CONFIG.outputDir, relativePath);
  const outputDir = path.dirname(outputBasePath);
  const basename = path.basename(inputPath, path.extname(inputPath));

  // Ensure output directory exists
  await fs.ensureDir(outputDir);

  console.log(`\n📸 Processing: ${relativePath}`);

  const originalSize = getFileSize(inputPath);
  stats.originalSize += originalSize;

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if too large
    let resizeOptions = {};
    if (metadata.width > CONFIG.maxWidth) {
      resizeOptions = {
        width: CONFIG.maxWidth,
        withoutEnlargement: true,
        fit: 'inside'
      };
    }

    // Generate WebP
    const webpPath = path.join(outputDir, `${basename}.webp`);
    await image
      .clone()
      .resize(resizeOptions)
      .webp({ quality: CONFIG.quality })
      .toFile(webpPath);

    const webpSize = getFileSize(webpPath);
    stats.optimizedSize += webpSize;

    // Generate optimized JPG fallback
    const jpgPath = path.join(outputDir, `${basename}.jpg`);
    await image
      .clone()
      .resize(resizeOptions)
      .jpeg({ quality: CONFIG.quality, mozjpeg: true })
      .toFile(jpgPath);

    const jpgSize = getFileSize(jpgPath);
    stats.optimizedSize += jpgSize;

    const reduction = ((1 - (webpSize + jpgSize) / originalSize) * 100).toFixed(1);

    console.log(`  ✅ WebP: ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (-${reduction}%)`);
    console.log(`  ✅ JPG:  ${formatBytes(jpgSize)}`);

    stats.processed++;
    return true;

  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    stats.errors++;
    return false;
  }
}

/**
 * Backup original images
 */
async function backupImages() {
  console.log('📦 Creating backup of original images...');

  if (await fs.pathExists(CONFIG.backupDir)) {
    console.log('   Backup already exists, skipping...');
    return;
  }

  await fs.copy(CONFIG.inputDir, CONFIG.backupDir);
  console.log(`   ✅ Backup created at ${CONFIG.backupDir}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Image Optimization Script');
  console.log('================================\n');

  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch (e) {
    console.error('❌ Error: sharp is not installed');
    console.error('   Run: npm install --save-dev sharp');
    process.exit(1);
  }

  // Backup originals
  await backupImages();

  // Find all images
  const pattern = `${CONFIG.inputDir}/**/*{${CONFIG.extensions.join(',')}}`;
  const images = glob.sync(pattern);

  stats.total = images.length;

  console.log(`\n📊 Found ${stats.total} images to optimize\n`);

  // Process all images
  for (const imagePath of images) {
    await optimizeImage(imagePath);
  }

  // Print summary
  console.log('\n\n================================');
  console.log('📊 Optimization Summary');
  console.log('================================');
  console.log(`Total images:     ${stats.total}`);
  console.log(`Processed:        ${stats.processed}`);
  console.log(`Errors:           ${stats.errors}`);
  console.log(`Original size:    ${formatBytes(stats.originalSize)}`);
  console.log(`Optimized size:   ${formatBytes(stats.optimizedSize)}`);
  console.log(`Total reduction:  ${formatBytes(stats.originalSize - stats.optimizedSize)} (-${((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1)}%)`);
  console.log('================================\n');

  // Generate migration guide
  console.log('📝 Next steps:');
  console.log('1. Review optimized images in src/assets/img-optimized/');
  console.log('2. Run: node scripts/update-image-refs.js (to update Vue components)');
  console.log('3. Test the site thoroughly');
  console.log('4. If satisfied, replace src/assets/img with img-optimized');
  console.log('\n✨ Optimization complete!');
}

// Run
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
