#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOTS = [
  path.resolve(__dirname, '../src/assets'),
  path.resolve(__dirname, '../src/assets/imgs-bck'),
  path.resolve(__dirname, '../src/data/projects/images'),
  path.resolve(__dirname, '../public')
];

const MAX_WIDTH = 1600;
const MIN_SIZE_BYTES = 250 * 1024;

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png']);

function listImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listImages(fullPath));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (!IMAGE_EXTS.has(ext)) continue;
      if (entry.name.startsWith('avatar.')) continue;
      if (entry.name.endsWith('.min.jpg') || entry.name.endsWith('.min.png')) continue;
      const stat = fs.statSync(fullPath);
      if (stat.size >= MIN_SIZE_BYTES) {
        results.push({ path: fullPath, size: stat.size });
      }
    }
  }
  return results;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const input = sharp(filePath);
  const metadata = await input.metadata();

  const width = metadata.width || MAX_WIDTH;
  const resizeWidth = Math.min(width, MAX_WIDTH);

  let pipeline = input.resize({ width: resizeWidth, withoutEnlargement: true });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  const originalSize = fs.statSync(filePath).size;
  if (buffer.length >= originalSize) {
    return { path: filePath, originalSize, newSize: originalSize, skipped: true };
  }

  fs.writeFileSync(filePath, buffer);
  return { path: filePath, originalSize, newSize: buffer.length, skipped: false };
}

async function run() {
  const images = ROOTS.flatMap(listImages);
  if (images.length === 0) {
    console.log('No images above size threshold.');
    return;
  }

  console.log(`Found ${images.length} images >= ${Math.round(MIN_SIZE_BYTES / 1024)}KB.`);
  let savedBytes = 0;
  let processed = 0;
  let skipped = 0;

  for (const img of images) {
    const result = await optimizeImage(img.path);
    processed += 1;
    if (result.skipped) {
      skipped += 1;
      continue;
    }
    savedBytes += (result.originalSize - result.newSize);
  }

  console.log(`Processed: ${processed}`);
  console.log(`Skipped (no gain): ${skipped}`);
  console.log(`Saved: ${(savedBytes / (1024 * 1024)).toFixed(2)} MB`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
