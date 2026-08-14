// Marca neutra honesta: Artes Marciales Garraf es una guía/portal independiente
// de artes marciales de la comarca del Garraf. NO es un gimnasio ni una academia.
// Regla innegociable: cero datos de negocio inventados (reseñas, direcciones,
// teléfonos, precios, instructores). Cuando haya un centro cliente real, su
// identidad verificada sustituirá a la marca neutra.
export const SITE = {
  name: 'Artes Marciales Garraf',
  shortName: 'AM Garraf',
  tagline: 'La guía de artes marciales de la comarca del Garraf',
  domain: 'artesmarcialesgarraf.es',
  url: 'https://artesmarcialesgarraf.es',
  // TODO: activar el buzón de este email en el dominio
  email: 'contacto@artesmarcialesgarraf.es',
  // Interruptor del canal de contacto (2026-08-14). Mientras el buzón no esté
  // activo, la web no ofrece ninguna vía de contacto que no funcione: /contacto/
  // muestra un aviso honesto y desaparecen los enlaces de email de las zonas
  // comerciales. Las páginas legales sí conservan la dirección, porque la
  // LSSI-CE exige publicar un canal de contacto y esa es la dirección designada.
  //
  // PARA REACTIVAR: poner esto en true y tener PUBLIC_FORMSPREE_ID definida en
  // Vercel. No hace falta tocar nada más — el copy del sitio sigue intacto.
  contactoActivo: false,
  region: {
    comarca: 'Comarca del Garraf',
    province: 'Barcelona',
    country: 'España',
  },
  // Analítica. El ID de medición de GA4 es público por diseño (aparece en el
  // código fuente de cualquier página), así que va aquí y no en una variable de
  // entorno: una cosa menos que configurar en Vercel.
  //
  // IMPORTANTE: GA4 usa cookies y transfiere datos a Google, así que en España
  // requiere consentimiento previo (AEPD). El script NO se carga hasta que el
  // visitante acepta en el banner (src/components/CookieConsent.astro). Si algún
  // día se quita el banner, hay que quitar también esta línea.
  analytics: {
    gaId: 'G-B9YBBT41MM',
  },
  // Fecha de la última revisión editorial del contenido. Es la que se publica
  // como <lastmod> en el sitemap de todo lo que no es blog (los artículos usan
  // su propia fecha). Antes se emitía la fecha del build, lo que le decía a
  // Google que las 66 páginas cambiaban cada vez que se desplegaba un botón:
  // una señal falsa que los rastreadores acaban ignorando.
  //
  // ACTUALIZAR solo cuando se revise o reescriba contenido de verdad.
  ultimaRevision: '2026-08-14',
  defaultMeta: {
    description:
      'Guía de artes marciales en la comarca del Garraf: boxeo, karate, MMA, muay thai, BJJ, judo, taekwondo y defensa personal en Sitges, Vilanova i la Geltrú, Sant Pere de Ribes, Cubelles y Canyelles.',
  },
};

// ────────────────────────────────────────────────────────────────────────────
// Entidades base del grafo de datos estructurados.
//
// Se declaran una sola vez con @id estable, y el resto de páginas las
// referencian con {"@id": ...} en lugar de repetir el objeto entero. Así Google
// entiende que todas las páginas pertenecen al mismo sitio y al mismo editor,
// en vez de ver decenas de entidades sueltas sin relación.
//
// Regla del proyecto: Organization describe a la GUÍA como editor, nunca como
// gimnasio. Nada de LocalBusiness, dirección, teléfono ni valoraciones.
// ────────────────────────────────────────────────────────────────────────────
export const SCHEMA_IDS = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
} as const;

export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': SCHEMA_IDS.organization,
  name: SITE.name,
  url: `${SITE.url}/`,
  description:
    'Guía editorial independiente sobre artes marciales en la comarca del Garraf (Barcelona). No es un gimnasio ni una academia.',
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/logo.png`,
    width: 512,
    height: 512,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Comarca del Garraf',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Barcelona, España' },
  },
};

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': SCHEMA_IDS.website,
  name: SITE.name,
  alternateName: SITE.tagline,
  url: `${SITE.url}/`,
  inLanguage: 'es',
  publisher: { '@id': SCHEMA_IDS.organization },
  about: {
    '@type': 'Thing',
    name: 'Artes marciales en la comarca del Garraf (Barcelona)',
  },
};
