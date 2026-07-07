import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A0A0A"/>
      <stop offset="1" stop-color="#181010"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#DC2626" stop-opacity="0.28"/>
      <stop offset="0.6" stop-color="#DC2626" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <!-- marco sutil -->
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#1F1F1F" stroke-width="2" rx="16"/>
  <!-- barra de acento -->
  <rect x="96" y="196" width="88" height="10" fill="#DC2626" rx="5"/>
  <!-- monograma -->
  <text x="96" y="150" font-family="Inter, Helvetica, Arial, sans-serif" font-size="56" font-weight="900" fill="#DC2626" letter-spacing="-1">AM</text>
  <!-- titulo -->
  <text x="92" y="330" font-family="Inter, Helvetica, Arial, sans-serif" font-size="96" font-weight="900" fill="#FFFFFF" letter-spacing="-3">Artes Marciales</text>
  <text x="92" y="440" font-family="Inter, Helvetica, Arial, sans-serif" font-size="96" font-weight="900" fill="#DC2626" letter-spacing="-3">en el Garraf</text>
  <!-- subtitulo -->
  <text x="96" y="520" font-family="Inter, Helvetica, Arial, sans-serif" font-size="34" font-weight="500" fill="#9CA3AF">La guía para empezar a entrenar en la comarca</text>
  <!-- footer -->
  <text x="96" y="574" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" fill="#6B7280">artesmarcialesgarraf.es</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-default.png');
const meta = await sharp('public/og-default.png').metadata();
console.log('OK', meta.width, 'x', meta.height);
