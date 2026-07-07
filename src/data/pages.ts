import { DISCIPLINES, getDisciplineBySlug } from './disciplines';
import { LOCATIONS, getLocationBySlug } from './locations';

// ────────────────────────────────────────────────────────────────────────────
// Marca neutra honesta: todo el copy de este archivo está escrito desde la
// posición de GUÍA LOCAL INDEPENDIENTE, no de academia. Prohibido reintroducir
// datos de negocio inventados (instructores, alumnos, horarios de clase,
// precios, reseñas). Ver MEMORY.md del proyecto.
// ────────────────────────────────────────────────────────────────────────────

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
  body?: string;
  localFaq?: { q: string; a: string }[];
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
      title: 'Artes Marciales para Niños en Sitges | Guía para Padres',
      description: 'Artes marciales infantiles en Sitges: qué disciplina elegir según la edad de tu hijo, qué preguntar al centro y cómo empezar. Guía local del Garraf.',
    },
    h1: 'Artes Marciales para Niños en Sitges',
    intro: 'Si buscas clases de artes marciales para tu hijo o hija en Sitges, esta guía te ayuda a decidir. Karate, judo y taekwondo son las disciplinas más habituales para empezar desde los 4-6 años: desarrollan coordinación, disciplina y confianza con metodologías adaptadas por edades. Aquí te explicamos qué aporta cada una, qué preguntar al centro antes de apuntarle y qué esperar de las primeras semanas. Y si tienes dudas, escríbenos y te orientamos sin coste.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    meta: {
      title: 'Artes Marciales para Mujeres en Sitges | Guía Local',
      description: 'Artes marciales y defensa personal para mujeres en Sitges: qué disciplinas encajan mejor, qué buscar en un centro y cómo empezar con confianza.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en Sitges',
    intro: 'Cada vez más mujeres del Garraf entrenan artes marciales, y Sitges no es una excepción. Boxeo y kickboxing para ponerse en forma, BJJ por su eficacia técnica independiente de la fuerza, y defensa personal orientada a situaciones reales son las opciones más demandadas. En esta guía te contamos qué valorar al elegir centro —grupos femeninos o mixtos, ambiente, enfoque— y cómo dar el primer paso aunque nunca hayas entrenado.',
    phase: 1,
  },
  {
    slug: 'defensa-personal-femenina-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    disciplina: 'defensa-personal',
    meta: {
      title: 'Defensa Personal Femenina en Sitges | Qué Debes Saber',
      description: 'Defensa personal para mujeres en Sitges: qué técnicas funcionan de verdad, cómo distinguir un programa serio y cómo empezar. Guía local del Garraf.',
    },
    h1: 'Defensa Personal para Mujeres en Sitges',
    intro: 'La defensa personal femenina bien enseñada se centra en herramientas reales: gestión de la distancia, reacción ante agarres, uso del entorno y, sobre todo, prevención y conciencia situacional. En esta guía te explicamos qué debe incluir un buen programa de defensa personal para mujeres, qué señales indican seriedad en un centro de Sitges o alrededores, y qué esperar de las primeras sesiones.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    meta: {
      title: 'Artes Marciales para Adultos en Sitges | Empezar de Cero',
      description: 'Cómo empezar artes marciales siendo adulto en Sitges: qué disciplina elegir según tu objetivo, qué esperar y cómo dar el primer paso sin experiencia.',
    },
    h1: 'Artes Marciales para Adultos en Sitges',
    intro: 'Nunca es tarde para empezar artes marciales: hay quien empieza a los 20 y quien empieza a los 55. Lo que importa es elegir bien la disciplina según tu objetivo —forma física, técnica, autodefensa o comunidad— y un grupo de nivel adecuado. En esta guía repasamos las opciones para adultos en Sitges y su entorno, con consejos para elegir centro y evitar los errores típicos del principiante.',
    phase: 1,
  },
  // Perfil pages - Vilanova
  {
    slug: 'clases-infantiles-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales Niños Vilanova i la Geltrú | Guía Padres',
      description: 'Artes marciales infantiles en Vilanova i la Geltrú: karate, judo o taekwondo según la edad, qué preguntar al centro y cómo empezar. Guía del Garraf.',
    },
    h1: 'Artes Marciales para Niños en Vilanova i la Geltrú',
    intro: 'Vilanova i la Geltrú, como capital de la comarca, concentra la mayor oferta de actividades infantiles del Garraf, y las artes marciales están entre las más valoradas por los padres. Karate, judo y taekwondo son las puertas de entrada clásicas desde los 4-6 años. En esta guía te explicamos qué aporta cada disciplina según la edad y el carácter de tu hijo, y qué criterios usar para elegir un buen centro en Vilanova.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales para Mujeres en Vilanova | Guía Local',
      description: 'Artes marciales y defensa personal para mujeres en Vilanova i la Geltrú: disciplinas recomendadas, qué buscar en un centro y cómo empezar.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en Vilanova',
    intro: 'Si eres mujer y quieres empezar a entrenar en Vilanova i la Geltrú, tienes opciones para todos los objetivos: boxeo y kickboxing para forma física y descarga de estrés, BJJ para técnica pura, defensa personal para seguridad práctica. En esta guía te contamos qué valorar al elegir —existencia de grupos femeninos, enfoque del centro, ambiente— y cómo probar sin comprometerte desde el primer día.',
    phase: 1,
  },
  {
    slug: 'defensa-personal-femenina-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    disciplina: 'defensa-personal',
    meta: {
      title: 'Defensa Personal Femenina en Vilanova i la Geltrú | Guía',
      description: 'Defensa personal para mujeres en Vilanova: qué técnicas funcionan, cómo reconocer un programa serio y cómo dar el primer paso. Guía del Garraf.',
    },
    h1: 'Defensa Personal para Mujeres en Vilanova i la Geltrú',
    intro: 'Un buen programa de defensa personal femenina no vende movimientos espectaculares: enseña a reaccionar ante un agarre, a crear distancia, a usar la voz y el entorno, y a evitar el peligro antes de que ocurra. En esta guía te explicamos qué debe incluir un programa serio, cómo evaluar las opciones en Vilanova i la Geltrú y qué esperar de las primeras sesiones si nunca has entrenado nada parecido.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    meta: {
      title: 'Artes Marciales para Adultos en Vilanova i la Geltrú',
      description: 'Cómo empezar artes marciales siendo adulto en Vilanova: qué disciplina va contigo, cómo elegir centro y qué esperar de las primeras semanas.',
    },
    h1: 'Artes Marciales para Adultos en Vilanova i la Geltrú',
    intro: 'Empezar artes marciales de adulto en Vilanova i la Geltrú es más fácil de lo que parece: al ser la ciudad con más oferta de la comarca, es donde más probabilidades tienes de encontrar grupos de iniciación y horarios compatibles con el trabajo. No hace falta estar en forma para empezar —el entrenamiento te pone en forma— ni tener experiencia previa. Esta guía te ayuda a elegir disciplina y centro con criterio.',
    phase: 1,
  },
  // Karate infantil
  {
    slug: 'karate-infantil-en-sitges',
    type: 'money-page',
    municipio: 'sitges',
    disciplina: 'karate',
    meta: {
      title: 'Karate Infantil en Sitges | Guía para Padres',
      description: 'Karate para niños en Sitges: desde qué edad empezar, qué aporta el karate infantil, qué preguntar al centro y cómo elegir bien. Guía del Garraf.',
    },
    h1: 'Karate Infantil en Sitges',
    intro: 'El karate es una de las actividades extraescolares más completas para niños: trabaja coordinación, disciplina, respeto y confianza con una progresión clara de cinturones que motiva sin presionar. En esta guía para padres de Sitges te explicamos desde qué edad tiene sentido empezar, cómo es una clase de karate infantil típica y qué criterios usar para elegir centro: titulación del instructor, grupos por edades y metodología pedagógica.',
    phase: 1,
  },
  {
    slug: 'karate-infantil-en-vilanova',
    type: 'money-page',
    municipio: 'vilanova-i-la-geltru',
    disciplina: 'karate',
    meta: {
      title: 'Karate Infantil en Vilanova i la Geltrú | Guía Padres',
      description: 'Karate para niños en Vilanova: desde qué edad, qué beneficios reales aporta y cómo elegir un buen centro. Guía local de la comarca del Garraf.',
    },
    h1: 'Karate Infantil en Vilanova i la Geltrú',
    intro: 'El karate infantil enseña mucho más que técnica: los niños aprenden a caer y levantarse, a respetar normas y compañeros, y a ganar confianza a través del esfuerzo. Vilanova i la Geltrú, por tamaño y tradición deportiva, es el municipio del Garraf donde más fácil resulta encontrar grupos de karate por franjas de edad. Esta guía te ayuda a valorar las opciones y a preparar la primera clase de tu hijo.',
    phase: 1,
  },
  // Cerca de pages
  {
    slug: 'artes-marciales-cerca-de-sant-pere-de-ribes',
    type: 'cerca-de',
    municipio: 'sant-pere-de-ribes',
    meta: {
      title: 'Artes Marciales cerca de Sant Pere de Ribes | Garraf',
      description: 'Dónde entrenar artes marciales si vives en Sant Pere de Ribes: opciones locales y municipios cercanos con más oferta. Guía de la comarca del Garraf.',
    },
    h1: 'Artes Marciales cerca de Sant Pere de Ribes',
    intro: 'Si vives en Sant Pere de Ribes, Les Roquetes o Ribes y quieres entrenar artes marciales, tienes dos vías: la oferta local del municipio, más limitada, o desplazarte a Sitges y Vilanova i la Geltrú, que están a 10-15 minutos en coche y concentran la mayor parte de la oferta de la comarca. En esta guía te contamos cómo valorar cada opción según tu disciplina, horario y disponibilidad para desplazarte.',
    phase: 2,
  },
  {
    slug: 'artes-marciales-cerca-de-cubelles',
    type: 'cerca-de',
    municipio: 'cubelles',
    meta: {
      title: 'Artes Marciales cerca de Cubelles | Guía del Garraf',
      description: 'Dónde entrenar artes marciales si vives en Cubelles: opciones en el municipio y en Vilanova i la Geltrú, a menos de 10 minutos. Guía local.',
    },
    h1: 'Artes Marciales cerca de Cubelles',
    intro: 'Desde Cubelles, la referencia natural para entrenar artes marciales es Vilanova i la Geltrú: está a menos de 10 minutos en coche por la C-31 y concentra la mayor oferta deportiva de la comarca. También hay opciones en dirección Cunit y Calafell, ya en el Baix Penedès. En esta guía te ayudamos a decidir dónde buscar según la disciplina que te interese y tu disponibilidad.',
    phase: 3,
  },
  {
    slug: 'artes-marciales-cerca-de-canyelles',
    type: 'cerca-de',
    municipio: 'canyelles',
    meta: {
      title: 'Artes Marciales cerca de Canyelles | Guía del Garraf',
      description: 'Dónde entrenar artes marciales si vives en Canyelles u Olivella: opciones en Vilanova i la Geltrú a 15 minutos por la C-15. Guía local del Garraf.',
    },
    h1: 'Artes Marciales cerca de Canyelles',
    intro: 'Canyelles es un municipio pequeño del interior del Garraf, así que para entrenar artes marciales lo habitual es desplazarse. La opción más práctica es Vilanova i la Geltrú, a unos 15 minutos por la C-15, con la mayor variedad de disciplinas de la comarca. En esta guía te explicamos qué puedes encontrar y cómo organizarte si el desplazamiento es un obstáculo, especialmente con niños.',
    phase: 4,
  },
];

