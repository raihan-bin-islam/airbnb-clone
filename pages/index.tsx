import Head from "next/head";
import dynamic from "next/dynamic";
// Types
import { GetServerSidePropsContext } from "next";
// Hooks
import { useEffect, useRef, useState } from "react";
// Custom Hooks
import useInfiniteQuery from "hooks/useInfiniteQuery";
import useInViewPort from "hooks/useInViewPort";
// Components
import Header from "@components/layout/Header";
import Hero from "@components/sections/Hero";
import PlaceCard from "@components/cards/PlaceCard";
import AirbnbDateRangePicker from "@components/calendar/AirbnbDateRangePicker";
// 3rd Party Library
import FramerLayout from "@components/layout/FramerLayout";
import { useDebouncedCallback } from "use-debounce";
import { MapIcon, ListBulletIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";

const CustomMap = dynamic(() => import("@components/map/CustomMap"), {
  ssr: false,
});

type Props = {
  initialData: { data: []; after?: {} };
  protocol: string;
  host: string;
};

export default function Home({ initialData, protocol, host }: Props) {
  const ref = useRef<null | HTMLDivElement>(null);
  const infiniteQueryRef = useRef<null | HTMLDivElement>(null);
  const [mapIntoView, setMapIntoView] = useState<boolean>(false);

  const isInViewPort = useInViewPort(infiniteQueryRef);

  const {
    data: places,
    fetchNextPage,
    isFetchingInitialData,
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
        <title>Airbnb 2.0</title>
        <meta name="description" content="Airbnb Clone App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FramerLayout>
        <Header />
        <Hero onClickExplore={scrollSectionToView} />

        <AirbnbDateRangePicker />

        <section ref={ref} id="explore" className="px-8 py-20 m-auto">
          <h2 className="pt-6 pb-8 text-4xl font-bold text-center capitalize text-textLight ">
            Explore your favorite places
          </h2>
          <div className="grid items-center justify-center grid-cols-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 max-[1919px]:grid-cols-5">
            {!isFetchingInitialData &&
              places?.map(
                (
                  {
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
                  },
                  index: number
                ) => (
                  <PlaceCard
                    cardIndex={index + 1}
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
        <section
          className="sticky z-50 flex items-center px-5 py-4 m-auto my-5 space-x-2 text-white transition-transform rounded-full cursor-pointer bottom-10 w-fit bg-trueGray-700 hover:scale-105 active:scale-100"
          onClick={() => setMapIntoView(!mapIntoView)}
        >
          <button className="text-sm font-medium select-none">
            {mapIntoView ? "Show List" : "Show Map"}
          </button>
          {mapIntoView ? (
            <ListBulletIcon className="h-5" />
          ) : (
            <MapIcon className="h-5" />
          )}
        </section>
        <AnimatePresence>
          {mapIntoView && (
            <motion.section
              id="map"
              className="fixed bottom-0 z-40 w-screen map-height"
              initial={{ opacity: 0, left: 0, visibility: "hidden" }}
              animate={{
                opacity: 1,
                visibility: "visible",
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.25 }}
            >
              <CustomMap />
            </motion.section>
          )}
        </AnimatePresence>
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
