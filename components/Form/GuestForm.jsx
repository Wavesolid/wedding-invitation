export default function GuestForm()
{
    return(
        <div className="h-screen bg-black flex flex-col items-center justify-center">
            <h1 className="text-[#F2C777] text-[24px] mb-[40px]">Form Kehadiran</h1>
            <div className="w-[247px] h-[333px] bg-[#F2C777] rounded-[12px]">
                <form className="pl-4 pt-2">
                    <div className="pt-[7.5px] nama-input">
                        <label className="text-[#735032]" htmlFor="nama">Nama</label>
                        <input className="w-[222px] h-[28px] border-[1px] border-black rounded-full text-[16px] px-[8px] pt-2" type="text" id="nama"/>
                    </div>
                    <div className="pt-[10px] presence-selector">
                        <label className="text-[#735032] pr-[9px]" htmlFor="presence">Jumlah Hadir</label>
                        <select className="rounded-full w-[96px] h-[25px] border border-black text-center" name="presence" id="presence">
                            <option value="">1 Orang</option>
                        </select>
                    </div>
                    <div className="pt-[10px] email-input">
                        <label className="text-[#735032]" htmlFor="email">Email</label>
                        <input className="w-[222px] h-7 border border-black rounded-full pt-2 text-4 px-2" type="text" id="email"></input>
                    </div>
                    <div className="pt-[10px] wa-input">
                        <label className="text-[#735032]" htmlFor="wa">No.WA</label>
                        <input className="w-[222px] h-7 border border-black rounded-full pt-2 text-4 px-2" type="text" id="wa"></input>
                    </div>
                    <div className="pt-[10px] notes">
                        <p className="text-[8px]">*Email/Nomor Whatsapp wajib diisi karena kami akan mengirimkan barcode berisi nomor tempat duduk.</p>
                    </div>
                    <div className="pt-[10px] px-[55px] content-center button-submit">
                        <button className="w-[106px] h-7 border rounded-[15px] border-current bg-[background: #735032] m-auto submit-regist">
                            <span className="text-sm">Klik Disini</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}