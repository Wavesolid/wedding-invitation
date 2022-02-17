import { createContext, useState } from "react";

const GuestContext = createContext({
    guestDatas: [],
    totalGuestAccept: 0,
    addNewGuest: (guest) => {}
});

export function GuestContextHelper(props)
{
    const [currentGuest, setGuest] = useState([]);

    const addGuestHandler = (guest) => 
    {
        setGuest([
            ...currentGuest,
            guest
        ])
    };

    const context = {
        guestDatas: currentGuest,
        totalGuestAccept: currentGuest.length,
        addNewGuest: addGuestHandler
    }
    
    return (
        <GuestContext.Provider value={context}>
            {props.children}
        </GuestContext.Provider>
    )
}

export default GuestContext;