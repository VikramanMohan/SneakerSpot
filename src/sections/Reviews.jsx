import { useRef } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import UserImg1 from "../assets/user1.jpeg";
import UserImg2 from "../assets/user2.jpg";
import UserImg3 from "../assets/user3.jpeg";
import UserImg4 from "../assets/user4.jpg";
import UserImg5 from "../assets/user5.jpg";
import UserImg6 from "../assets/user6.jpeg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  module: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const reviews = [
  { name: "Karthik Raghu", img: UserImg1 },
  { name: "Mark Ruffalo", img: UserImg2 },
  { name: "Jessica Dan", img: UserImg3 },
  { name: "Richard Gere", img: UserImg5 },
  { name: "Rukmini V", img: UserImg4 },
  { name: "Bully Maguire", img: UserImg6 },
];

export default function Reviews() {
  const carouselRef = useRef(null);

  const handleNext = () => carouselRef.current?.next(0);
  const handlePreview = () => carouselRef.current?.previous(0);

  return (
    <div className="bg-[#333235] pt-16 pb-8 tracking-wider">
      <div className="xl:w-4/5 max-w-[1400px] mx-auto px-6" data-aos="fade-up">
        <div className="flex items-center justify-between pt-8">
          <h2 className="lg:text-4xl text-2xl lg:leading-[70px] text-white font-bold">
            Customer Reviews
          </h2>
          <span className="flex items-center gap-x-2">
            <button
              onClick={handlePreview}
              className="rounded-full p-4 hover:bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full p-4 hover:bg-gradient-to-r from-[#ff626d] to-[#fcad72] text-white"
            >
              <IoIosArrowForward />
            </button>
          </span>
        </div>

        <div className="mt-16">
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite
            autoPlay={true}
            arrows={false}
            keyBoardControl={true}
            renderButtonGroupOutside={true}
            ref={carouselRef}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="shadow-2xl p-8 relative mt-16 bg-[#232227] mx-4 rounded-lg"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 -mt-16 rounded-full"
                />
                <span className="flex items-center gap-3 py-4 text-xl text-white">
                  <FaQuoteRight className="text-gray-500" />
                  {review.name}
                </span>
                <p className="text-white">
                  I must explain how this mistaken idea of denouncing pleasure
                  and praising pain was born. I will give you a complete account
                  of the system and the teachings of the great explorer of truth.
                </p>
                <div className="flex gap-2 py-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[#fcad72] last:text-[#b4b4b4]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
