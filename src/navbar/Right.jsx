import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import Profile from "../auth/profile/Profile";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  const handleProfile = () => {
    setShowProfile(true);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <>
      <div className="flex gap-4 max-lg:hidden">
        
        <button
          className="relative flex items-center justify-center w-10 h-10 text-base text-white bg-black rounded-full shadow outline-none cursor-pointer hover:bg-white hover:text-black"
          onClick={handleCart}
        ><div className="absolute flex items-center justify-center w-5 h-5 p-2 text-sm text-white bg-gradient-to-r from-[#fcad72] to-[#ff626d] rounded-full top-0 left-7">
          0
        </div>
          <HiOutlineShoppingBag className="w-full h-full p-2" />
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 text-base text-white bg-black rounded-full shadow outline-none cursor-pointer hover:bg-white hover:text-black"
          onClick={handleProfile}
        >
          <GoPerson className="w-full h-full p-2" />
        </button>
      </div>

      {showProfile && (
        <div ref={profileRef}>
          <Profile closeProfile={() => setShowProfile(false)} />
        </div>
      )}
    </>
  );
};

export default Right;
