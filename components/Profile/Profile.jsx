import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function Profile() {

    // set animation
    const Animation = useAnimation();

    const Animation2 = useAnimation();

    const Animation3 = useAnimation();

    const Animation4 = useAnimation();
    
    const Animation5 = useAnimation();

    const Animation6 = useAnimation();

    const Animation7 = useAnimation();

    const Animation8 = useAnimation();

    const viewHandler = (inView) => {
        if(inView){
            Animation.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1,
                    ease:"easeInOut"
                }
            });
        }

        if(!inView){
            Animation.start({
                y: 300,
                opacity: 0,
            });
        }
    }

    const viewHandler2 = (inView) => {

        if(inView){
            Animation2.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            Animation3.start({
                x:0,
                opacity:1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.2
                }
            });

            Animation7.start({
                y:0,
                opacity:1,
                transition: {
                    duration: 1,
                    ease:"easeInOut",
                    delay:1
                }
            });
        }

        if(!inView){
            Animation2.start({
                opacity: 0.2,
            });

            Animation3.start({
                x: -10,
                opacity: 0.6
            });

            Animation7.start({
                y:30,
                opacity:0.3
            });
        }
    }

    const viewHandler3 = (inView) => {
        if(inView){
            Animation4.start({
                y: 0,
                opacity: 1,
                transition:{
                    duration: 1.5,
                    ease:"easeInOut"
                }
            });
        }

        if(!inView){
            Animation4.start({
                y: 300,
                opacity: 0,
            });
        }
    }

    const viewHandler4 = (inView) => {

        if(inView){
            Animation5.start({
                opacity: 1,
                transition:{
                    duration: 2
                }
            });

            Animation6.start({
                x: 0,
                opacity:1,
                transition: {
                    duration: 1
                }
            });

            Animation8.start({
                y:0,
                opacity:1,
                transition: {
                    duration: 1,
                    ease:"easeInOut",
                    delay: 1
                }
            });
        }

        if(!inView){
            Animation5.start({
                opacity: 0.2,
            });

            Animation6.start({
                x:-10,
                opacity: 0.6
            });

            Animation8.start({
                y:40,
                opacity:0.2
            });
        }
    }


    return(
        <div className='bg-merah'>
            <div className="bg-putih rounded-[130px] border-[10px] border-emas text-emas py-[38px]">
                <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler}>
                    <div className="text-center">
                        <span className='text-[36px] font-sambung'>The Bride and Groom</span>
                    </div>
                </InView>
                <div>
                    <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler2}>
                        <motion.div animate={Animation} className="w-[64%] h-[380px] mx-auto my-0 bg-emas rounded-[125px] border-[6px] border-emas bg-cover bg-center bg-[url('/Photo/fotoWanita.jpg')]">
                            
                        </motion.div>
                    </InView>
                    <motion.div animate={Animation2} className='flex flex-col items-center mt-[14px]'>
                        <motion.span animate={Animation7} className='text-[32px] font-sambung'>drg <span className='font-tanda-huruf'>.</span> Neysa Almira</motion.span>
                        <motion.span animate={Animation7} className='mb-[8px] font-kapital-bold text-[14px]'>
                            Putri dari Bp. Joko Purnomo &#38; Ibu Atiek Jaswati
                        </motion.span>
                        <InView triggerOnce="true" threshold="1" as="div" onChange={viewHandler3}>
                            <a className='' href="https://www.instagram.com/neysaalmira/" target="_blank" rel="noreferrer noopener">
                                <img src="/Icon/logo-ig.png" className='w-[20%] mx-auto my-[2rem]' alt="icon instagram" />
                            </a>
                        </InView>
                    </motion.div>
                </div>
                <div>
                    <InView triggerOnce="true" threshold="0.8" as="div" onChange={viewHandler4}>
                        <motion.div animate={Animation4} className=" w-[64%] h-[380px] mx-auto my-0 bg-emas rounded-[125px] border-[6px] border-emas bg-cover bg-center bg-[url('/Photo/fotoPria.jpg')]">
                            
                        </motion.div>
                    </InView>
                    <motion.div animate={Animation5} className='flex flex-col items-center mt-[14px]'>
                        <motion.span animate={Animation8} className='text-[26px] font-sambung'>
                            Gintano Scorpy Sugihartono<span className='font-tanda-huruf'>,</span> S <span className='font-tanda-huruf'>.</span> T <span className='font-tanda-huruf'>.</span>
                        </motion.span>
                        <motion.span animate={Animation8} className='mb-[8px] font-kapital-bold text-[14px] text-center'>
                            Putra dari Bp. Sri Sugihartono &#38; Ibu Rita Suryatami
                        </motion.span>
                        <a className='mt-[2rem]' href="https://www.instagram.com/gintano/" target="_blank" rel="noreferrer noopener">
                            <img src="/Icon/logo-ig.png" className='w-[20%] mx-auto' alt="icon instagram" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}