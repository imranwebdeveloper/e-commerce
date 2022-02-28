import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assert/img/slider/img7.jpg";
import img2 from "../../assert/img/slider/img8.jpg";
import img3 from "../../assert/img/slider/img9.jpg";
import img4 from "../../assert/img/slider/img10.jpg";
import img5 from "../../assert/img/slider/img11.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" cursor-pointer ">
            <img src={img1} alt="img" className="object-fill w-full " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer ">
            <img src={img2} alt="img" className="object-fill w-full " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img src={img3} alt="img" className="object-fill w-full  " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer ">
            <img src={img4} alt="img" className="object-fill w-full " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" cursor-pointer">
            <img src={img5} alt="img" className="object-fill w-full " />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
