import { useRef } from "react"
import {
    FaQuoteRight,
    FaStar,
} from "react-icons/fa"

import {IoIosArrowBack,
    IoIosArrowForward,} from "react-icons/io"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import UserImg1 from "../assets/user1.jpeg"
import UserImg2 from "../assets/user2.jpg"
import UserImg3 from "../assets/user3.jpeg"
import UserImg4 from "../assets/user4.jpg"
import UserImg5 from "../assets/user5.jpg"
import UserImg6 from "../assets/user6.jpeg"
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop:{
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    module: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
export default function Reviews  ()  {
    const carouselRef = useRef(null);

    const handleNext = () => {
        if(carouselRef.current) carouselRef.current.next(0);
    };
    const handlePreview = () => {
        if(carouselRef.current) carouselRef.current.previous(0);
    };

  return (
    <div>
        <div className="bg-[#333235] pt-16 pb-8 " >
            <div className="xl:w-4/5 max-w-[1400px] mx-auto" data-aos="fade-up">
                <div className="w-full px-6 pt-8">
                    <div className="flex items-center justify-between">
                        <h2 className="lg:text-4xl text-2xl lg:leading-[70px] text-white font-bold">Customer Reviews</h2>
                        <span className="flex items-center gap-x-2" >
                            <button className="rounded-full p-4 hover:bg-gradient-to-r  focus::bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white" onClick={handlePreview}>
                                <IoIosArrowBack  className="text-white"/>
                            </button>
                            <button className="rounded-full p-4 hover:bg-gradient-to-r  focus::bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white" onClick={handleNext}>
                                <IoIosArrowForward className="text-white " />
                            </button>
                        </span>
                    </div>
                </div>
                <div className="mt-16">
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        ssr={true}
                        infinite
                        autoPlay={true}
                        arrows={false}
                        keyBoardControl={true}
                        renderButtonGroupOutside={true}
                        ref={carouselRef}                        
                    >
                        <div className="shadow-2xl p-8 relative mt-16 bg-[#232227] ">
                            <img src={UserImg1} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-5 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Karthik Raghu
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>

                        <div className="shadow-2xl p-8 relative mt-16 bg-[#232227] ">
                            <img src={UserImg2} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-3 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Mark Ruffalo
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>

                        <div className="shadow-2xl p-8 relative mt-16  bg-[#232227]">
                            <img src={UserImg3} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-3 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Jessica Dan
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>

                        <div className="shadow-2xl p-8 relative mt-16  bg-[#232227] ">
                            <img src={UserImg5} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-3 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Richard Gere
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>

                        <div className="shadow-2xl p-8 relative mt-16  bg-[#232227] ">
                            <img src={UserImg4} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-3 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Rukmini V
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>

                        <div className="shadow-2xl p-8 relative mt-16  bg-[#232227]  ">
                            <img src={UserImg6} alt="" className="w-16 h-16 -mt-16 rounded-full" />
                            <span className="flex items-center gap-3 py-4 text-xl text-white">
                                <FaQuoteRight className="text-gray-500" />
                                Bully Maguire
                            </span>
                            <p className="text-white">
                                I must explain to how all this mistaken idea of
                                denouncing pleasure and praising pain was born and i will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.
                            </p>
                            <div className="flex gap-2 py-4"> 
                                {[...Array(5)].map((star, index) => {
                                    return <FaStar key={index} className="text-[#fcad72] last:text-[#b4b4b4]" />;
                                })}
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

