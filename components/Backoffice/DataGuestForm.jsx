import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default function DataGuestForm(props) {
    const [invalid,setInvalid] = useState();
    const [load,setLoad] = useState(false);
    const [dataGuest, setDataGuest] = useState({
        name : '',
        email : '',
        waNumber: '',
        totalPerson: '',
        seatNumber: '',
        totalSouvenir:'',
        imgurQrCode: '',
        isFilled: true
    })

    useEffect(()=>{
        if(props.editDataGuest !== undefined){
            setDataGuest({
                name : props.editDataGuest.name,
                email : props.editDataGuest.email,
                waNumber: props.editDataGuest.waNumber,
                totalPerson: props.editDataGuest.totalPerson,
                seatNumber: props.editDataGuest.seatNumber,
                totalSouvenir: props.editDataGuest.totalSouvenir,
                imgurQrCode: props.editDataGuest.imgurQrCode
            })
            
        }
    
    },[props.editDataGuest])

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setDataGuest({
            ...dataGuest,
            [name]: value,
            isFilled: true
        });
    }

    const clickCancelHandler = (e) => {
        e.preventDefault()
        setDataGuest({
            name : '',
            email : '',
            waNumber: '',
            totalPerson: '',
            seatNumber: '',
            totalSouvenir:'',
            imgurQrCode: ''
        })
    }

    const clickUpdateHandler = async (e) => {
        e.preventDefault();
        const formatSeatNumber = dataGuest.seatNumber.split(",").filter((x) => x.trim() !== '').length;
        const formatImgurQrCode = dataGuest.imgurQrCode.concat(".png")
        if(dataGuest.totalPerson === formatSeatNumber)
        {
            setLoad(true);
            const response = await fetch('/api/handler', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...dataGuest,
                    imgurQrCode: formatImgurQrCode
                })
            });
            setLoad(false);
            location.reload();
        } else {
            setInvalid({
                title: "Jumlah bangku tidak sesuai",
                content: `Total orang yang mendaftar ${dataGuest.totalPerson}, Jumlah bangku yang diberikan ${formatSeatNumber}`
            });
            return ;
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
                <form className="grid grid-cols-2 grid-rows-3 auto-cols-auto auto-rows-auto">
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Name</label>
                        <input value={dataGuest.name} disabled className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Email</label>
                        <input value={dataGuest.email} disabled className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">No. Wa</label>
                        <input value={dataGuest.waNumber} disabled className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Total Person</label>
                        <input value={dataGuest.totalPerson} disabled className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Nomor Bangku</label>
                        <input value={dataGuest.seatNumber}  onChange={onChangeHandler} className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='seatNumber'></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Total Souvenir</label>
                        <input value={dataGuest.totalSouvenir}  onChange={onChangeHandler} className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='totalSouvenir'></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left items-center">
                        <label className="bold mb-2 block">Imgur qrcode</label>
                        <input value={dataGuest.imgurQrCode}  onChange={onChangeHandler} className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full" name='imgurQrCode'></input>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-left">
                        <button className='text-red-500 hover:text-red-300 font-bold' onClick={clickCancelHandler}>Cancel</button>
                        <button className='text-green-500 hover:text-green-300 font-bold' onClick={clickUpdateHandler}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}