// ── Local FAQ items specific to each discipline × municipality combination ────
// Preguntas informacionales honestas: geografía real, criterios de elección y
// contexto local verificable. Nada de horarios, grupos o instalaciones inventadas.
const LOCAL_FAQS: Record<string, Record<string, { q: string; a: string }[]>> = {
  'boxeo': {
    'sitges': [
      { q: '¿Es fácil encontrar clases de boxeo en Sitges?', a: 'Sitges tiene una vida deportiva activa y orientada también al público internacional, aunque su oferta es menor que la de Vilanova i la Geltrú, a 10-15 minutos. Si buscas boxeo en la zona, valora ambos municipios antes de decidir.' },
      { q: '¿Qué debo preguntar antes de apuntarme a boxeo en Sitges?', a: 'Tres cosas: si hay grupo específico de iniciación, si el sparring es opcional (en un buen gimnasio siempre lo es) y si puedes hacer una clase de prueba antes de comprometerte con una cuota.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Por qué Vilanova es buena opción para empezar boxeo?', a: 'Como capital de la comarca, Vilanova i la Geltrú concentra la mayor oferta deportiva del Garraf, lo que se traduce en más grupos, más franjas horarias y más probabilidad de encontrar un nivel de iniciación real.' },
      { q: '¿El boxeo es compatible con el trabajo a turnos?', a: 'Depende del centro, pero en municipios grandes como Vilanova es más habitual encontrar clases en varias franjas del día. Pregunta siempre por el horario completo antes de apuntarte.' },
    ],
    'sant-pere-de-ribes': [
      { q: '¿Dónde entrenan boxeo los vecinos de Sant Pere de Ribes?', a: 'La oferta dentro del municipio es limitada, así que lo más habitual es desplazarse a Sitges o Vilanova i la Geltrú, ambas a 10-15 minutos en coche desde Ribes o Les Roquetes.' },
    ],
  },
  'karate': {
    'sitges': [
      { q: '¿Desde qué edad puede empezar karate un niño en Sitges?', a: 'La mayoría de escuelas de karate aceptan niños desde los 4-6 años, con grupos separados por franjas de edad. A los 4-5 años el trabajo es sobre todo psicomotriz; el karate como disciplina completa llega más adelante.' },
      { q: '¿Cómo reconozco una buena escuela de karate en Sitges?', a: 'Fíjate en la titulación del instructor (cinturón negro con grado federativo), en que los grupos infantiles estén separados por edades y en que te dejen ver una clase antes de apuntarte.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Hay tradición de karate en Vilanova i la Geltrú?', a: 'El karate es una de las artes marciales con más implantación en Cataluña y los municipios grandes como Vilanova suelen tener escuelas consolidadas con grupos por edad y nivel. Es de las disciplinas más fáciles de encontrar en la comarca.' },
      { q: '¿Karate WKF o tradicional: qué me conviene?', a: 'El estilo WKF (olímpico) orienta más a la competición deportiva; los enfoques tradicionales priorizan kata y defensa personal. Para un niño o un principiante, importa más la calidad del instructor que el estilo.' },
    ],
  },
  'defensa-personal': {
    'sitges': [
      { q: '¿Hay defensa personal solo para mujeres en Sitges?', a: 'Los grupos exclusivamente femeninos existen pero no en todos los centros ni en todos los municipios. Si es tu prioridad, pregúntalo directamente antes de apuntarte, o escríbenos y te ayudamos a localizar opciones en la zona.' },
      { q: '¿Cuántas sesiones necesito para aprender lo básico?', a: 'Con 4-8 sesiones bien planteadas ya interiorizas las respuestas fundamentales ante los escenarios más comunes. La continuidad después marca la diferencia entre "haber hecho un curso" y saber reaccionar bajo estrés.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿La defensa personal incluye defensa ante armas?', a: 'Los programas básicos se centran en agresiones sin armas, que son la gran mayoría de los casos reales. El trabajo ante objetos peligrosos es materia de niveles avanzados y no todos los centros lo imparten: pregúntalo si te interesa.' },
      { q: '¿Puedo empezar defensa personal sin experiencia marcial?', a: 'Sí, es el caso más habitual. Un buen programa de defensa personal está diseñado precisamente para personas sin base marcial: técnicas simples, funcionales y entrenadas bajo presión progresiva.' },
    ],
  },
  'muay-thai': {
    'sitges': [
      { q: '¿Puedo entrenar muay thai en Sitges si solo vengo en verano?', a: 'Sitges tiene mucha población estacional y algunos centros lo tienen en cuenta con fórmulas flexibles. Pregunta por bonos o mensualidades sin permanencia antes de apuntarte si tu estancia es temporal.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Cómo sé si un gimnasio de muay thai en Vilanova es serio?', a: 'Busca que separe claramente iniciación de niveles avanzados, que el contacto sea progresivo y opcional, y que el instructor tenga trayectoria verificable en la disciplina, sea competitiva o docente.' },
    ],
  },
  'jiu-jitsu-brasileno': {
    'sitges': [
      { q: '¿Qué debo buscar en una academia de BJJ en Sitges?', a: 'El linaje del instructor (quién le dio sus grados), la proporción entre técnica y sparring (rolling) en las clases, y el ambiente: el BJJ se aprende con compañeros, y una sala respetuosa acelera muchísimo el progreso.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿El BJJ es apto para mujeres?', a: 'Es posiblemente el arte marcial donde el tamaño y la fuerza importan menos, porque se basa en palancas y posiciones. Cada vez hay más practicantes femeninas en Cataluña, también en la comarca del Garraf.' },
    ],
  },
  'mma': {
    'sitges': [
      { q: '¿Necesito base de boxeo o BJJ para empezar MMA en Sitges?', a: 'No. Un buen programa de MMA para principiantes cubre los fundamentos de golpeo, derribo y suelo desde cero. Si el centro exige experiencia previa para entrar, busca otro para empezar.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Qué instalaciones necesita un buen gimnasio de MMA?', a: 'Como mínimo, tatami o zona acolchada para el trabajo de suelo y material de golpeo (sacos, manoplas). La jaula u octógono es un plus para simular competición, pero no es imprescindible para aprender.' },
    ],
  },
  'kickboxing': {
    'sitges': [
      { q: '¿El kickboxing en Sitges sirve para ponerse en forma?', a: 'Es uno de los entrenamientos cardiovasculares más completos que existen: una sesión intensa puede quemar entre 600 y 900 kcal. Muchas personas lo eligen exactamente por eso, sin interés en competir.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Se puede competir en kickboxing desde la comarca?', a: 'Cataluña tiene circuito activo de kickboxing con competiciones regulares. Si te interesa competir, busca un centro cuyo instructor tenga experiencia llevando competidores; si no, cualquier buen grupo recreativo te vale.' },
    ],
  },
  'judo': {
    'sitges': [
      { q: '¿Por qué es importante el tatami en judo?', a: 'Porque el judo se basa en proyecciones y caídas: un tatami homologado y en buen estado es una cuestión de seguridad, no de comodidad. Al visitar un centro en Sitges o alrededores, fíjate en el estado del suelo antes que en cualquier otra cosa.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Hay competición de judo infantil en Cataluña?', a: 'Sí, la Federació Catalana de Judo organiza circuito desde categorías tempranas. La competición es siempre voluntaria: la mayoría de niños practica judo por los valores y la actividad física, sin competir.' },
    ],
  },
  'taekwondo': {
    'sitges': [
      { q: '¿Taekwondo o karate para mi hijo en Sitges?', a: 'Ambos son excelentes para niños. El taekwondo destaca por el trabajo de piernas, flexibilidad y velocidad; el karate por el equilibrio entre técnica de brazos y piernas y su enfoque en la disciplina. Lo decisivo es la calidad del instructor que tengas cerca.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Cuántos días a la semana se entrena taekwondo?', a: 'Para niños, dos días semanales es el estándar razonable. Para adultos con objetivos de progresión o competición, tres sesiones semanales aceleran claramente el avance.' },
    ],
    'sant-pere-de-ribes': [
      { q: '¿Vale la pena desplazarse desde Sant Pere de Ribes para entrenar taekwondo?', a: 'Sitges y Vilanova están a 10-15 minutos en coche, una distancia muy asumible para dos entrenamientos semanales. Si el desplazamiento es un problema, pregunta también por actividades en polideportivos municipales de Ribes.' },
    ],
  },
  'krav-maga': {
    'sitges': [
      { q: '¿El krav maga tiene edad mínima?', a: 'La mayoría de escuelas de krav maga trabajan con adultos a partir de 16 años, por la naturaleza del sistema: requiere madurez para entrenar escenarios de agresión de forma controlada.' },
    ],
    'vilanova-i-la-geltru': [
      { q: '¿Cómo distingo un instructor serio de krav maga?', a: 'Pregunta por su certificación y la organización que la emite (hay varias federaciones internacionales de krav maga), cuántos años lleva impartiendo y cómo estructura la progresión. Desconfía de quien promete resultados inmediatos sin trabajo.' },
    ],
  },
};

