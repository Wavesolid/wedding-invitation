import { motion } from 'framer-motion';

export default function Intro()
{
    return (
        <div className="bg-[#621109] h-[667px] bg-[url('/Photo/bg-batik.png')] flex flex-col items-center justify-center">
            <motion.span 
            animate={{ y: [-30,0], opacity: [0.2,1] }}
            transition={{duration: 1.5}}
            className="text-[#F2C777] text-[36px] font-bold mb-[8px]"
            >
                THE WEDDING OF
            </motion.span>
            <motion.img 
                animate={{ x: [-40,0], opacity: [0.2,1] }}
                transition={{duration: 1.5}}
                className="mb-[8px]" 
                src="/Icon/asset-batik-8-big.svg" 
                alt="batik-8-big" 
            />
            <motion.div
                animate={{opacity: [0,1] }}
                transition={{duration: 2}}
                className="bg-[url('/Icon/foto-frame.svg')] bg-no-repeat w-[215.15px] h-[404px] mb-[16px]"
            >
                <img className="mx-auto my-0 pt-[10px]" src="/Photo/foto-intro.png" alt="photo-intro" />
            </motion.div>
            <motion.img
                animate={{ x: [40,0], opacity: [0.2,1] }}
                transition={{duration: 1.5}}
                src="/Icon/asset-batik-4-intro.svg" 
                alt="" 
            />
            <motion.span 
                animate={{ y: [40,0], opacity: [0.2,1] }}
                transition={{duration: 1.5}}
                className="text-[24px] font-bold mt-[16px] text-[#F2C777] "
                >
                Jennifer &#38; Hamzah
            </motion.span>
        </div>
    );
}