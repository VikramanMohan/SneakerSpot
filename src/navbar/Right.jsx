import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import Profile from "../auth/profile/Profile";

const Right = () => {
  const [click, setClick] = useState(false);

  const showProfile = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="flex gap-4 max-lg:hidden">
        <div className="absolute flex items-center justify-center w-5 h-5 p-2 text-sm text-white bg-gradient-to-r  from-[#fcad72] to-[#ff626d] rounded-full top-3 right-28">0</div>
        <button className="flex items-center justify-center w-10 h-10 text-base text-white bg-black rounded-full shadow outline-none cursor-pointer hover:bg-white hover:text-black">
          <HiOutlineShoppingBag className="w-full h-full p-2" />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-base text-white bg-black rounded-full shadow outline-none cursor-pointer hover:bg-white hover:text-black"
          onClick={showProfile}
        >
          <GoPerson className="w-full h-full p-2" />
        </button>
      </div>

      {click && <Profile closeProfile={() => setClick(false)} />} 
    </>
  );
};

export default Right;
