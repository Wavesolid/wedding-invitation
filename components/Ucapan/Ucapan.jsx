import UcapanForm from "./UcapanForm";
import UcapanList from "./UcapanList";
import styles from "./UcapanCard.module.css";
import Youtube from "../Youtube/Youtube";

export default function Ucapan({name,ucapan}) {

    const handlerClick = () => {
        window.open('https://www.google.com');
    }
    
    return(
        <div className="bg-putih text-emas pt-[6rem] px-[12px]">
            <div className="bg-merah px-[12px] border-[8px] border-emas rounded-[5px] pb-[24px]">
                <Youtube/>
                {name !== undefined && <UcapanForm name={name} ucapan={ucapan}/> }
                {name === undefined && 
                    <div>
                        <span className="font-sambung text-[36px] self-start mb-[16px] mt-[24px]">Doa dan Ucapan</span>

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeclZOlcJVkhOZ08C1iRNa9FW-YrQ2nbjVOXe03IfzXx-PLVg/viewform?embedded=true" 
                                width="314" 
                                height="709" 
                                frameborder="0" 
                                marginheight="0" 
                                marginwidth="0">Memuat…
                        </iframe>
                    </div>
                }
            </div>
            
            <div className="flex flex-col items-center mt-[6rem]">
                <div className={`flex flex-col items-center w-full h-[380px] bg-putih border-y-[3px] border-emas py-[18px] text-emas  ${styles.ucapanCard}`} >
                    {
                        ucapan.filter(ucapans => ucapans.message !== "").map((ucapans)=>(
                            <UcapanList key={ucapans.name} name={ucapans.displayName} domisili={ucapans.domisili} message={ucapans.message} />
                        ))
                    }
                    
                </div>

            </div>
        </div>
    )
}

