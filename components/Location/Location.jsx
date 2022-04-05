import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Map from './Map';
import { useEffect } from 'react';

export default function Location(){

    const handlerClick = () => {
        window.open('https://www.google.com/maps/place/Sheraton+Grand+Jakarta+Gandaria+City+Hotel/@-6.2452633,106.7808464,17z/data=!3m2!4b1!5s0x2e69f110ca9fefab:0xdde73a455b7a3a52!4m8!3m7!1s0x2e69f110a36617f7:0xdac37e63cab92386!5m2!4m1!1i2!8m2!3d-6.2452633!4d106.7830351');
    }

    const {ref, inView} = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1,
                transition:{
                    duration: 1
                }
            });

            animation2.start({
                y:0,
                opacity:1,
                transition:{
                    duration: 1.5
                }
            })

            animation3.start({
                opacity:1,
                transition:{
                    duration: 2
                }
            })

        }

        if(!inView){
            animation.start ({opacity:0})

            animation2.start({y:100,opacity:0})

            animation3.start({opacity:0})
        }
        
    },[inView]);

    return(
        <div className="h-auto flex flex-col items-center">
            <div ref={ref} className="flex flex-col items-center">
                <span className="font-kapital-bold text-emas text-[24px] pt-[21px]">Sheraton Grand Jakarta</span>
                <motion.span animate={animation} className="font-kapital-bold text-emas text-[16px] mb-[24px]">Gandaria City Hotel, 3rd Floor</motion.span>
                <button type='button' className="border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[4px] w-[120px] mb-[16px] hover:bg-putih hover:text-emas transition duration-300" onClick={handlerClick}>
                    <span>Lihat Lokasi</span>
                </button>
            </div>
            <motion.div animate={animation3} className='border-emas border-[8px]'>
                <Map/>
            </motion.div>
            
        </div>
    )
}