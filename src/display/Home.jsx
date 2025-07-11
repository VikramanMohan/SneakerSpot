import Products from "../products/Products";
import Showcase from "../sections/Showcase";
import Popular from "../sections/Popular";
import Reviews from "../sections/Reviews";


const Home = () => {
  return (
    <>
      <Showcase />      
      <Products />     
      <Popular />    
      <Reviews />    
    </>
  );
};

export default Home;
