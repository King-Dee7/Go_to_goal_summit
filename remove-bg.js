const sharp = require('sharp');
const path = require('path');

async function removeBg() {
  const inputPath = path.join(__dirname, 'public', 'reinvent logo-Recovered (1).png');
  const outputPath = path.join(__dirname, 'public', 'reinvent-logo.png');

  // Read the image and get raw pixel data
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  
  // Process each pixel - make white/near-white pixels transparent
  const threshold = 240; // pixels with R, G, B all above this are considered "white"
  
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    if (r >= threshold && g >= threshold && b >= threshold) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  // Also trim the whitespace around the logo
  await sharp(data, { raw: { width, height, channels } })
    .png()
    .trim()
    .toFile(outputPath);

  console.log('Background removed and image trimmed! Saved to public/reinvent-logo.png');
}

removeBg().catch(console.error);
