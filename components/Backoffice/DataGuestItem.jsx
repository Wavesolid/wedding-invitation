import { useState, useRef, useEffect} from 'react';

export default function DataGuestItem(props){
    const [guestEdit, setguestEdit] = useState({
        name: props.name,
        email: props.email,
        waNumber: props.waNumber,
        totalPerson: props.totalPerson,
        isFilled: props.isFilled,
        seatNumber: props.seatNumber,
        emailCount : props.emailCount,
        isEmailSent: props.isEmailSent,
        qrCode : props.qr,
        totalSouvenir: props.totalSouvenir,
        isCheckIn: props.isCheckIn,
        checkInTime: props.checkInTime,
        imgurQrCode: props.imgurQrCode
    })
    const qrs = useRef();   
    useEffect(() => {
        props.refQr(qrs.current.innerHTML, qrs.current.children[0])
    })

    const clickHandler = () => {
        props.onEdit(guestEdit);
    }

    const sendEmailHandler = () => {
        props.onSend({
            name: props.name,
            email: props.email,
            waNumber: props.waNumber,
            totalPerson: props.totalPerson,
            seatNumber: props.seatNumber,
            totalSouvenir: props.totalSouvenir,
            isCheckIn: props.isCheckIn,
            checkInTime: props.checkInTime,
            imgurQrCode: props.imgurQrCode,
            emailCount: props.emailCount
        });
    }

    const dateFormat = new Date(guestEdit.checkInTime).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

    return(
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                    <div>
                        <div className="text-sm font-medium text-gray-900">{guestEdit.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">{guestEdit.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="text-sm text-gray-900"> {guestEdit.waNumber} </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalPerson}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                {guestEdit.isFilled === true && "Hadir"}
                {guestEdit.isFilled !== true && "Pending"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.seatNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.totalSouvenir}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.isCheckIn}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{dateFormat}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.isEmailSent}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500" ref={qrs}>
                <img src={guestEdit.imgurQrCode} alt="qrcode"/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={clickHandler} className="text-indigo-600 hover:text-indigo-900">Edit</button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={sendEmailHandler} className="text-indigo-600 hover:text-indigo-900">Send Per Email</button>
            </td>
        </tr>
    )
}