import { useEffect } from 'react';
import { useInView,InView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Countdown from '../Countdown/Countdown'

export default function Datetime({name}){

    const {ref,inView} = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    const animation4 = useAnimation();

    const animation5 = useAnimation();

    const animation6 = useAnimation();

    useEffect(()=>{
        
        if(inView){
            animation.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 1,
                    delay:1
                }
            });

            animation2.start({
                y: 0,
                opacity:1,
                transition:{
                    duration: 1
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
                y: -10,
                opacity:0
            });

            
            animation3.start({
                y: 40,
                opacity:0.4,
            })
        }

    },[inView])

    const viewHandler = (inView) => {
        if(inView){
            animation4.start({
                y:0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease: "easeIn"
                }
            })

            animation5.start({
                x:0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease: "easeIn",
                    delay: 0.5
                }
            })


            animation6.start({
                x:0,
                opacity:1,
                transition:{
                    duration: 1,
                    ease: "easeIn",
                    delay: 0.5
                }
            })
        }

        if(!inView){
            animation4.start({y:100,opacity:0})

            animation5.start({x:-100,opacity:0})

            animation6.start({x:-100,opacity:0})
        }
    }

    return(
        <div className='bg-merah p-[24px] '>
            <div className="bg-putih border-emas border-[10px] rounded-[10px] mt-[54px]">
                <div className="flex flex-col items-center py-[30px]">
                    <div className="flex flex-col items-center mb-[20px]">
                        <span ref={ref} className="mb-[8px] text-emas text-[14px] font-bold-kapital mb-[24px]">Bismillahirrahmanirrahim</span>
                        <motion.span animate={animation3} className="text-emas text-[14px] text-center w-[90%] font-bold-kapital">
                            Assalamualaikum Warrahmatullahi Wabarakatuh dengan memohon rahmat &#38;
                            ridho Allah SWT kami bermaksud untuk menyelenggarakan acara pernikahan
                            putra - putri kami yang Insya Allah akan dilaksanakan pada
                        </motion.span>
                    </div>

                    <motion.div animate={animation2} className='bg-merah border-[5px] w-[88%] rounded-[5px] p-[12px] border-emas flex flex-col items-center font-kapital-bold'>
                        <div className='flex flex-col items-center w-[100%] text-emas'>
                            <hr className='w-full border-emas'/>
                            <div className='flex flex-row font-kapital-bold justify-evenly w-full'>
                                <div className='flex flex-col items-center border-r-[2px] border-emas pr-[32px]'>
                                    <span>Minggu</span>
                                    <span className='text-[48px] font-kapital-bold my-[-12px]'>29</span>
                                    <span>Mei 2022</span>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <span>Akad Nikah</span>
                                    <span>07 30 WIB</span>
                                    { name !== undefined &&
                                    <div>
                                        <span>Resepsi</span>
                                        <br/>
                                        <span>11 00 WIB</span>
                                    </div>                                   
                                    }
                                </div>
                            </div>
                            <hr className='w-full border-emas'/>
                        </div>

                        <div className='bg-putih mt-[12px] w-[90%] p-[8px] text-center border-[5px] border-emas rounded-[5px]'>
                            <Countdown />
                        </div>
                    </motion.div>
                </div>

                {name !== undefined && 
                    <div>
                        <motion.img animate={animation} className='w-[35%] mx-auto my-0' src="/Icon/bunga.png"></motion.img>
                    </div>
                }
                
                {name === undefined && 
                    <div className='flex flex-col'>    
                        <div className='font-kapital-bold flex flex-col items-center text-emas text-center px-[12px]'>
                            <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler}> 
                                <h1 className='text-[24px]'>Permohonan Maaf</h1>
                            </InView>
                            <motion.p animate={animation4} className='text-[14px] my-4'>Dalam Keterbatasan di kondisi pandemi saat ini, kami memohon maaf
                                belum bisa mengundang secara langsung Bapak/Ibu/Saudara/i sekalian
                                ke acara pernikahan putra putri kami. Tanpa mengurangi rasa hormat,
                                izinkan kami mengundang Bapak/Ibu/Saudara/i secara virtual melalui
                                link yang sudah disiapkan.
                            </motion.p>
                            <motion.p animate={animation4}  className='text-[14px]'>Terima Kasih</motion.p>
                        </div>

                        <div>
                            <motion.img animate={animation5} className='float-left w-[40%]' src="/Icon/bunga-2.png" alt="" />
                            <motion.img animate={animation6} className='float-right w-[40%]' src="/Icon/bunga2mirror.png" alt="" />
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}