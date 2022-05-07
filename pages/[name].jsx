import styles from '../styles/Index.module.css'
import Cover from '../components/Cover/Cover';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { useState } from 'react';


export default function Mulai(props)
{
    const [guest, setGuest] = useState(
        props.responseJson.data
    );
    return (
        <div className={styles.columnMain}>
            <Cover name={guest.name} slug={guest.slug}></Cover>
        </div>
    );
}

Mulai.getLayout = function getLayout(page) {
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

    return (data === null ? {notFound: true} : {props:{responseJson}})
}