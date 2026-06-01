/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Si tu repo NO es username.github.io, descomenta y cambia esto:
  basePath: '/Ejeoxlac-Portafolio',
}

module.exports = nextConfig
