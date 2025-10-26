#!/usr/bin/env node
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

async function optimize(inputPath, outputPath) {
  const dir = path.dirname(outputPath);
  await mkdir(dir, { recursive: true });
  const img = sharp(inputPath);
  const meta = await img.metadata();
  const targetWidth = Math.min(800, meta.width || 800);
  const pipeline = img.resize({ width: targetWidth }).withMetadata();

  // Save optimized JPEG (quality tuned for portraits)
  const jpegBuffer = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  await writeFile(outputPath, jpegBuffer);

  // Optionally also emit WebP alongside (not used directly by next/image, but kept if needed)
  const webpOut = outputPath.replace(/\.jpe?g$/i, '.webp');
  const webpBuffer = await pipeline.webp({ quality: 78 }).toBuffer();
  await writeFile(webpOut, webpBuffer);

  console.log(`Optimized: ${inputPath} -> ${outputPath}`);
}

const input = process.argv[2] || 'public/images/team/chris-athaide.jpg';
const output = process.argv[3] || 'public/images/team/chris-athaide.jpg';
optimize(path.resolve(input), path.resolve(output)).catch((err) => {
  console.error(err);
  process.exit(1);
});




