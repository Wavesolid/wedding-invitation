export default function Datetime(){
    return(
        <div className="bg-[#0D0D0D]">
            <div className="flex flex-col items-center py-[30px]">
                <div className="flex flex-col items-center mb-[20px]">
                    <span className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Akad Nikah</span>
                    <span className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[#F2E3B3] text-[14px]">Pukul 08.00 WIB - Selesai</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="mb-[8px] text-[#F2C777] text-[24px] font-bold">Resepsi</span>
                    <span className="text-[#F2E3B3] text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[#F2E3B3] text-[14px]">Pukul 11.00 WIB</span>
                </div>
            </div>

            <div>
                <img className="float-right mt-[-16rem]" src="/Icon/asset-batik-1.svg" alt="batik-1"/>
                <img className="float-left scale-x-[-1] mt-[-4rem] " src="/Icon/asset-batik-1.svg" alt="batik-1"/>
            </div>
        </div>
    )
}