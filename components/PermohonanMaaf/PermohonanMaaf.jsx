import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function PermohonanMaaf() {

    const {ref,inView} = useInView({
        threshold:1,
        delay:2,
        triggerOnce: true
    });

    const animation = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeIn"
                }
            })
        }

        if(!inView){
            animation.start({
                x: -30,
                opacity: 0.2
            })
        }
    },[inView])

    return(
        <div className="bg-[#F2C777] flex flex-col justify-around items-center text-[#621109] text-center pb-[24px]">
            <h1 ref={ref} className="text-[24px] font-bold">Permohonan Maaf</h1>
            <motion.p animate={animation} className="mt-[12px] my-[16px] mx-[20px] font-medium text-[14px]">
                Dalam Keterbatasan di kondisi pandemi saat ini, kami
                memohon maaf tidak dapat mengundang secara langsung
                Bapak/Ibu/Saudara/i sekalian ke acara pernikahan kami.
                Tanpa mengurasi rasa hormat, izin kami mengharapkan
                kehadiran Bapak/Ibu/Saudara/i secara virtual serta
                memberikan doa restu kepada kami.<br/>
                Terima Kasih
            </motion.p>
        </div>
    )
}