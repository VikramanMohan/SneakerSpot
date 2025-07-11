import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AdidasImg from "../assets/adidasimg2.png";
import FlowImg from "../assets/flowimg.png";
import ConverseImg from "../assets/pumaimg1.png";
import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";

const products = [
  { id: 1, image: AdidasImg },
  { id: 2, image: FlowImg },
  { id: 3, image: ConverseImg },
];


const ShoeCase = () => {
  return (
    <div className="container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
            {
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
            }
        }
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}
        clickable:true
        modules={[EffectCoverflow,Pagination,Navigation]}
        className='swiper_container'
        >
             {products.map((value, index) => (
                           <SwiperSlide
                             key={index}
                             className="transition-all duration-500 swiper-slide-custom "
                           >
                             <div className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] relative p-8 shadow-lg lg:flex items-center justify-between w-[700px]">
                               <div className="w-full lg:w-1/4">
                                 <button className="bg-gradient-to-r from-[#fcad72] to-[#ff626d] text-white rounded-full px-4 py-1 text-sm shadow">
                                   NEW
                                 </button>
                                 <h2 className="pt-3 text-xl font-bold leading-10 text-white">
                                   Under Armour Curry 8.
                                 </h2>
                                 <p className="py-4 text-2xl font-semibold">$199.00</p>
                                 <button className="px-2 py-3 text-sm text-white bg-black rounded-full">
                                   GO TO CATALOG
                                 </button>
                               </div>
           
                               <div className="absolute hidden lg:block -top-10 right-20">
                                 <p className="text-[13rem] font-semibold opacity-10 italic tracking-wider">
                                   NIKE
                                 </p>
                               </div>
           
                               <div className="items-center justify-center lg:flex">
                                 <div className="relative top-3 lg:w-[25rem] w-full">
                                   <img
                                     src={value.image}
                                     alt="product"
                                     className="transition-all h-55 hover:scale-110"
                                   />
                                   <div className="lg:flex hidden flex-col items-center justify-center bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full p-4 absolute top-16 right-0">
                                     <p className="text-sm text-white">promo: nike</p>
                                     <p className="text-2xl font-bold">40%</p>
                                     <p className="font-bold text-white text-1xl">sale</p>
                                   </div>
                                 </div>
                               </div>
           
                               <span className="absolute flex bottom-4 right-8">
                                 <p className="font-bold">outdoor</p>
                                 <span className="px-1 font-bold text-white">shoes</span>
                               </span>
                             </div>
                           </SwiperSlide>
                         ))}
        <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
    </div>
  )
}

export default ShoeCase