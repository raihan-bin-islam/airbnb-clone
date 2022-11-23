import Head from "next/head";
import Header from "@components/sections/Header";
import Hero from "@components/sections/Hero";
import PlaceCard from "@components/cards/PlaceCard";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [places, setPlaces] = useState([]);
  const ref = useRef<null | HTMLDivElement>(null);

  // Data fetching
  const getData = async () => {
    const res = await fetch("./data/places.json");
    const { results } = await res.json();
    setPlaces(results);
  };

  useEffect(() => {
    getData();
  }, []);
  // Data fetching ends

  const scrollSectionToView = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
        <meta name="description" content="Airbnb Clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero onClickExplore={scrollSectionToView} />
      <section ref={ref} id="explore" className="px-8 py-32 m-auto">
        <h2 className="pt-6 pb-2 text-4xl font-bold text-center capitalize text-textLight ">
          Explore your favorite places
        </h2>
        <div className="grid items-center justify-center grid-cols-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 max-[1919px]:grid-cols-5">
          {places?.map(
            ({
              id,
              address,
              type,
              images,
              rating,
              price: { total },
              bedrooms,
            }: {
              id: number;
              address: string;
              type: string;
              images: [];
              rating?: number;
              price: { total: number };
              bedrooms: number;
            }) => (
              <PlaceCard
                key={id}
                id={id}
                address={address}
                type={type}
                images={images}
                rating={rating}
                price={total}
                bedrooms={bedrooms}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
