import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";


const PROJECT_IMAGES = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f1115]">
      {/* Section Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        Transforming ideas into <br />
        digital reality
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6">
        {PROJECT_IMAGES.map((src, idx) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay={(idx + 1) * 100}
              key={idx}
              className="flex justify-center items-center"
            >
              <Tilt className="w-full h-full">
                <Image
                  src={src}
                  alt={`project-${idx + 1}`}
                  width={450}
                  height={300}
                  className="rounded-md object-cover w-full h-64"
                />
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;