import cat1 from "../../assets/images/mountain_canvas.jpg";
import cat2 from "../../assets/images/pencil.jpg";
import cat3 from "../../assets/images/animal.jpg";
import cat4 from "../../assets/images/oil_portrai.jpg";
import cat5 from "../../assets/images/charcoal-fig.jpg";
import cat6 from "../../assets/images/superhero.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="h-[350px] w-full my-24">
      <Swiper
        slidesPerView={3}
        loop={true}
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
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="h-[350px]" src={cat6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
