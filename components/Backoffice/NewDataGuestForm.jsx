import { useState } from 'react';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

export default function NewDataGuestForm() {
    const [invalid, setInvalid] = useState();
    const [load, setLoad] = useState(false);
    const [data, setData] = useState({
        name: '',
        totalPerson: '',
        email: '',
        waNumber: '',
        isFilled: false,
        seatNumber: '',
        emailCount: '',
        totalSouvenir: '',
        isCheckIn: 'Pending',
        imgurQrCode: '',
        isEmailSent: 'Pending',
        checkInTime: ''
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const onSubmitHandler = async(e) => {
        setLoad(true);
        e.preventDefault();
        const response = await fetch(`/api/guest/${data.name}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                name: data.name.trim(),
                email: data.email.toLowerCase().trim(),
                waNumber: data.waNumber.toLowerCase().trim(),
                totalPerson: data.totalPerson.toLowerCase().trim(),
                totalSouvenir: data.totalSouvenir.toLowerCase().trim(),
            })
        });
        const { status } = response;
        const responseJson = await response.json();
        console.log(responseJson)
        setLoad(false);
        if(status === 200) {
            setInvalid({
                title: "Error",
                content: `${responseJson.message}`
            })
        } else if(status === 201){
            location.reload();
        } else {
            setInvalid({
                title: "Error",
                content: `${responseJson.message}`
            })
        }
    }
    const invalidHandler = () => {
        setInvalid(null);
    }
    return(
        <div>
            {load === true && <Loader/>}
            {invalid && <Modal title={invalid.title} content={invalid.content} onConfirm={invalidHandler} />}
            <div className="w-[80%] my-4 mx-auto">
                <form className="grid grid-cols-2 grid-rows-3 auto-cols-auto auto-rows-auto" onSubmit={onSubmitHandler}>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Name</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='name' value={data.name} onChange={onChangeHandler}></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Total Person</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='totalPerson' value={data.totalPerson} onChange={onChangeHandler}></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Email</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='email' value={data.email} onChange={onChangeHandler}></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Total Souvenir</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='totalSouvenir' value={data.totalSouvenir} onChange={onChangeHandler}></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">No. Wa</label>
                        <input className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='waNumber' value={data.waNumber} onChange={onChangeHandler}></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left">
                        <button className='text-green-500 hover:text-green-300 font-bold' type='submit'>Add Guest</button>
                    </div>
                </form>
            </div>
        </div>
    )
}