import { motion } from 'framer-motion';

export default function Intro()
{
    return (
        <div className='bg-merah'>
            <div className="h-[667px] bg-white bg-[url('/Photo/foto-intro.jpg')] bg-cover bg-center bg-blend-luminosity rounded-b-[150px] flex flex-col items-center justify-start">
                <motion.span 
                animate={{ y: [-30,0], opacity: [0.2,1] }}
                transition={{duration: 1.5}}
                className="text-white text-[36px] mt-[3rem] font-sambung mb-[8px]"
                >
                    The Wedding Of
                </motion.span>

                <motion.span 
                    animate={{ y: [40,0], opacity: [0.2,1] }}
                    transition={{duration: 1.5}}
                    className="text-white w-full mt-[16px] font-sambung flex flex-col items-center text-[56px]"
                    >
                    <span className="self-start ml-[4rem]">Nesya</span>
                    <span className='font-tanda-huruf'>&#38;</span> 
                    <span className='self-end mr-[2rem]'>Gintano</span>
                </motion.span>
            </div>
        </div>
    );
}