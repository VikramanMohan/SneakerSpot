import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#333235] tracking-wider overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/assets/errorpage1.png"
        alt="Background"
        className="absolute top-0 left-0 z-10 object-cover w-full h-full"
      />

      {/* Overlay Image */}
      <img
        src="/src/assets/errorpage2.png"
        alt="Overlay"
        className="absolute top-0 left-0 z-20 object-cover w-full h-full"
      />

      {/* Error Message */}
      <div className="absolute z-30 flex flex-col items-center justify-center text-center  text-2xl text-white top-[70%]">
        <h1 className="mb-1 ">
          Excuse me! The page you are looking
        </h1>
        <p className="mb-3">for could not be found.</p>
        <NavLink
          to="/home"
          className="font-semibold text-gray-400 transition hover:text-white"
        >
          go to home page
        </NavLink>
      </div>
    </section>
  );
};

export default ErrorPage;
