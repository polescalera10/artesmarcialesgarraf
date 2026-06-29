import { DISCIPLINES, getDisciplineBySlug } from './disciplines';
import { LOCATIONS, getLocationBySlug } from './locations';

export type PageType =
  | 'home'
  | 'hub-municipio'
  | 'hub-disciplina'
  | 'hub-perfil'
  | 'money-page'
  | 'cerca-de'
  | 'blog'
  | 'static';

export interface PageDef {
  slug: string;
  type: PageType;
  municipio?: string;
  disciplina?: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  phase: 1 | 2 | 3 | 4;
}

function loc(slug: string) {
  return getLocationBySlug(slug)?.name ?? slug;
}
function disc(slug: string) {
  return getDisciplineBySlug(slug)?.nameEs ?? slug;
}

// ── Generates all money page slugs: [disciplina]-en-[municipio] ────────────
const MONEY_COMBOS: { disciplina: string; municipio: string; phase: 1|2|3|4 }[] = [
  // Sitges - P1
  { disciplina: 'boxeo',               municipio: 'sitges',                phase: 1 },
  { disciplina: 'karate',              municipio: 'sitges',                phase: 1 },
  { disciplina: 'mma',                 municipio: 'sitges',                phase: 1 },
  { disciplina: 'kickboxing',          municipio: 'sitges',                phase: 1 },
  { disciplina: 'muay-thai',           municipio: 'sitges',                phase: 1 },
  { disciplina: 'jiu-jitsu-brasileno', municipio: 'sitges',                phase: 1 },
  { disciplina: 'judo',                municipio: 'sitges',                phase: 1 },
  { disciplina: 'defensa-personal',    municipio: 'sitges',                phase: 1 },
  { disciplina: 'taekwondo',           municipio: 'sitges',                phase: 2 },
  { disciplina: 'krav-maga',           municipio: 'sitges',                phase: 3 },
  // Vilanova - P1
  { disciplina: 'boxeo',               municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'karate',              municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'mma',                 municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'kickboxing',          municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'muay-thai',           municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'jiu-jitsu-brasileno', municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'judo',                municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'defensa-personal',    municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'taekwondo',           municipio: 'vilanova-i-la-geltru',  phase: 1 },
  { disciplina: 'krav-maga',           municipio: 'vilanova-i-la-geltru',  phase: 2 },
  // Sant Pere de Ribes - P2
  { disciplina: 'karate',              municipio: 'sant-pere-de-ribes',    phase: 2 },
  { disciplina: 'defensa-personal',    municipio: 'sant-pere-de-ribes',    phase: 2 },
  { disciplina: 'muay-thai',           municipio: 'sant-pere-de-ribes',    phase: 2 },
  { disciplina: 'taekwondo',           municipio: 'sant-pere-de-ribes',    phase: 2 },
  { disciplina: 'boxeo',               municipio: 'sant-pere-de-ribes',    phase: 3 },
  // Cubelles - P3
  { disciplina: 'defensa-personal',    municipio: 'cubelles',              phase: 3 },
  { disciplina: 'taekwondo',           municipio: 'cubelles',              phase: 3 },
  { disciplina: 'boxeo',               municipio: 'cubelles',              phase: 4 },
];

