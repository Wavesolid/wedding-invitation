import { useState } from 'react'
import ConfirmModal from '../Modal/ConfirmModal'

export default function Seat({props})
{
    const { totalSouvenir } = props.data;
    const { seatNumber } = props.data;
    const { isCheckIn } = props.data;

    const [showModal,setShowModal] = useState()
    const [dataCheck, setDataCheck] = useState({
        isCheckIn: true,
        checkInTime: Date.now()
    })

    const clickHandler = () => {
        setShowModal({
            title: "Confirmation",
            content: "Check In digunakan sebagai tanda kehadiran anda pada acara ini dan hanya bisa tekan sekali. Apakah anda yakin?"
        })
    }

    const confirmHandler = async (e) => {
        console.log("masuk")

        const { name } = props.data
        console.log(name);

        setDataCheck({
            isCheckIn: true,
            checkInTime: Date.now()
        })

        console.log(dataCheck);

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
        setShowModal();
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
            <div>
                { !isCheckIn && 
                    <button type="button" onClick={clickHandler} className="border-[5px] text-emas border-emas bg-putih rounded-[25px] text-[14px] p-[4px] w-[120px] mb-[16px] hover:bg-transparent hover:text-emas transition duration-300">
                        <span>Check In</span>
                    </button>
                }
            </div>
        </div>
    )
}
