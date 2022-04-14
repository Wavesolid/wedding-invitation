import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import ConfirmModal from '../Modal/ConfirmModal'

export default function Seat({props})
{
    const { totalSouvenir } = props.data;
    const { seatNumber } = props.data;
    const { isCheckIn } = props.data;
    const { name } = props.data;
    
    const [showModal,setShowModal] = useState()
    const [dataCheck, setDataCheck] = useState({
        isCheckIn: "Checked In",
        checkInTime: Date.now()
    })
    
    const router = useRouter();

    useEffect(() => {
        if(isCheckIn.toLowerCase() === 'pending') {
            console.log(isCheckIn);
            setShowModal(
                {
                    title: "Confirmation",
                    content: "Check In digunakan sebagai tanda kehadiran anda pada acara ini dan hanya bisa tekan sekali. Apakah anda yakin?"
                }
            )
        }
    }, [isCheckIn]);

    const confirmHandler = async (e) => {
        const { name } = props.data

        setDataCheck({
            isCheckIn: "Checked In",
            checkInTime: Date.now()
        })

        const response = await fetch('/api/checkInHandler', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                ...dataCheck
            })
        });

        const responseJson = await response.json();

        location.reload()
    }

    const cancelHandler = () => {
        return router.replace(`/qrcode/${name}`);
    }

    return (
        <div className="h-screen bg-merah flex flex-col items-center justify-center">
            {showModal && <ConfirmModal title={showModal.title} content={showModal.content} positionBox={'md:!left-[38%]'} onConfirm={confirmHandler} onCancel={cancelHandler} />}
            <div>
                <img src="/Icon/asset-batik-8.svg"/>
            </div>
                {seatNumber.split(',').map((x) => 
                    <h1 key={x.trim()} className='text-white text-[32px] flex flex-row'>{x.trim()}</h1>
                )}
            <div>
                <img className='rotate-180' src="/Icon/asset-batik-8.svg"/>
            </div>
            <div>
                <span className="text-white text-[32px]">Total Souvenir : {totalSouvenir}</span>
            </div>
        </div>
    )
}
