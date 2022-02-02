import styles from '../../styles/Index.module.css';
import Cover from '../../components/Cover/Cover';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import {useRouter} from 'next/router';

export default function Mulai()
{
    const Router = useRouter().query; 
    return (
        <div className={styles.columnMain}>
            <Cover name={Router.name}/>
            {/* <Home/> */}
        </div>
    );
}

Mulai.getLayout = function getLayout(page) {
    return (
    <Layout>
        <Banner />
        {page}
    </Layout>
    )
}