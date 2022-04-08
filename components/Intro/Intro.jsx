import { motion } from 'framer-motion';

export default function Intro()
{
    return (
        <div className='bg-merah'>
            <div className="h-[667px] bg-white bg-[url('/Photo/foto-intro.jpg')] bg-cover bg-center rounded-b-[150px] px-[16px] flex flex-col justify-start">
                <motion.span 
                animate={{ y: [-30,0], opacity: [0.2,1] }}
                transition={{duration: 1.5}}
                className="text-white self-start text-[36px] mt-[3rem] font-sambung mb-[-15px]"
                >
                    The Wedding Of
                </motion.span>

                <motion.div 
                    animate={{ y: [40,0], opacity: [0.2,1] }}
                    transition={{duration: 1.5}}
                    className="text-white w-full mt-[16px] font-sambung flex flex-col items-center text-[56px] w-[214px]"
                    >
                    <span className="">Neysa</span>
                    <span className='font-tanda-huruf mt-[-24px]'>&#38;</span> 
                    <span className='mt-[-24px]'>Gintano</span>
                </motion.div>
            </div>
        </div>
    );
}