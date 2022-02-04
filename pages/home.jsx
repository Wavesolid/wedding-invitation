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

export default function Home(){
    return(
        <div className={styles.columnMain}>
            <Intro/>
            <Surat/>
            <Profile/>
            <Datetime/>
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