import React from 'react';
import { CgClose } from 'react-icons/cg';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { IoIosArrowBack } from 'react-icons/io';
import AdidasImg2 from '../assets/adidasimg2.png';
const Cart = () => {
  return (
    <div className='bg-[#4e4e50] min-h-screen px-4 py-8'>
      <div className='mx-auto max-w-7xl' data-aos="fade-down">
        <h2 className='mb-6 text-2xl font-semibold text-white md:text-4xl'>your shopping cart.</h2>
        <div className='flex flex-col items-center lg:flex-col'>
          <div className='flex flex-col items-center w-full gap-4 lg:flex-row lg:gap-6' data-aos='fade-up'>
            <div className='flex flex-col md:flex-row items-center w-full lg:w-[1200px] bg-[#333235] rounded-2xl border-3 border-[#333235] hover:border-red-500 transition-all p-3  mb-4' data-aos='fade-up'>
              {/* Product Image */}
              <div className='flex justify-center w-full p-3 md:w-auto'>
                <img src={AdidasImg2} className='w-28 md:w-40 lg:w-48' alt='Product' />
              </div>
                <div className='w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden'></div>
              {/* Product Info */}
              <div className='border-[#4e4e50] md:border-x-2 lg:border-x-2 lg:h-20 lg:w-60 p-3 flex flex-col items-center text-center'>
                <h1 className='text-base font-semibold text-white uppercase md:text-xl'>Nike Air</h1>
                <h1 className='text-lg md:text-lg font-bold uppercase text-[#4e4e50]'>Size: 8.5</h1>
              </div>
              <div className='w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden'></div>
              {/* Color Info */}
              <div className='flex items-center justify-center h-20 p-4 w-60'>
                <h1 className='text-base font-bold text-white uppercase md:text-xl'>Orange</h1>
              </div>
              <div className='w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden'></div>
              {/* Quantity Controls */}
              <div className='border-[#4e4e50] md:border-x-2     lg:border-x-2 p-4 lg:h-20 lg:w-60 flex justify-center items-center gap-2'>
                <button className='flex items-center justify-center w-8 h-8 text-white rounded-full md:w-10 md:h-10 bg-gradient-to-r from-red-400 to-orange-300'>
                  <HiPlus />
                </button>
                <h1 className='p-3 text-base font-bold text-white md:text-xl'>2</h1>
                <button className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white rounded-full bg-[#4e4e50]'>
                  <HiMinus />
                </button>
              </div>
              <div className='w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden'></div>
              {/* Pricing */}
              <div className='flex items-center justify-center h-8 p-4 text-center lg:h-20 md:text-left lg:w-60'>
                <h1 className='text-base md:text-xl font-bold text-[#4e4e50] uppercase'>Pricing <span className='font-bold text-white'>$100</span></h1>
              </div>
            </div>

            {/* Remove Button */}
            <div>
              <button className='p-4 text-gray-400 transition hover:text-red-500'>
                <CgClose size={24}  />
              </button>
            </div>
          </div>
          
        </div>

        <div className='flex items-center justify-between w-full text-center md:flex-row md:text-left' data-aos="fade-up" data-aos-delay="500">
          <div className='flex items-center justify-center p-4 font-semibold text-white cursor-pointer hover:underline underline-offset-4'>
            <IoIosArrowBack />
            <h1 className='ml-2'>Back to shop</h1>
          </div>
          <div className='text-base font-semibold text-white lg:relative md:text-xl lg:right-20'>
            <h1>Subtotal: <span className='py-2'>$210</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;