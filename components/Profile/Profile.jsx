import styles from './Profile.module.css';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function Profile() {

    // set animation
    const Animation = useAnimation();

    const Animation2 = useAnimation();

    const Animation3 = useAnimation();

    const Animation4 = useAnimation();
    
    const Animation5 = useAnimation();

    const Animation6 = useAnimation();

    const Animation7 = useAnimation();

    const Animation8 = useAnimation();

    const viewHandler = (inView) => {
        if(inView){
            Animation.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1.5
                }
            });
        }

        if(!inView){
            Animation.start({
                y: -30,
                opacity: 0.2,
            });
        }
    }

    const viewHandler2 = (inView) => {

        if(inView){
            Animation2.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            Animation3.start({
                x:0,
                opacity:1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.2
                }
            });

            Animation7.start({
                y:0,
                opacity:1,
                transition: {
                    duration: 0.5,
                    ease:"easeIn"
                }
            });
        }

        if(!inView){
            Animation2.start({
                opacity: 0.2,
            });

            Animation3.start({
                x: -10,
                opacity: 0.6
            });

            Animation7.start({
                y:30,
                opacity:0.3
            });
        }
    }

    const viewHandler3 = (inView) => {
        if(inView){
            Animation4.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1.5
                }
            });
        }

        if(!inView){
            Animation4.start({
                y: -30,
                opacity: 0.2,
            });
        }
    }

    const viewHandler4 = (inView) => {

        if(inView){
            Animation5.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            Animation6.start({
                x: 0,
                opacity:1,
                transition: {
                    duration: 1
                }
            });

            Animation8.start({
                y:0,
                opacity:1,
                transition: {
                    duration: 0.5,
                    ease:"easeIn"
                }
            });
        }

        if(!inView){
            Animation5.start({
                opacity: 0.2,
            });

            Animation6.start({
                x:-10,
                opacity: 0.6
            });

            Animation8.start({
                y:40,
                opacity:0.2
            });
        }
    }


    return(
        <div className="bg-[#621109] text-[#F2C777] py-[38px]">
            <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler}>
                <div className="text-center">
                    <span className='text-[24px] font-bold'>Bride &#38; Groom</span>
                </div>
            </InView>
            <div>
                <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler2}>
                    <motion.div animate={Animation} className={styles.circleStroke}>
                        <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoWanita.png" alt="foto wanita"></img>
                    </motion.div>
                </InView>
                <motion.div animate={Animation2} className='flex flex-col items-center mt-[14px]'>
                    <motion.span animate={Animation7} className='text-[20px] font-bold'>Jennifer Sitompul</motion.span>
                    <motion.span animate={Animation7} className='mb-[8px]'>Putri pertama dari</motion.span>
                    <motion.span animate={Animation7} >Ahmad</motion.span>
                    <motion.span animate={Animation7} >&#38;</motion.span>
                    <motion.span animate={Animation7} >Santi</motion.span>
                    <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler3}>
                        <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                            <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                        </a>
                    </InView>
                </motion.div>
            </div>
            <div>
                <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler4}>
                    <motion.div animate={Animation4} className={styles.circleStroke}>
                        <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoPria.png" alt="foto pria"></img>
                    </motion.div>
                </InView>
                <motion.div animate={Animation5} className='flex flex-col items-center mt-[14px]'>
                    <motion.span animate={Animation8} className='text-[20px] font-bold'>Amir Hamzah</motion.span>
                    <motion.span animate={Animation8} className='mb-[8px]'>Putra pertama dari</motion.span>
                    <motion.span animate={Animation8}>Miftah</motion.span>
                    <motion.span animate={Animation8}>&#38;</motion.span>
                    <motion.span animate={Animation8}>Silvi</motion.span>
                    <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                        <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                    </a>
                </motion.div>
            </div>
            <div>
                <motion.img animate={Animation6} className='float-right mt-[-13rem]' src='/Icon/asset-wayang-2.svg'></motion.img>
                <motion.img animate={Animation3} className='float-left  mt-[-40rem]' src='/Icon/asset-wayang-1.svg'></motion.img>
            </div>
        </div>
    )
}