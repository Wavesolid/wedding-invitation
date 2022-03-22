import DataGuestItem from './DataGuestItem';
import { CSVLink } from 'react-csv';
import { useState, useContext, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import QrCodeGenerator from '../QrCodes/GenerateQrCode';

export default function DataGuest(props){
    const [guestData, setGuestData] = useState(props.dataGuest)
    const [filterGuest, setFilterGuest] = useState({});
    const [dataCsv, setDataCsv] = useState([]);
    const [load,setLoad] = useState(false);
    const [modal,setModal] = useState();
    // const [canvasQr, setCanvasQr] = useState([]);
    const canvasObj = {};
    const canvasQr = [];
    const qrs = useRef();  

    const dataCollection = [];
    const headers = [
        {label: "Nama", key: "name"},
        {label: "Email", key: "email"},
        {label: "WaNumber", key: "waNumber"},
        {label: "TotalPerson", key: "totalPerson"},
        {label: "SeatNumber", key: "seatNumber"},
        {label: "FilledOn", key: "filledOn"},
    ]

    const setEditHandler = (dataGuestEdit) => {
        const guestData = {
            ...dataGuestEdit,
        };
        props.onEditDataGuest(guestData);
    }
    const onFilterHandler = (e) =>
    {
        const {name, value} = e.target
        setFilterGuest({
            ...filterGuest,
            [name]: value,
        });

        value !== '' ? setGuestData(props.dataGuest.filter((x) => x[name].toString().includes(value.toLowerCase()))) : setGuestData(props.dataGuest);
        
    }

    const onClickHandler = () => 
    {
        const {dataGuest} = props;
        dataGuest.forEach((data) => {
            dataCollection.push({
                name: data.name,
                email: data.email,
                waNumber: data.waNumber,
                totalPerson: data.totalPerson,
                seatNumber: data.seatNumber,
                filledOn: data.updatedAt
            })
        });
        setDataCsv(dataCollection);
    }

    const sendEmail = async() =>
    {      
        // console.log(canvasObj)
        
        setLoad(true);
        const {dataGuest} = props;
        const guests = dataGuest.filter((guest) => guest.email !== "")
        var filteredQr = canvasQr.filter((qr) => {
            return guests.some((guest) => {
                return guest.name === qr.id
            })
        }).map((qr) => {return qr.canvas})
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guests,
                filteredQr
            })
        }); 
        setLoad(false);
        const responseJson = await response.json();
        console.log(responseJson);
        if(responseJson.messages) 
        {
            setModal({
                title: "Berhasil",
                content: "Email berhasil dikirimkan"
            });
            return ;
        } else {
            setModal({
                title: "Gagal",
                content: `${responseJson.err.previous}`
            });
        }
    }

    function generateQrCode(name) 
    {
        return <QrCodeGenerator name={name} size={70}/>
    }

    function refQr(canvas, {id})
    {
        canvasQr.push({id, canvas})
    }

    const onResetHandler = () => 
    {
        setGuestData(props.dataGuest);
        setFilterGuest({
            name : '',
            email : '',
            waNumber: '',
            totalPerson: '',
            seatNumber: '',
        });
    }

    const modalHandler = () => {
        setModal(null);
    }

    return(
        <div>
            {load === true && <Loader/>}
            {modal && <Modal title={modal.title} content={modal.content} onConfirm={modalHandler} />}
            <div className="flex flex-col w-[80%] my-0 mx-auto">
                <div className='flex justify-between'>
                    <div className='inline-block pt-2'>
                        <CSVLink className='text-indigo-700 hover:text-indigo-400 font-bold' data={dataCsv} headers={headers} onClick={onClickHandler} filename={"Data Guest Wedding"}>Download CSV Here</CSVLink>
                    </div>
                    <div className='inline-block pt-2'>
                        <button className='text-indigo-700 hover:text-indigo-400 font-bold' onClick={sendEmail}>Send Email</button>
                    </div>
                </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">No. Wa</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Total Person</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Nomor Bangku</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">Total Email Send</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 text-center uppercase tracking-wider">QR Code</th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td>
                                    <input placeholder='Search by Name' className='border-2' type='text' name='name' value={filterGuest.name} onChange={onFilterHandler}/>
                                </td>
                                <td>
                                    <input placeholder='Search by Email'  className='border-2' type='email' name='email' value={filterGuest.email} onChange={onFilterHandler}/>
                                </td>
                                <td>
                                    <input placeholder='Search by No. Wa'  className='border-2' type='tel' name='waNumber' value={filterGuest.waNumber} onChange={onFilterHandler}/>
                                </td>
                                <td>
                                    <input placeholder='Search by Jumlah'  className='border-2'  type='text' name='totalPerson' value={filterGuest.totalPerson} onChange={onFilterHandler}/>
                                </td>
                                <td>
                                    <input placeholder='Search by No. Bangku'  className='border-2'  type='text' name='seatNumber' value={filterGuest.seatNumber} onChange={onFilterHandler}/>
                                </td>
                                <td>
                                    
                                </td>
                                <td className='flex justify-center'>
                                    <button className='text-indigo-600 hover:text-indigo-900' onClick={onResetHandler}>Reset</button>
                                </td>
                            </tr>
                                {
                                    guestData.map((dataGuests)=>(
                                            <DataGuestItem
                                                onEdit={setEditHandler}
                                                key={dataGuests._id}
                                                name={dataGuests.name}
                                                email={dataGuests.email}
                                                waNumber={dataGuests.waNumber}
                                                totalPerson={dataGuests.totalPerson}
                                                seatNumber={dataGuests.seatNumber}
                                                emailCount = {dataGuests.emailCount}
                                                qr = {generateQrCode(dataGuests.name)}
                                                refQr = {refQr}
                                            />
                                    ))
                                }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}