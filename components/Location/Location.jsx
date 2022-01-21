import styles from './Location.module.css'
import Map from './Map';

export default function Location(){

    const handlerClick = () => {
        window.open('https://www.google.com/maps/place/Sheraton+Grand+Jakarta+Gandaria+City+Hotel/@-6.2452633,106.7808464,17z/data=!3m2!4b1!5s0x2e69f110ca9fefab:0xdde73a455b7a3a52!4m8!3m7!1s0x2e69f110a36617f7:0xdac37e63cab92386!5m2!4m1!1i2!8m2!3d-6.2452633!4d106.7830351');
    }

    return(
        <div className="h-auto bg-[#F2C777] text-[#0D0D0D] flex flex-col items-center">
            <div className="flex flex-col items-center">
                <span className="font-bold text-[24px] pt-[21px]">SHERATON GRAND</span>
                <span className="font-normal text-[16px] my-[12px]">Jakarta Gandaria City Hotel</span>
                <button type='button' className={styles.buttonCover} onClick={handlerClick}>
                    <span>Lihat Lokasi</span>
                </button>
                <img className='my-[12px]' src="/Icon/asset-batik-9.svg" alt="batik-9" />
            </div>
            <div className='pb-[21px]'>
                <Map/>
            </div>
            
        </div>
    )
}