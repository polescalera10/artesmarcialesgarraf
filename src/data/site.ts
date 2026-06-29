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
  instructors: [
    {
      name: 'Marcos Vidal',
      role: 'Director Técnico · Cinturón Negro 3º Dan Karate',
      bio: 'Más de 20 años de experiencia en artes marciales. Especializado en karate, defensa personal y preparación física.',
    },
    {
      name: 'Laura Ferrer',
      role: 'Instructora Principal · Cinta Morada BJJ',
      bio: 'Campeona regional de BJJ y especialista en defensa personal femenina. Formada en Brasil con la familia Gracie.',
    },
    {
      name: 'Iván Rubio',
      role: 'Instructor · Exboxeador profesional',
      bio: '15 años de boxeo profesional, incluidos combates en el circuito europeo. Especialista en boxeo técnico y fitness.',
    },
    {
      name: 'Sara Montoya',
      role: 'Instructora Infantil · Cinturón Negro Taekwondo',
      bio: 'Pedagoga y cinturón negro de taekwondo. Responsable de todas las clases infantiles y juveniles.',
    },
  ],
  testimonials: [
    {
      name: 'Marta G.',
      location: 'Sitges',
      text: 'Llevo dos años yendo al centro y ha cambiado mi vida. Los instructores son increíbles y el ambiente es muy familiar.',
      stars: 5,
    },
    {
      name: 'Jordi P.',
      location: 'Vilanova i la Geltrú',
      text: 'Mi hijo empezó con karate a los 6 años y ahora tiene cinturón naranja. Está mucho más seguro de sí mismo.',
      stars: 5,
    },
    {
      name: 'Anna R.',
      location: 'Sant Pere de Ribes',
      text: 'Vine buscando defensa personal y me quedé por el boxeo. El nivel de los instructores es altísimo.',
      stars: 5,
    },
    {
      name: 'Carlos M.',
      location: 'Vilanova',
      text: 'Empecé desde cero con el MMA. En seis meses he ganado confianza y forma física que no tenía desde los 20 años.',
      stars: 5,
    },
    {
      name: 'Elena T.',
      location: 'Sitges',
      text: 'Las clases de muay thai son brutales en el buen sentido. Nunca pensé que a los 40 estaría en esta forma.',
      stars: 5,
    },
    {
      name: 'Raúl F.',
      location: 'Cubelles',
      text: 'El BJJ es mi obsesión. El profesor sabe perfectamente cómo adaptar cada clase a tu nivel. Totalmente recomendable.',
      stars: 5,
    },
  ],
  prices: [
    { plan: 'Clase de Prueba', price: 'Gratis', desc: 'Primera clase sin compromiso' },
    { plan: '1 disciplina', price: '55€/mes', desc: 'Clases ilimitadas en una disciplina' },
    { plan: '2 disciplinas', price: '80€/mes', desc: 'Acceso a dos disciplinas' },
    { plan: 'Pack completo', price: '100€/mes', desc: 'Todas las disciplinas sin límite' },
    { plan: 'Infantil', price: '45€/mes', desc: 'Para niños de 4 a 15 años' },
  ],
};
