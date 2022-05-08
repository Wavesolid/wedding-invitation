import styles from './Cover.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Cover({name, slug})
{  

    return (
        <div className={styles.slideContainer}>
            <div className={styles.coverMain}>
                <span className={styles.coverTitle}>The Wedding Invitation</span>
                <div className='grid grid-rows-3 text-center mb-4 text-[48px]'>
                    <span className={styles.brideGroom}>Neysa</span>
                    <span className={styles.brideGroom}>&#38;</span>
                    <span className={styles.brideGroom}>Gintano</span>
                </div>
                <div className='flex justify-around items-center mb-4'>
                    <div className='w-[100px] text-center'>
                        <hr/>
                        <span className='text-[18px]'>MINGGU</span>
                        <hr/>
                    </div>
                    <div className='flex flex-col text-center text-[20px]'>
                        <span>29</span>
                        <span>2022</span>
                    </div>
                    <div className='w-[100px] text-center'>
                        <hr/>
                        <span className='text-[18px]'>MEI</span>
                        <hr/>
                    </div>
                </div>
                <div className='grid grid-rows-3 text-center'>
                    <span  className={`${styles.openGuest} ${name === undefined ? `mb-[-1rem]` : ``}`}>
                        Kepada yth Bapak/Ibu/Saudara/i
                    </span>
                    <span className={styles.nameGuest}>
                        {name === undefined ? ' ' : name } 
                    </span>
                    <span className={styles.alertGuest}>
                        {name === undefined ? ' ' : "*mohon maaf apabila ada kesalahan kata dan gelar" } 
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <motion.div 
                        animate={{ y: [0,10,20,10,0] }}
                        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
                        className='mb-8'
                    >
                        <img src="/Icon/Arrow.svg"></img>
                    </motion.div>
                    <Link href= {{pathname:`${name === undefined ? `/home` : `/home/${slug}` }`,query:{data:true}}}
                        as={`${name === undefined ? `/home` : `/home/${slug}` }`}
                    >
                        <button type='button' className={styles.buttonCover}>
                            <span>Open Invitation</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}