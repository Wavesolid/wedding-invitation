import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function Protokol({name}) {

    const animation = useAnimation();

    const animation2 = useAnimation();

    const animation3 = useAnimation();

    const animation4 = useAnimation();

    const animation5 = useAnimation();

    const viewHandler = (inView) => {
        if(inView){
            animation.start({
                y:0,
                opacity:1,
                transition:{
                    duration: 1.5,
                    ease:"easeIn"
                }
            })

            animation2.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 1.5,
                    ease:"easeIn"
                }
            })

            animation3.start({
                x: 0,
                opacity:1,
                transition:{
                    duration: 1.5,
                    ease:"easeIn",
                    delay: 1
                }
            })

            animation4.start({
                x: 0,
                opacity:1,
                scaleX: -1,
                transition:{
                    duration: 1.5,
                    ease:"easeIn",
                    delay: 1
                }
            })

            animation5.start({
                y: 0,
                opacity:1,
                transition:{
                    duration: 1.5,
                    ease:"easeIn",
                    delay: 1
                }
            })
        }

        if(!inView){
            animation.start({
                y: -10,
                opacity: 0
            })

            animation2.start({
                x: 10,
                opacity: 0
            })

            animation3.start({
                x: 10,
                opacity: 0
            })

            animation4.start({
                x: -10,
                scaleX: -1,
                opacity: 0
            })

            animation5.start({
                y: 10,
                opacity: 0
            })
        }
    }

    return(
        <div className="bg-putih">
            <div className="h-[970px] bg-merah border-[8px] border-emas rounded-[150px] font-kapital-bold text-emas flex flex-col items-center px-[12px] py-[32px] relative top-[170px]">
                <InView triggerOnce="true" threshold="0.6" as="div" onChange={viewHandler}>
                    <span className="text-[24px] mb-[2rem]">Protokol Kesehatan</span>
                </InView>

                { name === undefined &&
                    <motion.span animate={animation} className="text-[16px] mt-4 text-center w-[90%]">
                        Untuk menjaga resiko penularan Covid-19,
                        mohon untuk memperhatikan anjuran berikut
                    </motion.span>  
                }
                { name !== undefined && 
                    <motion.span animate={animation} className="text-[16px] mt-4 text-center w-[90%]">
                        Untuk menjaga acara pernikahan aman dari resiko penularan Covid-19,
                        mohon untuk memperhatikan anjuran berikut
                    </motion.span>
                }


                <motion.div animate={animation2} className="grid grid-cols-2 grid-rows-2 my-[3rem]">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[60%]" src="/Icon/protokol1.png" alt=""  />
                        <span className="text-center">Menggunakan Masker</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[60%]" src="/Icon/protokol2.png" alt=""  />
                        <span className="text-center">Hindari Berjabat Tangan</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[60%]" src="/Icon/protokol3.png" alt=""  />
                        <span className="text-center">Menggunakan <br/> Hand Sanitizer</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-[60%]" src="/Icon/protokol4.png" alt=""  />
                        <span className="text-center">Menjaga <br/> Jarak</span>
                    </div>
                </motion.div>

                <div>
                    <motion.img animate={animation3} className="w-[44%] relative right-[14px] float-left z-[10] top-[26px]" src="/Icon/bunga-protokol.png" alt="" />
                    <motion.img animate={animation4} className="w-[44%] relative left-[54px] float-left z-[10] scale-x-[-1] top-[26px] " src="/Icon/bunga-protokol.png" alt="" />
                </div>

                <motion.img animate={animation5} className="relative w-[30%] top-[-120px]" src="/Icon/logo.png"/>
            </div>
        </div>
    )
}