import UcapanForm from "./UcapanForm";
import UcapanList from "./UcapanList";
import Youtube from "../Youtube/Youtube";
import getConfig from "next/config";

export default function Ucapan({name,ucapan}) {
    const  { publicRuntimeConfig } = getConfig();
    return(
        <div className="bg-putih text-emas pt-[6rem] px-[12px]">
            <div className="bg-merah px-[12px] border-[8px] border-emas rounded-[5px] pb-[24px]">
                <Youtube/>
                {name !== undefined && <UcapanForm name={name} ucapan={ucapan}/> }
                {name === undefined && 
                    <div>
                        <span className="font-sambung text-[36px] self-start mb-[16px] mt-[24px]">Doa dan Ucapan</span>

                        <iframe src={publicRuntimeConfig.NEXT_PUBLIC_GFORM} 
                                width="314" 
                                height="709" 
                                frameBorder="0" 
                                marginHeight="0" 
                                marginWidth="0">Memuat…
                        </iframe>
                    </div>
                }
            </div>
            { ucapan.length > 0 && 
            <div className="flex flex-col items-center mt-[6rem]">
                <div className="flex flex-col items-center w-full h-[380px] bg-putih border-y-[3px] border-emas py-[18px] text-emas overflow-scroll overflow-x-hidden" >
                    {
                        ucapan.filter(ucapans => ucapans.message !== "").sort((a,b) => a.createdAt > b.createdAt ? -1 : 1).map((ucapans)=>(
                            <UcapanList key={ucapans.guestName} name={ucapans.guestName} domisili={ucapans.domisili} message={ucapans.message} />
                        ))
                    }
                    
                </div>

            </div>
            }

        </div>
    )
}

