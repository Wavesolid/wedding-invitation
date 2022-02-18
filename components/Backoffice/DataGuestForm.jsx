import { useState, useEffect } from 'react';

export default function DataGuestForm(props) {
    
    const [dataGuest, setDataGuest] = useState({
        name : '',
        email : '',
        waNumber: '',
        totalPerson: '',
        nomorBangku: ''
    })


    useEffect(()=>{
        if(props.editDataGuest !== undefined){
            setDataGuest({
                name : props.editDataGuest.name,
                email : props.editDataGuest.email,
                waNumber: props.editDataGuest.waNumber,
                totalPerson: props.editDataGuest.totalPerson,
                nomorBangku: props.editDataGuest.nomorBangku
            })
            
        }
    
    },[props.editDataGuest])

    const clickCancelHandler = (e) => {
        e.preventDefault()
        setDataGuest({
            name : '',
            email : '',
            waNumber: '',
            totalPerson: '',
            nomorBangku: ''
        })
    }

    const clickUpdateHandler = (e) => {
        e.preventDefault();
        console.log("berhasil update");
    }

    return(
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
                    <input value={dataGuest.nomorBangku}  className="p-2 font-[inherit] rounded-[6px] border-[1px] border-[#ccc] w-[20rem] max-w-full"></input>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-left">
                    <button onClick={clickCancelHandler}>Cancel</button>
                    <button onClick={clickUpdateHandler}>Update</button>
                </div>
            </form>
        </div>
    )
}