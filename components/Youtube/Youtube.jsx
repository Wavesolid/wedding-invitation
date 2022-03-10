import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

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

    const handlerClick = () => {
        window.open('www.google.com')
    }

    return(
        <div className="flex flex-col items-center font-kapital-bold text-emas">
            <motion.span animate={animation} className="text-[24px] mt-[26px] mb-[8px]">Live Streaming</motion.span>
            <motion.span animate={animation} className="text-[16px]">Akad <span className='font-tanda-huruf'>&#38;</span> Upacara Panggih </motion.span>
            <button type='button' className="border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[4px] w-[120px] my-[24px] hover:bg-putih hover:text-emas transition duration-300" onClick={handlerClick}>
                    <span>Klik Disini</span>
                </button>
            <div ref={ref} className="border-8 rounded-[8px] border-emas mb-[18px]">
                <iframe width="300" height="206" src="https://www.youtube.com/embed/citnw038UQ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div> 
        </div>
    )
}