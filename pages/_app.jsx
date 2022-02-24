import '../styles/globals.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <SessionProvider>
      <motion.div 
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </SessionProvider>
  )

}

export default MyApp
