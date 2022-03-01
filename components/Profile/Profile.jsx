import styles from './Profile.module.css';
import { motion, useAnimation } from 'framer-motion';
import { InView} from 'react-intersection-observer';

export default function profile() {

    // set animation
    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    const animation4 = useAnimation();
    
    const animation5 = useAnimation();

    const animation6 = useAnimation();

    const viewHandler = (inView) => {
        if(inView){
            animation.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1.5
                }
            });
        }

        if(!inView){
            animation.start({
                y: -30,
                opacity: 0.2,
            });
        }
    }

    const viewHandler2 = (inView) => {

        if(inView){
            animation2.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            animation3.start({
                x:0,
                opacity:1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.2
                }
            });
        }

        if(!inView){
            animation2.start({
                opacity: 0.2,
            });

            animation3.start({
                x: -10,
                opacity: 0.6
            });
        }
    }

    const viewHandler3 = (inView) => {
        if(inView){
            animation4.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1.5
                }
            });
        }

        if(!inView){
            animation4.start({
                y: -30,
                opacity: 0.2,
            });
        }
    }

    const viewHandler4 = (inView) => {

        if(inView){
            animation5.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            animation6.start({
                x: 0,
                opacity:1,
                transition: {
                    duration: 1
                }
            });
        }

        if(!inView){
            animation5.start({
                opacity: 0.2,
            });

            animation6.start({
                x:-10,
                opacity: 0.6
            });
        }
    }


    return(
        <div className="bg-[#0D0D0D] text-[#F2C777] py-[38px]">
            <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler}>
                <div className="text-center">
                    <span className='text-[24px] font-bold'>Bride &#38; Groom</span>
                </div>
            </InView>
            <div>
                <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler2}>
                    <motion.div animate={animation} className={styles.circleStroke}>
                        <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoWanita.png" alt="foto wanita"></img>
                    </motion.div>
                </InView>
                <motion.div animate={animation2} className='flex flex-col items-center mt-[14px]'>
                    <span className='text-[20px] font-bold'>Jennifer Sitompul</span>
                    <span className='mb-[8px]'>Putri pertama dari</span>
                    <span>Ahmad</span>
                    <span>&#38;</span>
                    <span>Santi</span>
                    <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler3}>
                        <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                            <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                        </a>
                    </InView>
                </motion.div>
            </div>
            <div>
                <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler4}>
                    <motion.div animate={animation4} className={styles.circleStroke}>
                        <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoPria.png" alt="foto pria"></img>
                    </motion.div>
                </InView>
                <motion.div animate={animation5} className='flex flex-col items-center mt-[14px]'>
                    <span className='text-[20px] font-bold'>Amir Hamzah</span>
                    <span className='mb-[8px]'>Putra pertama dari</span>
                    <span>Miftah</span>
                    <span>&#38;</span>
                    <span>Silvi</span>
                    <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                        <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                    </a>
                </motion.div>
            </div>
            <div>
                <motion.img animate={animation6} className='float-right mt-[-13rem]' src='/Icon/asset-wayang-2.svg'></motion.img>
                <motion.img animate={animation3} className='float-left  mt-[-40rem]' src='/Icon/asset-wayang-1.svg'></motion.img>
            </div>
        </div>
    )
}