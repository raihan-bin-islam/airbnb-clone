import Head from "next/head";
// Types
import { GetServerSidePropsContext } from "next";
// Hooks
import { useEffect, useRef } from "react";
// Custom Hooks
import useInfiniteQuery from "hooks/useInfiniteQuery";
import useInViewPort from "hooks/useInViewPort";
// Components
import Header from "@components/layout/Header";
import Hero from "@components/sections/Hero";
import PlaceCard from "@components/cards/PlaceCard";
// 3rd Party Library
import { useDebouncedCallback } from "use-debounce";
import FramerLayout from "@components/layout/FramerLayout";

type Props = {
  initialData: { data: []; after?: {} };
  protocol: string;
  host: string;
};

export default function Home({ initialData, protocol, host }: Props) {
  const ref = useRef<null | HTMLDivElement>(null);
  const infiniteQueryRef = useRef<null | HTMLDivElement>(null);
  const skeletonRef = useRef<null | HTMLDivElement>(null);

  const isInViewPort = useInViewPort(infiniteQueryRef);

  const {
    data: places,
    hasNextPage,
    fetchNextPage,
    isFetchingInitialData,
    isFetchingNextPage,
  } = useInfiniteQuery(`${protocol}://${host}/api/places`, initialData);

  const scrollSectionToView = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadMore = useDebouncedCallback(() => {
    fetchNextPage();
  }, 500);

  useEffect(() => {
    if (isInViewPort) {
      loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewPort]);

  return (
    <div>
      <Head>
        {/* <title>Airbnb 2.0</title> */}
        <meta name="description" content="Airbnb Clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FramerLayout>
        <Header />
        <Hero onClickExplore={scrollSectionToView} />
        <section ref={ref} id="explore" className="px-8 py-20 m-auto">
          <h2 className="pt-6 pb-8 text-4xl font-bold text-center capitalize text-textLight ">
            Explore your favorite places
          </h2>
          <div className="grid items-center justify-center grid-cols-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 max-[1919px]:grid-cols-5">
            {!isFetchingInitialData &&
              places?.map(
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
          <div ref={infiniteQueryRef}></div>
        </section>
      </FramerLayout>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";
  const host = req.headers.host;

  const res = await fetch(`${protocol}://${host}/api/places`);

  const data = await res.json();
  return {
    props: { initialData: data, protocol, host }, // will be passed to the page component as props
  };
}
