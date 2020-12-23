import React from "react";
import { Link } from "react-router-dom";
import WhiteButton from "../../Typographys/Buttons/WhiteButton";

const Blogs = () => {
  return (
    <>
      <div className="text-white bg-black skew font-roboto">
        <div className="skewrev container mx-auto lg:px-20 px-4 py-12 mt-20">
          <div>
            <h1 className="flex flex-col items-start font-normal uppercase font-anton lg:text-6xl text-4xl lg:text-left text-center">
              Latest
              <span className="text-yellow mt-4">
                Design <span className="text-white">Blog</span>
              </span>
            </h1>
            <p className="text-base mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              reiciendis beatae facilis quidem culpa optio?
            </p>
            <Link to="/blog">
              <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-black mt-10">
                "Learn More"
              </button>
            </Link>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-evenly lg:-space-y-8 space-y-16 mt-20"></div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
