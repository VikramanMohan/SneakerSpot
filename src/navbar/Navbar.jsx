import Left from './Left';
import Right from './Right';
import Middle from './Middle';
import Dropdown from './Dropdown';

import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = ({ onCartClick }) => {
  const [dropdown, setDropDown] = useState(false);

  const toggleDropdown = () => {
    setDropDown(!dropdown);
  };

  return (
    <nav style={{ fontFamily: 'MyFont' }} className="w-full h-20 flex flex-col justify-center items-center sticky top-0 z-50 bg-gradient-to-r from-[#ff626d] to-[#fcad72] lg:shadow-lg shadow-2xl tracking-wider">
      <div className="w-full">
        <div className="flex items-center justify-between w-11/12 h-full mx-auto lg:w-4/5">
          {/* Left side logo/title */}
          <Left />

          {/* Middle nav items for desktop */}
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <Middle />
          </ul>

          {/* Right side cart or profile */}
          <Right onCartClick={onCartClick} />

          {/* Hamburger / Close icon for mobile */}
          <div
            onClick={toggleDropdown}
            className="lg:hidden text-[22px] cursor-pointer text-white transition-all"
          >
            {dropdown ? <MdClose /> : <HiMenuAlt3 />}
          </div>
        </div>

        {/* Dropdown for mobile */}
        {dropdown && <Dropdown onClose={() => setDropDown(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
