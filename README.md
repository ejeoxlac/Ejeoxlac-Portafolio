# Bill Anthony Niño Riera — Portfolio

Portafolio personal de un Ingeniero en Informática. Sitio de una sola página con secciones de presentación, experiencia, proyectos y contacto. Construido con **Next.js** y exportado como sitio estático para **GitHub Pages**.

## Stack

- **Next.js 16** (App Router, Static Export)
- **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (Base UI)
- **Motion** — animaciones de fondo y transiciones
- **CSS Modules** — estilos del layout del portafolio
- **Geist** (Google Fonts) + **Lucide React**

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       # Metadata, tema oscuro, fuente global
│   ├── page.tsx         # Composición de secciones
│   └── globals.css      # Tailwind + variables CSS
├── components/
│   ├── About.tsx
│   ├── BackgroundMotion.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── TypeWriter.tsx
│   └── ui/              # Componentes shadcn (badge, button, card…)
├── lib/
│   ├── portfolio.ts     # Datos del portafolio (skills, proyectos, etc.)
│   └── utils.ts
└── styles/
    └── portfolio.module.css
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Comando        | Descripción                          |
|----------------|--------------------------------------|
| `npm run dev`  | Servidor de desarrollo               |
| `npm run build`| Genera la exportación estática en `out/` |
| `npm run start`| Sirve el build (modo no estático)    |

## Personalización

Los datos editables están centralizados en `src/lib/portfolio.ts`:

- `SKILLS` — habilidades con nivel y porcentaje
- `PROJECTS` — proyectos con descripción y tecnologías
- `APTITUDES` — aptitudes personales
- `EDUCATION` — formación académica
- `NAV_LINKS` — enlaces de navegación

Los textos y estilos de cada sección viven en `src/components/`. El layout general usa `src/styles/portfolio.module.css`.

## Deploy en GitHub Pages

### 1. Crea el repositorio

Crea un repo en GitHub. Si quieres que la URL sea `https://tu-usuario.github.io`, el nombre debe ser `tu-usuario.github.io`. Si prefieres una sub-ruta como `https://tu-usuario.github.io/portfolio`, el nombre puede ser `portfolio`.

### 2. Configura `next.config.js`

Si tu repo **no** es `tu-usuario.github.io`, descomenta y ajusta `basePath`:

```js
basePath: '/nombre-de-tu-repo',
```

### 3. Activa GitHub Pages

En tu repo → **Settings → Pages → Source → GitHub Actions**

### 4. Sube el código

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

El workflow `.github/workflows/deploy.yml` construirá y desplegará el sitio automáticamente con cada push a `main`.
