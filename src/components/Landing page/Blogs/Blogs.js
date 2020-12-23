import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="text-white bg-black skew font-roboto">
        <div className="skewrev container mx-auto lg:px-20 px-4 py-12 mt-20">
          <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center space-x-4">
            <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center justify-center">
              <h1 className="flex flex-col lg:items-start items-center font-normal uppercase font-anton lg:text-6xl text-4xl lg:text-left text-center">
                Latest
                <span className="text-yellow lg:mt-4 mt-0">
                  Design <span className="text-white">Blog</span>
                </span>
              </h1>
              <p className="text-base mt-10 lg:text-left text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                reiciendis beatae facilis quidem culpa optio?
              </p>
              <Link to="/blog">
                <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-black mt-10">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="flex w-1/2 mt-20">
              <img src="/img/monitor.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
