/** Foto de perfil (PNG sin fondo, alta resolución). */
export const PROFILE_IMAGE = '/images/bill-profile.png'

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

export const PROJECTS = [
  {
    id: '01',
    name: 'SIEI',
    full: 'Sistema de Inventario de Equipos Informáticos',
    role: 'Diseñador & Desarrollador',
    desc: 'Aplicación para registro, control y seguimiento de recursos informáticos desarrollada para la Alcaldía de Cabimas.',
    tech: ['Python', 'MySQL', 'Pandas', 'Matplotlib'],
    tag: 'Producción',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '02',
    name: 'Gestión de Vacunas',
    full: 'Software de Gestión de Vacunas',
    role: 'Tester',
    desc: 'App para la administración y control de carnet de vacunación en ambulatorio, desarrollada para UNERMB.',
    tech: ['Java (JDK)', 'MySQL', 'XAMPP'],
    tag: 'Estudio',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '03',
    name: 'Gestión de Pacientes',
    full: 'Software de Gestión de Pacientes',
    role: 'Tester',
    desc: 'Aplicación para el registro y control del historial médico en ambulatorio, desarrollada para UNERMB.',
    tech: ['Java (JDK)', 'MySQL', 'XAMPP'],
    tag: 'Estudio',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
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
  'skills',
  'contacto',
] as const
