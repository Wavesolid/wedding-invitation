import Login from '../../components/Backoffice/Login'
import { getSession } from 'next-auth/react';

export default function backoffice(){
    return(
        <div>
            <Login/>
        </div>
    )
}

export async function getServerSideProps(context)
{
    const session = await getSession({req: context.req});
    
    if(session)
    {
        return {
            redirect: {
                destination: 'backoffice/data-guest',
                permanent: false
            }
        };
    } else {
        return {
            props: {}
        }
    }
}