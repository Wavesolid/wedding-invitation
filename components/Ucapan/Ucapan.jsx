import UcapanForm from "./UcapanForm";
import UcapanList from "./UcapanList";
import styles from "./UcapanCard.module.css";

export default function Ucapan({name,ucapan}) {

    const handlerClick = () => {
        window.open('https://www.google.com');
    }
    
    return(
        <div className="bg-[#0D0D0D] text-[#F2C777]">
            <div className="flex flex-col items-center">
                <span className="font-bold text-[24px] my-[18px]">Kartu Ucapan</span>
                <div className={`flex flex-col items-center w-[340px] h-[223px] bg-[#F2C777] py-[18px] text-[#0D0D0D] rounded-[10px] ${styles.ucapanCard}`} >
                    {
                        ucapan.filter(ucapans => ucapans.message !== "").map((ucapans)=>(
                            <UcapanList key={ucapans.name} name={ucapans.displayName} domisili={ucapans.domisili} message={ucapans.message} />
                        ))
                    }
                    
                </div>
                <img className="my-[16px]" src="/Icon/asset-batik-8.svg" alt="" />
                {name === undefined && 
                    <button className="w-[332px] h-[35px] bg-[#F2C777] rounded-[15px] mb-[36px] self-center hover:bg-gradient-[(rgba(0, 0, 0, 0.4) 0 0)]" onClick={handlerClick}>
                        <span className=" text-[#0D0D0D] text-[12px] font-bold">Kirim Ucapanmu</span>
                    </button>
                }
            </div>
            {name !== undefined && <UcapanForm name={name} ucapan={ucapan}/> }
        </div>
    )
}

