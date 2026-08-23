import React from "react";
import Image from "next/image";
import Logo from "../../Helper/Logo";
import { FaFacebookF, FaYoutube, FaInstagram, FaPaperPlane, FaPhone } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-900 text-white">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div>
          {/* LOGO */}
          <Logo />
          {/* description */}
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours Feturesin Services ew Guests LisitThe
            Team List Guests LisitThe Team List
          </p>
          {/* socials links */}
          <div className="flex items-center space-x-4 mt-6">
            {/* facebook icon */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            {/* Youtube */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            {/* Instagram */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8 space-y-4">
            {/* Address */}
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                Old city Street,Usa <br /> 1212 New york-3500
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-5">
              <FaPhone className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">+88 014 420420</p>
            </div>
            {/* Info / Email */}
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                example@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">More Services</h1>
          <div className="mt-8">
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">UI Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">UX Design</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Web App</p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">
                Digital Marketing
              </p>
            </div>
            <div className="flex items-center mb-2">
              <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
              <p className="font-medium text-sm text-white">Video Editing</p>
            </div>
          </div>
        </div>

        {/* 4th part */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>
          <div className="mt-8">
            <p className="font-medium text-sm text-white">
              It is a long established fact that a reader will be distracted
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image
                src="/images/f.jpg"
                alt="img"
                width={80}
                height={25}
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                  <p className="text-white font-semibold text-sm">
                    25 October, 2025
                  </p>
                </div>
                <p className="mt-2 text-white font-bold">
                  The standard chunk of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300 text-center">
          © Gichoz_la_Geek Hub 2026 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;