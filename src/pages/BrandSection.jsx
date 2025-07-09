import NikeLogo from '../assets/brands/nike.png';
import AdidasLogo from '../assets/brands/adidas.png';
import PumaLogo from '../assets/brands/puma.png';
import ReebokLogo from '../assets/brands/reebok.png';
import ConverseLogo from '../assets/brands/converse.png';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BrandShoe1 from "../assets/brandshoecover1.png"
import BrandShoe2 from "../assets/brandshoecover2.png"
import { NavLink } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const brands = [
  { name: "Nike", logo: NikeLogo },
  { name: "Adidas", logo: AdidasLogo },
  { name: "Puma", logo: PumaLogo },
  { name: "Reebok", logo: ReebokLogo },
  { name: "Converse", logo: ConverseLogo },
];
const products =[
  {id:1,name:"NIKE AIR TEMPO",price:190.00,style:"day-to-day"},
{id:2,name:"NIKE AIR MAX 2021",price:290.00,style:"streat"},
{id:3,name:"NIKE AIR MAX VIVA",price:150.00,style:"day-to-day"},
{id:4,name:"NIKE AIR ZOOM TEMPO",price:160.00,style:"streat"},
{id:5,name:"NIKE AIR MAX 2024",price:210.00,style:"day-to-day"},
{id:6,name:"NIKE AIR TEMPO 2022",price:300.00,style:"streat"},]
const BrandSection = () => {
    const [liked, setLiked] = useState({});
  
  
    const handleLike = (id) => {
      setLiked((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        delay: 200, 
      });
    }, []);
  
  return (
    <section className=" bg-[#333235] min-h-screen tracking-wider">
      <div className="relative max-w-full mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full h-80 bg-gradient-to-r from-[#fcad72] to-[#ff626d] relative shadow-xl hidden lg:block">
            <div className="absolute z-0 hidden lg:block top-8 right-[18%] rounded-full w-65 h-65 bg-[#333235]" data-aos='fade-down' data-aos-delay='200' >
            </div>
            <div className="relative flex items-center justify-around w-full">
                <div className="w-[70%] ">
                  <img
                  src={BrandShoe1}
                  alt="Adidas Shoe"
                  className="object-cover w-full md:h-35 lg:h-80 " data-aos='fade-down' data-aos-delay='200'
                />
                </div>
                <div className="relative z-10 flex flex-row items-center justify-center w-full py-10" data-aos='fade-up' data-aos-delay='100'>
                <div className="w-full space-y-6">
                  <h1 className="text-6xl font-bold text-white ">
                  Brand Shoe.
                  </h1>
                  <p className="space-y-6 text-white text-md">
                    We deliver immersive virtual reality experiences that encourage learning, creativity, and play at transport hubs, select retail, and culturally significant venues.
                  </p>
                  <NavLink to='/catalog' className="px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 bg-black rounded-full cursor-pointer hover:bg-white hover:text-black">
                    GO TO CATALOG
                  </NavLink>
              </div>
              
            </div>
                <div className="relative flex items-center justify-center top-6 right-15 w-[70%]" data-aos='fade-down' data-aos-delay='350'>
                <div className="">
                  <img
                  src={BrandShoe2}
                  alt="Adidas Shoe"
                  className="w-full md:h-35 lg:h-80 "
                />
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </div>
      <div className="px-2 py-6 mx-auto max-w-7xl text-start">
        <h2 className="text-4xl font-bold text-white ">Top Brands.</h2>
        <p className="mt-2 text-gray-500 text-md">Shop your favorite brands</p>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center w-full gap-10 pb-10 overflow-x-auto tracking-wider x-auto sm:overflow-visible">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-center transition bg-[#232227] rounded-2xl shadow cursor-pointer group w-55 h-50 hover:scale-105"
            onClick={() => alert(`You selected ${brand.name}`)}
            title={brand.name}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="object-contain max-h-30"
             />
          </motion.div>
        ))}
      </div>

      
<div className='px-2 py-6 mx-auto text-white max-w-7xl text-start'>
  <h1 className='text-4xl font-bold '>Recommended.</h1>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {products.map((value, index) => (
      <div
        key={index}
        className='flex flex-col items-center justify-center w-full overflow-hidden'
        data-aos="fade-up"
          data-aos-delay={index * 100}
      >
        {/* Top Info */}
        <div className='flex items-center justify-between bg-[#333235] w-full px-3 py-6'>
          <div className='p-1'>
            <h1 className='text-md'>{value.name}</h1>
            <p className='text-sm'>Pricing: ${value.price}</p>
          </div>
           <span
                className={`cursor-pointer ${
                  liked[value.id] ? "text-red-500" : "text-gray-300"
                }`}
                onClick={() => handleLike(value.id)}
              >
                <HiHeart />
              </span>
        </div>

        {/* Image Section - Color changes for middle boxes */}
        <div
          className={`h-64 w-full flex flex-col items-center relative overflow-hidden ${
            index % 2 === 1 ? "bg-[#232227]" : "bg-[#4e4e50]"
          }`}
        >
          <div className='flex items-center justify-between w-full px-5 py-6'>
            <h1 className='uppercase text-md'>{value.style}</h1>
            <button className='bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full px-4 py-1 text-sm'>
              NEW
            </button>
          </div>
          <div className='w-[60%] relative top-3'>
            <img
              src='/src/assets/adidasimg2.png'
              className='w-full transition-all duration-300 ease-in-out hover:scale-110'
              alt={value.name}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



      
    </section>
  );
};

export default BrandSection;
