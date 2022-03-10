module.exports = {
  async rewrites() {
      return [
        {
          source: '/pages/api/:path*',
          destination: 'https://api.notion.com/:path*',
        },
      ]
    },
};
