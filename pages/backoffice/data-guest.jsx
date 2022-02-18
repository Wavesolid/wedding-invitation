import DataGuest from "../../components/Backoffice/DataGuest";
import DataGuestForm from "../../components/Backoffice/DataGuestForm";
import {useState} from 'react';

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
  const {name} = context.query;

  const dataGuestResponse = await fetch(`http://localhost:3000/api/handler`,{
    method: 'GET'
  });

  const dataGuestResponseJson = await dataGuestResponse.json();

  return {props:{dataGuestResponseJson}}
}