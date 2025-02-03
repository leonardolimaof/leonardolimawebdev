/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: [], // Adicione aqui os domínios externos de imagens se necessário
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig; 