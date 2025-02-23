import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const CustomSwiper = ({ children, ...props }) => {
  const speed = parseInt(props["data-speed"], 10) || 600;
  const delay = parseInt(props["data-delay"], 10) || 5000;
  const breakpoints = props["data-breakpoints"]
    ? JSON.parse(props["data-breakpoints"])
    : {
        320: { slidesPerView: 1, spaceBetween: 40 },
        1200: { slidesPerView: 3, spaceBetween: 40 },
      };

  const swiperConfig = {
    loop: true,
    speed,
    autoplay: { delay },
    slidesPerView: 1,
    centeredSlides: true,
    pagination: { 
      el: ".swiper-pagination", 
      type: "bullets", 
      clickable: true 
    },
    breakpoints,
  };

  return (
    <Swiper {...swiperConfig} modules={[Pagination, Autoplay]}>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      {/* ✅ Ensure pagination is inside Swiper */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

// ✅ Add PropTypes
CustomSwiper.propTypes = {
  children: PropTypes.node.isRequired,
  "data-speed": PropTypes.string,
  "data-delay": PropTypes.string,
  "data-breakpoints": PropTypes.string,
};

export default CustomSwiper;