// ── Special pages with custom slugs ──────────────────────────────────────────
const SPECIAL_PAGES: PageDef[] = [
  // Perfil pages - Sitges
  {
    slug: 'clases-infantiles-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    meta: {
      title: 'Artes Marciales para Niños en Sitges | Desde 4 Años',
      description: 'Clases de artes marciales infantiles en Sitges. Karate, judo y taekwondo para niños desde 4 años. Metodología adaptada por edades. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Niños en Sitges',
    intro: 'En la Academia de Artes Marciales Garraf ofrecemos clases infantiles en Sitges para niños y niñas desde los 4 años. Nuestro programa infantil combina karate, judo y taekwondo con metodología pedagógica específica para cada franja de edad. Los niños aprenden disciplina, respeto y coordinación en un entorno seguro y motivador, con instructores especializados en formación infantil.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    meta: {
      title: 'Artes Marciales para Mujeres en Sitges | Defensa Personal',
      description: 'Clases de artes marciales y defensa personal para mujeres en Sitges. Ambiente seguro, instructoras especializadas. Boxeo, BJJ y defensa personal femenina.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en Sitges',
    intro: 'Nuestro programa para mujeres en Sitges combina técnicas de defensa personal real con el aprendizaje de artes marciales en un entorno diseñado específicamente para ellas. Contamos con instructoras especializadas y grupos reducidos donde la confianza y el respeto son la base de cada clase. Muchas de nuestras alumnas llegan sin experiencia previa y en pocas semanas ganan una seguridad que va mucho más allá del tatami.',
    phase: 1,
  },
  {
    slug: 'defensa-personal-femenina-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    disciplina: 'defensa-personal',
    meta: {
      title: 'Defensa Personal Femenina en Sitges | Técnicas Reales',
      description: 'Clases de defensa personal para mujeres en Sitges. Técnicas efectivas y reales. Instructoras especializadas. Primera clase gratuita. Academia Garraf.',
    },
    h1: 'Defensa Personal para Mujeres en Sitges',
    intro: 'Las clases de defensa personal femenina en Sitges están diseñadas para dotarte de herramientas reales ante situaciones de riesgo. No enseñamos katas ni movimientos estéticos: enseñamos técnicas verificadas en situaciones reales, adaptadas a la complexión y la realidad cotidiana de la mujer. En pocas sesiones aprendes a protegerte con eficacia y, lo más importante, a confiar en tu propia capacidad de reacción.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    meta: {
      title: 'Artes Marciales para Adultos en Sitges | Todos los Niveles',
      description: 'Clases de artes marciales para adultos en Sitges. Empieza desde cero o retoma si tienes experiencia. Boxeo, karate, MMA, BJJ. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Adultos en Sitges',
    intro: 'Nunca es tarde para empezar artes marciales. En nuestra academia en Sitges tenemos adultos que empezaron con 20 años y otros que comenzaron con 55. Lo que importa es la actitud, no la edad. Ofrecemos grupos de adultos en todas las disciplinas, con instructores que saben cómo adaptar la intensidad y la técnica a cada persona. Si tienes experiencia previa, te integramos en el grupo adecuado a tu nivel.',
    phase: 1,
  },
  // Perfil pages - Vilanova
  {
    slug: 'clases-infantiles-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales Niños Vilanova i la Geltrú | Desde 4 Años',
      description: 'Clases infantiles de artes marciales en Vilanova. Karate, judo y taekwondo para niños desde 4 años. Instructores especializados. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Niños en Vilanova i la Geltrú',
    intro: 'Nuestra academia en Vilanova i la Geltrú tiene el programa infantil más completo de la comarca del Garraf. Ofrecemos clases de karate, judo, taekwondo y defensa personal adaptadas a niños desde los 4 años hasta los 15. Con grupos reducidos por franjas de edad, nuestros instructores especializados en pedagogía infantil garantizan un aprendizaje seguro, progresivo y divertido que refuerza la confianza y la disciplina del niño.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales para Mujeres en Vilanova | Defensa Personal',
      description: 'Clases de artes marciales y defensa personal para mujeres en Vilanova i la Geltrú. Grupos reducidos, ambiente seguro. Boxeo, BJJ, defensa personal femenina.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en Vilanova',
    intro: 'En nuestra sede de Vilanova i la Geltrú hemos creado un espacio donde las mujeres pueden practicar artes marciales y defensa personal sin barreras. Contamos con grupos exclusivos para mujeres en boxeo, kickboxing y defensa personal, impartidos por instructoras con formación específica. También tienes acceso a todos los grupos mixtos de la academia. El primer paso es tuyo: la primera clase es completamente gratuita y sin compromiso.',
    phase: 1,
  },
  {
    slug: 'defensa-personal-femenina-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    disciplina: 'defensa-personal',
    meta: {
      title: 'Defensa Personal Femenina en Vilanova i la Geltrú',
      description: 'Clases de defensa personal para mujeres en Vilanova. Técnicas reales, instructoras especializadas. Aprende a protegerte. Primera clase gratuita.',
    },
    h1: 'Defensa Personal para Mujeres en Vilanova i la Geltrú',
    intro: 'Nuestras clases de defensa personal femenina en Vilanova i la Geltrú son el programa más demandado de la academia. Enseñamos técnicas verificadas en situaciones reales: cómo reaccionar ante un agarre, cómo crear distancia, cómo usar el entorno. Sin mitos, sin movimientos imposibles. Solo lo que funciona cuando más importa. Las clases se imparten en grupos reducidos de máximo 8 personas para garantizar atención individualizada.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales para Adultos en Vilanova i la Geltrú',
      description: 'Artes marciales para adultos en Vilanova. Empieza desde cero o con experiencia. Boxeo, karate, MMA, BJJ, muay thai. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Adultos en Vilanova i la Geltrú',
    intro: 'La Academia de Artes Marciales Garraf en Vilanova i la Geltrú tiene el horario más amplio de la comarca, con clases de tarde y noche que se adaptan a la vida laboral del adulto. Ofrecemos todas las disciplinas en grupos de adultos organizados por nivel, desde iniciación absoluta hasta avanzado. No hace falta experiencia previa ni estar en forma para empezar: el entrenamiento te pone en forma mientras aprendes.',
    phase: 1,
  },
  // Karate infantil
  {
    slug: 'karate-infantil-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    disciplina: 'karate',
    meta: {
      title: 'Karate Infantil en Sitges | Clases Desde 4 Años',
      description: 'Karate para niños en Sitges desde los 4 años. Instructores especializados en enseñanza infantil. Grupos por edades. Primera clase gratis.',
    },
    h1: 'Karate Infantil en Sitges',
    intro: 'Las clases de karate infantil en Sitges son el programa estrella de nuestra academia. Formamos a niños desde los 4 años con una metodología progresiva que desarrolla coordinación, disciplina y autoconfianza en cada sesión. Los grupos están organizados por franjas de edad para garantizar que cada niño aprende a su ritmo, rodeado de compañeros en el mismo nivel. Nuestros instructores combinan experiencia marcial con formación pedagógica específica para la infancia.',
    phase: 1,
  },
  {
    slug: 'karate-infantil-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    disciplina: 'karate',
    meta: {
      title: 'Karate Infantil en Vilanova i la Geltrú | Desde 4 Años',
      description: 'Karate para niños en Vilanova. Clases desde los 4 años con instructores especializados. El programa infantil más completo del Garraf. Primera clase gratis.',
    },
    h1: 'Karate Infantil en Vilanova i la Geltrú',
    intro: 'El programa de karate infantil en nuestra sede de Vilanova i la Geltrú es el más consolidado de la comarca. Llevamos más de una década formando niños del Garraf con una metodología que prioriza el desarrollo personal por encima de la competición. Los niños aprenden a caer, a levantarse, a respetar y a superarse. Nuestros grupos van de los 4 a los 15 años, con instructores especializados en cada franja de edad.',
    phase: 1,
  },
  // Cerca de pages
  {
    slug: 'artes-marciales-cerca-de-sant-pere-de-ribes',
    type: 'cerca-de',
    municipio: 'sant-pere-de-ribes',
    meta: {
      title: 'Artes Marciales cerca de Sant Pere de Ribes | Garraf',
      description: 'Clases de artes marciales cerca de Sant Pere de Ribes. Academia Garraf en Sitges a menos de 10 min. Todas las disciplinas. Primera clase gratis.',
    },
    h1: 'Artes Marciales cerca de Sant Pere de Ribes',
    intro: 'Si buscas clases de artes marciales cerca de Sant Pere de Ribes, nuestra academia en Sitges es tu opción más cercana: menos de 10 minutos en coche. Ofrecemos todas las disciplinas con horarios de mañana, tarde y noche. Muchos de nuestros alumnos vienen desde Les Roquetes, Avinyonet y la Plana Novella. La primera clase es gratuita y sin compromiso.',
    phase: 2,
  },
  {
    slug: 'artes-marciales-cerca-de-cubelles',
    type: 'cerca-de',
    municipio: 'cubelles',
    meta: {
      title: 'Artes Marciales cerca de Cubelles | Academia Garraf',
      description: 'Clases de artes marciales cerca de Cubelles. Nuestra academia en Vilanova a menos de 8 min. Boxeo, karate, MMA y más. Primera clase gratis.',
    },
    h1: 'Artes Marciales cerca de Cubelles',
    intro: 'Desde Cubelles, nuestra academia principal en Vilanova i la Geltrú está a menos de 8 minutos en coche por la N-340. Ofrecemos todas las disciplinas con el horario más amplio de la comarca. Muchos vecinos de Cubelles son alumnos habituales de nuestra sede de Vilanova. Si prefieres no desplazarte, consulta nuestras clases en la propia Cubelles.',
    phase: 3,
  },
  {
    slug: 'artes-marciales-cerca-de-canyelles',
    type: 'cerca-de',
    municipio: 'canyelles',
    meta: {
      title: 'Artes Marciales cerca de Canyelles | Garraf',
      description: 'Clases de artes marciales cerca de Canyelles. Academia en Vilanova a 15 min por la C-15. Boxeo, karate, BJJ y más. Primera clase gratis.',
    },
    h1: 'Artes Marciales cerca de Canyelles',
    intro: 'Desde Canyelles, la opción más próxima para practicar artes marciales es nuestra academia en Vilanova i la Geltrú, accesible en menos de 15 minutos por la C-15. Nuestros alumnos de Canyelles y Olivella se desplazan regularmente y forman parte de una comunidad cada vez más grande. Si el desplazamiento es un obstáculo, contáctanos: organizamos grupos y carpooling entre alumnos de la misma zona.',
    phase: 4,
  },
];

