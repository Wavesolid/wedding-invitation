module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.VERCEL_URL ? `https://${proccess.env.VERCEL_URL}` : 'http://localhost:3000'
  },
}
