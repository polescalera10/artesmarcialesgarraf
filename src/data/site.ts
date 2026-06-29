export const SITE = {
  name: 'Academia de Artes Marciales Garraf',
  shortName: 'AM Garraf',
  domain: 'artesmarcialesgarraf.es',
  url: 'https://artesmarcialesgarraf.es',
  phone: '+34 938 000 000',
  whatsapp: '34938000000',
  email: 'contacto@artesmarcialesgarraf.es',
  address: {
    street: 'Avinguda de Ribes, 12',
    city: 'Vilanova i la Geltrú',
    province: 'Barcelona',
    zip: '08800',
    country: 'España',
    region: 'Comarca del Garraf',
  },
  hours: [
    { day: 'Lunes – Viernes', time: '07:00 – 22:00' },
    { day: 'Sábados', time: '09:00 – 14:00' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
  social: {
    instagram: 'https://instagram.com/artesmarcialesgarraf',
    facebook: 'https://facebook.com/artesmarcialesgarraf',
  },
  defaultMeta: {
    description:
      'Academia de Artes Marciales en el Garraf. Clases de boxeo, karate, MMA, muay thai, BJJ, judo, taekwondo y defensa personal en Sitges, Vilanova i la Geltrú y toda la comarca.',
  },
  // TODO: reemplazar con datos reales del gimnasio cliente antes de publicar
  // phone, email, address y hours son placeholders - NO mostrar como datos reales en producción
  prices: [
    { plan: 'Clase de Prueba', price: 'Gratis', desc: 'Primera clase sin compromiso' },
    { plan: '1 disciplina', price: '55€/mes', desc: 'Clases ilimitadas en una disciplina' },
    { plan: '2 disciplinas', price: '80€/mes', desc: 'Acceso a dos disciplinas' },
    { plan: 'Pack completo', price: '100€/mes', desc: 'Todas las disciplinas sin límite' },
    { plan: 'Infantil', price: '45€/mes', desc: 'Para niños de 4 a 15 años' },
  ],
};
