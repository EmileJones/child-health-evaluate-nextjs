/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://hospital:80/:path*`
        },
      ],
    }
  },
  env: {
    TOKEN_KEY: 'Token',
    VERSION: '1.0.0'
  }
}

module.exports = nextConfig
