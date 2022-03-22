import { useState, useRef, useEffect} from 'react';

export default function DataGuestItem(props){

    const [guestEdit, setguestEdit] = useState({
        name: props.name,
        email: props.email,
        waNumber: props.waNumber,
        totalPerson: props.totalPerson,
        seatNumber: props.seatNumber,
        emailCount : props.emailCount,
        qrCode : props.qr
    })

    const qrs = useRef();   
    useEffect(() => {
        // console.log(qrs.current.children[0]) 
        props.refQr(qrs.current.innerHTML, qrs.current.children[0])
    })
    const clickHandler = () => {
        props.onEdit(guestEdit);
    }
    
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
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.seatNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{guestEdit.emailCount}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500" ref={qrs}>{guestEdit.qrCode}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={clickHandler} className="text-indigo-600 hover:text-indigo-900">Edit</button>
            </td>
        </tr>
    )
}