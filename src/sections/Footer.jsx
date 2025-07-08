import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1c1b1e] py-7 text-white tracking-wider">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto lg:px-0 lg:flex-row lg:w-4/5">
        {/* Logo */}
        <h2 className="mb-4 text-2xl font-bold uppercase cursor-pointer lg:mb-0 animate-fadeInUp">
          <span className="text-white">Sneaker</span>{" "}
          <span className="text-[#ff626d]">Spot</span>
        </h2>

        {/* Nav Links */}
        <ul className="flex flex-col items-center justify-center gap-3 text-lg lg:flex-row lg:gap-8 animate-fadeInUpSlow">
          <NavLink to="/showcase" className="hover:text-[#ff626d] transition">
            Home
          </NavLink>
          <NavLink to="/catalogs" className="hover:text-[#ff626d] transition">
            Catalogs
          </NavLink>
          <NavLink to="/brands" className="hover:text-[#ff626d] transition">
            Brands
          </NavLink>
          <NavLink to="/reviews" className="hover:text-[#ff626d] transition">
            Reviews
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#ff626d] transition">
            Contacts
          </NavLink>
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 text-xl lg:mt-0 animate-fadeInUpSlower">
          <SlSocialInstagram className="cursor-pointer hover:text-[#ff626d] transition" />
          <SlSocialLinkedin className="cursor-pointer hover:text-[#ff626d] transition" />
          <SlSocialTwitter className="cursor-pointer hover:text-[#ff626d] transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
