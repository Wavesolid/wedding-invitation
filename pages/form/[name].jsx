import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import GuestForm from '../../components/Form/GuestForm';
import { useState } from 'react';

export default function Form(props){
  const [guest,setGuest] = useState(
    props.responseJson.data.name
  );
    
    return(
        <div className={styles.columnMain}>
            <GuestForm name={guest}/>
        </div>
    )
}

Form.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Banner />
        {page}
      </Layout>
    )
}

export async function getServerSideProps(context)
{
    const {name} = context.query;

    const response = await fetch(`http://localhost:3000/api/guest/${name}`, {
      headers: {
          'Content-Type': 'application/json'
      }
    });

    const responseJson = await response.json();
    const {data} = responseJson;

    return (data === null ? {notFound: true}: {props:{responseJson}})
}