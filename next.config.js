/** @type {import('next').NextConfig} */
// Vacío si el repo es username.github.io; si no, el nombre del repo:
const basePath = '/Ejeoxlac-Portafolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
