import { HiHeart, HiOutlineShoppingBag } from "react-icons/hi2"
import PumaBoxImg1 from "../../assets/pumaboximg.jpg"
import PumaBoxImg2 from "../../assets/pumaboximg2.jpg"
import PumaImg1 from "../../assets/pumaimg1.png"
import PumaImg2 from "../../assets/pumaimg2.png"
import PumaImg3 from "../../assets/pumaimg3.png"
import PumaImg4 from "../../assets/pumaimg4.png"
import PumaImg5 from "../../assets/pumaimg5.png"
import PumaImg6 from "../../assets/pumaimg6.png"
import PumaImg from "../../assets/pumaimg1.png";
const Puma = () => {

  return (
    <>
        <div className="pt-16 lg:flex">
                    <div className="w-full lg:w-2/5 " data-aos="fade-up">
                        <div className="p-5">
                        <p className="flex justify-between gap-2 text-white ">
                            NIKE WMNS ZOOM AIR FIRE `WHITEUNIVERSITY RED` <HiHeart/> </p>
                        <p className="text-white lg:pb-0">Princing $140.00</p>
                        </div>
                        <div className="relative overflow-hidden">
                        <img src={PumaBoxImg1} alt="" className="w-full h-[36rem] hover:scale-110 transition-all object-cover" />
                        </div>
                    </div>
                        
                
                <div className="w-full lg:w-1/3">
                <div className="w-full " data-aos="fade-up"  data-aos-delay="200">
                    <div className="p-6 ">
                        <p className="flex justify-between gap-2 text-white">NIKE AIR MAX 2090<HiHeart/></p>
                    <p className="text-white lg:pb-4 ">Princing $190.00</p>
                    </div>
                    <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative overflow-hidden">
                    <div className="relative top-3 w-[60%]">
                        <img src={PumaImg1} alt="PumaImg1" className="w-full transition-all hover:scale-110" />
                        </div>
                        <div className="absolute flex items-center justify-between w-full px-6 top-6">
                            <p className="text-white">DAY-TO-DAY</p>
                            <button className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-red-400 to-orange-300 ">
                                NEW 
                            </button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="p-8">
                    <p className="flex justify-between gap-2 text-white">NIKE AIR VAPORMAX<HiHeart/></p>
                    <p className="text-white">Princing $210.00</p>
                </div>
                <div className="relative flex items-center justify-center h-64 overflow-hidden bg-gradient-to-r from-red-400 to-orange-300 ">
                        <div className="flex items-center justify-center">
                        <img src={PumaImg2} alt="PumaImg2" className="w-[60%] transition-all mt-10 hover:scale-110" />
                        </div>
                        <div className="absolute flex items-center justify-between w-full px-6 top-6">
                            <p className="text-white">STREAT</p>
                            <button className="w-10 h-10 text-base text-white bg-black rounded-full shadow outline-none cursor-pointer hover:bg-white hover:text-black transition-bg ">
                                <HiOutlineShoppingBag className="w-full h-full p-2"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            

                
            <div className="lg:w-1/3 " data-aos="fade-up" data-aos-delay="300">
                <div className="p-6 ">
                    <p className="flex justify-between gap-2 text-white">NIKE AIR VAPORMAX <HiHeart/></p>
                    <p className="text-white lg:pb-4">Princing $150.00</p>
                </div>
                <div className="bg-[#232227] h-64 flex justify-center items-center relative ">
                        <div className="relative flex items-center justify-center top-4">
                        <img src={PumaImg3} alt="" className="w-[60%] transition-all hover:scale-110"/>
                        </div>
                        <div className="absolute flex items-center justify-between w-full px-6 top-6">
                            <p className="text-white ">STREAT</p>
                            <button className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-red-400 to-orange-300">NEW</button>
                        </div>
                    </div>
            </div>
            </div>


            <div className="py-8 lg:flex">
                <div className="lg:w-1/3" data-aos='fade-up' data-aos-delay="200">
                <div className="p-6">
                <p className="flex justify-between gap-2 text-white">
                    NIKE AIR ZOOM TEMPO <HiHeart/></p>
                <p className="text-white">Princing $190.00</p>
                </div>
                <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative mt-6 lg:mt-0 overflow-hidden">
                    <div className="relative w-[60%] top-4">
                        <img src={PumaImg4} alt="PumaImg4" className="w-full transition-all hover:scale-110 " />
                    </div>
                    <div className="absolute flex items-center justify-between w-full px-6 top-6">
                    <p className="text-white">DAY-TO-DAY</p>
                    <button className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-red-400 to-orange-300">NEW</button>
                    </div>
                </div>
            </div>
            
            
            <div  className="lg:w-1/3 " data-aos="fade-up" data-aos-delay="300">
                <div className="p-6">
                    <p className="flex justify-between gap-2 text-white">NIKE AIR MAX 2021` <HiHeart/></p>
                    <p className="text-white">Princing $170.00</p>
                </div>
                <div className="bg-[#232227] mt-6 h-64 flex justify-center items-center relative lg:mt-0">
                        <div className="relative w-[60%] top-3 ">
                            <img src={PumaImg5} alt="PumaImg5" className="w-full transition-all hover:scale-110"/>
                        </div>
                        <div className="absolute flex items-center justify-between w-full px-6 top-6">
                            <p className="text-white">DAY-TO-DAY</p>
                            <button className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-red-400 to-orange-300">NEW</button>
                        </div>
                </div>
            </div>

            <div  className="lg:w-1/3 " data-aos="fade-up" data-aos-delay="400">
                <div className="p-6">
                    <p className="flex justify-between gap-2 text-white">NIKE AIR MAX VIVA <HiHeart/></p>
                    <p className="text-white">Princing $140.00</p>
                </div>
                <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative  lg:mt-0 mt-6 overflow-hidden">
                        <div className="relative w-[55%] top-4 ">
                            <img src={PumaImg6} alt="PumaImg6" className="w-full transition-all hover:scale-110"/>
                        </div>
                        <div className="absolute flex items-center justify-between w-full px-6 top-6">
                            <p className="text-white">DAY-TO-DAY</p>
                            <button className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-red-400 to-orange-300">NEW</button>
                        </div>
                </div>
            </div>

            </div>
    
    <div className="bg-[#333235] tracking-wider">
                <div className="max-w-[1400px] mx-auto">
                  <div className="lg:flex lg:pb-40">
                    <div className="flex flex-col justify-between lg:w-3/5 lg:pt-16">
                      <h2 className="pl-8 text-5xl font-bold text-white lg:text-7xl">
                        Brand Shoes.
                      </h2>
                      <div className="lg:flex">
                        <div
                          className="w-full "
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <div className="p-8">
                            <p className="flex justify-between gap-2 text-white">
                              ADIDAS AIR MAX 2020 <HiHeart />
                            </p>
                            <p className="text-white ">Pricing $190.00</p>
                          </div>
                          <div className="bg-[#232227] h-64 w-full flex items-center justify-center lg:mt-0 mt-6 relative overflow-hidden">
                            <div className="w-[60%] relative top-5">
                              <img
                                src={PumaImg}
                                className="w-full transition-all hover:scale-110 "
                              />
                            </div>
                            <div className="absolute flex items-center justify-between w-full px-6 top-6">
                              <p className="text-white">DAY-TO-DAY</p>
                              <button className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white rounded-full px-4 py-1 text-sm">
                                NEW
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="w-full" data-aos="fade-up" data-aos-delay="300">
                          <div className="p-8">
                            <p className="flex justify-between gap-2 text-white">
                              PUMA AIR VAPORMAX <HiHeart />
                            </p>
                            <p className="text-white">Pricing $210.00</p>
                          </div>
                          <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative  lg:mt-0 mt-6 overflow-hidden">
                            <div className="w-[60%] relative top-3">
                              <img
                                src={PumaImg2}
                                alt=""
                                className="w-full transition-all hover:scale-110"
                              />
                            </div>
                            <div className="absolute flex items-center justify-between w-full px-6 top-6">
                              <p className="text-white">STREAT</p>
                              <button className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white rounded-full px-4 py-1 text-sm">
                                NEW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex-1 lg:w-2/5"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <p className="flex justify-between gap-2 px-6 pt-6 text-white">
                        PUMA RYX 360 ORIGINAL <HiHeart />
                      </p>
                      <p className="px-6 pb-8 text-white">Pricing $140.00</p>
                      <div className="relative overflow-hidden">
                        <img
                          src={PumaBoxImg2}
                          alt="PumaBoxImg2"
                          className="w-full lg:h-[34rem] hover:scale-110 transition-all "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Puma