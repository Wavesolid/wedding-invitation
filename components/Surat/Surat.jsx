import styles from './Surat.module.css';

export default function Surat()
{
    return (
        <div className={styles.surat}>
            <div className='text-center mb-[16px] pt-[36px]'>
                <img src="/Icon/asset-batik-6.svg" className='mx-auto my-0'></img>
            </div>
            <div className='flex justify-around items-center flex-col'>
                <span className='italic font-bold text-[14px] text-[#0D0D0D]'>Bismillahirahmanirahim</span>
                <span className='text-center my-[16px] mx-[20px] font-medium italic text-[14px] text-[#0D0D0D]'>
                    “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, 
                    supaya kamu merasa tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                    Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir”
                </span>
                <span className='italic font-bold text-[14px] text-[#0D0D0D] pb-[36px]'>
                    (QS. Ar-Rum:21)
                </span>
            </div>
        </div>
    );
}