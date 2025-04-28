import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { HiPlus } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "../../src/styles.css";
const images = [
  { src: "/public/img2.png", price: "$100.00", name: "AIR JORDAN"},
  { src: "/public/img7.png", price: "$120.00", name: "NIKE MAX",  },
  { src: "/public/showcase.png", price: "$140.00", name: "ULTRA BOOST", },
];
const images1 = [
  { src: "/public/showcase.png", id:"01" },
  { src: "/public/img2.png", id:"02" },
  { src: "/public/img7.png", id:"03" },
];

const Showcase = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] lg:py-6 py-2 overflow-hidden">
      <div className="xl:w-4/5 px-6 max-w-[1400px] mx-auto flex flex-col justify-center">
        {/* Background  Text */}
        <div className="absolute hidden top-24 right-40 lg:block">
          <p className="lg:text-[12rem] font-semibold opacity-10 italic -tracking-widest">NIKE</p>
        </div>

        {/* Floating Changing Image */}
        <div
          className="rounded-full shadow-2xl bg-gradient-to-r from-[#fcad72] to-[#ff626d] h-40 w-40 absolute right-[10%] lg:mt-32 lg:flex hidden items-center justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-32 h-32 border border-gray-200 border-solid rounded-full">
            <img
              src={images[index].src}
              className="w-full h-full "
              alt="Shoe"
            />
            <button className="absolute left-0 px-2 text-sm font-semibold text-white bg-black rounded-lg bottom-10">
              {images[index].price}
            </button>
            <button className="text-white bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full shadow-2xl absolute w-10 h-10 top-8 left-28 flex items-center justify-center">
              <HiPlus size={20} />
            </button>
            <p className="uppercase font-bold absolute top-[4.6rem] -right-16">
              {images[index].name.split(" ")[0]}{" "}
              <span className="text-white">{images[index].name.split(" ")[1]}</span>
            </p>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }} 
          loop={true}
          className="w-full lg:w-[90%] h-[500px] lg:h-[600px] mx-auto"
          onSlideChange={(swiper) => setIndex(swiper.realIndex)} 
        >
          {/* Slide 1 */}
          {images1.map((item, i) => (
            <SwiperSlide key={i} className="w-[70%] md:w-[60%] lg:w-[50%]">
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
              {/* Black Circle */}
              <div className="absolute w-64 h-64 bg-[#232227] rounded-full shadow lg:w-100 lg:h-100 z-0" data-aos="fade-down"></div>
          
              {/* Image  */}
              <img
                src={item.src}
                className="absolute z-10 pb-16 w-90 lg:top-0 lg:right-45 lg:w-auto lg:pl-48 lg:pb-32 lg:h-180"
                alt={item.name} data-aos="fade-down"
              />
          
              {/* Promo Badge  */}
              <div className="absolute flex flex-col items-center justify-center bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full p-5 lg:h-30 lg:w-30 h-25 w-25 top-20 left-10 md:left-[240px] lg:top-25 lg:left-80  lg:z-50 z-40" data-aos="fade-right">
                <p className="text-[12px] text-white text- lg:text-sm">promo:nike</p>
                <p className="text-2xl font-bold text-gray-900">40%</p>
                <p className="text-2xl font-bold text-white">sale</p>  
              </div>
          
              {/* Button  */}
              <button className="text-white bg-gradient-to-r from-[#ff626d] to-[#fcad72] rounded-full shadow-5xl absolute top-40 right-18 w-10 h-10 lg:top-42 lg:right-85 lg:z-50 md:right-[310px] z-40 flex items-center justify-center " data-aos="fade-left">
                <HiPlus size={20} />
              </button>
            </div>
          
            {/* Text Section*/}
            <div className="absolute z-50 lg:w-1/3 top-70 left-10 lg:top-70 lg:left-25">
              <p className="mb-2 text-2xl font-bold text-gray-500 lg:mb-2:text-2xl">{item.id}</p>
              <h2 className="mb-2 text-5xl font-bold text-white lg:mb-2:text-5xl">Brand Shoes.</h2>
              <p className="mb-2 text-sm text-white lg:mb-2:text-2xl">
                We deliver immersive virtual reality experiences that encourage learning, creativity, and play at transport hubs, select retail, and culturally significant venues.
              </p>
            </div>
            
            
          </SwiperSlide>
          
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 custom-pagination "></div>
      </div>
    </div>
  );
};

export default Showcase;
