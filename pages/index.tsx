import Head from "next/head";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";
import PlaceCard from "@components/cards/PlaceCard";

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
      <section className="py-32">
        <h2 className="pt-6 pb-2 text-4xl font-bold text-center capitalize text-textLight ">
          Explore your favorite places
        </h2>
        <div className="">
          <PlaceCard />
        </div>
      </section>
    </div>
  );
}
