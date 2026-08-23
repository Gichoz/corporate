import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        {/* Blog Card 1 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCard
            image="/images/b1.png"
            title="Standard chunk of Lorem Ipsum Our Company"
          />
        </div>

        {/* Blog Card 2 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCard
            image="/images/b2.png"
            title="These cases are many simple and easy"
          />
        </div>

        {/* Blog Card 3 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b3.png"
            title="Standard chunk of Lorem Ipsum Our Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;