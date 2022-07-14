import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="https://res.cloudinary.com/dnxchppfm/image/upload/v1646236443/like_cv6hwd.webp" type="image/x-icon" />
                    <title>Open Jira</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument