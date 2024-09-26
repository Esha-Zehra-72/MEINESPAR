import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BrandImagesCarousel.css"
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";
import img5 from "../../Assets/img5.png";
import img6 from "../../Assets/img6.png";
import img7 from "../../Assets/img7.png";

const BrnadImagesCarousel = () => {
  const sliderImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
  ];

  let swiperRef = null;

  const goToNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const goToPrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <div className="container">
      <Swiper
        onSwiper={(swiper) => (swiperRef = swiper)}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-prev" onClick={goToPrev}>
        Prev
      </button>
      <button className="swiper-button-next" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default BrnadImagesCarousel;
