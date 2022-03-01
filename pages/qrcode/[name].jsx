import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import YellowPage from '../../components/YellowPage';
import QrComponent from '../../components/QrCodes/QrCode';

export default function QrCodes(props) {
    return (
        <div className={styles.columnMain}>
            <YellowPage >
                <QrComponent link={props.link} />
            </YellowPage>
        </div>
    );
}

QrCodes.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Banner />
            {page}
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { name } = context.query;

    const response = await fetch(`${process.env.BASE_URL}/api/guest/${name}`);
    const responseJson = await response.json();
    const { data } = responseJson;
    const link = `${process.env.BASE_URL}/seat/${data.name}`;

    if (data === null) {
        return {
            notFound: true
        }
    } else if (data.isFilled === false) {
        return {
            redirect: {
                destination: `/index/${data.name}`
            }
        }
    } else {
        return {
            props: {
                link
            }
        }
    }
}