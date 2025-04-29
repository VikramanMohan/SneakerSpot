import { useEffect } from "react";
import Navbar from "./navbar/Navbar"
import AOS from "aos";
import "aos/dist/aos.css"
import Product from "./products/Products";
import Showcase from "./sections/Showcase";
import BrandShoe from "./products/BrandShoe";
// import Cart from "./cart/Cart";
import Popular from "./sections/Popular";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
// import Shopping from "./sections/Shopping";
  const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);
  return (
    <>
        <Navbar/>
        <Showcase/>
        <Product/>
        <BrandShoe/>
        {/* <Cart/> */}
        {/* <Shopping/> */}
        <Popular/>
        <Reviews/>
        <Footer/>
    </>
  )
}

export default App