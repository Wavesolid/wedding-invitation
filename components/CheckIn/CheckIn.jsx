import { useState, useEffect } from 'react'

export default function CheckInSeat({props}){

    const { isCheckIn } = props.data;
    const { name } = props.data;

    const [dataCheck, setDataCheck] = useState({
        isCheckIn: "Checked In",
        checkInTime: Date.now()
    })

    useEffect(() => {
        if(isCheckIn.toLowerCase() === 'pending') {

            const updateData = async () => {
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
            }

            updateData()

        }else if(isCheckIn.toLowerCase() === 'checked in'){
            return
        }
    }, [isCheckIn, name]);

    return(
        <div className='h-screen bg-merah text-putih flex flex-col items-center justify-center'>
            <img src="/Icon/check-mark.png" alt="check-mark" className='w-[20%]' />
            <span className='text-[24px]'>check in berhasil</span>
        </div>
    )
}
