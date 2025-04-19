import React, { useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoClose } from "react-icons/io5"; // Import close icon

const Profile = ({ closeProfile }) => {
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        closeProfile();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeProfile]);

  return (
    <div
      ref={profileRef}
      className="fixed top-0 right-0 bg-[#333235] h-[100vh] w-[300px] z-1000  flex flex-col justify-between  shadow-lg"
    >
      <div className="relative w-full px-10 py-8">
        {/* Close Button */}
        <button
          className="absolute text-2xl text-white top-2 right-2"
          onClick={closeProfile}
        >
          <IoClose />
        </button>

        <div className="flex flex-col justify-between">
          <button className="px-4 py-2 mt-1 text-black bg-white hover:bg-black hover:text-white">
            Register
          </button>
          <button className="px-4 py-2 mt-2 text-black bg-white hover:bg-black hover:text-white">
            Login
          </button>
          <p className="py-2 font-semibold text-white">Login or New User?</p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#fcad72] to-[#ff626d] h-95 flex flex-col items-center  relative " >
        <div className="z-40 flex flex-col items-center py-10" data-aos="fade">
          <h2 className="text-5xl font-semibold text-white" >discount</h2>
          <h3 className="text-3xl font-semibold text-white">
            promo <span className="text-3xl text-black">code</span>
          </h3>
          <div className="flex items-center justify-between h-10 p-4 mt-5 bg-white w-45 rounded-3xl">
            <p className="font-semibold text-black">BRANDSHOE2021</p>
            <button className="p-3 text-white bg-black rounded-full hover:bg-[#ff626d] hover:text-white">
              <MdContentCopy />
            </button>
          </div>
        </div>

        <div className="bg-[#232227] rounded-full h-34 w-34 flex items-center justify-center absolute bottom-5 z-10" data-aos="fade-down"></div>
        <img
          src="/public/nikeimg1.png"
          className="absolute bottom-0 z-20 w-68 top-20"
          data-aos="fade-down" data-aos-delay="50"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
