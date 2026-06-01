/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Si tu repo NO es username.github.io, descomenta y cambia esto:
  // basePath: '/tu-nombre-de-repo',
}

module.exports = nextConfig
