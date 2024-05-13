/** @type {import('next').NextConfig} */

const serverPort = process.env.NODE_ENV === 'production' ? 3010 : 20001;

const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://localhost:${serverPort}/:path*`
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