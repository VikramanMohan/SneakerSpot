import Left from './Left'
import Right from './Right'
import Middle from './Middle';
import Dropdown from './Dropdown';

import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [dropdown, setDropDown] = useState(false)

  const showDropdown = () => {
    setDropDown(!dropdown);
  }

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center sticky top-0 z-50 bg-gradient-to-r from-[#ff626d] to-[#fcad72] lg:shadow-lg shadow-2xl ">
    <div className="w-full">
      <div className="flex items-center justify-between w-11/12 h-full mx-auto lg:4/5">
        <Left/>
        <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden ">
            <Middle/>
        </ul>
        <Right/>
        {dropdown ? (
          <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black transition-all">
            <MdClose className='text-white' />
          </div>
        ) : (
          <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black transition-all">
            <HiMenuAlt3 className='text-white' />
          </div>
        )}
      </div>
      {dropdown && (
        <Dropdown/>
      )}
    </div>
    </nav>
  )
}

export default Navbar