import React from "react";
import { HiMagnifyingGlass, HiPlus } from "react-icons/hi2";
import adidasImg1 from "../assets/adidasimg1.png";
import adidasImg2 from "../assets/adidasimg2.png";
import { BiCheck } from "react-icons/bi";

const Shopping = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] lg:py-6 py-16 overflow-hidden min-h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-center lg:px-10 relative">
        {/* Left Section (Product Image) */}
        <div className="flex items-center justify-center w-full py-6 lg:w-1/2">
          <div className="relative w-84 h-84 max-w-full sm:max-w-md lg:max-w-lg bg-[#232227] rounded-full shadow-lg flex items-center justify-center" data-aos="fade-down">
            <img
              src={adidasImg2}
              alt="Adidas"
              className="w-[270px] transition-transform hover:scale-110"
              data-aos="fade-down"
              data-aos-delay="50"
            />
            <div className="absolute top-[10%] left-[15%] md:top-4 md:left-10 bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full h-10 w-10 flex justify-center items-center shadow-lg" data-aos="fade-left">
              <HiPlus size={24} className="text-white"  />
            </div>
            <div className="absolute top-[20%] left-[5%] md:top-18 md:left-0 bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full h-10 w-10 flex justify-center items-center shadow-lg" data-aos="fade-right">
              <HiMagnifyingGlass size={24} className="text-white"  />
            </div>
            <div className="w-[180px] absolute left-[100px] top-[240px] flex gap-4" data-aos="fade">
              <div className="flex items-center justify-center w-8 h-8 text-white bg-black border border-white rounded-full">
                <BiCheck size={20} />
              </div>
              <div className="w-8 h-8 bg-white border border-white rounded-full"></div>
              <div className="w-8 h-8 bg-red-400 border border-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section (Product Details) */}
        <div className="flex items-center justify-center w-full text-center lg:py-6 lg:w-1/2 lg:items-start lg:text-left" >
          <div className="flex flex-col items-center justify-center w-[35%] lg:w-[20%] gap-4 px-6 lg:items-start">
            <img
              src={adidasImg1}
              alt=""
              className="w-16 px-3 py-4 rounded-full outline-2 outline-white"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src={adidasImg1}
              alt=""
              className="w-16 px-3 py-4 rounded-full outline-2 outline-white"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <img
              src={adidasImg1}
              alt=""
              className="w-16 px-3 py-4 rounded-full outline-2 outline-white"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <img
              src={adidasImg1}
              alt=""
              className="w-16 px-3 py-4 rounded-full outline-2 outline-white"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-[85%]" data-aos="fade-down">
            <h1 className="text-2xl font-bold text-white lg:text-4xl">Nike PG 2.5</h1>
            <h3 className="mt-2 text-2xl font-thin text-white lg:text-4xl">PlayStation White</h3>

            {/* Size Selection */}
            <div className="mt-4" >
              <p className="py-3 text-center text-black bg-white rounded w-25">
                Select Size
              </p>
              <div className="grid grid-cols-5 gap-2 mt-4 text-white">
                {[4, 4.5, 5, 5.5, 6, 7, 8, 9, 9.5, 10].map((size) => (
                  <div
                    key={size}
                    className="w-10 h-10 p-2 text-center transition rounded cursor-pointer hover:bg-black"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center w-full max-w-lg py-2">
              <button className="px-6 py-3 font-semibold text-white uppercase transition bg-black rounded-full hover:bg-white hover:text-black">
                Add to Cart
              </button>
              <p className="px-2 text-3xl font-bold text-white">$150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#3c3a44] py-12 mt-12" >
        <h2 className="relative lg:right-[310px] text-4xl font-bold text-center text-white bottom-[6rem] lg:text-6xl">
          description.
        </h2>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 px-6" data-aos="fade-up"
              data-aos-delay="500">
          {/* Left Content */}
          <div className="text-white lg:w-1/2">
            <ul className="flex justify-between text-lg">
              {["About model", "Size table", "Free shipping", "Reviews (12)"].map(
                (item) => (
                  <li key={item} className="transition cursor-pointer hover:text-red-400">
                    {item}
                  </li>
                )
              )}
            </ul>
            <h2 className="mt-10 text-xl font-semibold uppercase">Quality Assurance</h2>
            <p className="mt-3">
              We deliver immersive virtual reality experiences that encourage learning,
              creativity, and play at transport hubs, select retail, and culturally
              significant venues. We deliver immersive virtual reality experiences that
              encourage learning, creativity, and play at transport hubs, select retail,
              and culturally significant venues.
            </p>
            <p className="mt-3">Our products ensure premium quality and customer satisfaction.</p>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2" data-aos="fade-up"
              data-aos-delay="600">
            <h2 className="text-xl font-semibold text-white uppercase">Characteristics</h2>
            <div className="grid gap-4 mt-4 text-gray-400">
              {[
                { label: "Brand", value: "Nike" },
                { label: "Upper Material", value: "Textile, Artificial Material" },
                { label: "Authenticity", value: "TOP AAA+" },
                { label: "Details", value: "Lace Up" },
                { label: "Outsole", value: "Medium" },
                { label: "Color", value: "White" },
                { label: "Season", value: "Summer, Spring" },
                { label: "Code", value: "A2731" },
              ].map((item) => (
                <p key={item.label} className="text-lg">
                  {item.label}: <span className="text-white">{item.value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
