import styles from '../../styles/Index.module.css';
import Intro from '../../components/Intro/Intro';
import Surat from '../../components/Surat/Surat';
import Profile from '../../components/Profile/Profile';
import Datetime from '../../components/Datetime/Datetime';
import EntryForm from '../../components/Form/EntryForm';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Ucapan from '../../components/Ucapan/Ucapan';
import Gallery from '../../components/Gallery/Gallery';
import AudioPlayer from '../../components/Audio/AudioPlayer';
import Protokol from '../../components/Protokol/Protokol';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

export default function Home(props)
{  

    const [ucapan,setUcapan] = useState(
      props.ucapanResponseJson.ucapan
    )

    const [guest, setGuest] = useState(
      props.responseJson.data.name
    );

    const [isFilled, setIsFilled] = useState(
      props.responseJson.data.isFilled
    );

    return(
        <div className={styles.columnMain}>
            <Intro/>
            <Surat/>
            <Profile/>
            <Datetime name={guest}/>
            <EntryForm name={guest} isFilled={isFilled}/>
            <Ucapan name={guest} ucapan={ucapan}/>
            <Gallery/>
            <Protokol name={guest} />
            <Footer/>
            <AudioPlayer/>
        </div>
    )
}

Home.getLayout = function getLayout(page) {
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

  const ucapanResponse = await fetch(`${process.env.BASE_URL}/api/UcapanHandler`,{
    method: 'GET'
  });

  const responseJson = await response.json();

  const ucapanResponseJson = await ucapanResponse.json();

  const {data} = responseJson;

  return(data === null ? {redirect: {
    destination: '/home'
  }} : {props:{responseJson,ucapanResponseJson}})

}