import React from "react";
import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import "./BrandImagesCarousel.css";

const BrandImagesCarousel = () => {
  const sliderImages = [
    { img: img1 },
    { img: img2 },
    { img: img1 },
    { img: img2 },
    { img: img1 },
    { img: img2 },
    { img: img1 },
    { img: img2 },
    { img: img1 },
    { img: img2 },
  ];

  return (
    <div className="container">
      <Swiper
        modules={[Navigation]} // Add necessary Swiper modules
        spaceBetween={0}
        // pagination={{ clickable: true }}
        navigation={true} // Enables built-in navigation buttons
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, // Mobile
          640: { slidesPerView: 5, spaceBetween: 10 }, // Small devices
          768: { slidesPerView: 6, spaceBetween: 10 }, // Tablets
          1024: { slidesPerView: 7, spaceBetween: 20 }, // Laptops
          1200: { slidesPerView: 7, spaceBetween: 20 }, // Desktops
        }}
        style={{ paddingTop: "20px", margin: "auto 20px" }}
      >
        {sliderImages.map((image, index) => (
          <div className="">
            <SwiperSlide
              key={index}
              style={{
                width: "160px",
                height:"160px",
                marginRight: "-100px",
                marginLeft: "0px",
              }}
            >
                <img
                  src={image.img}
                  className="img-slide"
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "140px",
                    borderRadius:"10px"
                  }}
                />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandImagesCarousel;
