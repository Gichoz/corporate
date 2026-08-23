import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f1115]">
      <div className="w-[80%] mx-auto">
        {/* Section Heading & Subheading content above */}

        {/* Services Cards Grid */}
        <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
          {/* Service Card 1 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
          >
            <ServiceCard image="/images/s1.png" icon="/images/sicon1.png" />
          </div>

          {/* Service Card 2 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard image="/images/s2.png" icon="/images/sicon2.png" />
          </div>

          {/* Service Card 3 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard image="/images/s3.png" icon="/images/sicon3.png" />
          </div>

          {/* Service Card 4 */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard image="/images/s4.png" icon="/images/sicon4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;