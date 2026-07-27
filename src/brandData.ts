export interface CanvaTemplate {
  id: string;
  name: string;
  icon: string;
  category: 'social' | 'event' | 'comms';
  link: string;
}

export interface CampaignAsset {
  id: string;
  name: string;
  format: string;
  link: string;
}

export const CANVA_TEMPLATES: CanvaTemplate[] = [
  {
    id: 'avatar',
    name: 'Avatar redes',
    icon: '👤',
    category: 'social',
    link: 'https://canva.link/xpms6fwspcdqh3g',
  },
  {
    id: 'portada-redes',
    name: 'Portada redes',
    icon: '🖼️',
    category: 'social',
    link: 'https://canva.link/1z14cbuylwe35gl',
  },
  {
    id: 'portada-video',
    name: 'Portada vídeo redes',
    icon: '▶',
    category: 'social',
    link: 'https://canva.link/z86yo6p66wzitq1',
  },
  {
    id: 'noticias',
    name: 'Recortes de noticias',
    icon: '📰',
    category: 'comms',
    link: 'https://canva.link/r34wnhvwlbedf1g',
  },
  {
    id: 'entrevista',
    name: 'Anunciar entrevista',
    icon: '🎙️',
    category: 'comms',
    link: 'https://canva.link/rhrg6opio93nyf5',
  },
  {
    id: 'asamblea',
    name: 'Asamblea',
    icon: '🤝',
    category: 'event',
    link: 'https://canva.link/h4mvl1j8oqbs2aj',
  },
  {
    id: 'acto-publico',
    name: 'Acto público',
    icon: '📢',
    category: 'event',
    link: 'https://canva.link/h4mvl1j8oqbs2aj', // Same link as original
  },
  {
    id: 'mesa-informativa',
    name: 'Mesa informativa',
    icon: '📍',
    category: 'event',
    link: 'https://canva.link/rd40hsjsnxld4fx',
  },
  {
    id: 'graficos',
    name: 'Gráficos',
    icon: '📊',
    category: 'comms',
    link: 'https://canva.link/3o4kyryl1o79bx1',
  },
  {
    id: 'carrusel',
    name: 'Cierre carrusel',
    icon: '🏁',
    category: 'social',
    link: 'https://canva.link/rycr9vhskc11utd',
  },
  {
    id: 'agenda',
    name: 'Calendario / Agenda',
    icon: '📅',
    category: 'comms',
    link: 'https://canva.link/og7sjqeoqu27f71',
  }
];

export const CAMPAIGN_ASSETS: CampaignAsset[] = [
  {
    id: 'cartel',
    name: 'Cartel',
    format: 'General Campaña',
    link: 'https://drive.google.com/file/d/1j_3xE9bXA_RkIf-JVlOC4ZwcsIhGqZff/view?usp=sharing'
  },
  {
    id: 'pegatina',
    name: 'Pegatina',
    format: 'Formato A6',
    link: '#'
  },
  {
    id: 'folleto',
    name: 'Folleto',
    format: 'Díptico Informativo',
    link: 'https://drive.google.com/drive/folders/1y5RuVkfmRvSMJ15EbTQN8L9bx3OuhIru?usp=sharing'
  },
  {
    id: 'banderola',
    name: 'Banderola',
    format: 'Especial Puentes',
    link: 'https://drive.google.com/file/d/1omCAKe3WA-YhxGUFC1kaX6-J5t1LaD0E/view?usp=sharing'
  },
  {
    id: 'abanico',
    name: 'Abanico',
    format: 'Merchandising',
    link: '#'
  },
  {
    id: 'rollup',
    name: 'Rollup',
    format: 'Eventos y Ruedas',
    link: 'https://drive.google.com/file/d/1LkixJCt8Sn29F17qRhWKL6609hKZllzA/view?usp=sharing'
  },
  {
    id: 'test-afinidad',
    name: 'Test Afinidad',
    format: 'Interacción RRSS',
    link: 'https://drive.google.com/file/d/1ZELwEUexMTgn1YpK7CERHyPRScDiCA7d/view?usp=sharing'
  },
  {
    id: 'pegatina-taxi',
    name: 'Pegatina Taxi',
    format: '70 x 40 cm',
    link: 'https://drive.google.com/file/d/1laVgofNJs9y6YgTmWfDD949dw0XJwzcI/view?usp=sharing'
  }
];

export const COLOR_PALETTE = {
  main: {
    name: 'Verde Adelante',
    hex: '#24C87F',
    desc: 'Tono principal de marca y acción política de Adelante Andalucía.'
  },
  complementary: [
    { name: 'Verde oscuro', hex: '#004242', desc: 'Fondo oscuro para máxima fuerza.' },
    { name: 'Neon Green', hex: '#00FF8D', desc: 'Destacados de vídeo y llamadas a la acción.' },
    { name: 'Warm Cream', hex: '#FAF3E0', desc: 'Fondo cálido y detalles de contraste.' },
    { name: 'Pure White', hex: '#FFFFFF', desc: 'Limpio, puro y de alta legibilidad.' }
  ]
};

export const SIZE_SPECIFICATIONS = [
  { label: 'A1', dimensions: '594 x 841 mm', relative: 'A2 × 2', color: 'bg-brand-green/90' },
  { label: 'A2', dimensions: '420 x 594 mm', relative: 'A3 × 2', color: 'bg-brand-green/80' },
  { label: 'A3', dimensions: '297 x 420 mm', relative: 'A4 × 2', color: 'bg-brand-green/70' },
  { label: 'A4', dimensions: '210 x 297 mm', relative: 'Folio estándar', color: 'bg-brand-green/60' },
  { label: 'A5', dimensions: '148 x 210 mm', relative: '1/2 Folio', color: 'bg-brand-green/50' },
  { label: 'A6', dimensions: '105 x 148 mm', relative: 'Pegatinas', color: 'bg-brand-green/40' }
];
