import styles from '../styles/Index.module.css';
import Intro from '../components/Intro/Intro';
import Surat from '../components/Surat/Surat';
import Profile from '../components/Profile/Profile';
import Location from '../components/Location/Location';
import Datetime from '../components/Datetime/Datetime';
import EntryForm from '../components/Form/EntryForm';
import Transition from '../components/Transition/Transition';
import Youtube from '../components/Youtube/Youtube';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Ucapan from '../components/Ucapan/Ucapan';

export default function Home(){
    return(
        <div className={styles.columnMain}>
            <Intro/>
            <Surat/>
            <Profile/>
            <Location/>
            <Datetime/>
            <EntryForm/>
            <Transition/>
            <Youtube/>
            <Ucapan/>
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