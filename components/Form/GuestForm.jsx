import { useRouter } from "next/router";
import { useContext, useState } from 'react';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import SchemaValidation from '../../validation/GuestValidation';

export default function GuestForm({props})
{
    const [invalid,setInvalid] = useState();
    const [load,setLoad] = useState(false);

    const [data, setData] = useState({
        totalPerson: props.totalPerson,
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
        const name = props.name;
        const isFilled = !props.isFilled;
        
        const Validation = SchemaValidation(data.email, data.waNumber);

        if(Validation.error !== undefined)
        {
            setInvalid({
                title: "Invalid Form",
                content: `${Validation.error}`
            });
            return ;
        }

        setLoad(true);
        const response = await fetch('/api/handler', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ...data,
                isFilled
            })
        });
        const {status} = response;
        const responseJson = await response.json();
        if(status === 201)
        {
            setLoad(false);
            return router.replace(`/success/${props.name}`);  
        }
    }

    const invalidHandler = () => {
        setInvalid(null);
    }

    return(
        <div>
            {load === true && <Loader/>}
            {invalid && <Modal title={invalid.title} content={invalid.content} positionBox={'md:!left-[38%]'} onConfirm={invalidHandler} />}
            <div className="h-screen bg-merah flex flex-col items-center justify-center text-emas">
                <h1 className=" text-[36px] mb-[40px] font-kapital-bold">Form Kehadiran</h1>
                <div className="w-[280px] h-[400px] bg-putih border-[8px] border-emas rounded-[12px]">
                    <form className="pl-4 pt-2" onSubmit={submitHandler}>
                        <div className="pt-[7.5px] nama-input">
                            <label className="text-emas text-[12px]" htmlFor="nama">Nama</label>
                            <input className="w-[222px] h-[28px] border border-emas focus:outline-none rounded-full text-[12px] px-2 py-2 text-emas" disabled value={props.name} type="text" id="nama"/>
                        </div>
                        <div className="pt-[16px] presence-selector">
                            <label className="text-emas pr-[9px] text-[12px]" htmlFor="presence">Jumlah Hadir</label>
                            <select className="rounded-full w-[96px] h-[25px] border border-emas focus:outline-none text-center text-[12px] text-emas" name="totalPerson" id="presence" value={data.totalPerson} onChange={onChangeHandler}>
                                {
                                    Array(props.totalPerson).fill().map((_, i) => (
                                        <option key={i+1} value={i+1}>{i+1} Orang</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="pt-[16px] email-input">
                            <label className="text-emas text-[12px]" htmlFor="email">Email</label>
                            <input className="w-[222px] h-7 border border-emas focus:outline-none rounded-full px-2 py-2 text-[12px] text-emas" value={data.email} onChange={onChangeHandler} type="text" id="email" name="email"/>
                        </div>
                        <div className="pt-[16px] wa-input">
                            <label className="text-emas text-[12px]" htmlFor="wa">No.WA</label>
                            <input className="w-[222px] h-7 border border-emas focus:outline-none rounded-full px-2 py-2 text-[12px] text-emas" value={data.waNumber}
                            onChange={onChangeHandler} type="tel" id="wa" name="waNumber"/>
                        </div>
                        <div className="pt-[16px] notes">
                            <p className="text-[8px] text-emas">*Email/Nomor Whatsapp wajib diisi karena kami akan mengirimkan barcode berisi nomor tempat duduk.</p>
                        </div>
                        <div className="pt-[16px] content-center button-submit">
                            <button className="w-[222px] h-7 border rounded-[15px] border-emas text-emas m-auto transition duration-700 ease-in-out hover:bg-emas hover:text-putih submit-regist" type='submit'>
                                <span className="text-sm ">Klik Disini</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}