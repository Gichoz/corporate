import React from "react";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16">
        {/* Contact Form Container */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="lg:col-span-2 bg-gray-900 rounded-xl p-6 md:p-10"
        >
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent outline-none"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white bg-transparent outline-none"
          />

          {/* Message Input */}
          <textarea
            placeholder="Message"
            rows={4}
            className="border-2 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white bg-transparent outline-none resize-none"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full px-6 py-3 bg-[#b69974] hover:bg-[#a38562] transition-colors duration-300 uppercase cursor-pointer rounded-full text-white font-semibold">
            Submit
          </button>
        </div>

        {/* Cards Container */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="lg:col-span-1 space-y-4"
        >
          {/* 1st Card - Phone */}
          <div className="p-6 bg-blue-800 rounded-xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#d8ff36] flex items-center justify-center text-blue-800 text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-300 text-xs font-medium">Call Us</p>
              <h1 className="text-white text-sm md:text-base font-semibold">+123 456 7890</h1>
            </div>
          </div>

          {/* 2nd Card - Email */}
          <div className="p-6 bg-blue-800 rounded-xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#d8ff36] flex items-center justify-center text-blue-800 text-lg">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-300 text-xs font-medium">Email Us</p>
              <h1 className="text-white text-sm md:text-base font-semibold">info@example.com</h1>
            </div>
          </div>

          {/* 3rd Card - Location */}
          <div className="p-6 bg-blue-800 rounded-xl flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#d8ff36] flex items-center justify-center text-blue-800 text-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-300 text-xs font-medium">Address</p>
              <h1 className="text-white text-sm md:text-base font-semibold">Nairobi, Kenya</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;