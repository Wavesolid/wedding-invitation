import Success from '../../components/Success/Success'
import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import { useState } from 'react';

export default function SuccessPage(props) {

    const [guest,setGuest] = useState(
        props.responseJson.data.name
    )

    return(
        <div className={styles.columnMain}>
            <Success name={guest}/>
        </div>
    )
}

SuccessPage.getLayout = function getLayout(page) {
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
    const response = await fetch(`${process.env.BASE_URL}/api/guest/${name}`, {
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
    
    } else if(data.isFilled === true) { 
        return {
            props:{
                responseJson
            }
        }
    } else if(data.isFilled === false) {
        return{
            redirect: {
                destination: `/form/${data.slug}`
            }
        }
    }
    
}