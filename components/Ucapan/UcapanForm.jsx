import { useState } from "react";
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import SchemaValidation from '../../validation/UcapanValidation';

export default function UcapanForm(props) {

    const index = props.ucapan.map((ucapans)=>{
        return ucapans.name;
    }).indexOf(props.name)

    const [data, setData] = useState({
        guestName: props.name,
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

        const Validation = SchemaValidation(data.domisili, data.message)

        if(Validation.error !== undefined) {
            setError({
                title: "Invalid form",
                content: `${Validation.error}`
            });
    
            return;            
        }

        setLoad(true);

        const response = await fetch(`/api/ucapan/${props.name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data
            })
        });

        const responseJson = await response.json();

        setLoad(false);
        
        if(responseJson.messages === "Anda sudah menulis ucapan"){
            setError({
                title: "Messages",
                content: responseJson.messages
            });

            return;
        }

        setSuccess({
            title: "Message",
            content: responseJson.messages
        });
        
    }

    const modalHandler = () => {
        setError(null);
    }

    const successHandler = () => {
        setSuccess(null);
        location.reload();
    }


    return(
        <div>
            {load === true && <Loader/>}
            {success && <Modal title={success.title} content={success.content} onConfirm={successHandler} /> }
            {error && <Modal title={error.title} content={error.content} onConfirm={modalHandler} />}
             
            <div className="flex flex-col">
                <span className="font-sambung text-[36px] self-start mb-[16px] mt-[24px]">Doa dan Ucapan</span>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <input placeholder="Nama" name="guestName" disabled value={data.guestName} className="w-full h-[36px] mb-[4px]  bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas pb-[1px]" type="text" />
                        <span className="text-emas mb-[16px] text-[12px]">*Nama diatas diambil dari nama undangan dan tidak dapat diubah</span>
                        <input placeholder="Domisili" onChange={onChangeHandler} name="domisili" className="w-full h-[36px] mb-[16px] bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas pb-[1px]"  type="text" />
                        <textarea placeholder="Doa & Ucapan" onChange={onChangeHandler} name="message" className="w-full z-[1] h-[100px] mb-[8px] bg-putih border-[3px] border-emas pl-[12px] text-emas rounded-[15px] focus:outline-[0] placeholder:text-emas" type="text" id="ucapan" >
                        </textarea>
                        
                        <button type="submit" className="w-[40%] h-[35px] self-end border-[5px] text-emas border-emas bg-merah rounded-[25px] text-[14px] p-[1px] w-[120px] mb-[24px] hover:bg-putih hover:text-emas transition duration-300">
                            <span className="">Kirim</span>
                        </button>
                        <img src="/Icon/bunga-4.png" className="w-[50%] mt-[-109px] mb-[-24px] ml-[-12px]" />
                    </form>
            </div>
            
        </div>
    )
}