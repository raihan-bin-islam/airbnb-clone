import React, { useState, useEffect } from "react";
import Image from "next/image";

// ==================== Hero Icons ===========================================
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

// ========================== Framer Motion ==================================
import { AnimatePresence, motion } from "framer-motion";
// ========================== Swiper =========================================
import Swiper, { Pagination, A11y } from "swiper";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PlaceCardSkeleton from "@components/skeletons/PlaceCardSkeleton";
import Link from "next/link";
// ========================= Types =========================================
type Props = {
  id: number;
  address: string;
  type: string;
  bedrooms: number;
  images: [];
  price: number;
  rating?: number;
};
// ================================= Component ================================

const PlaceCard = ({
  id,
  address,
  type,
  bedrooms,
  images,
  price,
  rating,
}: Props) => {
  // Swiper Instance
  const [swiper, setSwiper] = useState<Swiper>();
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [loaded, setOnLoaded] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Framer
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const transition = {
    default: { ease: "anticipate", duration: 0.5 },
  };
  const skeletonTransition = {
    default: { ease: "anticipate", duration: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      setOnLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {loaded ? (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
            className="relative w-full p-2 my-2 cursor-pointer select-none"
            onMouseEnter={() => setShowNavigation(true)}
            onMouseLeave={() => setShowNavigation(false)}
          >
            <div className="relative w-full rounded-xl">
              {/* Add to favorite icon */}
              <div className="absolute top-0 right-0 z-50 m-4 h-7 aspect-square">
                <HeartIcon className="text-white transition-colors cursor-pointer fill-textDarkWithOpacity hover:fill-primary" />
              </div>
              {/* Slider Images */}
              <div className="relative flex w-full overflow-hidden select-none aspect-square rounded-xl ">
                <SwiperSlider
                  className="relative z-40 w-full"
                  modules={[Pagination, A11y]}
                  autoHeight
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides
                  pagination={{
                    clickable: false,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                  }}
                  onSwiper={(swiper) => setSwiper(swiper)}
                >
                  {images?.map((src, index) => (
                    <SwiperSlide key={index} className="w-full rounded-xl">
                      <div className="relative flex w-full overflow-hidden aspect-square rounded-xl ">
                        {!imageLoaded ? (
                          <div className="absolute z-50 w-full h-full bg-gray-300"></div>
                        ) : null}
                        <Image
                          className=" rounded-xl"
                          src={src}
                          alt="card-image"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 1921px) 100%,"
                          onLoad={() =>
                            setTimeout(() => {
                              setImageLoaded(true);
                            }, 900)
                          }
                        />
                      </div>
                      {/* Gradient mask */}
                      <div className="absolute bottom-0 left-0 z-30 w-full h-1/3 bg-gradient-to-t from-textDark to-transparent"></div>
                    </SwiperSlide>
                  ))}
                </SwiperSlider>
                {/* Custom Navigation Buttons */}
                <div
                  className={`${
                    showNavigation === true && activeIndex > 0
                      ? "inline-flex"
                      : "hidden"
                  } absolute left-0 z-50 p-1 pr-1 mx-2 font-bold capitalize transition-all bg-white rounded-full shadow-sm cursor-pointer w-7 hover:scale-105 opacity-80 hover:opacity-100 aspect-square -translate-y-3/4 top-1/2 text-textDark hover:shadow-md`}
                  onClick={() => {
                    swiper?.slidePrev(500);
                    swiper?.activeIndex !== undefined &&
                      setActiveIndex(swiper.activeIndex);
                  }}
                >
                  <ChevronLeftIcon />
                </div>
                <div
                  className={`${
                    showNavigation === true && activeIndex < images.length - 1
                      ? "inline-flex"
                      : "hidden"
                  } absolute  right-0 z-50 p-1 mx-2 font-bold capitalize transition-all bg-white rounded-full shadow-sm cursor-pointer w-7 hover:scale-105 opacity-80 hover:opacity-100 aspect-square top-1/2 -translate-y-3/4 text-textDark hover:shadow-md`}
                  onClick={() => {
                    swiper?.slideNext(500);
                    swiper?.activeIndex !== undefined &&
                      setActiveIndex(swiper.activeIndex);
                  }}
                >
                  <ChevronRightIcon />
                </div>
                {/* Custom Navigation Buttons End*/}
              </div>
              <Link href={`/rooms/${id}`}>
                {/* Title & Rating */}
                <div className="absolute z-50 text-[15px] flex justify-between w-full p-5 bg-white shadow-md -bottom-1 text-textDark rounded-xl">
                  <h2 className="overflow-hidden font-medium text-ellipsis whitespace-nowrap">
                    {address}
                  </h2>
                  <h2 className="flex h-5 space-x-2 font-medium">
                    <StarIcon className="text-primary " />{" "}
                    <span>{rating || "New"}</span>
                  </h2>
                </div>
              </Link>
            </div>
            {/* Other Description */}
            <div className="pt-3 pl-4 text-[15px] text-textLight">
              <h2>{type}</h2>
              <h2>{bedrooms} Bedrooms</h2>
              <h2 className="font-semibold text-primary">
                ${price}{" "}
                <span className="font-normal text-textDark">night</span>
              </h2>
            </div>
            <div className="flex items-center justify-center"></div>
          </motion.div>
        ) : (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={skeletonTransition}
          >
            <PlaceCardSkeleton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlaceCard;
