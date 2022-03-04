import '../styles/globals.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react";
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../components/Loader/Loader';

function MyApp({ Component, pageProps, router }) {
  const [load, setLoad] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setLoad(true);
  });
  
  Router.events.on('routeChangeComplete', () => {
    setLoad(false);
  });
  
  Router.events.on('routeChangeError', () => {
    setLoad(false);
  });

  let content;
  load ? content = <Loader /> : content= <Component {...pageProps} />;
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
        {content}
      </motion.div>
    </SessionProvider>
  )

}

export default MyApp
