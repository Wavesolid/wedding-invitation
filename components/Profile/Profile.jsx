import styles from './Profile.module.css';

export default function profile() {
    return(
        <div className="bg-[#0D0D0D] text-[#F2C777] py-[38px]">
            <div className="text-center">
                <span className='text-[24px] font-bold'>Bride &#38; Groom</span>
            </div>
            <div>
                <div className={styles.circleStroke}>
                    <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoWanita.png" alt="foto wanita"></img>
                </div>
                <div className='flex flex-col items-center mt-[14px]'>
                    <span className='text-[20px] font-bold'>Jennifer Sitompul</span>
                    <span className='mb-[8px]'>Putri pertama dari</span>
                    <span>Ahmad</span>
                    <span>&#38;</span>
                    <span>Santi</span>
                    <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                        <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                    </a>
                </div>
            </div>
            <div>
                <div className={styles.circleStroke}>
                    <img className="mx-auto my-0 pt-[10px]" src="/Photo/fotoPria.png" alt="foto pria"></img>
                </div>
                <div className='flex flex-col items-center mt-[14px]'>
                    <span className='text-[20px] font-bold'>Amir Hamzah</span>
                    <span className='mb-[8px]'>Putra pertama dari</span>
                    <span>Miftah</span>
                    <span>&#38;</span>
                    <span>Silvi</span>
                    <a className='mt-[8px]' href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                        <img src="/Icon/icon-instagram.svg" alt="icon instagram" />
                    </a>
                </div>
            </div>
            <div>
                <img className='float-right scale-x-[-1] mt-[-13rem]' src='/Icon/asset-wayang-1.svg'></img>
                <img className='float-left  mt-[-40rem]' src='/Icon/asset-wayang-1.svg'></img>
            </div>
        </div>
    )
}