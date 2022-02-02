import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import GuestForm from '../../components/Form/GuestForm';
import {useRouter} from 'next/router';

export default function Form(){
  const Router = useRouter().query;
    return(
        <div className={styles.columnMain}>
            <GuestForm name={Router.name}/>
        </div>
    )
}

Form.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Banner />
        {page}
      </Layout>
    )
}