import { ArrowRightCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {};

const PlaceCard = (props: Props) => {
  return (
    <div className="relative m-auto w-80">
      <div className="relative w-full">
        <div className="relative flex w-full overflow-hidden aspect-square rounded-2xl">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            autoHeight
            slidesPerView={1}
            centeredSlides
            navigation={{}}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="rounded-2xl">
              <div className="relative flex overflow-hidden w-80 h-80 aspect-square rounded-2xl">
                <Image
                  className="rounded-2xl"
                  src="https://images2.imgbox.com/99/7d/L3kSbbhe_o.jpg"
                  alt="card-image"
                  fill
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl">
              <div className="relative flex overflow-hidden w-80 h-80 aspect-square rounded-2xl">
                <Image
                  className="rounded-2xl"
                  src="https://images2.imgbox.com/99/7d/L3kSbbhe_o.jpg"
                  alt="card-image"
                  fill
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl">
              <div className="relative flex overflow-hidden w-80 h-80 aspect-square rounded-2xl">
                <Image
                  className="rounded-2xl"
                  src="https://images2.imgbox.com/99/7d/L3kSbbhe_o.jpg"
                  alt="card-image"
                  fill
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute bottom-0 z-50 flex justify-between w-full p-5 text-white rounded-2xl bg-primary">
          <h2 className="font-medium">Cape Town, South Africa</h2>
          <h2 className="flex h-5 space-x-2 font-medium">
            <StarIcon /> <span>5.0</span>
          </h2>
        </div>
      </div>
      <div className="pt-2 pl-5 text-textLight">
        <h2>Added 10 weeks ago</h2>
        <h2>Apr 3-4</h2>
        <h2 className="font-semibold text-primary">
          $691 <span className="font-normal text-textDark">night</span>
        </h2>
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default PlaceCard;
