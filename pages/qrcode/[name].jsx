import styles from '../../styles/Index.module.css';
import Layout from '../../components/Layout';
import YellowPage from '../../components/YellowPage';
import QrComponent from '../../components/QrCodes/QrCode';

export default function QrCodes(props)
{
    return (
        <YellowPage>
            <QrComponent/>
        </YellowPage>
    );
}

export async function getServerSideProps(context)
{
    const {name} = context.query;

    const response = await fetch(`http://localhost:3000/api/guest/${name}`);
    const responseJson = await response.json();
    const {data} = responseJson;
    
    if(data === null) {
        return {
            notFound:true
        }
    } else if(data.isFilled === false) {
        return {
            redirect: {
                destination: `/index/${data.name}`
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