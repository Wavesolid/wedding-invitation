import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


export default function EntryForm({name,isFilled}){

    const {ref,inView} = useInView({
        threshold:1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();
    
    const animation3 = useAnimation();

    const animation4 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition:{
                    duration:3
                }
            })

            animation2.start({
                x: 0,
                opacity: 1,
                transition:{
                    duration:1
                }
            })

            animation3.start({
                x: 0,
                opacity: 1,
                transition:{
                    duration:4
                }
            })


            animation4.start({
                x: 0,
                opacity: 1,
                transition:{
                    duration:2
                }
            })
        }

        if(!inView){
            animation.start({
                x: 100,
                opacity: 0
            })

            animation2.start({
                x: -100,
                opacity: 0
            })

            animation3.start({
                x: 100,
                opacity: 0
            })

            animation4.start({
                x: -100,
                opacity: 0
            })
        }
    },[inView])

    return(
        <div className="bg-[#0D0D0D]">
            <div>
                <motion.img animate={animation} className="float-right" src="/Icon/asset-batik-3-upper-right.svg"></motion.img>
                <motion.img animate={animation2} src="/Icon/asset-batik-3-upper-left.svg"></motion.img>
            </div>

            <div className="text-[#F2C777] flex flex-col items-center">
                
                <span ref={ref} className="text-[24px] font-bold mt-[-2rem]">RSVP</span>
                <span className="text-[14px]">Kindly respond by</span>
                <div className={`${isFilled !== true ? `mb-[8px]` : `mb-[-25px]` }`}>
                    <span>-</span>
                    <span className="text-[14px]">11 mei 2022</span>
                    <span>-</span>
                </div>
                {isFilled !== true && 
                <Link href={`/form/${name}`}>
                    <button className="border transition duration-700 ease-in-out rounded-[15px] border-current py-[2px] px-[21px] mb-[-1.5rem] hover:bg-[#F2C777] hover:text-[#0D0D0D]">
                        <span className="text-[14px]" >Klik Disini</span>
                    </button>
                </Link>
                }

            </div>

            <div>
                <motion.img animate={animation3} className="float-right" src="/Icon/asset-batik-3.svg"></motion.img>
                <motion.img animate={animation4} src="/Icon/asset-batik-3-bottom-left.svg"></motion.img>
            </div>
        </div>
    )
}