import UcapanForm from "./UcapanForm";

export default function Ucapan(props) {

    return(
        <div className="bg-[#0D0D0D] text-[#F2C777]">
            <div className="flex flex-col items-center">
                <span className="font-bold text-[24px] my-[18px]">Kartu Ucapan</span>
                <div className="flex flex-col items-center w-[340px] h-[223px] bg-[#F2C777] text-[#0D0D0D] rounded-[10px]" >
                    <div className="w-[100%] flex mt-[18px]">
                        <div className=" flex items-center justify-center h-[45px] w-[45px] bg-[#bbb] rounded-[50%] ml-[18px]">
                            <span>SN</span>
                        </div>
                        <div className="flex flex-col ml-[18px] text-[14px]">
                            <span className="font-normal">Siti Nurbaya</span>
                            <span className="font-light">dari <span className="font-normal">Jakarta</span></span>
                            <span className="font-light">selalu sehat dan bahagia</span>
                        </div>
                    </div>
                </div>
                <img className="my-[16px]" src="/Icon/asset-batik-8.svg" alt="" />
                {props.name === undefined && 
                    <button className="w-[332px] h-[35px] bg-[#F2C777] rounded-[15px] mb-[36px] self-center hover:bg-gradient-[(rgba(0, 0, 0, 0.4) 0 0)]">
                        <span className=" text-[#0D0D0D] text-[12px] font-bold">Kirim Ucapanmu</span>
                    </button>
                }
            </div>
            {props.name !== undefined && <UcapanForm/> }
        </div>
    )
}