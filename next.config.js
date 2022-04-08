const getDomain = () => {
  if(process.env.NEXT_PUBLIC_VERCEL_ENV) {
    switch(process.env.NEXT_PUBLIC_VERCEL_ENV) {
      case 'production':
        return ''
      default:
        if(process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG === 'preview') {
          return 'https://weddingneysagintano.vercel.app'
        }
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
  }
} 

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.VERCEL_URL ? getDomain() : 'http://localhost:3000'
  },
}
