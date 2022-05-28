import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function Youtube(){

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const animation = useAnimation();

    useEffect(()=>{

        if(inView){
            animation.start({
                x: 0,
                opacity:1,
                transition: {
                    duration: 0.5,
                    ease: "easeIn"
                }
            })
        }

        if(!inView){
            animation.start({
                x: 30,
                opacity: 0.5
            })
        }

    },[inView])

    return(
        <div className="flex flex-col items-center font-kapital-bold text-emas">
            <motion.span animate={animation} className="text-[24px] mt-[26px] mb-[8px]">Live Streaming</motion.span>
            <motion.span animate={animation} className="text-[16px]">Akad <span className='font-tanda-huruf'>&#38;</span> Upacara Panggih </motion.span>
            <button type='button' className="border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[4px] w-[120px] my-[24px] hover:bg-putih hover:text-emas transition duration-300">
                <a href="https://youtu.be/yEMe19yw2Sc" target="_blank" rel="noopener noreferrer"><span>Klik Disini</span></a>
            </button>
            <div ref={ref} className="border-8 rounded-[8px] border-emas mb-[18px] w-[320px] h-[180px] flex items-center justify-center">

                <Image width={320} height={180} src="/Photo/thumbnail.png"></Image>

            </div> 
        </div>
    )
}