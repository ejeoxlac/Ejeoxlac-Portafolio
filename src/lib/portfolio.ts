const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Foto de perfil (PNG sin fondo, alta resolución). */
export const PROFILE_IMAGE = `${assetBase}/images/bill-profile.png`

export const SKILLS = [
  { name: 'Git', level: 'Alto', pct: 90 },
  { name: 'Instalación de Software', level: 'Alto', pct: 90 },
  { name: 'Mantenimiento de Equipos', level: 'Alto', pct: 90 },
  { name: 'Habilidades Organizativas', level: 'Alto', pct: 85 },
  { name: 'Python', level: 'Medio', pct: 65 },
  { name: 'SQL', level: 'Medio', pct: 65 },
  { name: 'Docker', level: 'Medio', pct: 60 },
  { name: 'Proxmox', level: 'Medio', pct: 60 },
  { name: 'Microsoft Office', level: 'Medio', pct: 60 },
  { name: 'Atención al Cliente', level: 'Medio', pct: 55 },
  { name: 'C#', level: 'Básico', pct: 35 },
]

export type TechCategory = 'language' | 'library' | 'framework' | 'database' | 'tool' | 'os'

export type Technology = {
  name: string
  icon: string
  category: TechCategory
}

const TECH_ITEMS: Technology[] = [
  {
    name: 'Python',
    category: 'language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Java',
    category: 'language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C#',
    category: 'language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'SQL',
    category: 'language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Pandas',
    category: 'library',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'Matplotlib',
    category: 'library',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  },
  {
    name: 'React',
    category: 'library',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    category: 'framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'NestJS',
    category: 'framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'Docker',
    category: 'tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'SQLite',
    category: 'database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'XAMPP',
    category: 'tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
  },
  {
    name: 'Git',
    category: 'tool',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Obsidian',
    category: 'tool',
    icon: 'https://cdn.simpleicons.org/obsidian/7C3AED',
  },
  {
    name: 'Windows',
    category: 'os',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg',
  },
  {
    name: 'Linux',
    category: 'os',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Proxmox',
    category: 'os',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg',
  },
]

export const TECH_STACK: Technology[] = TECH_ITEMS

export const TECH_STACK_GROUPS = [
  { title: 'Lenguajes de programación', category: 'language' as const },
  { title: 'Bibliotecas', category: 'library' as const },
  { title: 'Frameworks', category: 'framework' as const },
  { title: 'Bases de datos', category: 'database' as const },
  { title: 'Herramientas para desarrollo', category: 'tool' as const },
  { title: 'Sistemas operativos', category: 'os' as const },
].map((group) => ({
  title: group.title,
  items: TECH_ITEMS.filter((t) => t.category === group.category),
}))

// Misma cantidad de iconos en ambas filas para que el carrusel llene el ancho
const rotate = <T,>(arr: T[], offset: number) =>
  arr.map((_, i) => arr[(i + offset) % arr.length]!)

export const TECHNOLOGIES = {
  row1: TECH_STACK,
  row2: rotate(TECH_STACK, 4),
}

export type Project = {
  id: string
  name: string
  full: string
  role: string
  desc: string
  tech: string[]
  tag: string
  year: string
  image: string
  repoStatus: 'public' | 'private'
  repoUrl?: string
}

