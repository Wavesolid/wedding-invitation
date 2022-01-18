import Document, { Html, Head, body, Main, NextScript } from 'next/document'

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(){
        return (
            <Html>
                <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>

                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument