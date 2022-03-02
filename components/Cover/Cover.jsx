import styles from './Cover.module.css';
import Link from 'next/link';

export default function Cover({name})
{  

    return (
        <div className={styles.slideContainer}>
            <div className={styles.coverMain}>
                <span className={styles.coverTitle}>The Wedding Invitation</span>
                <div className='grid grid-rows-3 text-center mb-4 text-[48px]'>
                    <span className={styles.brideGroom}>Jennifer</span>
                    <span className={styles.brideGroom}>&#38;</span>
                    <span className={styles.brideGroom}>Hamzah</span>
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
                        {name === undefined ? ' ' : name.charAt(0).toUpperCase() + name.slice(1) + " dan Partner" } 
                    </span>
                    <span className={styles.alertGuest}>
                        {name === undefined ? ' ' : "*mohon maaf apabila ada kesalahan kata dan gelar" } 
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='mb-4'>
                        <img src="/Icon/Arrow.svg"></img>
                    </div>
                    <Link href= {`${name === undefined ? `/home` : `/home/${name}` }`}>
                        <button type='button' className={styles.buttonCover}>
                            <span>Open Invitation</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}