// ── Generate money pages from combos ─────────────────────────────────────────
function generateMoneyPage(combo: typeof MONEY_COMBOS[0]): PageDef {
  const dSlug = combo.disciplina;
  const mSlug = combo.municipio;
  const dName = disc(dSlug);
  const mName = loc(mSlug);
  const discipline = getDisciplineBySlug(dSlug);

  // Intros honestos por combinación: guía local, contexto geográfico real,
  // criterios de elección. Sin identidad de academia.
  const intros: Record<string, Record<string, string>> = {
    'boxeo': {
      'sitges': `¿Buscas clases de boxeo en Sitges? Esta guía te cuenta lo que debes saber antes de empezar: cómo son las clases de iniciación (técnica sobre saco y manoplas, sin contacto obligatorio), qué material necesitas y qué preguntar en cada gimnasio antes de apuntarte. Sitges tiene una vida deportiva activa, y a 10-15 minutos tienes también toda la oferta de Vilanova i la Geltrú. Si quieres, escríbenos y te orientamos sin coste.`,
      'vilanova-i-la-geltru': `El boxeo es una de las formas más completas de ponerse en forma: cardio, coordinación, descarga de estrés y técnica real. Vilanova i la Geltrú, como capital de la comarca del Garraf, es el municipio donde más fácil resulta encontrar clases de boxeo con grupos de iniciación de verdad. En esta guía te explicamos cómo funciona una clase típica, qué material hace falta y con qué criterios elegir gimnasio.`,
      'sant-pere-de-ribes': `Si buscas boxeo y vives en Sant Pere de Ribes, lo más práctico suele ser desplazarse: Sitges y Vilanova i la Geltrú están a 10-15 minutos en coche desde Ribes o Les Roquetes y concentran la mayor parte de la oferta de la comarca. En esta guía te contamos cómo empezar en el boxeo desde cero y qué valorar al elegir gimnasio en la zona.`,
      'cubelles': `Desde Cubelles, la referencia más cercana para entrenar boxeo es Vilanova i la Geltrú, a menos de 10 minutos por la C-31. En esta guía te explicamos cómo son las clases de boxeo para principiantes, qué necesitas para empezar y qué preguntar antes de apuntarte a cualquier gimnasio de la zona.`,
    },
    'karate': {
      'sitges': `El karate es el arte marcial más practicado del mundo y una de las mejores puertas de entrada a las artes marciales, tanto para niños como para adultos. Si buscas karate en Sitges, esta guía te explica qué estilos existen, cómo es la progresión de cinturones, desde qué edad pueden empezar los niños y qué criterios usar para elegir una buena escuela en el municipio o en la vecina Vilanova.`,
      'vilanova-i-la-geltru': `¿Karate en Vilanova i la Geltrú? Buena elección: es una de las disciplinas con más tradición e implantación en Cataluña, y en la capital del Garraf es donde más probabilidades tienes de encontrar escuelas con grupos por edad y nivel. En esta guía repasamos qué aporta el karate a niños y adultos, cómo funciona el sistema de grados y qué preguntar antes de apuntarte.`,
      'sant-pere-de-ribes': `Para los vecinos de Sant Pere de Ribes que buscan karate, las opciones más completas de la zona están en Sitges y Vilanova i la Geltrú, a 10-15 minutos en coche. También vale la pena consultar la oferta deportiva municipal de Ribes y Les Roquetes. En esta guía te contamos desde qué edad empezar, qué beneficios reales aporta el karate y cómo reconocer una buena escuela.`,
      'cubelles': `Si vives en Cubelles y te interesa el karate —para ti o para tus hijos—, la oferta más amplia de la zona está en Vilanova i la Geltrú, a menos de 10 minutos. En esta guía te explicamos qué aporta el karate según la edad, cómo es la progresión de cinturones y qué criterios usar para elegir escuela.`,
    },
    'mma': {
      'sitges': `El MMA (artes marciales mixtas) integra golpeo, derribo y suelo en el sistema de combate más completo que existe. Si te interesa empezar MMA en Sitges o alrededores, esta guía te explica qué debe incluir un buen programa de iniciación —fundamentos técnicos antes que sparring—, qué instalaciones importan de verdad y cómo evaluar la seriedad de un gimnasio.`,
      'vilanova-i-la-geltru': `El MMA ha pasado de nicho a fenómeno global, y cada vez más gente del Garraf quiere probarlo. En Vilanova i la Geltrú, el municipio con más oferta deportiva de la comarca, es donde más sentido tiene buscar. Esta guía te explica cómo se estructura el entrenamiento de MMA (striking, lucha, suelo), si se puede empezar desde cero —sí— y qué preguntar antes de apuntarte.`,
    },
    'kickboxing': {
      'sitges': `El kickboxing combina la técnica de puños del boxeo con las patadas, y es una de las opciones favoritas de quienes quieren ponerse en forma aprendiendo algo útil. Si buscas kickboxing en Sitges, esta guía te cuenta cómo son las clases, qué material necesitas, y cómo valorar la oferta del municipio y de Vilanova, a pocos minutos.`,
      'vilanova-i-la-geltru': `¿Kickboxing en Vilanova i la Geltrú? Es una disciplina en pleno crecimiento y la capital del Garraf es el mejor sitio de la comarca para buscar grupo. En esta guía te explicamos la diferencia entre kickboxing y muay thai, qué esperar de una clase de iniciación y qué señales indican que un gimnasio es serio.`,
    },
    'muay-thai': {
      'sitges': `El muay thai, el arte de las ocho extremidades, añade codos, rodillas y clinch al repertorio del kickboxing. Si buscas muay thai en Sitges, esta guía te explica cómo es el entrenamiento real —mucha técnica, contacto siempre progresivo y opcional—, qué material necesitas y cómo valorar las opciones de la zona, incluida Vilanova a pocos minutos.`,
      'vilanova-i-la-geltru': `El muay thai es una de las disciplinas de striking más completas y exigentes, y su popularidad en Cataluña no deja de crecer. Si quieres empezar en Vilanova i la Geltrú, esta guía te cuenta qué esperar de las primeras semanas, la diferencia con el kickboxing y qué criterios usar para elegir un buen gimnasio en la capital del Garraf.`,
      'sant-pere-de-ribes': `Para entrenar muay thai desde Sant Pere de Ribes, lo habitual es desplazarse a Sitges o Vilanova i la Geltrú, a 10-15 minutos en coche. Esta guía te explica cómo empezar en el muay thai desde cero, qué material hace falta y qué preguntar en cualquier gimnasio de la zona antes de apuntarte.`,
    },
    'jiu-jitsu-brasileno': {
      'sitges': `El Brazilian Jiu Jitsu (BJJ) es el arte del suelo: control, palancas y estrangulamientos donde la técnica vence a la fuerza. Su comunidad crece cada año en Cataluña, también en el Garraf. Si buscas BJJ en Sitges, esta guía te explica cómo es una clase típica, qué significa "rollar", cuánto se tarda de verdad en progresar y cómo evaluar una academia.`,
      'vilanova-i-la-geltru': `El BJJ es posiblemente el arte marcial con la comunidad más fiel: quien lo prueba en serio, suele quedarse años. Si quieres empezar en Vilanova i la Geltrú, esta guía te cuenta qué esperar del primer mes, por qué el linaje del instructor importa y qué señales distinguen una buena academia de BJJ en la comarca del Garraf.`,
    },
    'judo': {
      'sitges': `El judo es deporte olímpico, escuela de valores y una de las artes marciales más seguras y completas para niños. Si buscas judo en Sitges, esta guía te explica desde qué edad empezar, por qué las caídas (ukemi) son la primera y más útil habilidad que se aprende, y qué debe tener una buena sala de judo, empezando por el tatami.`,
      'vilanova-i-la-geltru': `¿Judo en Vilanova i la Geltrú? Es una disciplina con fuerte tradición federativa en Cataluña y una elección excelente tanto para niños como para adultos. En esta guía repasamos los beneficios reales del judo, cómo funciona el sistema de cinturones, qué papel juega la competición (siempre opcional) y cómo elegir club en la capital del Garraf.`,
    },
    'taekwondo': {
      'sitges': `El taekwondo, deporte olímpico desde Seúl 1988, es el arte de las patadas: velocidad, flexibilidad y precisión. Si lo buscas en Sitges —para ti o para tus hijos—, esta guía te explica desde qué edad empezar, la diferencia entre los enfoques olímpico (WT) y tradicional (ITF), y qué criterios usar para elegir escuela en la zona.`,
      'vilanova-i-la-geltru': `El taekwondo es una de las artes marciales más practicadas por niños en España, y Vilanova i la Geltrú, como capital de la comarca, es donde más fácil resulta encontrar grupos por edad y nivel. En esta guía te contamos qué aporta el taekwondo, cómo es la progresión de cinturones y qué preguntar antes de apuntarte o apuntar a tu hijo.`,
      'sant-pere-de-ribes': `Si buscas taekwondo desde Sant Pere de Ribes, valora tanto la oferta deportiva municipal como los centros de Sitges y Vilanova, a 10-15 minutos en coche. Esta guía te explica los beneficios del taekwondo por edades y cómo reconocer una buena escuela, para que el desplazamiento —si lo hay— valga la pena.`,
      'cubelles': `Para practicar taekwondo desde Cubelles, la referencia más cercana con oferta amplia es Vilanova i la Geltrú, a menos de 10 minutos. En esta guía te contamos desde qué edad tiene sentido empezar, qué aporta el taekwondo a niños y adultos y qué criterios usar al elegir escuela en la zona.`,
    },
    'defensa-personal': {
      'sitges': `La defensa personal seria no es un cursillo de trucos: es un entrenamiento continuo de técnicas simples y funcionales, prevención y gestión del estrés. Si buscas defensa personal en Sitges, esta guía te explica qué debe incluir un buen programa, qué diferencias hay con disciplinas como el krav maga y qué preguntar antes de apuntarte en cualquier centro de la zona.`,
      'vilanova-i-la-geltru': `¿Defensa personal en Vilanova i la Geltrú? Antes de apuntarte a cualquier curso, conviene saber qué funciona de verdad: técnicas simples entrenadas bajo presión progresiva, trabajo de prevención y conciencia situacional, y un instructor con metodología clara. Esta guía te da los criterios para evaluar la oferta de la capital del Garraf con ojo crítico.`,
      'sant-pere-de-ribes': `Si buscas defensa personal desde Sant Pere de Ribes, tienes a 10-15 minutos la oferta de Sitges y Vilanova. Esta guía te explica qué debe incluir un programa serio de defensa personal, cuántas sesiones hacen falta para interiorizar lo básico y qué señales distinguen la formación útil del marketing.`,
      'cubelles': `Para formarte en defensa personal desde Cubelles, la opción más práctica es Vilanova i la Geltrú, a menos de 10 minutos. En esta guía te contamos qué técnicas funcionan en situaciones reales, qué esperar de las primeras sesiones y cómo evaluar la seriedad de cualquier programa antes de pagar una cuota.`,
    },
    'krav-maga': {
      'sitges': `El krav maga es el sistema de defensa desarrollado para el ejército israelí: directo, sin reglas deportivas, orientado a neutralizar amenazas reales. Es una de las disciplinas más buscadas y con menos oferta de la comarca. Si te interesa practicarlo en Sitges o alrededores, esta guía te explica qué es exactamente, en qué se diferencia de la defensa personal genérica y cómo verificar la certificación de un instructor.`,
      'vilanova-i-la-geltru': `¿Krav maga en Vilanova i la Geltrú? Antes de buscar dónde, conviene entender qué es: un sistema de combate sin componente deportivo, pensado para resolver agresiones reales con técnicas simples y contundentes. En esta guía te contamos para quién es adecuado, qué exige el entrenamiento y cómo distinguir instructores certificados de imitaciones.`,
    },
  };

  const defaultIntro = `¿Buscas clases de ${dName.toLowerCase()} en ${mName}? Esta guía local te explica qué debes saber antes de empezar: cómo son las clases para principiantes, qué beneficios reales aporta la disciplina y con qué criterios elegir un buen centro en la comarca del Garraf. Si tienes dudas, escríbenos y te orientamos sin coste.`;

  const intro = intros[dSlug]?.[mSlug] ?? defaultIntro;

  const dTitle = dName;
  const mTitle = mName === 'Vilanova i la Geltrú' ? 'Vilanova' : mName;

  return {
    slug: `${dSlug}-en-${mSlug}`,
    type: 'money-page',
    municipio: mSlug,
    disciplina: dSlug,
    meta: {
      title: `${dTitle} en ${mTitle} | Guía para Empezar a Entrenar`,
      description: `Clases de ${dName.toLowerCase()} en ${mName}: qué saber antes de empezar, cómo elegir centro y cómo dar el primer paso. ${discipline?.shortDesc ?? ''} Guía local del Garraf.`,
    },
    h1: `Clases de ${dTitle} en ${mName}`,
    intro,
    localFaq: LOCAL_FAQS[dSlug]?.[mSlug] ?? [],
    phase: combo.phase,
  };
}

