import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import AnimatedOutlet from "../animates/AnimatedOutlet"; // <- New import

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </>
  );
};

export default Main;
