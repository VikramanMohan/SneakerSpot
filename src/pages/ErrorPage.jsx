import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#333235]">
        <img src="/src/assets/errorpage1.png" alt="Error Page" className="object-cover w-full h-full"/>
        <div className="absolute z-20 flex flex-col items-center justify-center text-2xl font-semibold text-white top-[70%]">
            <h1>'Excuse me! The page you are looking </h1>
            <p className="mb-2.5">for could not be found'</p>
            <NavLink to='home' className="text-gray-400 cursor-pointer">go to home page</NavLink>
            </div>
        <img src="/src/assets/errorpage2.png" alt="Error Page" className="absolute z-20 object-cover w-full h-full"/>
    </section>
  )
}

export default ErrorPage