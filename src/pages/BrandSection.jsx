import NikeLogo from '../assets/brands/nike.png';
import AdidasLogo from '../assets/brands/adidas.png';
import PumaLogo from '../assets/brands/puma.png';
import ReebokLogo from '../assets/brands/reebok.png';
import ConverseLogo from '../assets/brands/converse.png';
import AdidasImg from "../assets/adidasimg2.png";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BrandShoe1 from "../assets/brandshoecover1.png"
import BrandShoe2 from "../assets/brandshoecover2.png"


const brands = [
  { name: "Nike", logo: NikeLogo },
  { name: "Adidas", logo: AdidasLogo },
  { name: "Puma", logo: PumaLogo },
  { name: "Reebok", logo: ReebokLogo },
  { name: "Converse", logo: ConverseLogo },
];

const BrandSection = () => {
  return (
    <section className=" bg-[#333235] min-h-screen">
      <div className="relative max-w-full mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full h-80 bg-gradient-to-r from-[#fcad72] to-[#ff626d] relative shadow-xl hidden lg:block">
            <div className="absolute z-0 hidden lg:block top-8 right-[18%] rounded-full w-65 h-65 bg-[#333235]">
            </div>
            <div className="relative flex items-center justify-around w-full">
                <div className="w-[70%] ">
                  <img
                  src={BrandShoe1}
                  alt="Adidas Shoe"
                  className="w-full object-cover md:h-35 lg:h-80 "
                />
                </div>
                <div className="relative z-10 flex flex-row items-center justify-center py-10  w-full">
                <div className="w-full space-y-6">
                  <h1 className=" text-white text-6xl font-bold">
                  Brand Shoe.
                  </h1>
                  <p className=" text-md text-white space-y-6">
                    We deliver immersive virtual reality experiences that encourage learning, creativity, and play at transport hubs, select retail, and culturally significant venues.
                  </p>
                  <button className="px-8 py-4 text-sm font-semibold text-white bg-black rounded-full">
                    GO TO CATALOG
                  </button>
              </div>
              
            </div>
                <div className="relative flex items-center justify-center top-6 right-15 w-[70%]">
                <div className="">
                  <img
                  src={BrandShoe2}
                  alt="Adidas Shoe"
                  className="w-full transition-transform duration-300 md:h-35 lg:h-80 hover:scale-110 "
                />
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </div>
      <div className="max-w-6xl  mx-auto text-start py-8">
        <h2 className="text-3xl font-bold text-white">Top Brands</h2>
        <p className="mt-2 text-gray-500">Shop your favorite brands</p>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center w-full gap-4 mx-auto overflow-x-auto sm:overflow-visible pb-10 ">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-center transition bg-[#232227] shadow cursor-pointer group w-55 h-50 hover:scale-105"
            onClick={() => alert(`You selected ${brand.name}`)}
            title={brand.name}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="object-contain max-h-30"
            />
            <span className="absolute text-xs text-gray-500 transition opacity-0 bottom-1 group-hover:opacity-100">
              {brand.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
