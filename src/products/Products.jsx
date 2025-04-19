import { Outlet } from "react-router-dom"; // ✅ Correct import
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { SiSonarcloud } from "react-icons/si";
import { TbArrowBackUp } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Size from "./Size";

const Product = () => {
  const [active, setActive] = useState("Nike");
  const [click, setClick] = useState(false);
    
  const showCompound = () => {
    setClick(!click);
  };
  return (
    <div className="bg-[#333235]">
      <div className="xl:w-4/5 max-w-[1400px] px-6 m-auto py-8">
        <div data-aos="fade-down" data-aos-duration="300">
          <h2 className="py-6 text-4xl font-semibold text-white">Products.</h2>
          <div className="flex flex-col items-center justify-between gap-8 pt-12 pb-6 lg:flex-row">
            <div className="flex items-center">
              <span className="flex flex-wrap items-center gap-8">
                <NavLink
                  to="/nike"
                  className={`hover:text-red-400 cursor-pointer ${
                    active === "Nike" ? "text-red-400" : "text-white"
                  }`}
                  onClick={() => setActive("Nike")}
                >
                  Nike <span>({200})</span>
                </NavLink>
                <NavLink
                  to="/adidas"
                  className={`hover:text-red-400 cursor-pointer ${
                    active === "Adidas" ? "text-red-400" : "text-white"
                  }`}
                  onClick={() => setActive("Adidas")}
                >
                  Adidas original <span>({89})</span>
                </NavLink>
                <NavLink
                  to="/puma"
                  className={`hover:text-red-400 cursor-pointer ${
                    active === "Puma" ? "text-red-400" : "text-white"
                  }`}
                  onClick={() => setActive("Puma")}
                >
                  Puma <span>({42})</span>
                </NavLink>
                <NavLink
                  to="/reebok"
                  className={`hover:text-red-400 cursor-pointer ${
                    active === "Reebok" ? "text-red-400" : "text-white"
                  }`}
                  onClick={() => setActive("Reebok")}
                >
                  Reebok <span>({106})</span>
                </NavLink>
                <NavLink
                  to="/converse"
                  className={`hover:text-red-400 cursor-pointer ${
                    active === "Converse" ? "text-red-400" : "text-white"
                  }`}
                  onClick={() => setActive("Converse")}
                >
                  Converse <span>({40})</span>
                </NavLink>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <p className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400">
                Newest <TbArrowBackUp />
              </p>
              <p className="flex items-center gap-2 text-white underline cursor-pointer underline-offset-4 hover:text-red-400" onClick={showCompound}>
                UK Size <TbArrowBackUp />
                {click && <Size closeCompound={() => setClick(false)} />} 
              </p>
              <SiSonarcloud className="text-white" />
              <MdCancel className="text-white" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      
    </div>
    
  );
};

export default Product;
