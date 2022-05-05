import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import CheckIn from '../../components/CheckIn/CheckIn';

export default function CheckInPage(props)
{
    return (
        <div className={styles.columnMain}>
            <CheckIn props={props.responseJson}/>
        </div>
    )
}

CheckInPage.getLayout = function getLayout(page)
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
    const regex = /-/g
    const response = await fetch(`${process.env.BASE_URL}/api/guest/${name.replace(regex, ' ')}`);
    const responseJson = await response.json();
    const { data } = responseJson;

    if (data === null) {
        return {
            notFound: true
        }
    // } else if (data.isFilled === false) {
    //     return {
    //         redirect: {
    //             destination: `/index/${data.name}`
    //         }
    //     }
    } else {
        return {
            props: {
                responseJson
            }
        }
    }
}