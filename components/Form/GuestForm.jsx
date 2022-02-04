import { useRouter } from "next/router";
import {useState} from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';

export default function GuestForm({name})
{


    const [invalid,setInvalid] = useState();

    const [data, setData] = useState({
        totalPerson: 1,
        email: '',
        waNumber : ''
    });

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

        if(data.email.trim().length === 0 && data.waNumber.trim().length === 0 ){
            setInvalid({
                title: "Invalid Input",
                content: "Salah satu dari email atau nomor whatsapp harus diisi"
            })

            return;
        }

        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(data.email)) && data.email.trim().length > 0 ){
            setInvalid({
                title: "Invalid Email Format",
                content: "Format email salah ex.(name@email.com)"
            })

            return;
        }

        if(!(/[0-9]{11,13}/.test(data.waNumber))){
            setInvalid({
                title: "Invalid Number Format",
                content: "Format nomor salah ex.(08xxxxxxxxxx)"
            })

            return;
        }

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

    const invalidHandler = () => {
        setInvalid(null);
    }

    return(
        <div>
            {invalid && <ErrorModal title={invalid.title} content={invalid.content} onConfirm={invalidHandler} ></ErrorModal>}
            <div className="h-screen bg-[#0D0D0D] bg-[url('/Photo/bg-batik.png')] flex flex-col items-center justify-center">
                <h1 className="text-[#F2C777] text-[24px] mb-[40px] font-bold">Form Kehadiran</h1>
                <div className="w-[247px] h-[400px] bg-[#F2C777] rounded-[12px]">
                    <form className="pl-4 pt-2" onSubmit={submitHandler}>
                        <div className="pt-[7.5px] nama-input">
                            <label className="text-[#735032] text-[12px]" htmlFor="nama">Nama</label>
                            <input className="w-[222px] h-[28px] border border-[#735032] focus:outline-none rounded-full text-[12px] px-2 py-2 text-[#735032]" disabled value={name} type="text" id="nama"/>
                        </div>
                        <div className="pt-[16px] presence-selector">
                            <label className="text-[#735032] pr-[9px] text-[12px]" htmlFor="presence">Jumlah Hadir</label>
                            <select className="rounded-full w-[96px] h-[25px] border border-[#735032] focus:outline-none text-center text-[12px] text-[#735032]" name="totalPerson" id="presence" value={data.totalPerson} onChange={onChangeHandler}>
                                <option value="1">1 Orang</option>
                                <option value="2">2 Orang</option>
                                <option value="3">3 Orang</option>
                            </select>
                        </div>
                        <div className="pt-[16px] email-input">
                            <label className="text-[#735032] text-[12px]" htmlFor="email">Email</label>
                            <input className="w-[222px] h-7 border border-[#735032] focus:outline-none rounded-full px-2 py-2 text-[12px] text-[#735032]" value={data.email} onChange={onChangeHandler} type="text" id="email" name="email"/>
                        </div>
                        <div className="pt-[16px] wa-input">
                            <label className="text-[#735032] text-[12px]" htmlFor="wa">No.WA</label>
                            <input className="w-[222px] h-7 border border-[#735032] focus:outline-none rounded-full px-2 py-2 text-[12px] text-[#735032]" value={data.waNumber}
                            onChange={onChangeHandler} type="tel" id="wa" name="waNumber"/>
                        </div>
                        <div className="pt-[16px] notes">
                            <p className="text-[8px] text-[#735032]">*Email/Nomor Whatsapp wajib diisi karena kami akan mengirimkan barcode berisi nomor tempat duduk.</p>
                        </div>
                        <div className="pt-[16px] content-center button-submit">
                            <button className="w-[222px] h-7 border rounded-[15px] border-[#735032] text-[#735032] m-auto transition duration-700 ease-in-out hover:bg-[#735032] hover:text-[#F2C777] submit-regist" type='submit'>
                                <span className="text-sm ">Klik Disini</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}