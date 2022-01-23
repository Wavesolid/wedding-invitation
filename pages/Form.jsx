import styles from '../styles/Index.module.css';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import GuestForm from '../components/Form/GuestForm';

export default function Form(){
    return(
        <div className={styles.columnMain}>
            <GuestForm/>
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