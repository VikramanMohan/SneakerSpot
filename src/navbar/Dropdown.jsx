import { NavLink } from "react-router-dom";

const Dropdown = ({ onClose }) => {
  const items = [
    { name: "Home", route: "/home" },
    { name: "Catalogs", route: "/catalog" },
    { name: "Brands", route: "/brandshoe" },
    { name: "Reviews", route: "/reviews" },
    { name: "Contact", route: "/contact" },
    { name: "Support", route: "/support" },
  ];

  return (
    <div className="lg:hidden w-full fixed top-[4.5rem] bg-gradient-to-r from-[#ff626d] to-[#fcad72] shadow-lg z-50">
      <div className="flex flex-col w-full gap-4 p-6 pt-2">
        <ul className="flex flex-col w-full gap-2">
          {items.map((item) => (
            <NavLink
              key={item.route}
              to={item.route}
              onClick={onClose}
              className={({ isActive }) =>
                `py-2 text-lg no-underline transition ${
                  isActive ? "text-black font-semibold" : "text-white"
                } hover:text-black`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
