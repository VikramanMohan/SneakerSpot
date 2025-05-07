import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { SiSonarcloud } from "react-icons/si";
import { TbArrowBackUp } from "react-icons/tb";
import Size from "./Size";
import Nike from "./brands/Nike";
import Adidas from "./brands/Adidas";
import Converse from "./brands/Converse";
import Puma from "./brands/Puma";
import Rebook from "./brands/Rebook";

const Product = () => {
  const [active, setActive] = useState("Nike");
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  const handleSizeSelect = (selectedSize) => {
    console.log("Selected UK Size:", selectedSize);
    setShowSizeSelector(false);
  };

  const renderBrandComponent = () => {
    switch (active) {
      case "Nike":
        return <Nike />;
      case "Adidas":
        return <Adidas />;
      case "Puma":
        return <Puma />;
      case "Reebok":
        return <Rebook />;
      case "Converse":
        return <Converse />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#333235]">
      <div className="xl:w-4/5 max-w-[1400px] px-6 m-auto py-8">
        <div data-aos="fade-down" data-aos-duration="300">
          <h2 className="py-6 text-4xl font-semibold text-white">Products.</h2>
          <div className="flex flex-col items-center justify-between gap-8 pt-12 pb-6 lg:flex-row">
            <div className="flex items-center">
              <span className="flex flex-wrap items-center gap-8">
                {["Nike", "Adidas", "Puma", "Reebok", "Converse"].map((brand) => (
                  <div
                    key={brand}
                    className={`hover:text-red-400 cursor-pointer ${
                      active === brand ? "text-red-400" : "text-white"
                    }`}
                    onClick={() => setActive(brand)}
                  >
                    {brand} <span>({Math.floor(Math.random() * 200)})</span>
                  </div>
                ))}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <p className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400">
                Newest <TbArrowBackUp />
              </p>
              <p
                className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400"
                onClick={() => setShowSizeSelector(!showSizeSelector)}
              >
                UK Size <TbArrowBackUp />
              </p>
              <SiSonarcloud className="text-white" />
              <MdCancel className="text-white" />
            </div>
          </div>

          {showSizeSelector && <Size onSelect={handleSizeSelect} />}
          {renderBrandComponent()}
        </div>
      </div>
    </div>
  );
};

export default Product;
