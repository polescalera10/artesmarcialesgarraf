export interface Location {
  slug: string;
  name: string;
  nameShort: string;
  comarca: string;
  province: string;
  priority: 1 | 2 | 3;
  desc: string;
  nearbyTowns?: string[];
  mapEmbed?: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: 'sitges',
    name: 'Sitges',
    nameShort: 'Sitges',
    comarca: 'Garraf',
    province: 'Barcelona',
    priority: 1,
    desc: 'Sitges es uno de los municipios más dinámicos de la comarca del Garraf, conocida por su carácter cosmopolita y su comunidad activa. Nuestro centro en Sitges ofrece todas las disciplinas en instalaciones modernas a pocos minutos del centro.',
    nearbyTowns: ['Castelldefels', 'Gavà', 'Begues'],
    mapEmbed: 'https://maps.google.com/maps?q=Sitges,+Barcelona&output=embed',
  },
  {
    slug: 'vilanova-i-la-geltru',
    name: 'Vilanova i la Geltrú',
    nameShort: 'Vilanova',
    comarca: 'Garraf',
    province: 'Barcelona',
    priority: 1,
    desc: 'Vilanova i la Geltrú es la capital de la comarca del Garraf y el municipio con mayor población. Nuestra sede principal está en Vilanova, con el horario más amplio y el mayor número de disciplinas disponibles.',
    nearbyTowns: ['Cubelles', 'Cunit', 'Calafell'],
    mapEmbed: 'https://maps.google.com/maps?q=Vilanova+i+la+Geltrú,+Barcelona&output=embed',
  },
  {
    slug: 'sant-pere-de-ribes',
    name: 'Sant Pere de Ribes',
    nameShort: 'Sant Pere de Ribes',
    comarca: 'Garraf',
    province: 'Barcelona',
    priority: 2,
    desc: 'Sant Pere de Ribes incluye núcleos como Les Roquetes, Avinyonet y Ribes. Desde nuestro centro más cercano en Sitges, todos los vecinos de Sant Pere de Ribes tienen acceso en menos de 10 minutos.',
    nearbyTowns: ['Avinyonet de Puigventós', 'Les Roquetes', 'La Plana Novella'],
  },
  {
    slug: 'cubelles',
    name: 'Cubelles',
    nameShort: 'Cubelles',
    comarca: 'Garraf',
    province: 'Barcelona',
    priority: 3,
    desc: 'Cubelles es un municipio costero entre Vilanova i la Geltrú y Cunit. Desde nuestra sede de Vilanova, los vecinos de Cubelles tienen acceso en menos de 8 minutos.',
    nearbyTowns: ['Cunit', 'Calafell', 'Segur de Calafell'],
  },
  {
    slug: 'canyelles',
    name: 'Canyelles',
    nameShort: 'Canyelles',
    comarca: 'Garraf',
    province: 'Barcelona',
    priority: 3,
    desc: 'Canyelles es un municipio del interior del Garraf. Los vecinos de Canyelles tienen acceso a nuestro centro en Vilanova en menos de 15 minutos por la C-15.',
    nearbyTowns: ['Olivella', 'Begues'],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find(l => l.slug === slug);
}

export const LOCATION_NAMES: Record<string, string> = {
  'sitges': 'Sitges',
  'vilanova-i-la-geltru': 'Vilanova i la Geltrú',
  'sant-pere-de-ribes': 'Sant Pere de Ribes',
  'cubelles': 'Cubelles',
  'canyelles': 'Canyelles',
};
