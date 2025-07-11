import { useSelector, useDispatch } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice.js";
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#232227] min-h-screen px-4 py-8 tracking-wider">
      <div className="mx-auto max-w-7xl" data-aos="fade-down">
        <h2 className="mb-6 text-2xl font-semibold text-white md:text-4xl">
          your shopping cart.
        </h2>
        {cartItems.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-2xl text-center text-white"
            data-aos="fade-up"
          >
            <h1 className="flex items-center gap-2 text-2xl font-semibold">
              <FaCartArrowDown /> Your cart is empty
            </h1>
            <p className="mt-2 text-base text-gray-400">
              Add some cool sneakers to it!
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center lg:flex-col">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center w-full gap-4 mb-6 lg:flex-row lg:gap-6"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row items-center w-full lg:w-[1200px] bg-[#333235] rounded-2xl border-3 border-[#333235] hover:border-red-500 transition-all p-3">
                  <div className="flex justify-center w-full p-3 md:w-auto">
                    <img
                      src={item.image}
                      className="w-28 md:w-40 lg:w-48"
                      alt={item.shoename}
                    />
                  </div>
                  <div className="w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden"></div>
                  <div className="border-[#4e4e50] md:border-x-2 lg:border-x-2 lg:h-20 lg:w-60 p-3 flex flex-col items-center text-center">
                    <h1 className="text-base font-semibold text-white uppercase md:text-xl">
                      {item.shoename}
                    </h1>
                    <h1 className="text-lg md:text-lg font-bold uppercase text-[#4e4e50]">
                      Size: {item.size || "8"}
                    </h1>
                  </div>
                  <div className="w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden"></div>
                  <div className="flex items-center justify-center h-20 p-4 w-60">
                    <h1 className="text-base font-bold text-white uppercase md:text-xl">
                      {item.color || "Red"}
                    </h1>
                  </div>
                  <div className="w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden"></div>
                  <div className="border-[#4e4e50] md:border-x-2 lg:border-x-2 p-4 lg:h-20 lg:w-60 flex justify-center items-center gap-2">
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="flex items-center justify-center w-8 h-8 text-white rounded-full md:w-10 md:h-10 bg-gradient-to-r from-red-400 to-orange-300"
                    >
                      <HiPlus />
                    </button>
                    <h1 className="p-3 text-base font-bold text-white md:text-xl">
                      {item.quantity}
                    </h1>
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white rounded-full bg-[#4e4e50]"
                    >
                      <HiMinus />
                    </button>
                  </div>
                  <div className="w-full bg-[#4e4e50] h-0.5 lg:hidden md:hidden"></div>
                  <div className="flex items-center justify-center h-8 p-4 text-center lg:h-20 md:text-left lg:w-60">
                    <h1 className="text-base md:text-xl font-bold text-[#4e4e50] uppercase">
                      Pricing{" "}
                      <span className="font-bold text-white">
                        ${item.price * item.quantity}
                      </span>
                    </h1>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="p-4 text-gray-400 transition hover:text-red-500"
                >
                  <CgClose size={24} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div
          className="flex items-center justify-between w-full text-center md:flex-row md:text-left"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex items-center justify-center p-4 font-semibold text-white cursor-pointer hover:underline underline-offset-4">
            <IoIosArrowBack />
            <NavLink className="ml-2" to="/home">
              Back to shop
            </NavLink>
          </div>
          <div className="text-base font-semibold text-white lg:relative md:text-xl lg:right-20">
            <h1>
              Subtotal: <span className="py-2">${total.toFixed(2)}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
