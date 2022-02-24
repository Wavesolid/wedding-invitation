export default function Success(props){
    return(
        <div className="h-screen bg-[#0D0D0D] bg-[url('/Photo/bg-batik.png')]  flex flex-col items-center justify-center text-[#F2C777]">
            <h1 className="text-[36px] font-bold text-center mb-[18px]">Terima Kasih!</h1>
            <h2 className="text-[18px] font-medium w-[340px] text-center ">Kami senantiasa senang menunggu kehadiran anda pada acara</h2>
            <div className="w-[335px] h-[218px] flex flex-col items-center bg-[#F2C777] rounded-[10px] my-[32px]">
                <div className="flex flex-col items-center mb-[20px] text-[#735032] pt-[8px]">
                    <span className="mb-[8px]  text-[24px] font-bold">Akad Nikah</span>
                    <span className="text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[14px]">Pukul 08.00 WIB - Selesai</span>
                </div>
                <div className="flex flex-col items-center text-[#735032] ">
                    <span className="mb-[8px] text-[24px] font-bold">Resepsi</span>
                    <span className="text-[14px]">Minggu, 29 Mei 2022</span>
                    <span className="text-[14px]">Pukul 11.00 WIB</span>
                </div>
            </div>
            <h2 className="text-[18px] font-medium text-center w-[340px]">Nomor Bangku akan dikirim melalui email atau nomor whatsapp yang telah diberikan.</h2>
            {/* <div>
                <img className='float-right mt-[-13rem]' src='/Icon/asset-wayang-2.svg'></img>
                <img className='float-left  mt-[-40rem]' src='/Icon/asset-wayang-1.svg'></img>
            </div> */}
        </div>
    )
}