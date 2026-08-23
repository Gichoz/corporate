import Image from "next/image";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {
  image?: string;
  title?: string;
};

const BlogCard = ({
  image = "/images/b1.png",
  title = "Standard chunk of Lorem Ipsum Our Company",
}: Props) => {
  const imageSrc = image && image.trim() !== "" ? image : "/images/b1.png";

  return (
    <div className="flex flex-col justify-between h-full bg-white">
      <div>
        <Image
          src={imageSrc}
          alt="img"
          width={300}
          height={200}
          className="w-full rounded-lg object-cover h-56"
        />
        {/* Blog content */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            {/* Category */}
            <div className="flex items-center space-x-3">
              <FaRegFolderOpen className="text-orange-700 w-6 h-6" />
              <p className="font-semibold text-gray-800 text-sm">Category</p>
            </div>
            {/* Date */}
            <div className="flex items-center space-x-3">
              <BiCalendar className="text-orange-700 w-6 h-6" />
              <p className="font-semibold text-gray-800 text-sm">
                October 27, 2025
              </p>
            </div>
          </div>
          {/* Title */}
          <h1 className="text-lg mt-6 font-bold text-gray-900 hover:text-blue-700 transition-all duration-300 cursor-pointer min-h-14">
            {title}
          </h1>
        </div>
      </div>

      {/* Read more button with animated arrow & underline */}
      <div className="px-6 pb-6">
        <button className="relative inline-block mt-8 cursor-pointer group">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-[#1a1a1a]">
            READ MORE
            <FiArrowDownRight className="text-[#b79d7b] text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          {/* Underline animation */}
          <span className="block w-full h-px group-hover:w-0 transition-all duration-300 bg-[#514f4f] mt-2"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;