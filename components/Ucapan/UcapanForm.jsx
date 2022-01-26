export default function UcapanForm() {
    return(
        <div className="ml-[10px]">
            <span className="font-bold text-[18px] mb-[16px]">Form Ucapan</span>
            <form className="flex flex-col">
                <label className="mb-[8px]" htmlFor="nama">Nama</label>
                <input className="w-[335px] h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="nama"/>
                <label className="mb-[8px]" htmlFor="domisili">Domisili</label>
                <input className="w-[335px] h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="domisli"/>
                <label className="mb-[8px]" htmlFor="ucapan">Kirim ucapan mu</label>
                <textarea className="w-[335px] h-[66px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] p-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="ucapan">
                </textarea>
                <button className="w-[332px] h-[35px] bg-[#F2C777] rounded-[15px] mb-[36px] self-center">
                    <span className=" text-[#0D0D0D] text-[12px] font-bold">Kirim Sekarang</span>
                </button>
            </form>
        </div>
    )
}