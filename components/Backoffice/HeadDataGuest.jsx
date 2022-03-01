import { useState } from 'react';
import { signOut } from 'next-auth/react';
import ConfirmModal from '../Modal/ConfirmModal'

export default function HeadDataGuest() {

    const [isLogout, setIsLogout] = useState()

    const clickHandler = () => {
        setIsLogout({
            title: "Logout",
            content: "Apakah anda yakin ingin keluar?",
        })
    }

    const confirmHandler = () => {
        signOut({callbackUrl: '/backoffice'})
    }

    const cancelHandler = () => {
        setIsLogout(null);
    }

    return(
        <div>
            {isLogout && <ConfirmModal title={isLogout.title} content={isLogout.content} onConfirm={confirmHandler} onCancel={cancelHandler} positionBox={`md:!left-[37rem]`} />}
            <div className="h-[60px] px-[80px] flex items-center justify-between">
                <h1 className="text-[24px]">BACKOFFICE</h1>
                <button className="text-red-600 hover:text-red-400" onClick={clickHandler}>
                    <span className="font-bold">Logout</span>
                </button>
            </div>
        </div>
    )
}