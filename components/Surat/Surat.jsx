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

    const animation4 = useAnimation()

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease:"easeIn"
                }
            });

            animation2.start({
                y:0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease:"easeIn"
                }
            });

            animation3.start({
                y: 0,
                transition:{
                    duration: 1,
                    ease:"easeIn"
                }
            });

            animation4.start({
                y: 0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease:"easeIn"
                }
            });
        }

        if(!inView){
            animation.start ({x: -100,opacity:0.})
            animation2.start({y:-100,opacity:0})
            animation3.start({y: 100})
            animation4.start({y: -100,opacity:0})

        }
        
    },[inView]);

    return (
        <div className="w-full h-auto bg-merah">
            <div className='text-center mb-[16px] pt-[36px]'>
                <motion.img src="/Icon/logo.png" className='mx-auto my-0 w-[20%]'
                    animate={animation}
                ></motion.img>
            </div>
            <div ref={ref} className='flex justify-around items-center flex-col'>
                <motion.div animate={animation2} className='flex justify-around items-center flex-col font-kapital-bold'>
                    <span className='text-[14px] text-emas'>Bismillahirahmanirahim</span>
                    <span className='text-center my-[16px] mx-[20px] text-[14px] text-emas'>
                        “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                        supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir”
                    </span>
                </motion.div>
                <motion.span animate={animation3} className='text-[14px] text-emas pb-[36px]'>
                    (QS. Ar-Rum:21)
                </motion.span>
                <div>
                    <motion.img animate={animation} className='float-left mt-[-4rem] w-[32%]' src='/Icon/bunga-2.png'/>
                    <motion.img animate={animation}  className='float-right mt-[-23rem] w-[37%]' src='/Icon/bunga-1.png'/>
                </div>
            </div>
        </div>
    );
}