// ── Generate money pages from combos ─────────────────────────────────────────
function generateMoneyPage(combo: typeof MONEY_COMBOS[0]): PageDef {
  const dSlug = combo.disciplina;
  const mSlug = combo.municipio;
  const dName = disc(dSlug);
  const mName = loc(mSlug);
  const mShort = getLocationBySlug(mSlug)?.nameShort ?? mName;
  const discipline = getDisciplineBySlug(dSlug);

  const intros: Record<string, Record<string, string>> = {
    'boxeo': {
      'sitges': `¿Buscas clases de boxeo en Sitges? En la Academia de Artes Marciales Garraf ofrecemos entrenamiento de boxeo para todos los niveles, desde iniciación absoluta hasta sparring técnico. Nuestro instructor principal es exboxeador profesional con 15 años de experiencia en el ring y en la enseñanza. Las clases combinan técnica de golpeo, trabajo de saco, manoplas y una preparación física que transformará tu condición en pocas semanas.`,
      'vilanova-i-la-geltru': `El boxeo en Vilanova i la Geltrú tiene un nuevo referente. En la Academia Garraf entrenamos a alumnos de todos los perfiles: los que quieren competir, los que buscan ponerse en forma y los que simplemente quieren aprender el arte del puñetazo bien hecho. Las clases son dinámicas, progresivas y con grupos reducidos para garantizar que el instructor corrija tu técnica desde el primer día.`,
      'sant-pere-de-ribes': `Si buscas boxeo en Sant Pere de Ribes, nuestra academia en Sitges está a menos de 10 minutos. Contamos con clases de boxeo para todos los niveles con horarios de tarde que se adaptan a cualquier rutina. Primera clase completamente gratuita.`,
      'cubelles': `Desde Cubelles, nuestra sede de Vilanova está a menos de 8 minutos para que puedas entrenar boxeo sin excusas. Clases para todos los niveles, grupos reducidos y el mejor equipo de la comarca del Garraf.`,
    },
    'karate': {
      'sitges': `El karate en Sitges tiene una larga tradición y en la Academia Garraf somos su continuación natural. Ofrecemos clases de karate para adultos, niños y grupos de competición, con un cuerpo técnico formado por cinturones negros con décadas de experiencia y docencia. Nuestro método combina la tradición del karate con una pedagogía moderna que garantiza progresión real en cada alumno.`,
      'vilanova-i-la-geltru': `Nuestra academia en Vilanova i la Geltrú ofrece el programa de karate más completo de la comarca del Garraf. Con grupos desde los 4 años hasta adultos senior, el karate que enseñamos combina técnica tradicional con aplicaciones reales de defensa personal. Más de 150 alumnos activos avalan un método que lleva años dando resultados.`,
      'sant-pere-de-ribes': `Para los vecinos de Sant Pere de Ribes que buscan karate, nuestra academia en Sitges es la opción más cercana y completa. Grupos para niños y adultos, instructores con cinturón negro y primera clase gratis para que compruebes la diferencia.`,
      'cubelles': `Los vecinos de Cubelles que buscan clases de karate tienen en nuestra academia de Vilanova la mejor opción de la zona. Grupos por niveles, instructores certificados y el programa infantil más completo del Garraf.`,
    },
    'mma': {
      'sitges': `El MMA en Sitges está creciendo y en la Academia Garraf lideramos esa tendencia. Nuestro programa de artes marciales mixtas integra striking (boxeo y kickboxing), derribo (lucha y judo) y suelo (BJJ y grappling) en un sistema de entrenamiento completo y progresivo. Puedes empezar desde cero: las primeras semanas son de fundamentos técnicos sin contacto.`,
      'vilanova-i-la-geltru': `El MMA en Vilanova i la Geltrú tiene su casa en la Academia Garraf. Con instalaciones diseñadas para el entrenamiento de artes marciales mixtas, octógono de prácticas y un cuerpo técnico especializado, ofrecemos el programa de MMA más serio de la comarca. Iniciación, nivel intermedio y avanzado. Grupos reducidos y supervisión constante.`,
    },
    'kickboxing': {
      'sitges': `El kickboxing en Sitges combina la elegancia técnica del boxeo con la potencia y diversidad de las patadas. En la Academia Garraf, nuestras clases de kickboxing son perfectas tanto para quienes quieren aprender a defenderse como para quienes buscan el mejor entrenamiento cardiovascular posible. Grupos de todos los niveles de lunes a viernes.`,
      'vilanova-i-la-geltru': `Vilanova i la Geltrú tiene una comunidad de kickboxing activa y nuestra academia es el centro de esa comunidad. Desde clases de iniciación hasta grupos de competición, el kickboxing en la Academia Garraf se enseña con rigor técnico y en un ambiente que engancha desde el primer día.`,
    },
    'muay-thai': {
      'sitges': `El muay thai en Sitges tiene un hogar en la Academia Garraf. Enseñamos el arte de las ocho extremidades con la misma seriedad técnica con la que se entrena en Tailandia, adaptado a los diferentes niveles y objetivos de nuestros alumnos. Desde quien quiere aprender para la autodefensa hasta quien tiene ambiciones competitivas, tenemos el programa adecuado para ti.`,
      'vilanova-i-la-geltru': `En Vilanova i la Geltrú, el muay thai es una de las disciplinas más demandadas de nuestra academia. Con más de 50 alumnos activos en esta disciplina, el nivel técnico de nuestros grupos es el más alto de la comarca. Si buscas muay thai serio en el Garraf, estás en el lugar correcto.`,
      'sant-pere-de-ribes': `Para los vecinos de Sant Pere de Ribes interesados en muay thai, nuestra academia en Sitges ofrece las mejores clases de la zona a menos de 10 minutos. Instructores con experiencia en el circuito de combate y grupos para todos los niveles.`,
    },
    'jiu-jitsu-brasileno': {
      'sitges': `El BJJ en Sitges crece cada año y nuestra academia lleva ese crecimiento. Ofrecemos clases de Brazilian Jiu Jitsu para todos los niveles, con instructores formados en Brasil y una comunidad de practicantes que hace de cada clase un entrenamiento exigente y divertido. El suelo es nuestra especialidad y el progreso de nuestros alumnos, nuestro orgullo.`,
      'vilanova-i-la-geltru': `El BJJ en Vilanova i la Geltrú tiene en la Academia Garraf a su referente. Con uno de los instructores con mayor pedigrí de la comarca —cinta morada formada con la metodología Gracie— y una comunidad activa de practicantes, nuestras clases de Brazilian Jiu Jitsu son las más técnicas y exigentes del Garraf.`,
    },
    'judo': {
      'sitges': `Las clases de judo en Sitges en la Academia Garraf combinan la tradición olímpica del judo con una enseñanza moderna y adaptada a todos los niveles. Contamos con tatami homologado y grupos tanto para niños —desde los 5 años— como para adultos de todas las edades. El judo es el arte de caer sin hacerse daño y de proyectar con técnica, no con fuerza.`,
      'vilanova-i-la-geltru': `El judo en Vilanova i la Geltrú tiene en la Academia Garraf a uno de sus centros más consolidados. Con un tatami de alta calidad, grupos organizados por niveles y competición opcional en el circuito catalán, ofrecemos el programa de judo más completo de la comarca del Garraf.`,
    },
    'taekwondo': {
      'sitges': `Las clases de taekwondo en Sitges en la Academia Garraf se imparten con el rigor del deporte olímpico y la accesibilidad que necesita un principiante. Grupos para niños desde los 4 años y adultos de todos los niveles, con instructores cinturón negro y un sistema de grados que recompensa el esfuerzo y la constancia.`,
      'vilanova-i-la-geltru': `El taekwondo en Vilanova i la Geltrú tiene una comunidad activa en nuestra academia. Ofrecemos clases para niños, jóvenes y adultos con participación opcional en el circuito de la Federació Catalana de Taekwondo. Nuestros cinturones negros tienen experiencia tanto en competición como en enseñanza.`,
      'sant-pere-de-ribes': `Para los vecinos de Sant Pere de Ribes que buscan taekwondo, nuestra academia en Sitges es la opción más completa de la zona, a menos de 10 minutos. Grupos de niños y adultos, instructor cinturón negro y primera clase gratis.`,
      'cubelles': `Los vecinos de Cubelles pueden acceder a nuestras clases de taekwondo en Vilanova en menos de 8 minutos. Grupos para niños y adultos con participación opcional en competiciones federadas.`,
    },
    'defensa-personal': {
      'sitges': `La defensa personal en Sitges en la Academia Garraf no es el típico cursillo de fin de semana. Ofrecemos un programa continuo basado en técnicas reales de boxeo, BJJ y krav maga, enseñadas de forma progresiva para que las interiorizas de verdad. No aprenderás movimientos bonitos: aprenderás lo que funciona.`,
      'vilanova-i-la-geltru': `Las clases de defensa personal en Vilanova i la Geltrú en la Academia Garraf son las más demandadas de la comarca. Tanto el programa mixto como el específico para mujeres están diseñados por instructores con experiencia real en situaciones de riesgo. La metodología integra lo mejor del boxeo, BJJ y krav maga en un sistema directo y funcional.`,
      'sant-pere-de-ribes': `Para los vecinos de Sant Pere de Ribes que buscan defensa personal, nuestra academia en Sitges ofrece el programa más completo de la zona a menos de 10 minutos. Técnicas reales, grupos reducidos y instructores especializados.`,
      'cubelles': `Desde Cubelles, nuestra academia de Vilanova está a menos de 8 minutos para que puedas acceder al mejor programa de defensa personal de la comarca del Garraf.`,
    },
    'krav-maga': {
      'sitges': `El krav maga en Sitges es una de las disciplinas más buscadas y menos ofertadas de la comarca. En la Academia Garraf llenamos ese vacío con un programa de krav maga serio, basado en el sistema israelí original y adaptado a la realidad del ciudadano que quiere saber defenderse de verdad.`,
      'vilanova-i-la-geltru': `Las clases de krav maga en Vilanova i la Geltrú en la Academia Garraf son para quienes quieren ir más allá de la defensa personal estándar. El krav maga no tiene reglas, no tiene competición y no tiene movimientos bonitos: solo técnicas que funcionan cuando más importa.`,
    },
  };

  const defaultIntro = `En la Academia de Artes Marciales Garraf ofrecemos las mejores clases de ${dName} en ${mName}. Con instructores especializados, grupos reducidos y metodología progresiva, somos el centro de referencia para ${dName.toLowerCase()} en la comarca del Garraf. Tanto si empiezas desde cero como si tienes experiencia previa, tenemos el grupo y el nivel adecuados para ti. La primera clase es completamente gratuita y sin compromiso.`;

  const intro = intros[dSlug]?.[mSlug] ?? defaultIntro;

  const dTitle = dName;
  const mTitle = mName === 'Vilanova i la Geltrú' ? 'Vilanova' : mName;

  return {
    slug: `${dSlug}-en-${mSlug}`,
    type: 'money-page',
    municipio: mSlug,
    disciplina: dSlug,
    meta: {
      title: `${dTitle} en ${mTitle} | Clases para Todos los Niveles`,
      description: `Clases de ${dName.toLowerCase()} en ${mName}. ${discipline?.shortDesc ?? ''} Grupos por niveles, instructores certificados. Primera clase gratis. Academia Garraf.`,
    },
    h1: `Clases de ${dTitle} en ${mName}`,
    intro,
    phase: combo.phase,
  };
}

