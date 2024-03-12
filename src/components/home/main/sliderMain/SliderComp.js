import { Virtual, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "./sliderComp.scss";

export default function SliderComp({ images }) {
  const slides = images.map((image, index) => (
    <SwiperSlide className="swiper-wrapper" key={index} virtualIndex={index}>
      <img src={image.img} alt={`Slide ${index + 1}`} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="slider"
      modules={[Virtual, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // 550: {
        //   slidesPerView: 4,
        //   spaceBetween: 10,
        // },
        650: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {slides}
    </Swiper>
  );
}
