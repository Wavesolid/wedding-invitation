import DataGuest from "../../components/Backoffice/DataGuest";
import DataGuestForm from "../../components/Backoffice/DataGuestForm";
import {useState} from 'react';
import { getSession } from "next-auth/react";

export default function dataguest(props) {
    
    const [editDataGuest,setEditDataGuest] = useState();

    const [dataGuest, setDataGuest] = useState(
        props.dataGuestResponseJson.dataGuest
    );
    
    const setEditDataGuestHandler = (dataGuest) => {
        setEditDataGuest(dataGuest);
    }

    return(
        <div>
            <DataGuestForm editDataGuest={editDataGuest}/>
            <DataGuest dataGuest={dataGuest} onEditDataGuest={setEditDataGuestHandler}/>
        </div>
    )
}

export async function getServerSideProps(context)
{
    const session = await getSession({req: context.req});
    if(session)
    {
        const dataGuestResponse = await fetch(`http://localhost:3000/api/handler`,{
            method: 'GET'
        });
    
        const dataGuestResponseJson = await dataGuestResponse.json();
    
        return {props:{dataGuestResponseJson}}
    } else {
        return {
            redirect: {
                destination: '/backoffice',
                permanent: false
            }
        };
    }
}