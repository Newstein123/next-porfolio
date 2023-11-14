/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.pngall.com',
            port: '',
            pathname: '/wp-content/uploads/5/Profile-Male-PNG.png',
          },
          {
            protocol: 'https',
            hostname: 'www.laminationsonline.com',
            port: '',
            pathname: '/wp-content/uploads/2019/03/placeholder-400x300.png',
          }
        ],
      },  
}

module.exports = nextConfig
