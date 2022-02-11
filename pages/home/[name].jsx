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
import { useState } from 'react';

export default function Home(props)
{  
    const [guest, setGuest] = useState(
      props.responseJson.data.name
    );

    return(
        <div className={styles.columnMain}>
            <Intro/>
            <Surat/>
            <Profile/>
            <Location/>
            <Datetime/>
            <EntryForm name={guest}/>
            <Transition/>
            <Youtube/>
            <Ucapan name={guest}/>
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

  const response = await fetch(`http://localhost:3000/api/guest/${name}`, {
    headers: {
        'Content-Type': 'application/json'
    }
  });

  const responseJson = await response.json();
  const {data} = responseJson;

  return(data === null ? {redirect: {
    destination: '/home'
  }} : {props:{responseJson}})

}