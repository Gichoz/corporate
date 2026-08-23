import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "Online Marketing",
    percentage: "80%",
    icon: <BsCheckCircle className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Digital Business",
    percentage: "90%",
    icon: <BsCheckCircle className="w-6 h-6 text-white" />,
  },
];

const AboutProgress = () => {
  return (
    <div className="space-y-8 py-6 md:py-10">
      {data.map((item, idx) => {
        // Reduced base delay and step increment for snappy triggering
        const delay = 100 + idx * 100;

        return (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={delay}
            className="flex items-center gap-6 bg-white rounded-xl shadow-md p-6"
          >
            {/* Icon */}
            <div className="bg-[#b58b58] p-5 rounded-md flex items-center justify-center">
              {item.icon}
            </div>

            {/* Text + Progress */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <span className="font-bold text-gray-700">{item.percentage}</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#b58b58] h-2.5 rounded-full"
                  style={{ width: item.percentage }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutProgress;