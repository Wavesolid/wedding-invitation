import '../styles/globals.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react";
import { useState } from 'react';
import Router from 'next/router';
import Loader from '../components/Loader/Loader';
import {PlayMusicContextProvider} from '../contexts/playMusic-context';
import {QrContextProvider} from '../contexts/QrContext';

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

  const getLayout = Component.getLayout || ((page) => page)
  return load? <Loader /> : getLayout(
    <SessionProvider>
      <QrContextProvider>
        <PlayMusicContextProvider>
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
        </PlayMusicContextProvider>
      </QrContextProvider>
    </SessionProvider>
  )

}

export default MyApp
