import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import AnimatedOutlet from "../animates/AnimatedOutlet";
import ScrollToTop from "../components/ScrollToTop"; 

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop /> 
      <AnimatedOutlet />
      <Footer />
    </>
  );
};

export default Main;
