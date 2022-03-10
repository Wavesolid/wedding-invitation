import styles from '../styles/Index.module.css';
import Intro from '../components/Intro/Intro';
import Surat from '../components/Surat/Surat';
import Profile from '../components/Profile/Profile';
import Datetime from '../components/Datetime/Datetime';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Ucapan from '../components/Ucapan/Ucapan';
import Gallery from '../components/Gallery/Gallery';
import AudioPlayer from '../components/Audio/AudioPlayer';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import Protokol from '../components/Protokol/Protokol';

export default function Home(props){
  const [ucapan,setUcapan] = useState(
    props.ucapanResponseJson.ucapan
  )

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

  const ucapanResponse = await fetch(`${process.env.BASE_URL}/api/UcapanHandler`,{
    method: 'GET'
  });

  const ucapanResponseJson = await ucapanResponse.json();

  return {props:{ucapanResponseJson}}
}
