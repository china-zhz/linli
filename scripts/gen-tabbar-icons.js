/**
 * 从 Iconify/Remix Icon 生成 tabBar 图标 PNG
 * 原型使用的图标: ri:home-8, ri:questionnaire, ri:heart-3, ri:shopping-bag-3, ri:user-3
 */
const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT_DIR = path.join(__dirname, '../static/tabbar');
const ICONS = [
  { name: 'home', line: 'home-8-line', fill: 'home-8-fill' },
  { name: 'qa', line: 'questionnaire-line', fill: 'questionnaire-fill' },
  { name: 'help', line: 'heart-3-line', fill: 'heart-3-fill' },
  { name: 'market', line: 'shopping-bag-3-line', fill: 'shopping-bag-3-fill' },
  { name: 'profile', line: 'user-3-line', fill: 'user-3-fill' }
];

function fetchSvg(iconName) {
  return new Promise((resolve, reject) => {
    const url = `https://api.iconify.design/ri/${iconName}.svg?height=81&color=%23999999`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchSvgGreen(iconName) {
  return new Promise((resolve, reject) => {
    const url = `https://api.iconify.design/ri/${iconName}.svg?height=81&color=%2307C160`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const icon of ICONS) {
    try {
      const svgGray = await fetchSvg(icon.line);
      const svgGreen = await fetchSvgGreen(icon.fill);
      const grayBuffer = await sharp(Buffer.from(svgGray)).png().toBuffer();
      const greenBuffer = await sharp(Buffer.from(svgGreen)).png().toBuffer();
      fs.writeFileSync(path.join(OUT_DIR, `${icon.name}.png`), grayBuffer);
      fs.writeFileSync(path.join(OUT_DIR, `${icon.name}-active.png`), greenBuffer);
      console.log(`OK: ${icon.name}`);
    } catch (e) {
      console.error(`FAIL ${icon.name}:`, e.message);
    }
  }
}

main();
