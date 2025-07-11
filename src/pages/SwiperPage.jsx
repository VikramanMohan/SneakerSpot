import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AdidasImg from "../assets/adidasimg2.png";
import FlowImg from "../assets/flowimg.png";
import ConverseImg from "../assets/pumaimg1.png";
import Image2 from "../assets/converseimg6.png";
import Image3 from "../assets/pumaimg4.png";
import Image4 from "../assets/reebokimg2.png";
import Image5 from "../assets/converseimg4.png";
import Image6 from "../assets/nikeimg3.png";

const products = [
  { id: 1, image: AdidasImg },
  { id: 2, image: FlowImg },
  { id: 3, image: ConverseImg },
  { id: 4, image: Image2 },
  { id: 5, image: Image3 },
  { id: 6, image: Image4 },
  { id: 7, image: Image5 },
  { id: 8, image: Image6 },
];

const SwiperPage = () => {
  return (
    <div className="relative px-4 pb-10">
      <div className="z-10 swiper-pagination swiper-pagination-top" />
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, el: ".swiper-pagination-top" }}
        className="mySwiper"
      >
        {products.map((value, index) => (
          <SwiperSlide
            key={index}
            className="!w-[90%] lg:!w-[60%] max-w-[500px]" 
          >
            <div className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] relative p-8 shadow-lg lg:flex items-center justify-between h-[370px] w-[600px]">
              <div className="w-full px-2 z-100">
                <button className="bg-gradient-to-r from-[#fcad72] to-[#ff626d] text-white rounded-full px-4 py-1 text-sm shadow ">
                  NEW
                </button>
                <h2 className="pt-2 font-bold leading-10 text-white text-md">
                  Under Armour Curry 8.
                </h2>
                <p className="py-2 text-xl font-semibold text-white">
                  $199.00
                </p>
                <button className="px-4 py-2 mt-3 text-white bg-black rounded-full text-md">
                  GO TO CATALOG
                </button>
              </div>

              <div className="absolute hidden lg:block -top-10 right-10">
                <p className="text-[13rem] font-semibold opacity-10 italic tracking-wider text-white">
                  NIKE
                </p>
              </div>

              <div className="items-center justify-center lg:flex">
                <div className="relative top-3 lg:w-[22rem] w-full">
                  <img
                    src={value.image}
                    alt="product"
                    className="object-cover transition-all h-45 hover:scale-110"
                  />
                  <div className="lg:flex hidden flex-col items-center justify-center bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full p-4 absolute top-10 right-8">
                    <p className="text-sm text-white">promo: nike</p>
                    <p className="text-2xl font-bold text-black">40%</p>
                    <p className="font-bold text-white text-1xl">sale</p>
                  </div>
                </div>
              </div>

              <span className="absolute flex bottom-4 right-8">
                <p className="font-bold text-white">outdoor</p>
                <span className="px-1 font-bold text-black">shoes</span>
              </span>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default SwiperPage;
