import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'

class Layout extends Component {


    render() {
        const { children, title } = this.props
        return (
            <div>
                <header> <Link href="/"><a>Podcast</a></Link></header>
                
                <Head>
                    <title>{title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <html lang="es"/>
                </Head>

                {
                    children
                }

                <style jsx>{`
                    header{
                        color:#fff;
                        background:#345678;
                        padding:15px;
                        text-align:center;
                    }
                `}</style>
                <style jsx global>{`
                    body{
                        margin:0;
                        font-family: system-ui;
                        background: white;
                    }
                    header a {
                        color:#fff;
                        text-decoration:none;
                    }
                `}</style>
            </div>
        );
    }
}

export default Layout;