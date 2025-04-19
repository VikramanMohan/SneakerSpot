import { HiHeart } from "react-icons/hi2"

const BrandShoe = () => {
  return (
    <div className="bg-[#333235]">
        <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto">
            <div className="lg:flex lg:pb-40">
                <div className="flex flex-col justify-between lg:w-3/5 lg:pt-16">
                    <h2 className="pl-8 text-5xl font-bold text-white lg:text-7xl">Brand Shoes.</h2>
                    <div className="lg:flex">
                        <div className="w-full " data-aos="fade-up" data-aos-delay="200">
                            <div className="p-8">
                                <p className="flex justify-between gap-2 text-white">
                                    ADIDAS AIR MAX 2020 <HiHeart/>
                                </p>
                                <p className="text-white ">
                                    Pricing $190.00
                                </p>
                            </div>
                            <div className="bg-[#232227] h-64 w-full flex items-center justify-center lg:mt-0 mt-6 relative overflow-hidden">
                                <div className="w-[60%] relative top-5">
                                    <img src="../../public/adidasimg2.png" className="w-full transition-all hover:scale-110 " />
                                </div>
                                <div className="absolute flex items-center justify-between w-full px-6 top-6">
                                    <p className="text-white">DAY-TO-DAY</p>
                                    <button className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white rounded-full px-4 py-1 text-sm">NEW</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-8">
                                <p className="flex justify-between gap-2 text-white">
                                    PUMA AIR VAPORMAX <HiHeart/>
                                </p>
                                <p className="text-white">
                                    Pricing $210.00
                                </p>
                            </div>
                            <div  className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative  lg:mt-0 mt-6 overflow-hidden">
                                <div className="w-[60%] relative top-3">
                                <img src="../../public/pumaimg2.png" alt="" className="w-full transition-all hover:scale-110" />
                                </div>
                                <div className="absolute flex items-center justify-between w-full px-6 top-6">
                                    <p className="text-white">STREAT</p>
                                    <button className="bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white rounded-full px-4 py-1 text-sm">NEW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:w-2/5" data-aos="fade-up" data-aos-delay="400">
                    <p className="flex justify-between gap-2 px-6 pt-6 text-white">NIKE RYX 360 ORIGINAL <HiHeart/></p>
                    <p className="px-6 pb-8 text-white">Pricing $140.00</p>
                    <div className="relative overflow-hidden">
                        <img src="../../public/imgbox1.jpg" alt="" className="w-full lg:h-[34rem] hover:scale-110 transition-all " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandShoe