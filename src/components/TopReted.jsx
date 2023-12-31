import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/effect-cards";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { image500 } from "../api";
import "../stayl/trending.css";
import { Link } from "react-router-dom";
const TopReted = ({ topReted }) => {
  const isMobile = window.innerWidth <= 668;

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      navigation={!isMobile}
      loop={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={10}
      modules={[Navigation]}
      className="gameSwiper"
    >
      {topReted.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/details/${movie.id}`}>
            <div className="movieTitle">
              <h1>
                {movie.title.length > 12
                  ? movie.title.slice(0, 14) + "..."
                  : movie.title}
              </h1>
            </div>
            <div className="moviSlider">
              <img
                src={image500(movie.poster_path)}
                alt=""
                className="slider-image"
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopReted;
