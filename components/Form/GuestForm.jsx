import { useRouter } from "next/router";
import {useState} from 'react';

export default function GuestForm({name})
{
    const [data, setData] = useState({
        totalPerson: 1,
        email: '',
        waNumber : ''
    });
    console.log(name);
    const router = useRouter();

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/handler', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ...data
            })
        });

        const responseJson = await response.json();
        return router.replace(`/qrcode/${name}`);
    }
    return(
        <div className="h-screen bg-[#0D0D0D] bg-[url('/Photo/bg-batik.png')] flex flex-col items-center justify-center">
            <h1 className="text-[#F2C777] text-[24px] mb-[40px] font-bold">Form Kehadiran</h1>
            <div className="w-[247px] h-[333px] bg-[#F2C777] rounded-[12px]">
                <form className="pl-4 pt-2" onSubmit={submitHandler}>
                    <div className="pt-[7.5px] nama-input">
                        <label className="text-[#735032] text-[12px]" htmlFor="nama">Nama</label>
                        <input className="w-[222px] h-[28px] border border-[#735032] focus:outline-none rounded-full text-[12px] px-2 py-2 text-[#735032]" disabled value={name} type="text" id="nama"/>
                    </div>
                    <div className="pt-[10px] presence-selector">
                        <label className="text-[#735032] pr-[9px] text-[12px]" htmlFor="presence">Jumlah Hadir</label>
                        <select className="rounded-full w-[96px] h-[25px] border border-[#735032] focus:outline-none text-center text-[12px] text-[#735032]" name="totalPerson" id="presence" value={data.totalPerson} onChange={onChangeHandler}>
                            <option value="1">1 Orang</option>
                            <option value="2">2 Orang</option>
                            <option value="3">3 Orang</option>
                        </select>
                    </div>
                    <div className="pt-[10px] email-input">
                        <label className="text-[#735032] text-[12px]" htmlFor="email">Email</label>
                        <input className="w-[222px] h-7 border border-[#735032] focus:outline-none rounded-full px-2 py-2 text-[12px] text-[#735032]" value={data.email} onChange={onChangeHandler} type="text" id="email" name="email"/>
                    </div>
                    <div className="pt-[10px] wa-input">
                        <label className="text-[#735032] text-[12px]" htmlFor="wa">No.WA</label>
                        <input className="w-[222px] h-7 border border-[#735032] focus:outline-none rounded-full px-2 py-2 text-[12px] text-[#735032]" value={data.waNumber}
                        onChange={onChangeHandler} type="tel" id="wa" name="waNumber" pattern="[0-9]{12,13}"/>
                    </div>
                    <div className="pt-[10px] notes">
                        <p className="text-[8px] text-[#735032]">*Email/Nomor Whatsapp wajib diisi karena kami akan mengirimkan barcode berisi nomor tempat duduk.</p>
                    </div>
                    <div className="pt-[10px] px-[55px] content-center button-submit">
                        <button className="w-[106px] h-7 border rounded-[15px] border-[#735032] bg-[background: #735032] m-auto submit-regist" type='submit'>
                            <span className="text-sm text-[#735032]">Klik Disini</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}