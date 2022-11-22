import Head from "next/head";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <title>Airbnb 2.0</title> */}
        <meta name="description" content="Airbnb Clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
