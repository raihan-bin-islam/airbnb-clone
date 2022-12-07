import Header from "@components/layout/Header";
import { StarIcon } from "@heroicons/react/20/solid";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  result: {
    name: string;
    rating?: number;
    isSuperhost: boolean;
    address: string;
    images: [];
  };
};

const Rooms = ({ result }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { name, address, rating, isSuperhost, images } = result;
  console.log(result);

  return (
    <div>
      <Header />
      <Link href="/">back</Link>
      {/* Name */}
      <h2>{name}</h2>
      {/* Address */}
      <div className="flex space-x-5">
        <span className="flex">
          <StarIcon className="h-5" />
          {rating ?? "New"}
        </span>
        {isSuperhost && <p>Superhost</p>}
        <h2>{address}</h2>
      </div>
      {/* Address */}
      <div className="grid grid-cols-4 h-[35rem] max-w-7xl m-auto rounded-xl space-x-3  overflow-hidden">
        {images
          .filter((data, index) => index < 5)
          .map((src, index) => (
            <div
              key={index}
              className={`relative ${index === 0 && "col-span-2 row-span-2"} ${
                (index === 1 || index === 2) && "mb-3"
              }`}
            >
              <Image
                className="h-full"
                src={src}
                alt="banner-img"
                fill
                style={{ objectFit: "cover", aspectRatio: 1 }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rooms;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, params } = context;
  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";
  const host = req.headers.host;
  const id = params?.id;

  const res = await fetch(`${protocol}://${host}/api/places/${id}`);

  const result = await res.json();
  return {
    props: { result }, // will be passed to the page component as props
  };
}
