import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import WideContainer from "../UI/WideContainer";
import MovieCard from "./MovieCard";

import { topMovies } from "../../utils/top-movies.data";

import classes from "./TopMovies.module.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

function TopMovies() {
  return (
    <WideContainer>
      <Swiper
        className={classes["swiper-container"]}
        spaceBetween={100}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          1300: { slidesPerView: 4, spaceBetween: 100 },
          1000: { slidesPerView: 3.5, spaceBetween: 100 },
          850: { slidesPerView: 3, spaceBetween: 100 },
          800: { slidesPerView: 2.75, spaceBetween: 100 },
          700: { slidesPerView: 2.5, spaceBetween: 100 },
          600: { slidesPerView: 2, spaceBetween: 100 },
          550: { slidesPerView: 2, spaceBetween: 100 },
          500: { slidesPerView: 1.75, spaceBetween: 100 },
          450: { slidesPerView: 1.5, spaceBetween: 100 },
        }}
      >
        {topMovies.map((movie) => (
          <SwiperSlide>
            <Link to={`/movie/${movie.Title}`}>
              <MovieCard
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                type={movie.Type}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </WideContainer>
  );
}

export default TopMovies;
