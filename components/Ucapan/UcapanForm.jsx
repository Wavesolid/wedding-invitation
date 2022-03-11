import { useState } from "react";
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import SchemaValidation from '../../validation/UcapanValidation';

export default function UcapanForm(props) {

    const index = props.ucapan.map((ucapans)=>{
        return ucapans.name;
    }).indexOf(props.name)

    const [data, setData] = useState({
        displayName: '',
        domisili: '',
        message: ''
    });

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState();
    const [load, setLoad] = useState(false)

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const name = props.name;

        const Validation = SchemaValidation(data.displayName, data.domisili, data.message)

        if(Validation.error !== undefined) {
            setError({
                title: "Invalid form",
                content: `${Validation.error}`
            });
    
            return;            
        }

        setLoad(true);

        const response = await fetch('/api/UcapanHandler', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ...data
            })
        });

        const responseJson = await response.json();

        setLoad(false);
        
        setSuccess({
            title: "Berhasil terkirim",
            content: "Ucapan anda sudah terkirim, terima kasih !"
        });
        
    }

    const modalHandler = () => {
        setError(null);
    }

    const successHandler = () => {
        setSuccess(null);
        location.reload()
    }


    return(
        <div>
            {load === true && <Loader/>}
            {success && <Modal title={success.title} content={success.content} onConfirm={successHandler} /> }
            {error && <Modal title={error.title} content={error.content} onConfirm={modalHandler} />}
             
            <div className="flex flex-col h-[366px]">
                <span className="font-sambung text-[36px] self-start mb-[16px] mt-[24px]">Doa dan Ucapan</span>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <input placeholder="Nama" name="displayName" onChange={onChangeHandler} className="w-full h-[36px] mb-[16px] bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas pb-[1px]" type="text" />
                        <input placeholder="Domisili" onChange={onChangeHandler} name="domisili" className="w-full h-[36px] mb-[16px] bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas pb-[1px]"  type="text" />
                        <textarea placeholder="Doa & Ucapan" onChange={onChangeHandler} name="message" className="w-full z-[1] h-[100px] mb-[8px] bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas" type="text" id="ucapan" >
                        </textarea>
                        
                        <button type="submit" className="w-[40%] h-[35px] self-end border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[1px] w-[120px] mb-[24px] hover:bg-putih hover:text-emas transition duration-300">
                            <span className="">Kirim</span>
                        </button>
                        <img src="/Icon/bunga-4.png" className="w-[50%] relative top-[-93px] right-[12px]" />
                    </form>
            </div>
            

            {/* {props.ucapan[index].message !== ""  && 
                <div className="flex items-center justify-center font-kapital-bold h-[100px]">
                    <span className="text-[20px]">Terima kasih sudah menulis ucapan</span>
                </div>
            } */}
            
        </div>
    )
}