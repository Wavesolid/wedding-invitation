import Head from 'next/head';
import Banner from "./Banner";

export default function Layout ({ children }) {
    return(
        <div>
            <Head>
                <title>Wedding Invitation</title>
            </Head>
            { children }
        </div>
    )
}