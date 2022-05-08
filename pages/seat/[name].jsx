import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Seat from '../../components/Seat/Seat';

export default function SeatPage(props)
{
    return (
        <div className={styles.columnMain}>
            <Seat props={props.responseJson}/>
        </div>
    )
}

SeatPage.getLayout = function getLayout(page)
{
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

    if (data === null) {
        return {
            notFound: true
        }
    } else if (data.isFilled === false) {
        return {
            redirect: {
                destination: `/form/${data.slug}`
            }
        }
    } else {
        return {
            props: {
                responseJson
            }
        }
    }
}