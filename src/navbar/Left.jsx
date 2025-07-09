import { NavLink } from "react-router-dom"

const Left = () => {
    return (
      <>
      <div className="flex flex-col gap-y-4"> 
            <NavLink to='/home' className="flex items-center cursor-pointer gap--x-2">
              <h2 className="text-lg font-bold text-black uppercase">Sneaker <span className="text-lg font-bold text-white uppercase">Spot</span> </h2>
            </NavLink>
          </div>
      </>
    )
  }
  
  export default Left