/** Placeholder neutro (gradiente + nombre) hasta tener capturas reales. */
function projectPlaceholder(name: string, from: string, to: string): string {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="900" height="600" fill="url(#g)"/>
  <text x="450" y="310" text-anchor="middle" fill="rgba(255,255,255,0.92)"
    font-family="ui-sans-serif, system-ui, sans-serif" font-size="42" font-weight="600">${name}</text>
</svg>`.trim()

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    name: 'GRAU-UPTZ',
    full: 'Sistema de Gestión de Procesos Académicos Universitarios',
    role: 'Desarrollador principal',
    desc: 'Sistema de gestión de procesos académicos universitarios: control de notas, planes de estudio, registro de estudiantes, matrícula automática, evaluación docente y reportes administrativos.',
    tech: [
      'Next.js 15',
      'NestJS',
      'Prisma ORM',
      'PostgreSQL',
      'JWT',
      'NextAuth.js',
      'React Query',
      'Tailwind CSS',
      'shadcn/ui',
      'Swagger',
    ],
    tag: 'En desarrollo activo',
    year: '2026',
    image: projectPlaceholder('GRAU-UPTZ', '#1e293b', '#334155'),
    repoStatus: 'private',
  },
  {
    id: '02',
    name: 'SIGUM',
    full: 'Sistema de Registro de Camiones de Agua',
    role: 'Desarrollador principal',
    desc: 'Sistema para el registro de camiones de agua de la parroquia, con dashboard, listado, detalle por camión y descarga de código QR con logos (app + Alcaldía de Cabimas).',
    tech: ['Next.js 14', 'Material UI', 'Recharts', 'NestJS', 'Prisma ORM', 'JWT'],
    tag: 'Desarrollado — no implementado',
    year: '2025',
    image: projectPlaceholder('SIGUM', '#0f172a', '#1e3a5f'),
    repoStatus: 'private',
  },
  {
    id: '03',
    name: 'SCCSC',
    full: 'Sistema Comunitario Cabimas',
    role: 'Desarrollador principal',
    desc: 'Registro y seguimiento de necesidades comunitarias por parroquia en Cabimas, con roles diferenciados (Alcalde, Administrador, Coordinador, Director, Desarrollador), mapas y dashboards.',
    tech: [
      'Next.js',
      'Material UI',
      'TypeScript',
      'NestJS',
      'Prisma ORM',
      'React-Leaflet',
      'OpenStreetMap',
      'Recharts',
      'Multer',
    ],
    tag: '80% — Pausado',
    year: '2025',
    image: projectPlaceholder('SCCSC', '#14532d', '#1e3a5f'),
    repoStatus: 'private',
  },
  {
    id: '04',
    name: 'PIRC',
    full: 'Sistema de Registro Civil',
    role: 'Colaborador (mejoras y finalización)',
    desc: 'Gestión de registro civil de nacimientos, defunciones y reconocimientos, con generación de actas en PDF y control territorial por estados/municipios/parroquias.',
    tech: [
      'Laravel 11',
      'PHP 8.2',
      'Livewire 3',
      'Laravel Jetstream',
      'Tailwind CSS',
      'Alpine.js',
      'MySQL/PostgreSQL',
      'DomPDF',
    ],
    tag: 'Pausado — mejoras pendientes',
    year: '2024',
    image: projectPlaceholder('PIRC', '#3f2e1e', '#5c4033'),
    repoStatus: 'private',
  },
  {
    id: '05',
    name: 'MIC',
    full: 'Mapa Interactivo de Cabimas',
    role: 'Desarrollador principal',
    desc: 'Mapa interactivo offline con ubicaciones de entidades públicas de Cabimas (salud, seguridad, bomberos, gobierno), con filtros, marcadores personalizados y pin arrastrable para obtener coordenadas.',
    tech: ['Next.js', 'React', 'Leaflet', 'React-Leaflet'],
    tag: 'Exploración técnica',
    year: '2025',
    image: projectPlaceholder('MIC', '#1e293b', '#0e7490'),
    repoStatus: 'public',
    repoUrl: 'https://github.com/ejeoxlac/MIC',
  },
  {
    id: '06',
    name: 'SIEI',
    full: 'Sistema de Inventario de Equipos Informáticos',
    role: 'Desarrollador principal',
    desc: 'Gestión de bienes muebles vinculados a departamentos de una organización, con seguimiento detallado de activos asignados por área. Proyecto universitario con intención de implementación institucional.',
    tech: ['Python', 'MySQL', 'Pandas', 'Matplotlib'],
    tag: 'En planes de migrar a web',
    year: '2024',
    image: projectPlaceholder('SIEI', '#1e293b', '#475569'),
    repoStatus: 'public',
    repoUrl: 'https://github.com/ejeoxlac/SIEI',
  },
]

export type Contribution = {
  project: string
  author: string
  repoUrl: string
  description: string
  contribution: string
  tech?: string[]
}

export const CONTRIBUTIONS: Contribution[] = [
  {
    project: 'Obsidian--ITS-Theme',
    author: 'ITS Theme (Obsidian)',
    repoUrl: 'https://github.com/ejeoxlac/Obsidian--ITS-Theme',
    description:
      'Tema visual para Obsidian, un editor de notas basado en Markdown.',
    contribution:
      'Solucioné un problema de interlineado en el archivo theme.css: en la línea 2980, la propiedad line-height (establecida en 1.3em) hacía que el texto de los títulos de las tarjetas en modo Canvas se solapara al hacer zoom out, especialmente en recuadros pequeños o con títulos largos. Cambié el valor a \'normal\' para corregir el solapamiento.',
    tech: ['CSS'],
  },
]

export const APTITUDES = [
  'Aprendiz rápido',
  'Metódico',
  'Diligente',
  'Autodidacta',
  'Trabajo bajo presión',
  'Responsable',
  'Resiliente',
  'Buen trabajo en equipo',
]

export const EDUCATION = [
  { period: '2022 – 2024', title: 'Ing. en Informática', org: 'UNERMB' },
  { period: '2020 – 2022', title: 'T.S.U en Informática', org: 'UNERMB' },
  {
    period: '2015 – 2020',
    title: 'Bachiller',
    org: 'U.E.N Julia Añez Gabaldón / U.E.P Santa Marta',
  },
]

export const NAV_LINKS = [
  'inicio',
  'sobre-mi',
  'experiencia',
  'proyectos',
  'contribuciones',
  'skills',
  'contacto',
] as const
