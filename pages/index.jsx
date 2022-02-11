import styles from '../styles/Index.module.css';
import Cover from '../components/Cover/Cover';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function index()
{
    return (
        <div className={styles.columnMain}>
          <Cover/>
        </div>
    );
}

index.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Banner />
        {page}
      </Layout>
    )
}