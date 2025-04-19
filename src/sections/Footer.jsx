import { SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";




const Footer = () => {
  return (
    <footer className="bg-[#232227] py-10">
        <div className="container flex flex-col items-center justify-between px-8 mx-auto lg:px-2 lg:flex-row lg:w-4/5">
        <h2 className="text-2xl font-bold text-black uppercase "> Sneaker <span className="text-2xl font-bold text-white uppercase">Spot</span> </h2>
            <ul className="flex flex-col items-center justify-between p-4 lg:flex-row xl:gap-12 gap-x-4 gap-y-2">
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Home</a>
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Catalog</a>
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Brands</a>
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Reviews</a>
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Contact</a>
                <a href="#" className="leading-normal no-underline text-white text-lg hover:text-[#ff626d]">Support</a>
            </ul>
            <div className="flex gap-4 p-4 text-white">
                <SlSocialInstagram className="cursor-pointer hover:text-[#ff626d]" />
                <SlSocialLinkedin className="cursor-pointer hover:text-[#ff626d]" />
                <SlSocialTwitter className="cursor-pointer hover:text-[#ff626d]" />
            </div>
        </div>
    </footer>
  )
}

export default Footer