// ── Hub pages ─────────────────────────────────────────────────────────────────
const HUB_MUNICIPIO_PAGES: PageDef[] = LOCATIONS.map(loc => ({
  slug: loc.slug,
  type: 'hub-municipio' as PageType,
  municipio: loc.slug,
  meta: {
    title: `Artes Marciales en ${loc.name} | Academia Garraf`,
    description: `Clases de artes marciales en ${loc.name}. Boxeo, karate, MMA, muay thai, BJJ, judo, taekwondo y defensa personal. Todas las disciplinas en ${loc.comarca}. Primera clase gratis.`,
  },
  h1: `Clases de Artes Marciales en ${loc.name}`,
  intro: loc.desc,
  phase: loc.priority as 1 | 2 | 3 | 4,
}));

const HUB_DISCIPLINA_PAGES: PageDef[] = DISCIPLINES.map(d => ({
  slug: d.slug,
  type: 'hub-disciplina' as PageType,
  disciplina: d.slug,
  meta: {
    title: `${d.nameEs} en el Garraf | Academia de Artes Marciales`,
    description: `Clases de ${d.nameEs.toLowerCase()} en la comarca del Garraf. ${d.shortDesc} Sitges, Vilanova i la Geltrú y toda la comarca. Primera clase gratis.`,
  },
  h1: `${d.nameEs} en el Garraf`,
  intro: `${d.shortDesc} En la Academia de Artes Marciales Garraf ofrecemos clases de ${d.nameEs.toLowerCase()} en Sitges y Vilanova i la Geltrú con grupos para todos los niveles, desde iniciación absoluta hasta avanzado. Nuestros instructores especializados te guiarán desde el primer día con una metodología progresiva que garantiza resultados reales.`,
  phase: 1,
}));

const HUB_PERFIL_PAGES: PageDef[] = [
  {
    slug: 'clases-para-ninos',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Niños en el Garraf | Desde 4 Años',
      description: 'Clases de artes marciales infantiles en el Garraf. Karate, judo, taekwondo desde los 4 años. Grupos por edades, instructores especializados. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Niños en el Garraf',
    intro: 'El programa infantil de la Academia de Artes Marciales Garraf es el más completo de la comarca. Ofrecemos karate, judo y taekwondo para niños desde los 4 años, con grupos organizados por franjas de edad y una metodología pedagógica que desarrolla disciplina, coordinación y autoconfianza. Nuestros instructores infantiles combinan la excelencia marcial con la vocación educativa.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Mujeres en el Garraf | Defensa Personal',
      description: 'Artes marciales y defensa personal para mujeres en el Garraf. Ambiente seguro, instructoras especializadas. Boxeo, BJJ, defensa personal femenina. Primera clase gratis.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en el Garraf',
    intro: 'En la Academia Garraf creemos que las artes marciales son especialmente importantes para las mujeres. Por eso hemos diseñado un programa específico que incluye clases mixtas y grupos exclusivamente femeninos en boxeo, kickboxing y defensa personal. Contamos con instructoras especializadas y un entorno donde la seguridad y el respeto son la base de todo. Más de 80 mujeres de la comarca ya entrenan con nosotras.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Adultos en el Garraf | Todos los Niveles',
      description: 'Clases de artes marciales para adultos en el Garraf. Empieza desde cero o con experiencia. Boxeo, karate, MMA, BJJ, muay thai. Primera clase gratis.',
    },
    h1: 'Artes Marciales para Adultos en el Garraf',
    intro: 'Las artes marciales no tienen límite de edad. En la Academia Garraf tenemos alumnos que empezaron a los 20 y alumnos que comenzaron a los 55. Lo que todos comparten es la decisión de empezar. Nuestros grupos de adultos están diseñados para que progreses desde tu nivel actual, con la intensidad que tú elijas y en la disciplina que más te motive.',
    phase: 2,
  },
  {
    slug: 'iniciacion',
    type: 'hub-perfil',
    meta: {
      title: 'Iniciación a las Artes Marciales en el Garraf | Empieza Aquí',
      description: 'Clases de iniciación a las artes marciales en el Garraf. Sin experiencia previa. Te ayudamos a elegir la disciplina correcta. Primera clase completamente gratis.',
    },
    h1: 'Iniciación a las Artes Marciales en el Garraf',
    intro: '¿No sabes por dónde empezar? Es lo más normal. En la Academia Garraf ofrecemos una primera clase de orientación completamente gratuita donde pruebas diferentes disciplinas y nuestros instructores te aconsejan cuál se adapta mejor a tus objetivos, tu condición física y tu carácter. Sin compromiso, sin presión.',
    phase: 2,
  },
];

