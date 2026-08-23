import React from "react";
import WorkProcessCard from "./WorkProcesscard";

const WorkProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden w-full">
      <div className="w-[90%] sm:w-[85%] max-w-7xl mx-auto">
        <h1 className="text-[#b69974] text-base md:text-lg text-center font-medium tracking-widest uppercase">
          Work Process
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl mt-3 font-bold text-center text-black leading-tight px-2">
          Transforming ideas into <br className="hidden sm:inline" />
          digital reality
        </h1>

        {/* Work Process Cards Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-14 gap-x-8">
          <WorkProcessCard number="01" title="Creative Craze" isExtraClass />
          <WorkProcessCard number="02" title="Brand Boost" />
          <WorkProcessCard number="03" title="Media Minds" isExtraClass />
          <WorkProcessCard number="04" title="Strategic Vision" />
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;