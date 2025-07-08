import { useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import UserImg1 from "../assets/user1.jpeg";
import UserImg2 from "../assets/user2.jpg";
import UserImg3 from "../assets/user3.jpeg";
import UserImg4 from "../assets/user4.jpg";
import UserImg5 from "../assets/user5.jpg";
import UserImg6 from "../assets/user6.jpeg";

const reviews = [
  { name: "Karthik Raghu", img: UserImg1 },
  { name: "Mark Ruffalo", img: UserImg2 },
  { name: "Jessica Dan", img: UserImg3 },
  { name: "Richard Gere", img: UserImg5 },
  { name: "Rukmini V", img: UserImg4 },
  { name: "Bully Maguire", img: UserImg6 },
];

export default function Testimonials() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#333235] py-20 tracking-wider">
      <div className="max-w-6xl px-6 mx-auto">
        <h2
          className="mb-12 text-3xl font-bold text-white lg:text-4xl"
        >
          Customer Testimonials
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#232227] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100} // delay in ms for staggered effect
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="object-cover rounded-full w-14 h-14"
                />
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <FaQuoteRight className="text-gray-500" /> Verified Buyer
                  </span>
                </div>
              </div>
              <p className="mb-4 text-sm text-white">
                I must explain how this mistaken idea of denouncing pleasure and
                praising pain was born. I will give you a complete account of
                the system and the teachings of the great explorer of truth.
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#fcad72]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