// ── Hub pages ─────────────────────────────────────────────────────────────────
const HUB_MUNICIPIO_PAGES: PageDef[] = LOCATIONS.map(loc => ({
  slug: loc.slug,
  type: 'hub-municipio' as PageType,
  municipio: loc.slug,
  meta: {
    title: `Artes Marciales en ${loc.name} | Guía del Garraf`,
    description: `Artes marciales en ${loc.name}: boxeo, karate, MMA, muay thai, BJJ, judo, taekwondo y defensa personal. Guía local para empezar a entrenar en ${loc.comarca}.`,
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
    title: `${d.nameEs} en el Garraf | Guía para Empezar`,
    description: `${d.nameEs} en la comarca del Garraf. ${d.shortDesc} Qué saber antes de empezar y cómo encontrar clase en Sitges, Vilanova i la Geltrú y alrededores.`,
  },
  h1: `${d.nameEs} en el Garraf`,
  intro: `${d.shortDesc} En esta guía te explicamos qué aporta ${d.nameEs.toLowerCase() === 'artes marciales mixtas' ? 'el MMA' : `el ${d.nameEs.toLowerCase()}`}, para quién es adecuado, cómo son las clases de iniciación y con qué criterios elegir centro en Sitges, Vilanova i la Geltrú o el resto de la comarca del Garraf. Si tienes dudas sobre por dónde empezar, escríbenos y te orientamos sin coste.`,
  phase: 1,
}));

