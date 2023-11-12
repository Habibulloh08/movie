import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/effect-cards";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { image185, image342, image500 } from "../api";
import "../stayl/trending.css";
import { Link } from "react-router-dom";
const Smilar = ({ similar }) => {
  const isMobile = window.innerWidth <= 668;
  const slidesPerView = isMobile ? 3 : 7;

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      navigation={!isMobile}
      loop={true}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      spaceBetween={10}
      modules={[Navigation]}
      className="h-[250px] mb-5 mt-6"
    >
      {similar.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/details/${movie.id}`}>
            <div className="movieTitle"></div>
            <div>
              <img
                src={image185(movie.poster_path)}
                alt=""
                className="h-[100%]"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Smilar;
