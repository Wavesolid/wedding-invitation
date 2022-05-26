import DataGuestItem from './DataGuestItem';
import { CSVLink } from 'react-csv';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import ConfirmModal from '../Modal/ConfirmModal';
import QrCodeGenerator from '../QrCodes/GenerateQrCode';

export default function DataGuest(props){
    const [guestData, setGuestData] = useState(props.dataGuest)
    const [confirm, setConfirm] = useState();
    const [filterGuest, setFilterGuest] = useState({
        name: '',
        email:'',
        waNumber:'',
        totalPerson:'',
        seatNumber:'',
        totalSouvenir:'',
        isCheckIn: '',
        isFilled: '',
        isEmailSent: ''
    });
    const [dataCsv, setDataCsv] = useState([]);
    const [load,setLoad] = useState(false);
    const [modal,setModal] = useState();
    const dataCollection = [];
    const headers = [
        {label: "Nama", key: "name"},
        {label: "Email", key: "email"},
        {label: "WaNumber", key: "waNumber"},
        {label: "Sudah Konfirmasi",key:"isFilled"},
        {label: "TotalPerson", key: "totalPerson"},
        {label: "SeatNumber", key: "seatNumber"},
        {label: "totalSouvenir", key: "totalSouvenir"},
        {label: "isCheckIn", key: "isCheckIn"},
        {label: "checkInTime", key: "checkInTime"},
        
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
        setFilterGuest((prevData) => {
            const updateData = {
                ...prevData,
                [name] : value
        }
        console.log(updateData);
        setGuestData(props.dataGuest.filter((data) => (
            data.name.toLowerCase().includes(updateData.name.toLowerCase()) && 
            data.email.toLowerCase().includes(updateData.email.toLowerCase()) && 
            data.waNumber.includes(updateData.waNumber.toLowerCase()) && 
            data.totalPerson.toString().includes(updateData.totalPerson.toLowerCase()) &&
            data.seatNumber.toString().includes(updateData.seatNumber.toLowerCase()) &&
            data.totalSouvenir.toString().includes(updateData.totalSouvenir.toLowerCase()) &&
            data.isCheckIn.toLowerCase().includes(updateData.isCheckIn) &&
            data.isFilled.toString().toLowerCase().includes(updateData.isFilled.toString()) &&
            data.isEmailSent.toLowerCase().includes(updateData.isEmailSent)
        )));
        return updateData;
    })  
        
    }

    const onClickHandler = () => 
    {
        const {dataGuest} = props;
        dataGuest.forEach((data) => {
            dataCollection.push({
                name: data.name,
                email: data.email,
                waNumber: data.waNumber,
                isFilled: data.isFilled,
                totalPerson: data.totalPerson,
                seatNumber: data.seatNumber,
                filledOn: data.updatedAt,
                totalSouvenir: data.totalSouvenir,
                isCheckIn: data.isCheckIn,
                checkInTime: data.checkInTime
            })
        });
        setDataCsv(dataCollection);
    }

    const sendPerEmail = async(dataGuest) => {
        setLoad(true);
        const guests = {
            ...dataGuest,
        };
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guests
            })
        });
        setLoad(false);
        const responseJson = await response.json();
        if(response.status === 201) 
        {
            setModal({
                title: "Berhasil",
                content: "Email berhasil dikirimkan"
            });
            return ;
        } else if(response.status === 406) {
            setModal({
                title: "Gagal",
                content: responseJson.messages
            });
            return ;
        }
        else {
            setModal({
                title: "Gagal",
                content: `${responseJson.messages}`
            });
        }
        props.onSendEmailGuest(guestData);
    }

    const sendEmail = () => {
        setConfirm({
            title: "Confirmation",
            content: "Apakah anda yakin?"
        })
    }

    const confirmSendEmailHandler = async() =>
    {    
        setConfirm(null);
        setLoad(true);
        const {dataGuest} = props;
        const guests = dataGuest.filter((guest) => guest.email !== "")
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guests
            })
        }); 
        setLoad(false);
        const responseJson = await response.json();
        console.log(responseJson);
        if(response.status === 201) 
        {
            setModal({
                title: "Berhasil",
                content: "Email berhasil dikirimkan"
            });
            return ;
        } else {
            setModal({
                title: "Gagal",
                content: `${responseJson.messages}`
            });
        }
    }

    const confirmCancelHandler = () => {
        setConfirm(null)
    }


    function generateQrCode(name) 
    {
        return <QrCodeGenerator name={name} size={70}/>
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
            totalSouvenir: '',
            isCheckIn: '',
            checkInTime: ''
        });
    }

    const modalHandler = () => {
        setModal(null);
    }

    return(
        <div>
            {load === true && <Loader/>}
            {modal && <Modal title={modal.title} content={modal.content} onConfirm={modalHandler} />}
            {confirm && <ConfirmModal title={confirm.title} content={confirm.content} onConfirm={confirmSendEmailHandler} onCancel={confirmCancelHandler} />}
            <div className="flex flex-col w-[80%] my-0 mx-auto">
                <div className='flex justify-between'>
                    <div className='inline-block pt-2'>
                        <CSVLink className='text-indigo-700 hover:text-indigo-400 font-bold' data={dataCsv} headers={headers} onClick={onClickHandler} filename={"Data Guest Wedding"}>Download CSV Here</CSVLink>
                    </div>
                    <div className='inline-block pt-2'>
                        <button className='text-indigo-700 hover:text-indigo-400 font-bold' onClick={sendEmail}>Send Email</button>
                    </div>
                </div>

                <div className='overflow-x-auto h-[70vh]'>
                    <table className="relative min-w-full divide-y divide-gray-200">
                        <thead className="">
                            <tr>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Name</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Email</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">No. Wa</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Total Person</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Konfirmasi Kehadiran</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Nomor Bangku</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Total Souvenir</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Status Checkin</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Checkin Date</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">Email Sent Status</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">link</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium">QR Code</th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium"></th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium"></th>
                                <th scope="col" className="sticky top-0 py-6 bg-gray-50 text-gray-500 text-xs uppercase font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by Name' className='border-2 p-1 rounded' type='text' name='name' value={filterGuest.name} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by Email'  className='border-2 p-1 rounded' type='email' name='email' value={filterGuest.email} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by No. Wa'  className='border-2 p-1 rounded' type='tel' name='waNumber' value={filterGuest.waNumber} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by Jumlah'  className='border-2 p-1 rounded'  type='text' name='totalPerson' value={filterGuest.totalPerson} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center' >
                                    <select className='border-2 p-1 rounded' name="isFilled" onChange={onFilterHandler}>
                                        <option value="">No Filter</option>
                                        <option value="false">Pending</option>
                                        <option value="true">Konfirmasi</option>
                                    </select>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by No. Bangku'  className='border-2 p-1 rounded'  type='text' name='seatNumber' value={filterGuest.seatNumber} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by Total Souvenir'  className='border-2 p-1 rounded'  type='text' name='totalSouvenir' value={filterGuest.totalSouvenir} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                <select className='border-2 p-1 rounded' name="isCheckIn" onChange={onFilterHandler}>
                                        <option value="">No Filter</option>
                                        <option value="pending">Pending</option>
                                        <option value="checked in">Checked In</option>
                                </select>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                    <input placeholder='Search by checkIn Time'  className='border-2 p-1 rounded'  type='text' name='checkInTime' value={filterGuest.checkInTime} onChange={onFilterHandler}/>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center' >
                                    <select className='border-2 p-1 rounded' name="isEmailSent" onChange={onFilterHandler}>
                                            <option value="">No Filter</option>
                                            <option value="pending">Pending</option>
                                            <option value="sent">Sent</option>
                                    </select>
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>
                                
                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>

                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>

                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center'>

                                </td>
                                <td className='sticky top-[62px] bg-gray-50 px-6 py-4 text-center '>
                                    <button className='text-indigo-600 hover:text-indigo-900' onClick={onResetHandler}>Reset</button>
                                </td>
                            </tr>
                                {
                                    guestData.sort((a,b) => a.checkInTime > b.checkInTime ? -1 : 1 ).map((dataGuests)=>(
                                            <DataGuestItem
                                                onEdit={setEditHandler}
                                                onSend={sendPerEmail}
                                                key={dataGuests._id}
                                                name={dataGuests.name}
                                                email={dataGuests.email}
                                                waNumber={dataGuests.waNumber}
                                                totalPerson={dataGuests.totalPerson}
                                                isFilled={dataGuests.isFilled}
                                                seatNumber={dataGuests.seatNumber}
                                                totalSouvenir = {dataGuests.totalSouvenir}
                                                isCheckIn = {dataGuests.isCheckIn}
                                                checkInTime = {dataGuests.checkInTime}
                                                emailCount = {dataGuests.emailCount}
                                                isEmailSent = {dataGuests.isEmailSent}
                                                qr = {generateQrCode(dataGuests.name)}
                                                imgurQrCode = {dataGuests.imgurQrCode}
                                                slug ={dataGuests.slug}                                           
                                            />
                                    ))
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}