const HUB_PERFIL_PAGES: PageDef[] = [
  {
    slug: 'clases-para-ninos',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Niños en el Garraf | Guía Padres',
      description: 'Artes marciales infantiles en el Garraf: karate, judo o taekwondo según la edad, beneficios reales y cómo elegir centro. Guía para padres de la comarca.',
    },
    h1: 'Artes Marciales para Niños en el Garraf',
    intro: 'Las artes marciales son de las actividades extraescolares más completas: disciplina, coordinación, respeto y confianza, con una progresión que motiva sin necesidad de pantallas ni competición obligatoria. En esta guía para padres del Garraf te explicamos qué disciplina encaja según la edad y el carácter de tu hijo —karate, judo o taekwondo son las puertas de entrada clásicas desde los 4-6 años— y qué preguntar en cualquier centro antes de apuntarle.',
    phase: 1,
  },
  {
    slug: 'clases-para-mujeres',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Mujeres en el Garraf | Guía Local',
      description: 'Artes marciales y defensa personal para mujeres en el Garraf: qué disciplinas encajan según tu objetivo y cómo elegir centro con buen ambiente.',
    },
    h1: 'Artes Marciales y Defensa Personal para Mujeres en el Garraf',
    intro: 'Cada vez más mujeres entrenan artes marciales, y por buenas razones: forma física real, confianza, comunidad y herramientas de autodefensa. En esta guía te explicamos qué disciplinas encajan mejor según tu objetivo —boxeo y kickboxing para fitness, BJJ para técnica, defensa personal para seguridad práctica—, qué valorar en un centro (grupos femeninos, ambiente, enfoque) y cómo dar el primer paso en la comarca del Garraf.',
    phase: 1,
  },
  {
    slug: 'clases-para-adultos',
    type: 'hub-perfil',
    meta: {
      title: 'Artes Marciales para Adultos en el Garraf | Empezar de Cero',
      description: 'Cómo empezar artes marciales siendo adulto en el Garraf: qué disciplina elegir según tu objetivo, qué esperar y cómo dar el primer paso sin experiencia.',
    },
    h1: 'Artes Marciales para Adultos en el Garraf',
    intro: 'Las artes marciales no tienen fecha de caducidad: hay quien empieza a los 20 y quien empieza a los 55. Lo importante es elegir la disciplina adecuada a tu objetivo y un grupo de iniciación de verdad. En esta guía te ayudamos a decidir entre las opciones disponibles en la comarca del Garraf, te contamos qué esperar de las primeras semanas y desmontamos los miedos típicos del principiante adulto.',
    phase: 2,
  },
  {
    slug: 'iniciacion',
    type: 'hub-perfil',
    meta: {
      title: 'Iniciación a las Artes Marciales en el Garraf | Empieza Aquí',
      description: 'No sabes qué arte marcial elegir. Normal. Esta guía te ayuda a decidir según tu objetivo, edad y carácter, y te orientamos gratis si sigues con dudas.',
    },
    h1: 'Iniciación a las Artes Marciales en el Garraf',
    intro: '¿No sabes por dónde empezar? Es lo más normal del mundo: hay muchas disciplinas y cada una promete algo distinto. Esta guía te ayuda a decidir con una lógica simple: qué buscas (forma física, autodefensa, disciplina para tus hijos, comunidad), cuánto contacto quieres y qué hay cerca de ti en la comarca del Garraf. Y si después de leer sigues con dudas, escríbenos: te orientamos sin coste y sin compromiso.',
    phase: 2,
  },
];

