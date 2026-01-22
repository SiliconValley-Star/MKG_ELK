#!/usr/bin/env node

/**
 * Image WebP Conversion Script
 * Converts all JPG/PNG images to WebP format with 85% quality
 * Keeps original files as backup
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const QUALITY = 85;
const IMAGE_DIRS = [
  'public/images/blog',
  'public/images/corporate',
  'public/images/projects',
  'public/images/services',
  'public/images/team'
];

console.log('🖼️  Starting WebP conversion...\n');

let totalConverted = 0;
let totalSizeBefore = 0;
let totalSizeAfter = 0;

IMAGE_DIRS.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  console.log(`📁 Processing: ${dir}`);
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  imageFiles.forEach(file => {
    const inputPath = path.join(dirPath, file);
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`  ⏭️  Skipping ${file} (WebP exists)`);
      return;
    }
    
    try {
      // Get original file size
      const statsBefore = fs.statSync(inputPath);
      totalSizeBefore += statsBefore.size;
      
      // Convert using @squoosh/cli
      execSync(
        `npx @squoosh/cli --webp '{"quality":${QUALITY}}' -d "${dirPath}" "${inputPath}"`,
        { stdio: 'pipe' }
      );
      
      // Get WebP file size
      if (fs.existsSync(outputPath)) {
        const statsAfter = fs.statSync(outputPath);
        totalSizeAfter += statsAfter.size;
        
        const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);
        console.log(`  ✅ ${file} → ${path.basename(outputPath)} (${reduction}% smaller)`);
        totalConverted++;
      }
    } catch (error) {
      console.log(`  ❌ Failed: ${file}`);
      console.error(error.message);
    }
  });
  
  console.log('');
});

// Summary
console.log('═'.repeat(50));
console.log('📊 CONVERSION SUMMARY');
console.log('═'.repeat(50));
console.log(`Total files converted: ${totalConverted}`);
console.log(`Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total reduction: ${((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1)}%`);
console.log(`Space saved: ${((totalSizeBefore - totalSizeAfter) / 1024 / 1024).toFixed(2)} MB`);
console.log('═'.repeat(50));
console.log('\n✨ Done! Original files are kept as backup.');
console.log('💡 Tip: Test the site, then delete originals to save space.\n');