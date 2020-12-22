import React from "react";

const Header = () => {
  return (
    <div className="container flex justify-end font-roboto mx-auto py-8">
      <div className="px-5 py-24 flex justify-end">
        <div className="flex">
          <h1 className="font-bold text-4xl flex flex-col items-end">
            EXCELLENCE
            <span className="text-2xl font-normal">
              in Quality. Quality in People
            </span>
          </h1>
        </div>
        <div className="bg-lemon pl-4 pr-5">
          <h1 className="flex flex-col text-4xl font-thin">
            Excellence
            <span className="font-bold">& Augmentation</span>
          </h1>
          <p className="text-base flex flex-wrap">
            We are devoted for the consistant improvement in the system of
            providing products and services to customers through on time
            delivery & enhancing customers' satisfaction by means of
            superiority.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
