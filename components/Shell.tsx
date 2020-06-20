import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
export default (Page: any) => {
  return (props) => (
    <div>
      <Head>
        <title> simple app licat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <Page {...props} />
      </main>
      <Footer />
    </div>
  );
};
