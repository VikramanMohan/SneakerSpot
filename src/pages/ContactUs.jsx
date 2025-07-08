import { BiPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineOnlinePrediction } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="px-6 py-10 bg-[#333235] md:px-20 lg:py-18 text-white">
      <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">Contact Us</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Details */}
        <div
          className="p-6 bg-[#232227] shadow-lg rounded-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">Get in Touch</h3>
          <p className="mb-4 text-gray-400">
            Have questions or concerns? Reach out to our support team and we’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#ff626d]" />
              <span>
                Email:{" "}
                <a href="mailto:support@sneakerspot.com" className="text-white hover:text-[#ff626d]">
                  support@sneakerspot.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-[#ff626d]" />
              <span>Phone: +91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-[#ff626d]" />
              <span>Address: 123 Sneaker Street, Chennai, India</span>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineOnlinePrediction className="text-[#ff626d]" />
              <span>Support Hours: Mon - Fri, 9:00 AM - 6:00 PM</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-6">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex gap-4 mt-2 text-sm text-gray-400">
              <a href="#" className="hover:text-[#ff626d]">
                Instagram
              </a>
              <a href="#" className="hover:text-[#ff626d]">
                Facebook
              </a>
              <a href="#" className="hover:text-[#ff626d]">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="p-6 bg-[#232227] shadow-lg rounded-xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">Send a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                className="w-full p-2 bg-[#1f1f22] border border-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff626d]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full p-2 bg-[#1f1f22] border border-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff626d]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-400">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 bg-[#1f1f22] border border-[#3a3a3a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff626d]"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-5 py-2 text-white bg-[#ff626d] rounded-md hover:bg-[#e75560] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;