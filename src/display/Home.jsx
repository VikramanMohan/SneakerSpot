import BrandShoe from "../products/BrandShoe";
import Products from "../products/Products";
import Showcase from "../sections/Showcase";
import Popular from "../sections/Popular";
import Reviews from "../sections/Reviews";


const Home = () => {
  return (
    <>
      <Showcase />      
      <Products />     
      <BrandShoe />    
      <Popular />     
      <Reviews />    
    </>
  );
};

export default Home;
