import { HiPlus } from "react-icons/hi"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { Autoplay, Pagination } from "swiper/modules";
const responsive = {
    superLargeDesktop : {
        breakpoint: {max: 4000, min: 3000},
        items:2,
    },
    desktop:{
        breakpoint:{max:3000,min:1024},
        items:2,
    },
    tablet:{
        breakpoint:{max:1024,min:464},
        items:1,
    },
    module:{
        breakpoint:{max:464,min:0},
        items:1,
    }
};


const Popular = () => {


  return (
    <>
    <div className="bg-[#232227] pb-16 lg:h-[25rem] h-full" >
        <div className="xl:w-4/5 max-w-[1400px] mx-auto relative" data-aos="fade-up" > 
            <div className="w-full lg:absolute lg:-top-40"> 
                <h2 className="py-8 text-3xl font-semibold text-center text-white">Most Popular Products.</h2>
                <div className="">
                
                <Carousel
                    module={[Pagination, Autoplay]}
                    swipeable={true}
                    draggable={false}
                    spaceBetween={20}
                    responsive={responsive}
                    ssr={true}
                    infinite
                    pagination={{
                        clickable: true,
                        }}
                    arrows={true}
                    autoplay={{ delay: 3000 }} 
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                >
                    
    {[...Array(3)].map((_, index) => (
        <div
            key={index}
            className={`w-full bg-gradient-to-r from-[#ff626d] to-[#fcad72] relative p-8 lg:flex transform transition-transform duration-500`}
            
        >
                    <div className="w-full lg:w-1/4">
                        <button className="bg-gradient-to-r from-[#fcad72] to-[#ff626d] text-white rounded-full px-4 py-1 text-sm shadow">NEW</button>
                        <h2 className="pt-3 text-xl font-bold leading-10 text-white">Under Armour Curry 8.</h2>
                        <p className="py-4 text-2xl font-semibold">$199.00</p>
                        <button className="px-2 py-3 text-sm text-white bg-black rounded-full">GO TO CATALOG</button>
                    </div>
                    <div className="absolute hidden lg:block -top-10 right-20">
                        <p className="text-[15rem] font-semibold opacity-10 italic -tracking-widest">NIKE</p>
                    </div>
                    <div className="items-center justify-center lg:flex">
                        <div className="relative top-3 left-15 lg:left-0 lg:w-[25rem] w-full">
                            <img src="/public/adidasimg2.png" alt="" className="transition-all h-55 hover:scale-110" />
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
                ))}
        </Carousel>
                </div>
            </div>
        </div>
    </div>

    <section className="bg-[#303033] " >
        <div className="xl:w-4/5 max-w-[1400px] mx-auto grid lg:grid-cols-3 grid-cols-1 items-end" data-aos="fade-up">
            <div>
                <div className="flex h-60 item-center">
                    <h2 className="px-20 py-20 text-5xl font-semibold text-white">Advantage.</h2>
                </div>
                <div className="bg-[#4e4e50] relative h-[20rem] lg:h-[33rem] flex flex-col justify-center">
                    <img src="/public/img10.png" alt="" className="absolute -top-30 right-12 w-50" />
                    <p className="px-8 text-xl font-bold text-gray-500">02</p>
                    <p className="px-8 py-4 text-xl font-bold text-white">footBall Shoes</p>
                    <p className="px-8 text-gray-500">We deliver immersive virtual reality experiences that encourages
                    learning, creativity and play at transport hubs, select retail
                    and culturally significant venues. We deliver immersive virtual 
                    reality experiences that encourages learning, creativity and 
                    play at transport hubs, select retail and creativity significant
                    venues
                    </p>
                </div>
            </div>
            <div>
                <div className="bg-[#4e4e50] relative h-70 flex flex-col justify-end">
                    <div className="absolute flex justify-end -top-0 right-1">
                        <img src="/public/imgbox4.png" alt="" className="w-40 "/>
                    </div>
                    <div className="px-8 py-8 ">
                        <p className="text-xl font-bold text-gray-500">01</p>
                        <p className="py-4 text-xl font-bold text-white">quality assurances</p>
                        <p className="text-gray-500">
                            We deliver immersive virtual reality experiences that
                            encourages learning creativity and play at transport hubs,
                            select retail
                        </p>
                    </div>
                </div>
                <div className="h-[33rem] relative overflow-hidden">
                    <img src="/public/imgbox2.jpg" alt="" className="w-full h-full hover:scale-110"/>
                </div>
            </div>
            <div>
                <div className="flex flex-col justify-end px-8 pb-4 lg:h-72 h-52">
                    <p className="text-xl font-bold text-white ">free shipping</p>
                    <p className="text-gray-500 lg:text-[7rem]  text-5xl font-bold">0 <span className="absolute text-white ">3</span></p>
                </div> 
                <div className="bg-[#4e4e50] relative  flex flex-col justify-center">
                    <img src="/public/imgbox3.png" alt="" className="absolute -top-32 right-4 w-65" />
                    <div className="px-8 py-16 pb-4 h-[20rem] lg:h-[30rem]">
                        <p className="text-xl font-bold text-gray-500">04</p>
                        <p className="py-4 text-xl font-bold text-white">gift certificates </p>
                        <p className="text-gray-500 ">
                            We deliver immersive virtual reality experiences that
                            encourages learning creativity and play at transport hubs,
                            select retail and culturally significant venus. We deliver
                            immersive virtual reality experiences that encourages learning
                            creativity and play at transport hubs select retail and culturally
                            significant venues
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-gradient-to-r from-[#ff626d] to-[#ff0113] lg:h-80 relative flex flex-col items-center justify-center mt-10" data-aos="fade-up">
        <img src="/public/LilNas.png" alt="" className="lg:absolute right-0 lg:h-[100%] bottom-0 object-cover" />
        <div className="hidden rounded-full shadow-2xl bg-gradient-to-r  from-[#ff626d] to-[#fcad72]  lg:flex items-center justify-center w-60 h-60 absolute xl:left-[10%] left-4">
            <div className="border border-gray-200 border-solid rounded-full h-52 w-52">
                <img src="/public/img17.png" alt="" className="relative m-auto w-75 top-4"/>
                <button className="absolute px-2 font-semibold text-white bg-black rounded-lg lg:text-xl bottom-10 ">$ 300</button>
                <button className="text-white bg-gradient-to-r  from-[#fcad72] to-[#ff626d] rounded-full absolute shadow-2xl top-8 right-0 z-10 w-10 h-10 flex items-center justify-center">
                    <HiPlus size={20}/>
                </button>
                <p className="uppercase font-bold text-lg absolute top-[4.6rem] -right-14">Lil Nas <span className="text-white">X nike</span></p>
            </div>
        </div>
        <div className="relative z-10 px-6 py-8 text-white lg:w-1/3">
            <p className="text-4xl font-bold lg:text-7xl ">Lil Nas X nike</p>
            <p className="pt-8 leading-7">We deliver immersive virtual reality experiences that
            encourages learning creativity and play at transport hubs,
            select retail and culturally significant venus.
            </p>
        </div>
    </section>
    </section>

    
    </>
  )
}

export default Popular