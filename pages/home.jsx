import styles from '../styles/Index.module.css';
import Intro from '../components/Intro/Intro';
import Surat from '../components/Surat/Surat';
import Profile from '../components/Profile/Profile';
import Datetime from '../components/Datetime/Datetime';
import Transition from '../components/Transition/Transition';
import Youtube from '../components/Youtube/Youtube';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Ucapan from '../components/Ucapan/Ucapan';
import Gallery from '../components/Gallery/Gallery';
import { useState } from 'react';

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
          <Transition/>
          <Youtube/>
          <Ucapan ucapan={ucapan}/>
          <Gallery/>
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

  const ucapanResponse = await fetch(`http://localhost:3000/api/UcapanHandler`,{
    method: 'GET'
  });

  const ucapanResponseJson = await ucapanResponse.json();

  return {props:{ucapanResponseJson}}
}
