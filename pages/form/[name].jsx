import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import GuestForm from '../../components/Form/GuestForm';
import { useState } from 'react';

export default function Form(props){
  const [guest,setGuest] = useState(
    props.responseJson.data
  );
    return(
        <div className={styles.columnMain}>
            <GuestForm props={guest}/>
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

    const regex = /-/g
    const response = await fetch(`${process.env.BASE_URL}/api/guest/${name.replace(regex, ' ')}`, {
      headers: {
          'Content-Type': 'application/json'
      }
    });

    const responseJson = await response.json();
    const {data} = responseJson;
    if(data === null) {
      return {
        notFound: true
      }
    // } else if(data.isFilled === true || data.isFilled === false ) { 
    //   return {
    //     redirect: {
    //       destination: `/success/${data.name}`
    //     }
    //   }
    } else {
      return {
        props:{
          responseJson
        }
      }
    }
}