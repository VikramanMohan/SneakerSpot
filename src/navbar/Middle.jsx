import { NavLink } from "react-router-dom";

const Middle = () => {
  const items = [
  { name: "Home", route: "/home" },
  { name: "Catalog", route: "/catalog" },
  { name: "Brands", route: "/brandshoe" },
  { name: "Reviews", route: "/reviews" },
  { name: "Support", route: "/support" },
  { name: "Contacts", route: "/contact" }, // ✅ corrected
];


  return (
    <div className="flex gap-6">
      {items.map((item) => (
        <NavLink
          key={item.name}
          to={item.route}
          className={({ isActive }) =>
            `text-lg leading-normal no-underline hover:text-black ${
              isActive ? "text-black font-medium" : "text-white"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Middle;
