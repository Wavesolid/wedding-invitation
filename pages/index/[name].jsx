import styles from '../../styles/Index.module.css';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import AudioPlayer from '../../components/Audio/AudioPlayer';
import { useState } from 'react';


export default function Mulai(props)
{
    const [guest, setGuest] = useState(
        props.responseJson.data.name
    );

    return (
        <div className={styles.columnMain}>
            <Cover name={guest}></Cover>
        </div>
    );
}

Mulai.getLayout = function getLayout(page) {
    return (
    <Layout>
        <Banner />
        <AudioPlayer/>
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

    return (data === null ? {redirect: {
        destination: '/'
    }} : {props:{responseJson}})
}