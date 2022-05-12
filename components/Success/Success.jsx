export default function Success(props){
    return(
        <div className="h-screen bg-putih flex flex-col items-center justify-center text-merah">
            <h1 className="text-[36px] font-bold text-center mb-[18px]">Terima Kasih!</h1>
            <h2 className="text-[18px] font-medium w-[340px] text-center ">Kami dengan senang hati menunggu kehadiran anda </h2>
            
            <span className="font-sambung text-[36px] text-center mt-4"> The Wedding of <br/> Neysa <span className="font-tanda-huruf">&</span> Gintano</span>

            <div className='bg-merah border-[5px] w-[88%] rounded-[5px] p-[12px] border-emas flex flex-col items-center font-kapital-bold'>
                <div className='flex flex-col items-center w-[100%] text-emas'>
                    <hr className='w-full border-emas'/>
                    <div className='flex flex-row font-kapital-bold justify-evenly w-full'>
                        <div className='flex flex-col items-center border-r-[2px] border-emas pr-[32px]'>
                            <span>Minggu</span>
                            <span className='text-[48px] font-kapital-bold my-[-12px]'>29</span>
                            <span>Mei 2022</span>
                        </div>
                        <div className='flex flex-col items-start'>
                            <span>Akad Nikah</span>
                            <span>07 30 WIB</span>
                            <span>Resepsi</span>
                            <span>11 00 WIB</span>
                        </div>
                    </div>
                    <hr className='w-full border-emas'/>
                </div>
            </div>

            <h2 className="text-[18px] font-medium text-center w-[340px] mt-4">Nomor meja akan dikirim berupa qr code melalui email atau nomor whatsapp yang telah diberikan.</h2>
            <h2 className="text-[18px] font-medium text-center w-[340px] mt-4">Mohon hadir sebelum waktu yang ditentukan untuk kelancaran acara.</h2>
        </div>
    )
}