import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Datetime(){

    const {ref,inView} = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

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
        }

    },[inView])

    return(
        <div className="bg-[#621109]">
            <div className="flex flex-col items-center py-[30px]">
                <div className="flex flex-col items-center mb-[20px]">
                    <span ref={ref} className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Akad Nikah</span>
                    <span className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[#F2E3B3] text-[14px]">Pukul 08.00 WIB - Selesai</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Resepsi</span>
                    <span className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[#F2E3B3] text-[14px]">Pukul 11.00 WIB</span>
                </div>
            </div>

            <div>
                <motion.img animate={animation} className="float-right mt-[-16rem]" src="/Icon/asset-batik-1.svg" alt="batik-1"/>
                <motion.img animate={animation2} className="float-left mt-[-4rem] " src="/Icon/asset-batik-1-right.svg" alt="batik-1"/>
            </div>
        </div>
    )
}