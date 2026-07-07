export interface Discipline {
  slug: string;
  name: string;
  nameEs: string;
  emoji: string;
  color: string;
  shortDesc: string;
  benefits: string[];
  suitable: string[];
  faq: { q: string; a: string }[];
}

export const DISCIPLINES: Discipline[] = [
  {
    slug: 'boxeo',
    name: 'Boxeo',
    nameEs: 'Boxeo',
    emoji: '🥊',
    color: '#DC2626',
    shortDesc: 'El arte del puñetazo. Técnica, potencia y condición física de élite.',
    benefits: ['Mejora cardiovascular extrema', 'Coordinación y reflejos', 'Descarga de estrés', 'Tonificación muscular completa'],
    suitable: ['Principiantes', 'Adultos', 'Mujeres', 'Deportistas'],
    faq: [
      { q: '¿Necesito equipación para empezar boxeo?', a: 'Para las primeras clases, en muchos gimnasios basta con ropa deportiva: es habitual que presten guantes y material básico al principio. Si decides continuar, el material propio esencial son guantes y vendas.' },
      { q: '¿El boxeo es peligroso para principiantes?', a: 'No. Las clases de iniciación son técnicas: aprendes a golpear correctamente sobre sacos y manoplas. El sparring libre es opcional y solo cuando el instructor lo considera apropiado según tu nivel.' },
      { q: '¿Cuántas veces por semana debo entrenar boxeo?', a: 'Dos sesiones semanales son suficientes para progresar de forma visible. Con tres, los resultados son notables en menos de dos meses.' },
      { q: '¿El boxeo sirve para adelgazar?', a: 'Es uno de los deportes más efectivos para perder peso. Una sesión de 60 minutos quema entre 500 y 800 kcal dependiendo de la intensidad.' },
      { q: '¿Puedo practicar boxeo sin querer competir?', a: 'Sí. La gran mayoría de quienes practican boxeo nunca compiten: entrenan para estar en forma, aprender técnica y disfrutar. En cualquier gimnasio serio la competición es siempre opcional.' },
    ],
  },
  {
    slug: 'karate',
    name: 'Karate',
    nameEs: 'Karate',
    emoji: '🥋',
    color: '#2563EB',
    shortDesc: 'Disciplina, respeto y técnica. El arte marcial más practicado del mundo.',
    benefits: ['Disciplina y concentración', 'Valores y respeto', 'Flexibilidad y coordinación', 'Defensa personal básica'],
    suitable: ['Niños desde 4 años', 'Adultos', 'Mayores', 'Principiantes'],
    faq: [
      { q: '¿Desde qué edad pueden empezar karate los niños?', a: 'Desde los 4 años. Las escuelas suelen organizar grupos por edades —prebenjamines (4-6 años), benjamines (7-9), alevines (10-12) y juveniles (13-15)— con metodología adaptada a cada franja.' },
      { q: '¿Cuánto tiempo se tarda en obtener el cinturón negro?', a: 'Depende del alumno, pero entre 5 y 8 años de entrenamiento regular es la media. El camino hasta el negro pasa por blanco, amarillo, naranja, verde, azul, marrón y negro.' },
      { q: '¿El karate sirve para la autodefensa real?', a: 'Sí. Las técnicas de karate son directamente aplicables en situaciones reales. Además, la conciencia situacional que desarrollas con el entrenamiento es igualmente valiosa.' },
      { q: '¿Cuántas veces a la semana se entrena karate?', a: 'Para niños, dos días semanales es el estándar. Para adultos que quieren progresar rápido, tres sesiones semanales.' },
      { q: '¿El karate es competitivo o solo recreativo?', a: 'Ambas cosas. Hay quien compite en el circuito catalán y quien practica exclusivamente por salud, disciplina y autodefensa. En una buena escuela, competir es una opción, nunca una obligación.' },
    ],
  },
  {
    slug: 'mma',
    name: 'MMA',
    nameEs: 'Artes Marciales Mixtas',
    emoji: '⚡',
    color: '#7C3AED',
    shortDesc: 'La evolución de las artes marciales. Golpeo + lucha en el sistema más completo.',
    benefits: ['Sistema de combate completo', 'Máxima condición física', 'Autoconfianza real', 'Adaptable a todos los niveles'],
    suitable: ['Adultos', 'Deportistas', 'Avanzados', 'Principiantes motivados'],
    faq: [
      { q: '¿Se puede empezar MMA desde cero?', a: 'Absolutamente. Un buen programa de iniciación al MMA empieza por los fundamentos de golpeo, derribo y suelo, sin exigir experiencia previa. Si un centro pide base marcial para entrar, busca otro para empezar.' },
      { q: '¿El MMA es peligroso?', a: 'El entrenamiento de MMA está muy controlado. Las técnicas se aprenden de forma progresiva y el sparring libre solo se realiza con protecciones y cuando el instructor lo autoriza.' },
      { q: '¿Qué disciplinas incluye el MMA?', a: 'El MMA combina striking (boxeo, kickboxing, muay thai), derribo (lucha, judo) y suelo (BJJ, grappling). Un buen programa trabaja las tres áreas de forma integrada, no como asignaturas sueltas.' },
      { q: '¿Cuántas veces por semana se entrena MMA?', a: 'Mínimo dos días para mantener nivel. Tres o cuatro para progresar de forma significativa. Las sesiones son de 90 minutos.' },
      { q: '¿El MMA sirve para la autodefensa?', a: 'Es uno de los sistemas más efectivos para la autodefensa real porque entrenas para defenderte en pie y en el suelo, que es donde acaban la mayoría de altercados.' },
    ],
  },
  {
    slug: 'kickboxing',
    name: 'Kickboxing',
    nameEs: 'Kickboxing',
    emoji: '🦵',
    color: '#D97706',
    shortDesc: 'Puños y patadas. La fusión perfecta entre boxeo y karate para ponerte en forma.',
    benefits: ['Quema calórica máxima', 'Técnica de piernas', 'Coordinación completa', 'Tono muscular global'],
    suitable: ['Todos los niveles', 'Adultos', 'Adolescentes', 'Mujeres'],
    faq: [
      { q: '¿El kickboxing es lo mismo que el muay thai?', a: 'Son similares pero diferentes. El kickboxing permite golpes de puño y patada. El muay thai añade codazos, rodillazos y clinch. Para iniciarse, el kickboxing suele ser más accesible.' },
      { q: '¿Qué equipación necesito para kickboxing?', a: 'Guantes de 10-12 oz, vendas, espinilleras y protector bucal. Para las primeras clases, muchos gimnasios prestan el material básico: pregúntalo antes de comprar nada.' },
      { q: '¿El kickboxing es bueno para las mujeres?', a: 'Es una de las disciplinas más elegidas por mujeres. La combinación de técnica y cardio lo hace ideal para ponerse en forma mientras aprendes a defenderte.' },
      { q: '¿Puedo combinar kickboxing con otra disciplina?', a: 'Sí y es muy recomendable. Kickboxing + BJJ es una combinación clásica que te da golpeo de pie y control en el suelo.' },
      { q: '¿Se compite en kickboxing?', a: 'Sí, hay un circuito catalán y nacional activo. Pero competir es completamente opcional: la mayoría de practicantes entrena por forma física y técnica.' },
    ],
  },
  {
    slug: 'muay-thai',
    name: 'Muay Thai',
    nameEs: 'Muay Thai',
    emoji: '🏆',
    color: '#059669',
    shortDesc: 'El arte de las ocho extremidades. Codos, rodillas, puños y patadas.',
    benefits: ['Potencia de golpeo máxima', 'Condición física de élite', 'Técnica de clinch', 'Confianza real'],
    suitable: ['Adultos', 'Deportistas', 'Todos los niveles'],
    faq: [
      { q: '¿El muay thai es demasiado duro para principiantes?', a: 'No. Las clases de iniciación son técnicas y se realizan con control. El contacto duro es progresivo y siempre opcional. Mucha gente practica muay thai exclusivamente por la técnica y el fitness.' },
      { q: '¿En qué se diferencia el muay thai del kickboxing?', a: 'El muay thai añade codazos, rodillazos y trabajo de clinch (agarre) al repertorio del kickboxing. Es considerado el arte de las ocho extremidades frente a las cuatro del kickboxing.' },
      { q: '¿Se puede aprender muay thai a los 40 años?', a: 'Sí. Es habitual empezar a los 35-45 años y progresar perfectamente: la intensidad se adapta y el muay thai mejora la condición física a cualquier edad.' },
      { q: '¿Qué material necesito para muay thai?', a: 'Guantes (12-16 oz), vendas, espinilleras, protector bucal y coquilla. Para las primeras clases, muchos gimnasios prestan el material básico: pregúntalo antes de invertir.' },
      { q: '¿Cuánto tiempo tarda en verse resultados físicos?', a: 'En 4-6 semanas entrenando dos días por semana notarás mejoras en resistencia y tono. En 3 meses, el cambio es visible para los demás.' },
    ],
  },
  {
    slug: 'jiu-jitsu-brasileno',
    name: 'BJJ',
    nameEs: 'Brazilian Jiu Jitsu',
    emoji: '🤼',
    color: '#1D4ED8',
    shortDesc: 'El arte del suelo. Domina a cualquier rival con técnica, sin fuerza bruta.',
    benefits: ['Defensa en el suelo', 'Resolución de problemas', 'Técnica sobre fuerza', 'Comunidad muy unida'],
    suitable: ['Todos los niveles', 'Adultos', 'Adolescentes'],
    faq: [
      { q: '¿El BJJ es efectivo para la autodefensa?', a: 'Es posiblemente el arte marcial más validado en situaciones reales. El 90% de las peleas acaban en el suelo, y el BJJ es el sistema más completo para dominar esa posición.' },
      { q: '¿Necesito estar en forma para empezar BJJ?', a: 'No. El BJJ te pone en forma mientras lo practicas. La técnica permite que alguien más pequeño y menos fuerte controle a un rival mayor. El primer mes es de aprendizaje puro.' },
      { q: '¿Cuánto tiempo lleva conseguir la cinta azul?', a: 'Depende del alumno y la frecuencia de entrenamiento. La media es entre 1 y 2 años entrenando regularmente. No hay exámenes formales: el instructor decide según tu progresión real.' },
      { q: '¿El BJJ incluye golpes?', a: 'El BJJ deportivo no incluye golpes. Se centra en derribos, control y sumisiones (llaves articulares y estrangulamientos). Para el aspecto de golpeo puedes complementar con boxeo o MMA.' },
      { q: '¿Qué significa "rollar" en BJJ?', a: 'Rollar es el término para el sparring en BJJ. Es la práctica libre donde aplicas técnicas contra un compañero que también intenta aplicarlas. Es controlado, con respeto mutuo y siempre supervisado.' },
    ],
  },
  {
    slug: 'judo',
    name: 'Judo',
    nameEs: 'Judo',
    emoji: '🥋',
    color: '#0891B2',
    shortDesc: 'El arte suave del derribo. Usa la fuerza del rival para lanzarle al suelo.',
    benefits: ['Equilibrio y coordinación', 'Fuerza funcional', 'Caídas seguras', 'Valores olímpicos'],
    suitable: ['Niños desde 5 años', 'Adultos', 'Competidores', 'Principiantes'],
    faq: [
      { q: '¿Es el judo seguro para los niños?', a: 'Es uno de los deportes más seguros para niños. La primera habilidad que se aprende es caer correctamente (ukemi), lo que evita lesiones dentro y fuera del tatami.' },
      { q: '¿Cuántos grados hay en judo antes del cinturón negro?', a: 'Los grados son: blanco, amarillo, naranja, verde, azul, marrón y negro. Para niños hay un sistema de grading más progresivo con cinturones intermedios.' },
      { q: '¿El judo sirve para la autodefensa?', a: 'Sí. Las técnicas de derribo y control del judo son muy efectivas. Además, la capacidad de caer sin hacerse daño es en sí misma una habilidad de autodefensa.' },
      { q: '¿Qué ropa se usa en judo?', a: 'El judogi (traje de judo). Muchos clubes tienen alguno para préstamo en las primeras sesiones; si continúas, necesitarás uno propio adecuado a tu talla y nivel.' },
      { q: '¿Puedo competir en judo?', a: 'Sí. Hay un circuito activo en Cataluña desde categoría benjamín. La competición siempre es voluntaria: si es tu objetivo, busca un club con experiencia preparando competidores.' },
    ],
  },
  {
    slug: 'taekwondo',
    name: 'Taekwondo',
    nameEs: 'Taekwondo',
    emoji: '🦶',
    color: '#BE185D',
    shortDesc: 'El arte de los pies. Patadas altas, velocidad y precisión. Deporte olímpico.',
    benefits: ['Flexibilidad extrema', 'Velocidad y reflejos', 'Disciplina mental', 'Deporte olímpico federado'],
    suitable: ['Niños desde 4 años', 'Adultos', 'Competidores'],
    faq: [
      { q: '¿El taekwondo es un deporte olímpico?', a: 'Sí, desde los Juegos de Seúl 1988. Es uno de los deportes de combate más practicados del mundo con presencia en más de 200 países.' },
      { q: '¿Qué diferencia hay entre WT e ITF?', a: 'WT (World Taekwondo) es el estilo olímpico, con petos electrónicos y competición de puntos. ITF (International Taekwondo Federation) tiene un enfoque más tradicional con patrones (tul). Pregunta a cada escuela qué estilo imparte antes de apuntarte.' },
      { q: '¿El taekwondo es bueno para la flexibilidad?', a: 'Es uno de los mejores deportes para desarrollar flexibilidad. Las patadas altas requieren y desarrollan una flexibilidad notable, especialmente en cadera y isquiotibiales.' },
      { q: '¿Desde qué edad pueden empezar los niños?', a: 'Desde los 4 años. A estas edades el foco está en coordinación, equilibrio y juego. El taekwondo como disciplina completa se introduce a partir de los 6-7 años.' },
      { q: '¿Cuánto tiempo tarda en obtenerse el cinturón negro?', a: 'Entre 3 y 5 años de entrenamiento regular es la media. El sistema de grados va del blanco al negro, pasando por amarillo, verde, azul y rojo.' },
    ],
  },
  {
    slug: 'defensa-personal',
    name: 'Defensa Personal',
    nameEs: 'Defensa Personal',
    emoji: '🛡️',
    color: '#DC2626',
    shortDesc: 'Técnicas reales para situaciones reales. Sin florituras, sin mitos.',
    benefits: ['Conciencia situacional', 'Técnicas aplicables inmediatamente', 'Confianza en situaciones de riesgo', 'Sin requisitos previos'],
    suitable: ['Mujeres', 'Todos los adultos', 'Adolescentes', 'Principiantes'],
    faq: [
      { q: '¿Cuánto tiempo se tarda en aprender defensa personal básica?', a: 'Con un curso intensivo de 8 horas tienes las técnicas fundamentales. Con un mes de clases regulares, las tienes interiorizadas. La defensa personal no requiere años de práctica para ser funcional.' },
      { q: '¿Es diferente la defensa personal para mujeres?', a: 'Los buenos programas femeninos abordan las situaciones de riesgo más comunes para mujeres —agresiones por detrás, agarres, situaciones de acoso— con un enfoque distinto al genérico. Si esto es lo que buscas, pregunta específicamente por ello al elegir centro.' },
      { q: '¿Necesito condición física para aprender defensa personal?', a: 'No. La defensa personal efectiva se basa en técnica y posicionamiento, no en fuerza. Una persona de 55 kg puede neutralizar a alguien de 100 kg con la técnica correcta.' },
      { q: '¿En qué artes marciales se basa la buena defensa personal?', a: 'Los programas serios integran técnicas de boxeo, BJJ, judo y krav maga, seleccionadas por efectividad demostrada y no por tradición. Desconfía de sistemas que prometen resultados sin contacto ni presión progresiva.' },
      { q: '¿Hay clases solo de defensa personal o hay que hacer un arte marcial completo?', a: 'Existen cursos específicos de defensa personal que no requieren practicar otro arte marcial. También puedes combinarla con una disciplina de base como boxeo o BJJ para consolidar lo aprendido.' },
    ],
  },
  {
    slug: 'krav-maga',
    name: 'Krav Maga',
    nameEs: 'Krav Maga',
    emoji: '⚔️',
    color: '#374151',
    shortDesc: 'Sistema de combate israelí. Brutalidad técnica para el mundo real.',
    benefits: ['Eficacia máxima en situación real', 'Sin reglas artificiales', 'Adrenalina y autocontrol', 'Técnicas de neutralización rápida'],
    suitable: ['Adultos', 'Deportistas', 'Seguridad privada'],
    faq: [
      { q: '¿Qué es el krav maga?', a: 'Es el sistema de combate cuerpo a cuerpo desarrollado por las Fuerzas de Defensa de Israel. A diferencia de las artes marciales deportivas, no tiene reglas: su único objetivo es neutralizar una amenaza de forma rápida y eficaz.' },
      { q: '¿El krav maga es demasiado violento?', a: 'El krav maga es directo y eficaz. En clase se trabaja de forma controlada, con el énfasis en la técnica y en entender las situaciones de riesgo. No es más violento que el MMA como deporte.' },
      { q: '¿Necesito experiencia marcial para empezar krav maga?', a: 'No. El krav maga está diseñado para aprenderse rápido. En pocas semanas tienes técnicas funcionales para situaciones reales.' },
      { q: '¿El krav maga sirve para mujeres?', a: 'Especialmente. Muchas técnicas de krav maga están diseñadas para que personas con menos masa muscular puedan neutralizar amenazas mayores. Es altamente recomendable como complemento de defensa personal femenina.' },
      { q: '¿En qué se diferencia el krav maga de la defensa personal?', a: 'La defensa personal es un paraguas que incluye técnicas de diversas artes marciales. El krav maga es un sistema específico con metodología y certificaciones propias. Ambos enfoques son complementarios.' },
    ],
  },
];

export function getDisciplineBySlug(slug: string): Discipline | undefined {
  return DISCIPLINES.find(d => d.slug === slug);
}
