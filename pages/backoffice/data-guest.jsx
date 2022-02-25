import DataGuest from "../../components/Backoffice/DataGuest";
import DataGuestForm from "../../components/Backoffice/DataGuestForm";
import HeadDataGuest from "../../components/Backoffice/HeadDataGuest";
import {useState} from 'react';
import { getSession } from "next-auth/react";

export default function dataguest(props) {
    
    const [editDataGuest,setEditDataGuest] = useState([]);

    const [dataGuest, setDataGuest] = useState(
        props.dataGuest
    );
    const setEditDataGuestHandler = (newDataGuest) => {
        setEditDataGuest(newDataGuest);
    }
    
    console.log(editDataGuest)
    return(
        <div>
            <HeadDataGuest/>
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
        const {dataGuest} = dataGuestResponseJson;
        
        return {props:{dataGuest}}
    } else {
        return {
            redirect: {
                destination: '/backoffice',
                permanent: false
            }
        };
    }
}