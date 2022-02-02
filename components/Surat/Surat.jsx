import styles from './Surat.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Surat()
{

    // set animation
    const {ref, inView} = useInView({
        "triggerOnce": true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 1
                }
            });

            animation2.start({
                opacity:1,
                transition:{
                    duration: 1
                }
            });

            animation3.start({
                y: 0,
                transition:{
                    duration: 1
                }
            });
        }

        if(!inView){
            animation.start ({x: -100,opacity:0.5})
            animation2.start({opacity:0})
            animation3.start({y: 100})
        }
        
    },[inView]);

    return (
        <div className={styles.surat}>
            <div className='text-center mb-[16px] pt-[36px]'>
                <motion.img src="/Icon/asset-batik-6.svg" className='mx-auto my-0'
                    animate={animation}
                ></motion.img>
            </div>
            <div ref={ref} className='flex justify-around items-center flex-col'>
                <motion.div animate={animation2} className='flex justify-around items-center flex-col'>
                    <span className='italic font-bold text-[14px] text-[#0D0D0D]'>Bismillahirahmanirahim</span>
                    <span className='text-center my-[16px] mx-[20px] font-medium italic text-[14px] text-[#0D0D0D]'>
                        “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, 
                        supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir”
                    </span>
                </motion.div>
                <motion.span animate={animation3} className='italic font-bold text-[14px] text-[#0D0D0D] pb-[36px]'>
                    (QS. Ar-Rum:21)
                </motion.span>
            </div>
        </div>
    );
}