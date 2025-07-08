/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { SiSonarcloud } from "react-icons/si";
import { MdCancel } from "react-icons/md";
  import AOS from 'aos';
import 'aos/dist/aos.css';
import AdidasImg from "../assets/adidasimg2.png";
import CatalogCover from "../assets/pxfuel.jpg";
import Size from "../products/Size";
import { HiHeart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "Nike",
    name: "Nike Air VaporMax",
    price: 210,
    size: [7, 8, 9],
    image: AdidasImg,
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Adidas Boost",
    price: 190,
    size: [6, 7.5, 9.5],
    image: AdidasImg,
  },
  {
    id: 3,
    brand: "Puma",
    name: "Puma RS-X",
    price: 180,
    size: [6, 7, 8, 10],
    image: AdidasImg,
  },
  {
    id: 4,
    brand: "Reebok",
    name: "Reebok Classic",
    price: 175,
    size: [8, 9, 10],
    image: AdidasImg,
  },
  {
    id: 5,
    brand: "Converse",
    name: "Converse All Star",
    price: 160,
    size: [6, 7.5, 9],
    image: AdidasImg,
  },
  {
    id: 6,
    brand: "Nike",
    name: "Nike Air Max",
    price: 170,
    size: [6, 7.5, 9],
    image: AdidasImg,
  },
  {
    id: 7,
    brand: "Nike",
    name: "Nike Air Max",
    price: 170,
    size: [6, 7.5, 9],
    image: AdidasImg,
  },
  {
    id: 8,
    brand: "Nike",
    name: "Nike Air Max",
    price: 170,
    size: [6, 7.5, 9,10],
    image: AdidasImg,
  },
];

const Catalog = () => {
  const [active, setActive] = useState("Nike");
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000.00);
const [value, setValue] = useState(250); 
  const [liked, setLiked] = useState({});


  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


useEffect(() => {
  if (window.innerWidth >= 1024) {
    setShowFilters(true);
  }
}, []);

useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    delay: 200, 
  });
}, []);

  const handleSizeSelect = (selected) => {
    setSelectedSize(selected);
    setShowSizeSelector(false);
  };

 const renderBrandComponent = () => {
  const filtered = products.filter((item) => {
    const brandMatch = item.brand === active;
    const sizeMatch = selectedSize ? item.size.includes(selectedSize) : true;
    const priceMatch = item.price <= value;
    return brandMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="grid grid-cols-1 tracking-wider sm:grid-cols-2 lg:grid-cols-4">
      {filtered.map((item, index) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-[#232227] overflow-hidden shadow-lg"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <p className="text-white">STREAT</p>
            <p className="px-4 py-1 text-sm bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full text-white">
              NEW
            </p>
          </div>

          <div className="flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-[120px] transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="bg-[#333235] p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white uppercase">{item.name}</h3>
              <span
                className={`cursor-pointer ${
                  liked[item.id] ? "text-red-500" : "text-gray-300"
                }`}
                onClick={() => handleLike(item.id)}
              >
                <HiHeart />
              </span>
            </div>
            <p className="text-white">Pricing: ${item.price}</p>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-white col-span-full">
          No products match the selected filters.
        </p>
      )}
    </div>
  );
};

  return (
    <motion.section
      className=" bg-[#2a292d]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Catalog Header */}
      <div className="relative max-w-full mx-auto">
        <h2 className="absolute mb-10 text-6xl font-bold text-white lg:text-8xl top-40 left-20" >
          Catalog.
        </h2>

        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full ">
            <img
              src={CatalogCover}
              alt="Sneaker Catalog"
              className="w-full h-[420px] object-cover" 
            />
          </div>

          <div className="w-full lg:w-[450px] bg-gradient-to-r from-[#ff626d] to-[#fcad72] relative p-5 shadow-xl hidden ">
            <div className="absolute z-0 hidden lg:block -top-0 right-20">
              <p className="text-sm lg:text-[10rem] font-semibold opacity-10 italic">
                NIKE
              </p>
            </div>
            <div className="relative z-10 flex flex-row items-center justify-between p-5">
              <div className="w-full space-y-4">
                <button className="bg-gradient-to-r from-[#fcad72] to-[#ff626d] text-white rounded-full px-4 py-1 text-sm shadow">
                  NEW
                </button>
                <h2 className="text-xl font-bold text-white">
                  Under Armour Curry 8.
                </h2>
                <p className="text-2xl font-semibold text-black">$199.00</p>
                <NavLink to='/shopping' className="px-4 py-3 text-sm font-semibold text-white bg-black rounded-full cursor-pointer">
                  GO TO CATALOG
                </NavLink>
              </div>
              <div className="absolute flex items-center justify-center left-15 top-40">
                <img
                  src={AdidasImg}
                  alt="Adidas Shoe"
                  className="w-full transition-transform duration-300 md:h-35 lg:h-55 hover:scale-110"
                />
                <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full p-4 absolute top-10 right-0">
                  <p className="text-sm text-white">promo: nike</p>
                  <p className="font-bold text-gray-800 text-md">40%</p>
                  <p className="text-sm font-semibold tracking-wide text-white">sale</p>
                </div>
              </div>
            </div>
            <div className="absolute z-10 flex gap-1 text-xl font-bold text-black bottom-4 right-8">
              <span>outdoor</span>
              <span className="text-white">shoes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product & Filters Section */}
      <div className="bg-[#1f1f23] text-white">
        <div className="w-full pt-4 mx-auto lg:pt-0">
          <div className="flex justify-end mb-6 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 font-semibold bg-pink-500 rounded-full"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row">
            {showFilters && (
              <aside className="w-full lg:w-[300px] space-y-8 lg:block" data-aos='fade-right'
                        data-aos-delay='200'>
                <h2 className="px-10 pt-10 text-3xl font-bold ">Filtr.</h2>
                <div className="px-10 space-y-2">
                  {/* <p className="font-semibold">Category</p> */}
                  {["Men's shoes", "Women's shoes", "Children's shoes", "Accessories"].map((item, idx) => (
                    <label key={idx} className="flex items-center justify-between gap-2 text-sm">
                      {item}
                      <input type="checkbox" className="accent-emerald-900" />
                    </label>
                  ))}
                  <div className="w-full mt-8 border border-gray-400"></div>
                </div>
                <div className="px-10 space-y-2">
                  {/* <p className="font-semibold">Type</p> */}
                  {["Casual shoes", "Outdoor shoes", "Classic shoes", "Sport shoes", "Football shoes"].map((item, idx) => (
                    <label key={idx} className="flex items-center justify-between gap-2 text-sm ">
                      {item}
                      <input type="checkbox" className="border-0 accent-zinc-600" />
                    </label>
                  ))}
                </div>
      <div className="w-full max-w-md p-6 mx-auto bg-black shadow-lg ">
              <p className="mb-2 text-sm font-bold text-white">PRICING</p>
              <div className="flex justify-between mb-4 text-sm text-white">
                <span className="px-8 py-1 border border-white rounded">${min}</span>
                <span className="bg-[#232235] px-8 py-1 opacity-50 text-center rounded">${max.toLocaleString()}</span>
              </div>
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full bg-transparent appearance-none slider-thumb"
        />
        <div
          className="absolute left-[calc(50%-2rem)] top-[2.5rem] px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r from-[#fcad72] to-[#ff626d] shadow-lg"
          style={{ left: `${(value / max) * 100}%`, transform: 'translateX(-50%)' }}
        >
          ${value.toFixed(2)}
        </div>
      </div>
    </div>
                <div className="px-10 space-y-2">
                  <p className="mb-2 font-semibold uppercase">Colors</p>
                  <div className="grid grid-cols-5 gap-2">
                    {["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-400", "bg-blue-300", "bg-black", "bg-white", "bg-gray-500", "bg-yellow-300", "bg-lime-200"].map((color, idx) => (
                      <div key={idx} className={`w-8 h-7 rounded ${color} cursor-pointer`} />
                    ))}
                  </div>
                  <div className="w-full mt-8 border border-gray-400"></div>
                </div>
                <div className="px-10 space-y-2">
                  <p className="mb-2 font-semibold uppercase">Size</p>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    {[4,4.5,5,5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 11, 12, 13].map((size) => (
                      <div key={size} className="p-2 text-center rounded-sm cursor-pointer bg-[#333235] hover:bg-gradient-to-r from-[#ff626d] to-[#fcad72] hover:text-white">
                        {size}
                      </div>
                      
                    ))}
                  </div>
                <div className="w-full mt-8 border border-gray-400"></div>
                </div>
                <div className="px-10 mb-10 space-y-2">
                  {/* <p className="font-semibold">Type</p> */}
                  {["Leather", "Suede"].map((item, idx) => (
                    <label key={idx} className="flex items-center justify-between gap-2 text-sm ">
                      {item}
                      <input type="checkbox" className="accent-emerald-900" />
                    </label>
                  ))}
                </div>
              </aside>
            )}

            <div className="flex-1">
              <div className="pb-6">
                <div className="flex flex-col items-center justify-between gap-6 px-4 py-12 bg-black lg:flex-row" data-aos='fade-up' data-aos-delay='200'>
                  <div className="flex flex-wrap gap-6">
                    {["Nike", "Adidas", "Puma", "Reebok", "Converse"].map((brand) => (
                      <div
                        key={brand}
                        className={`hover:text-red-400 cursor-pointer ${
                          active === brand ? "text-red-400" : "text-white"
                        }`}
                        data-aos='fade-up'
                        data-aos-delay='200'
                        onClick={() => setActive(brand)}
                      >
                        {brand} <span>({Math.floor(Math.random() * 200)})</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6" data-aos='fade-up'
                        data-aos-delay='200'>
                    <p
                      className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400"
                      onClick={() => setShowSizeSelector(!showSizeSelector)} 
                    >
                      Newest <TbArrowBackUp />
                    </p>
                    <p
                      className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400"
                      onClick={() => setShowSizeSelector(!showSizeSelector)} 
                    >
                      UK Size <TbArrowBackUp />
                    </p>
                    <SiSonarcloud className="text-white" />
                    <MdCancel className="text-white" />
                  </div>
                </div>

                {showSizeSelector && <Size onSelect={handleSizeSelect} />}
                {renderBrandComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Catalog;