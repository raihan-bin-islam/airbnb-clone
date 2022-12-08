import Header from "@components/layout/Header";
import ImagePreviewModal from "@components/modals/ImagePreviewModal";
import RoomDetails from "@components/sections/RoomDetails";
import { StarIcon } from "@heroicons/react/20/solid";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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

  return (
    <div>
      <div className="relative z-10">
        <Header />
      </div>
      <RoomDetails
        name={name}
        address={address}
        rating={rating}
        isSuperhost={isSuperhost}
        images={images}
      />
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
