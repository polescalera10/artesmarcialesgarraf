import { ALL_PAGES } from '../data/pages';

const SITE = 'https://artesmarcialesgarraf.es';

const staticPages = [
  { slug: '', priority: '1.0', changefreq: 'weekly' },
  { slug: 'centros', priority: '0.9', changefreq: 'weekly' },
  { slug: 'blog', priority: '0.7', changefreq: 'monthly' },
  { slug: 'contacto', priority: '0.9', changefreq: 'monthly' },
  { slug: 'sobre-nosotros', priority: '0.8', changefreq: 'monthly' },
];

const now = new Date().toISOString().split('T')[0];

function getPriority(type: string): string {
  if (type === 'money-page') return '0.9';
  if (type === 'hub-municipio') return '0.85';
  if (type === 'hub-disciplina') return '0.8';
  if (type === 'hub-perfil') return '0.75';
  if (type === 'cerca-de') return '0.7';
  if (type === 'blog') return '0.65';
  return '0.5';
}

export async function GET() {
  const dynamicUrls = ALL_PAGES.map(p => ({
    url: `${SITE}/${p.slug}/`,
    priority: getPriority(p.type),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(p => `  <url>
    <loc>${SITE}/${p.slug ? p.slug + '/' : ''}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
${dynamicUrls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
