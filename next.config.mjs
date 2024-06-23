/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data.usepie.ng',
        port: '',
        pathname: '/storage/tmp/thumbs/**',
      },
    ],
  },
}


export default nextConfig;
