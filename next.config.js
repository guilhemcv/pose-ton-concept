module.exports = {
  async rewrites() {
    
      return [
        {
          source: '/pages/api/:path*',
          destination: 'https://api.notion.com/:path*',
        },
        {
          destination: 'https://cdn.splitbee.io/sb.js',
          source: '/sb.js'
        },
        {
          destination: 'https://hive.splitbee.io/:slug',
          source: '/sb-api/:slug'
        }
      ];
    },
};
