#!/usr/bin/env node
/**
 * Image Optimization Script for Project Case Studies
 * Converts large PNG/JPG to optimized WebP and JPG
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️  PROJECT IMAGE OPTIMIZER\n');

const projectImagesDir = 'src/data/projects/images';

// Check if imagemagick or sharp is available
function checkDependencies() {
  try {
    execSync('which convert', { stdio: 'ignore' });
    return 'imagemagick';
  } catch {
    console.log('⚠️  ImageMagick not found');
    console.log('📦 Install with: brew install imagemagick');
    console.log('');
    return null;
  }
}

// Get all images
function getAllImages(dir) {
  const images = [];
  const extensions = ['.png', '.jpg', '.jpeg'];

  function scan(directory) {
    const items = fs.readdirSync(directory);

    items.forEach(item => {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          const size = stat.size;
          // Only process images > 200 KB
          if (size > 200 * 1024) {
            images.push({
              path: fullPath,
              size: size,
              sizeFormatted: (size / (1024 * 1024)).toFixed(2) + ' MB'
            });
          }
        }
      }
    });
  }

  scan(dir);
  return images.sort((a, b) => b.size - a.size);
}

// Optimize single image
function optimizeImage(imagePath) {
  const ext = path.extname(imagePath);
  const basePath = imagePath.replace(ext, '');

  try {
    // Convert to optimized JPG (80% quality)
    const jpgPath = basePath + '.jpg';
    if (!jpgPath.includes('.jpg.jpg')) { // Avoid double extension
      execSync(`convert "${imagePath}" -quality 80 -strip "${jpgPath}"`, {
        stdio: 'ignore'
      });

      // Get new size
      const originalSize = fs.statSync(imagePath).size;
      const newSize = fs.statSync(jpgPath).size;
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(0);

      console.log(`  ✅ ${path.basename(imagePath)} → ${path.basename(jpgPath)}`);
      console.log(`     ${(originalSize / (1024 * 1024)).toFixed(2)} MB → ${(newSize / (1024 * 1024)).toFixed(2)} MB (${reduction}% smaller)`);

      return {
        original: imagePath,
        optimized: jpgPath,
        originalSize,
        newSize,
        reduction: parseInt(reduction)
      };
    }
  } catch (error) {
    console.log(`  ❌ Failed: ${path.basename(imagePath)}`);
    return null;
  }
}

// Main
const tool = checkDependencies();

if (!tool) {
  console.log('\n❌ Cannot proceed without ImageMagick');
  console.log('\n🔧 INSTALL INSTRUCTIONS:\n');
  console.log('macOS:');
  console.log('  brew install imagemagick\n');
  console.log('Ubuntu/Debian:');
  console.log('  sudo apt-get install imagemagick\n');
  console.log('Then run this script again.\n');
  process.exit(1);
}

console.log(`✅ Using: ${tool}\n`);

const images = getAllImages(projectImagesDir);

console.log(`📊 Found ${images.length} large images (> 200 KB)\n`);

if (images.length === 0) {
  console.log('✅ No images to optimize!');
  process.exit(0);
}

// Show top 10 largest
console.log('🔝 TOP 10 LARGEST IMAGES:\n');
images.slice(0, 10).forEach((img, i) => {
  console.log(`  ${i + 1}. ${path.relative(projectImagesDir, img.path)} - ${img.sizeFormatted}`);
});
console.log('');

// Ask for confirmation
console.log('⚠️  This will create optimized JPG versions of all large images.');
console.log('💡 Original PNG files will be KEPT for safety.\n');
console.log('Press Ctrl+C to cancel, or Enter to continue...');

// Wait for user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', () => {
  rl.close();

  console.log('\n🚀 OPTIMIZING IMAGES...\n');

  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  images.forEach(img => {
    const result = optimizeImage(img.path);
    if (result) {
      results.push(result);
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  });

  console.log('\n\n📊 RESULTS:\n');
  console.log(`  Images processed: ${results.length}`);
  console.log(`  Original total: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`  Optimized total: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`  Saved: ${(totalOriginal - totalNew) / (1024 * 1024)).toFixed(2)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(0)}%)`);

  console.log('\n\n📝 NEXT STEPS:\n');
  console.log('1. Update your JSON files to use .jpg instead of .png');
  console.log('   Example: "homepage.png" → "homepage.jpg"\n');
  console.log('2. Test the website:');
  console.log('   npm run serve\n');
  console.log('3. If everything looks good, you can delete the old PNG files:');
  console.log('   (But keep a backup first!)\n');

  console.log('✅ Optimization complete!\n');
});
