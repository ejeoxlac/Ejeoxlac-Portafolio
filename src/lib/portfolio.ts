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

export type Technology = {
  name: string
  icon: string
}

const TECH_STACK: Technology[] = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'Matplotlib',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  },
  {
    name: 'Proxmox',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg',
  },
  {
    name: 'XAMPP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
  },
]

const splitIndex = Math.ceil(TECH_STACK.length / 2)

export const TECHNOLOGIES = {
  row1: TECH_STACK.slice(0, splitIndex),
  row2: TECH_STACK.slice(splitIndex),
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
