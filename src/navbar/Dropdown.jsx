
const Dropdown = () => {
    return (
      <>
      <div className="lg:hidden w-full fixed top-[4.5rem] bg-gradient-to-r from-[#ff626d] to-[#fcad72]  shadow-lg z-50">
            <div className="flex flex-col items-baseline w-full gap-4 p-10 pt-2">
              <ul className="flex flex-col justify-center w-full ">
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Home</a>
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Catalogs</a>
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Brands</a>
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Reviews</a>
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Contact</a>
              <a href="#" className="py-2 text-lg leading-normal text-white no-underline hover:text-black">Support</a>
              </ul>
            </div>
          </div>
      </>
    )
  }
  
  export default Dropdown