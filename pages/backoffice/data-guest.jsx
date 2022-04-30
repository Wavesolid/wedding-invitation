import DataGuest from "../../components/Backoffice/DataGuest";
import DataGuestForm from "../../components/Backoffice/DataGuestForm";
import HeadDataGuest from "../../components/Backoffice/HeadDataGuest";
import {useState} from 'react';
import { getSession } from "next-auth/react";
import NewDataGuestForm from "../../components/Backoffice/NewDataGuestForm";

export default function DataGuests(props) {
    
    const [editDataGuest,setEditDataGuest] = useState([]);
    const [emailGuest, setEmailGuest] = useState([]);
    const [dataGuest, setDataGuest] = useState(
        props.dataGuest
    );

    const [newDataGuestForm, isNewDataGuestForm] = useState(false)
    const [updateDataGuestForm, isUpdateDataGuestForm] = useState(true)

    const newGuestFormHandler = (form) => {
        isNewDataGuestForm(form);
    }
    
    const updateGuestFormHandler = (form) => {
        isUpdateDataGuestForm(form)
    }

    const setEditDataGuestHandler = (newDataGuest) => {
        setEditDataGuest(newDataGuest);
    }    
    const sendEmailPerGuest = (newDataGuest) => {
        setEditDataGuest(newDataGuest)
    }
    return(
        <div>
            <HeadDataGuest onNewGuestForm={newGuestFormHandler} onUpdateGuestForm={updateGuestFormHandler}/>
            {updateDataGuestForm && <DataGuestForm editDataGuest={editDataGuest}/>}
            {newDataGuestForm && <NewDataGuestForm/>}
            <DataGuest dataGuest={dataGuest} onEditDataGuest={setEditDataGuestHandler} onSendEmailGuest={setEmailGuest}/>
        </div>
    )
}

export async function getServerSideProps(context)
{
    const session = await getSession({req: context.req});
    if(session)
    {
        const dataGuestResponse = await fetch(`${process.env.BASE_URL}/api/handler`,{
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