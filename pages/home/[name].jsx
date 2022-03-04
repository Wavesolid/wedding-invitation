import styles from '../../styles/Index.module.css';
import Intro from '../../components/Intro/Intro';
import Surat from '../../components/Surat/Surat';
import Profile from '../../components/Profile/Profile';
import Location from '../../components/Location/Location';
import Datetime from '../../components/Datetime/Datetime';
import EntryForm from '../../components/Form/EntryForm';
import Transition from '../../components/Transition/Transition';
import Youtube from '../../components/Youtube/Youtube';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Ucapan from '../../components/Ucapan/Ucapan';
import Gallery from '../../components/Gallery/Gallery';
import AudioPlayer from '../../components/Audio/AudioPlayer';
import PermohonanMaaf from '../../components/PermohonanMaaf/PermohonanMaaf';
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
            <PermohonanMaaf/>
            <Profile/>
            <Transition/>
            <Datetime/>
            <Location/>
            <Youtube/>
            <EntryForm name={guest} isFilled={isFilled}/>
            <Transition/>
            <Ucapan name={guest} ucapan={ucapan}/>
            <Gallery/>
        </div>
    )
}

Home.getLayout = function getLayout(page) {
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