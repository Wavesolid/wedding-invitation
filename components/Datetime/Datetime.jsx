import { useEffect } from 'react';
import { useInView,InView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Datetime(){

    const {ref,inView} = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    const animation4 = useAnimation();

    const viewHandler = (inView) => {
        if(inView){
            animation4.start({
                y: 0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease: "easeIn"
                }
            })
        }

        if(!inView){
            animation4.start({
                y: 40,
                opacity:0.4,
            })
        }
    }

    useEffect(()=>{
        
        if(inView){
            animation.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 2
                }
            });

            animation2.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 2
                }
            });

            animation3.start({
                y: 0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease: "easeIn"
                }
            })
        }

        if(!inView){
            animation.start({
                x: -10,
                opacity:0
            });

            animation2.start({
                x: -100,
                opacity:0
            });

            
            animation3.start({
                y: 40,
                opacity:0.4,
            })
        }

    },[inView])

    return(
        <div className="bg-[#621109]">
            <div className="flex flex-col items-center py-[30px]">
                <div className="flex flex-col items-center mb-[20px]">
                    <span ref={ref} className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Akad Nikah</span>
                    <motion.span animate={animation3} className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</motion.span>
                    <motion.span animate={animation3} className="text-[#F2E3B3] text-[14px]">Pukul 08.00 WIB - Selesai</motion.span>
                </div>
                <div className="flex flex-col items-center">
                    <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler}>
                        <span className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Resepsi</span>
                    </InView>
                    <motion.span animate={animation4}  className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</motion.span>
                    <motion.span animate={animation4}  className="text-[#F2E3B3] text-[14px]">Pukul 11.00 WIB</motion.span>
                </div>
            </div>

            <div>
                <motion.img animate={animation} className="float-right mt-[-16rem]" src="/Icon/asset-batik-1.svg" alt="batik-1"/>
                <motion.img animate={animation2} className="float-left mt-[-4rem] " src="/Icon/asset-batik-1-right.svg" alt="batik-1"/>
            </div>
        </div>
    )
}