import { useRouter } from "next/router";
import { useState } from "react";
import Modal from '../Modal/Modal';

export default function UcapanForm({name}) {
    const router = useRouter();
    
    const [data, setData] = useState({
        displayName: '',
        domisili: '',
        message: ''
    });

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState();

    //joi validation
    const Joi = require('joi');
    const schema = Joi.object({
        displayName: Joi.string()
            .min(3)
            .max(15)
            .required(),

        domisili: Joi.string()
            .min(5)
            .max(15)
            .required(),
    
        message: Joi.string()
            .min(3)
            .max(200)
            .required()
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const value = schema.validate({ 
            displayName: data.displayName, 
            domisili: data.domisili,
            message: data.message 
        });

        if(value.error === undefined) {
            setError({
                title: "Invalid form",
                content: `${value.error}`
            });
    
            return;            
        }

        const response = await fetch('/api/UcapanHandler', {
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
        setSuccess({
            title: "Berhasil terkirim",
            content: "Ucapan anda sudah terkirim, terima kasih !"
        })
        
    }

    const modalHandler = () => {
        setSuccess(null);
        setError(null);
    }
    
    return(
        <div className="ml-[10px]">
            {success && <Modal title={success.title} content={success.content} onConfirm={modalHandler} /> }
            {error && <Modal title={error.title} content={error.content} onConfirm={modalHandler} />}
            <span className="font-bold text-[18px] mb-[16px]">Form Ucapan</span>
            <form onSubmit={submitHandler} className="flex flex-col">
                <label className="mb-[8px]" htmlFor="nama">Nama</label>
                <input name="displayName" onChange={onChangeHandler} className="w-[335px] h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="nama"/>
                <label className="mb-[8px]" htmlFor="domisili">Domisili</label>
                <input onChange={onChangeHandler} name="domisili" className="w-[335px] h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="domisli"/>
                <label className="mb-[8px]" htmlFor="ucapan">Kirim ucapan mu</label>
                <textarea onChange={onChangeHandler} name="message" className="w-[335px] h-[66px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] p-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="ucapan" >
                </textarea>
                <button type="submit" className="w-[355px] h-[35px] bg-[#F2C777] rounded-[15px] mb-[36px]">
                    <span className=" text-[#0D0D0D] text-[12px] font-bold">Kirim Sekarang</span>
                </button>
            </form>
        </div>
    )
}