// ── Blog pages ─────────────────────────────────────────────────────────────────
const BLOG_PAGES: PageDef[] = [
  {
    slug: 'blog/donde-aprender-boxeo-en-el-garraf',
    type: 'blog',
    meta: {
      title: 'Dónde Aprender Boxeo en el Garraf [Guía 2025]',
      description: 'Guía completa sobre dónde aprender boxeo en la comarca del Garraf. Sitges, Vilanova i la Geltrú y alrededores. Clases para todos los niveles.',
    },
    h1: 'Dónde Aprender Boxeo en el Garraf',
    intro: 'El boxeo en la comarca del Garraf ha crecido enormemente en los últimos años. Si estás buscando dónde aprender boxeo en Sitges, Vilanova o cualquier municipio del Garraf, esta guía te da toda la información que necesitas para tomar la mejor decisión.',
    phase: 2,
  },
  {
    slug: 'blog/mejor-arte-marcial-para-ninos-garraf',
    type: 'blog',
    meta: {
      title: 'Mejor Arte Marcial para Niños en el Garraf [Guía 2025]',
      description: 'Cuál es la mejor arte marcial para niños en el Garraf. Comparativa de karate, judo y taekwondo. Recomendaciones por edad. Guía para padres.',
    },
    h1: 'Cuál es la Mejor Arte Marcial para Niños en el Garraf',
    intro: 'Como padre o madre, elegir la arte marcial adecuada para tu hijo puede ser confuso. Hay muchas opciones y cada una tiene sus ventajas. En esta guía te explicamos qué disciplina se adapta mejor a cada edad, carácter y objetivo, basándonos en nuestra experiencia con más de 200 alumnos infantiles en la comarca del Garraf.',
    phase: 2,
  },
  {
    slug: 'blog/defensa-personal-para-mujeres-garraf',
    type: 'blog',
    meta: {
      title: 'Defensa Personal para Mujeres en el Garraf [Guía 2025]',
      description: 'Guía completa de defensa personal para mujeres en el Garraf. Qué aprender, dónde, qué funciona de verdad. Técnicas reales para situaciones reales.',
    },
    h1: 'Defensa Personal para Mujeres en el Garraf: Guía Completa',
    intro: 'La defensa personal para mujeres es uno de los temas más importantes y más mal abordados del mundo de las artes marciales. Hay mucho mito, mucho marketing y poca sustancia. En esta guía te contamos qué técnicas funcionan realmente, cómo elegir un centro serio y qué esperar de las primeras semanas de entrenamiento.',
    phase: 2,
  },
  {
    slug: 'blog/artes-marciales-adultos-principiantes-garraf',
    type: 'blog',
    meta: {
      title: 'Artes Marciales para Adultos Principiantes en el Garraf',
      description: 'Cómo empezar las artes marciales siendo adulto en el Garraf. Qué disciplina elegir, qué esperar, cómo progresar. Guía para principiantes sin experiencia.',
    },
    h1: 'Cómo Empezar las Artes Marciales en el Garraf Siendo Adulto',
    intro: '¿Tienes 30, 40 o 50 años y quieres empezar artes marciales pero no sabes por dónde? Eres exactamente la persona para quien está escrita esta guía. Vamos a desmontar los miedos más comunes y a darte un plan claro para empezar hoy mismo.',
    phase: 2,
  },
  {
    slug: 'blog/karate-vs-taekwondo-ninos-garraf',
    type: 'blog',
    meta: {
      title: 'Karate vs Taekwondo para Niños en el Garraf | Cuál Elegir',
      description: 'Comparativa entre karate y taekwondo para niños en el Garraf. Diferencias, ventajas de cada uno y cómo elegir según la edad y el carácter de tu hijo.',
    },
    h1: 'Karate o Taekwondo para Niños en el Garraf: Cuál Elegir',
    intro: 'La pregunta más frecuente de los padres que nos llaman: ¿karate o taekwondo para mi hijo? Ambas son disciplinas excelentes, pero tienen diferencias importantes. Te explicamos cuáles son y cómo decidir en función de la edad, el carácter y los objetivos de tu hijo.',
    phase: 3,
  },
];

// ── Compile all pages ─────────────────────────────────────────────────────────
export const ALL_PAGES: PageDef[] = [
  ...MONEY_COMBOS.map(generateMoneyPage),
  ...SPECIAL_PAGES,
  ...HUB_MUNICIPIO_PAGES,
  ...HUB_DISCIPLINA_PAGES,
  ...HUB_PERFIL_PAGES,
  ...BLOG_PAGES,
];

export function getPageBySlug(slug: string): PageDef | undefined {
  return ALL_PAGES.find(p => p.slug === slug);
}

export function getStaticSlugs(): string[] {
  return ALL_PAGES.map(p => p.slug);
}
