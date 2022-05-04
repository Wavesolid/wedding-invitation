import { useState } from 'react';
import { signOut } from 'next-auth/react';
import ConfirmModal from '../Modal/ConfirmModal'

export default function HeadDataGuest(props) {

    const [isLogout, setIsLogout] = useState()

    const logoutClickHandler = () => {
        setIsLogout({
            title: "Logout",
            content: "Apakah anda yakin ingin keluar?",
        })
    }

    const newGuestHandler = () => {
        props.onNewGuestForm(true)
        props.onUpdateGuestForm(false)
    }
    
    const updateGuestHandler = () => {
        props.onUpdateGuestForm(true)
        props.onNewGuestForm(false)
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
                <div>
                    <button className="text-green-600 hover:text-green-400 mr-[40px]" onClick={newGuestHandler}>
                        <span className="font-bold">New Guest</span>
                    </button>
                    <button className="text-green-600 hover:text-green-400 mr-[40px]" onClick={updateGuestHandler}>
                        <span className="font-bold" >Update Guest</span>
                    </button>
                    <button className="text-red-600 hover:text-red-400 mr-[40px]" onClick={logoutClickHandler}>
                        <span className="font-bold">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}