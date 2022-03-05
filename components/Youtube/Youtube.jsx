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

    return(
        <div className="bg-[#621109] flex flex-col items-center">
            <motion.span animate={animation} className="font-bold text-[#F2C777] text-[24px] my-[26px]">Live Streaming</motion.span>
            <div ref={ref} className="border-8 rounded-[8px] border-[#F2C777] mb-[18px]">
                <iframe width="350" height="206" src="https://www.youtube.com/embed/citnw038UQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
        </div>
    )
}