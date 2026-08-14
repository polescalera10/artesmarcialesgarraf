// Genera public/logo.png (512x512), el logo que declara el schema Organization.
// Google pide una imagen rasterizada para el logo de la entidad; el favicon SVG
// no sirve para eso. Mismo monograma y misma paleta que la cabecera del sitio.
//
// Uso: node scripts/gen-logo.mjs
import sharp from 'sharp';

const svg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A0A0A"/>
      <stop offset="1" stop-color="#181010"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)" rx="96"/>
  <rect x="16" y="16" width="480" height="480" fill="none" stroke="#1F1F1F" stroke-width="3" rx="82"/>
  <text x="256" y="300" text-anchor="middle"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="184" font-weight="900"
        fill="#DC2626" letter-spacing="-6">AM</text>
  <rect x="196" y="348" width="120" height="14" fill="#DC2626" rx="7"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/logo.png');
const meta = await sharp('public/logo.png').metadata();
console.log('OK', meta.width, 'x', meta.height);