// ── Blog pages ─────────────────────────────────────────────────────────────────
const BLOG_PAGES: PageDef[] = [
  {
    slug: 'blog/donde-aprender-boxeo-en-el-garraf',
    type: 'blog',
    meta: {
      title: 'Dónde Aprender Boxeo en el Garraf [Guía 2026]',
      description: 'Guía completa sobre dónde aprender boxeo en la comarca del Garraf. Sitges, Vilanova i la Geltrú y alrededores. Cómo elegir gimnasio y empezar bien.',
    },
    h1: 'Dónde Aprender Boxeo en el Garraf',
    intro: 'El interés por el boxeo no deja de crecer, también en la comarca del Garraf. Si estás buscando dónde aprender boxeo en Sitges, Vilanova o cualquier municipio de la comarca, esta guía te explica qué opciones tienes, cómo evaluar un gimnasio y qué esperar de tus primeras clases.',
    phase: 2,
  },
  {
    slug: 'blog/mejor-arte-marcial-para-ninos-garraf',
    type: 'blog',
    meta: {
      title: 'Mejor Arte Marcial para Niños en el Garraf [Guía 2026]',
      description: 'Cuál es la mejor arte marcial para niños en el Garraf. Comparativa de karate, judo y taekwondo. Recomendaciones por edad. Guía para padres.',
    },
    h1: 'Cuál es la Mejor Arte Marcial para Niños en el Garraf',
    intro: 'Como padre o madre, elegir la arte marcial adecuada para tu hijo puede ser confuso: hay muchas opciones y cada una tiene sus ventajas. En esta guía comparamos las disciplinas más habituales para niños —karate, judo y taekwondo— y te damos criterios claros por edad, carácter y objetivo para decidir con fundamento.',
    phase: 2,
  },
  {
    slug: 'blog/defensa-personal-para-mujeres-garraf',
    type: 'blog',
    meta: {
      title: 'Defensa Personal para Mujeres en el Garraf [Guía 2026]',
      description: 'Guía completa de defensa personal para mujeres en el Garraf. Qué aprender, dónde, qué funciona de verdad. Técnicas reales para situaciones reales.',
    },
    h1: 'Defensa Personal para Mujeres en el Garraf: Guía Completa',
    intro: 'La defensa personal para mujeres es uno de los temas más importantes y peor abordados del mundo de las artes marciales: mucho mito, mucho marketing y poca sustancia. En esta guía te contamos qué técnicas funcionan realmente, cómo elegir un centro serio en la comarca del Garraf y qué esperar de las primeras semanas de entrenamiento.',
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
    intro: '¿Tienes 30, 40 o 50 años y quieres empezar artes marciales pero no sabes por dónde? Eres exactamente la persona para quien está escrita esta guía. Vamos a desmontar los miedos más comunes y a darte un plan claro para empezar, con las opciones reales que tienes en la comarca del Garraf.',
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
    intro: 'Es una de las dudas más frecuentes entre padres: ¿karate o taekwondo para mi hijo? Ambas son disciplinas excelentes, pero tienen diferencias importantes. Te explicamos cuáles son y cómo decidir en función de la edad, el carácter y los objetivos de tu hijo, con el contexto de la oferta disponible en el Garraf.',
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
