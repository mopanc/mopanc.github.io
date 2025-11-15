#!/usr/bin/env node
/**
 * Image Analysis Script
 * Finds all images referenced in code and compares with actual files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 ANALYZING IMAGES IN PROJECT...\n');

// Get all image references from code
function getImageReferences() {
  try {
    const grepCommand = `grep -roh "require.*assets/img[^)]*\\|require.*data/projects/images[^)]*" src/ --include="*.vue" --include="*.js" 2>/dev/null || true`;
    const output = execSync(grepCommand, { encoding: 'utf-8' });

    const references = output
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        // Extract path from require()
        const match = line.match(/require\(['"]([^'"]+)['"]\)/);
        if (match) {
          let imagePath = match[1];
          // Remove @ alias
          imagePath = imagePath.replace(/^@\//, 'src/');
          // Handle ../ relative paths
          imagePath = imagePath.replace(/^\.\.\//, 'src/');
          return imagePath;
        }
        return null;
      })
      .filter(Boolean);

    return [...new Set(references)]; // Remove duplicates
  } catch (error) {
    console.error('Error getting image references:', error.message);
    return [];
  }
}

// Get all image files in directories
function getImageFiles(dir) {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'];
  const files = [];

  function scanDir(directory) {
    try {
      const items = fs.readdirSync(directory);

      items.forEach(item => {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          if (imageExtensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      });
    } catch (error) {
      // Ignore errors
    }
  }

  scanDir(dir);
  return files;
}

// Get file size
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const bytes = stats.size;

    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  } catch {
    return 'Unknown';
  }
}

// Main analysis
const references = getImageReferences();

console.log(`✅ Found ${references.length} unique image references in code\n`);

// Get images from each folder
const folders = {
  'src/assets/img': getImageFiles('src/assets/img'),
  'src/assets/img-backup': getImageFiles('src/assets/img-backup'),
  'src/assets/img-optimized': getImageFiles('src/assets/img-optimized'),
  'src/data/projects/images': getImageFiles('src/data/projects/images')
};

console.log('📊 IMAGES PER FOLDER:\n');
Object.entries(folders).forEach(([folder, files]) => {
  console.log(`${folder}: ${files.length} images`);
});
console.log('');

// Check which images are used
console.log('🔍 CHECKING USAGE...\n');

const usedImages = new Set();
const unusedImages = [];

Object.entries(folders).forEach(([folder, files]) => {
  console.log(`\n📁 ${folder}:`);

  files.forEach(file => {
    const relativePath = file;
    const isUsed = references.some(ref =>
      ref.includes(path.basename(file)) ||
      file.includes(ref) ||
      ref.includes(file.replace('src/', ''))
    );

    if (isUsed) {
      usedImages.add(file);
      console.log(`  ✅ ${path.basename(file)} - USED`);
    } else {
      unusedImages.push(file);
    }
  });
});

// Report unused images
console.log('\n\n❌ UNUSED IMAGES (POTENTIALLY SAFE TO DELETE):\n');

if (unusedImages.length === 0) {
  console.log('  None! All images are being used.');
} else {
  let totalSize = 0;

  unusedImages.forEach(file => {
    const size = getFileSize(file);
    console.log(`  ${file} (${size})`);

    try {
      const stats = fs.statSync(file);
      totalSize += stats.size;
    } catch {}
  });

  console.log(`\n  Total unused: ${unusedImages.length} images`);
  console.log(`  Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
}

// Recommendations
console.log('\n\n💡 RECOMMENDATIONS:\n');

if (folders['src/assets/img-backup'].length > 0) {
  console.log('  1. ⚠️  img-backup folder has images - verify if needed, then delete');
}

if (folders['src/assets/img-optimized'].length > folders['src/assets/img'].length) {
  console.log('  2. 💡 img-optimized has MORE images than img - consider using optimized versions');
}

if (unusedImages.length > 10) {
  console.log(`  3. 🗑️  You have ${unusedImages.length} unused images - safe to delete`);
}

console.log('\n✅ Analysis complete!\n');

// Generate cleanup script
const cleanupScript = `#!/bin/bash
# AUTO-GENERATED CLEANUP SCRIPT
# Review before running!

echo "⚠️  This will delete ${unusedImages.length} unused images"
echo "Press Ctrl+C to cancel, Enter to continue..."
read

${unusedImages.map(file => `rm "${file}"`).join('\n')}

echo "✅ Cleanup complete!"
`;

fs.writeFileSync('cleanup-unused-images.sh', cleanupScript);
fs.chmodSync('cleanup-unused-images.sh', '755');

console.log('📝 Generated cleanup script: cleanup-unused-images.sh');
console.log('   Review it before running: cat cleanup-unused-images.sh');
console.log('   To execute: ./cleanup-unused-images.sh\n');
