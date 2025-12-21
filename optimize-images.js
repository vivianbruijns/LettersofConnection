const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(assetsDir).filter(file => file.endsWith('.PNG') || file.endsWith('.png'));

console.log('Optimizing images...\n');

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`Processing ${file} (${originalSize} MB)...`);

    try {
      await sharp(inputPath)
        .png({
          quality: 80,
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true
        })
        .toFile(inputPath + '.tmp');

      fs.renameSync(inputPath + '.tmp', inputPath);

      const newStats = fs.statSync(inputPath);
      const newSize = (newStats.size / (1024 * 1024)).toFixed(2);
      const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file}: ${originalSize} MB → ${newSize} MB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
