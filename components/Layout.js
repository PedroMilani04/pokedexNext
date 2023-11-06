import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({children}) {
    return (
        <>
        <Head>
            <link rel="sortcut icon" href="/images/favicon.ico" />
            <title>Pokedex</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
        </>
    )
}