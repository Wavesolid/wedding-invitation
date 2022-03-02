import { useState } from "react";
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import Transition from '../Transition/Transition';
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
             
            <div className="flex flex-col">
                <span className="font-bold text-[24px] self-center mb-[16px] mt-[24px]">Doa dan Ucapan</span>
                    <form onSubmit={submitHandler} className="flex flex-col">
                        <label className="mb-[8px]" htmlFor="nama">Nama</label>
                        <input name="displayName" onChange={onChangeHandler} className="w-full h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="nama"/>
                        <label className="mb-[8px]" htmlFor="domisili">Domisili</label>
                        <input onChange={onChangeHandler} name="domisili" className="w-full h-[30px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] pl-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="domisli"/>
                        <label className="mb-[8px]" htmlFor="ucapan">Kirim ucapan mu</label>
                        <textarea onChange={onChangeHandler} name="message" className="w-full h-[66px] mb-[16px] bg-[transparent] border-[1px] border-[#F2C777] p-[12px] text-[12px] rounded-[15px] focus:outline-[0]" type="text" id="ucapan" >
                        </textarea>
                        <button type="submit" className="w-full h-[35px] bg-[#F2C777] rounded-[15px] mb-[36px]">
                            <span className=" text-[#0D0D0D] text-[16px] font-bold">Send</span>
                        </button>
                    </form>
            </div>
            

            {/* {props.ucapan[index].message !== ""  && 
                <div className="flex items-center justify-center h-[100px]">
                    <span className="text-[20px]">Terima kasih sudah menulis ucapan</span>
                </div>
            } */}
            {/* <Transition/> */}
        </div>
    )
}