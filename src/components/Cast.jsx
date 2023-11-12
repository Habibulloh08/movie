import React from "react";
import { image185 } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/effect-cards";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import Loading from "./Loading";
import ActiorLoader from "./ActiorLoader";

const Cast = ({ cast }) => {
  const isMobile = window.innerWidth <= 668;
  const slidesPerView = isMobile ? 4 : 12;

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      navigation={false}
      loop={true}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      spaceBetween={10}
      modules={[Navigation]}
      className="h-[100px] mt-6"
    >
      <div className="mt-5 overflow-hidden">
        <div>
          <h1>Actors</h1>
        </div>
        <div className="flex">
          {cast &&
            cast.map((person, index) => (
              <SwiperSlide key={index} className="mr-4 items-center">
                <div
                  className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500"
                  title={person?.original_name}
                >
                  {person?.profile_path ? (
                    <img
                      src={image185(person.profile_path)}
                      alt=""
                      className="rounded-2xl h-24 w-20"
                    />
                  ) : (
                    <ActiorLoader />
                  )}
                </div>
                <div>
                  {person?.original_name.length > 12
                    ? person.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </div>
              </SwiperSlide>
            ))}
        </div>
      </div>
    </Swiper>
  );
};

export default Cast;
