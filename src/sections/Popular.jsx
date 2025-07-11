import { HiPlus } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AdidasImg from "../assets/adidasimg2.png";
import FlowImg from "../assets/flowimg.png";
import ConverseImg from "../assets/pumaimg1.png";
import Img1 from "../assets/img10.png";
import Img2 from "../assets/imgbox2.jpg";
import Img3 from "../assets/imgbox3.png";
import Img4 from "../assets/img17.png";
import Img5 from "../assets/LilNas.png";
import Img6 from "../assets/imgbox4.png";
import SwiperPage from "../pages/SwiperPage";


const Popular = () => {
  return (
    <>
      <div className="bg-[#232227] lg:h-[25rem] h-full tracking-wider">
        <div
          className="relative w-full lg:w-[92.9%] mx-auto"
          data-aos="fade-up"
        >
          <div className="w-full lg:absolute lg:-top-40">
            <h2 className="py-8 text-3xl font-semibold text-center text-white">
              Most Popular Products.
            </h2>

          <SwiperPage/>
          </div>
        </div>
      </div>

      {/* Advantage Section */}
      <section className="bg-[#303033]">
        <div
          className="xl:w-4/5 max-w-[1400px] mx-auto grid lg:grid-cols-3 grid-cols-1 items-end"
          data-aos="fade-up"
        >
          {/* Block 1 */}
          <div>
            <div className="flex items-center h-60">
              <h2 className="px-20 py-20 text-5xl font-semibold text-white">
                Advantage.
              </h2>
            </div>
            <div className="bg-[#4e4e50] relative h-[20rem] lg:h-[33rem] flex flex-col justify-center">
              <img
                src={Img1}
                alt="shoe"
                className="absolute -top-20 right-12 w-44"
              />
              <p className="px-8 text-xl font-bold text-gray-500">02</p>
              <p className="px-8 py-4 text-xl font-bold text-white">
                footBall Shoes
              </p>
              <p className="px-8 text-gray-500">
                We deliver immersive virtual reality experiences that encourage
                learning, creativity, and play at transport hubs, select retail,
                and culturally significant venues.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div>
            <div className="bg-[#4e4e50] relative h-70 flex flex-col justify-end">
              <div className="absolute flex justify-end -top-0 right-1">
                <img src={Img6} alt="SHOE" className="w-40" />
              </div>
              <div className="px-8 py-8">
                <p className="text-xl font-bold text-gray-500">01</p>
                <p className="py-4 text-xl font-bold text-white">
                  quality assurances
                </p>
                <p className="text-gray-500">
                  We deliver immersive virtual reality experiences that
                  encourage learning, creativity, and play at transport hubs and
                  select retail.
                </p>
              </div>
            </div>
            <div className="h-[33rem] relative overflow-hidden">
              <img
                src={Img2}
                alt="product"
                className="object-cover w-full h-full transition-all hover:scale-110"
              />
            </div>
          </div>

          {/* Block 3 */}
          <div>
            <div className="flex flex-col justify-end px-8 pb-4 lg:h-72 h-52">
              <p className="text-xl font-bold text-white">free shipping</p>
              <p className="text-gray-500 lg:text-[7rem] text-5xl font-bold">
                0 <span className="absolute text-white">3</span>
              </p>
            </div>
            <div className="bg-[#4e4e50] relative flex flex-col justify-center">
              <img
                src={Img3}
                alt="shoe"
                className="absolute w-64 -top-32 right-4"
              />
              <div className="px-8 py-16 pb-4 h-[20rem] lg:h-[30rem]">
                <p className="text-xl font-bold text-gray-500">04</p>
                <p className="py-4 text-xl font-bold text-white">
                  gift certificates
                </p>
                <p className="text-gray-500">
                  We deliver immersive virtual reality experiences that
                  encourage learning, creativity, and play at transport hubs,
                  retail, and culturally significant venues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lil Nas X Section */}
        <section
          className="bg-gradient-to-r from-[#ff626d] to-[#ff0113] lg:h-80 relative flex flex-col items-center justify-center mt-10"
          data-aos="fade-up"
        >
          <img
            src={Img5}
            alt="Lil Nas"
            className="bottom-0 right-0 object-cover lg:absolute lg:h-full"
          />

          <div className="hidden rounded-full shadow-2xl bg-gradient-to-r from-[#ff626d] to-[#fcad72] lg:flex items-center justify-center w-60 h-60 absolute xl:left-[10%] left-4">
            <div className="relative border border-gray-200 border-solid rounded-full h-52 w-52">
              <img
                src={Img4}
                alt="Lil Nas Shoe"
                className="relative w-48 m-auto top-4"
              />
              <button className="absolute px-2 font-semibold text-white transform -translate-x-1/2 bg-black rounded-lg lg:text-xl bottom-10 left-1/2">
                $300
              </button>
              <button className="text-white bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full shadow-2xl absolute top-8 right-0 w-10 h-10 flex items-center justify-center">
                <HiPlus size={20} />
              </button>
              <p className="uppercase font-bold text-lg absolute top-[4.6rem] -right-14">
                Lil Nas <span className="text-white">X nike</span>
              </p>
            </div>
          </div>

          <div className="relative z-10 px-6 py-8 text-white lg:w-1/3">
            <p className="text-4xl font-bold lg:text-7xl">Lil Nas X nike</p>
            <p className="pt-8 leading-7">
              We deliver immersive virtual reality experiences that encourage
              learning, creativity, and play at transport hubs, select retail,
              and culturally significant venues.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Popular;
