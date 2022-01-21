import styles from '../styles/Index.module.css';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function Form(){
    return(
        <div className={styles.columnMain}>
            {/* edit dari sini */}
            <div className="bg-[#0D0D0D] h-[100vh] text-[white]">
                form
            </div>
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