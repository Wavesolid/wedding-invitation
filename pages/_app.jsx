import '../styles/globals.css';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
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
  )

}

export default MyApp
