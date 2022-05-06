import styles from '../styles/Index.module.css';
import Intro from '../components/Intro/Intro';
import Surat from '../components/Surat/Surat';
import Profile from '../components/Profile/Profile';
import Datetime from '../components/Datetime/Datetime';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Ucapan from '../components/Ucapan/Ucapan';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import Protokol from '../components/Protokol/Protokol';
import AudioPlayer from '../components/Audio/AudioPlayer';

export default function Home(props){

  const [play, setPlay] = useState(
    props.playAudio
  );

  const [ucapan,setUcapan] = useState(
    props.ucapanResponseJson.ucapan
  );

  return(
      <div className={styles.columnMain}>
          <Intro/>
          <Surat/>
          <Profile/>
          <Datetime/>
          <Ucapan ucapan={ucapan}/>
          <Gallery/>
          <Protokol/>
          <Footer/>
          <AudioPlayer play={play}/>
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

  const playAudio = context.query.data !== undefined ? context.query.data : false ;

  const ucapanResponse = await fetch(`${process.env.BASE_URL}/api/ucapan/${name}`,{
    method: 'GET'
  });

  const ucapanResponseJson = await ucapanResponse.json();

  return {props:{ucapanResponseJson,playAudio}}
}
