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
import {useRouter} from 'next/router';

export default function Home(){
    const Router = useRouter().query; 
    return(
        <div className={styles.columnMain}>
            <Intro/>
            <Surat/>
            <Profile/>
            <Location/>
            <Datetime/>
            <EntryForm name={Router.name}/>
            <Transition/>
            <Youtube/>
            <Ucapan/>
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