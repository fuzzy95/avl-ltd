import React from "react";
import PrimaryHeader from "../../Typographys/Headers/PrimaryHeader";
import WhiteButton from "../../Typographys/Buttons/WhiteButton";

const Header = () => {
  return (
    <div className="container font-roboto mx-auto py-8">
      <div className="lg:px-5 px-0 py-24 flex xl:justify-end justify-center items-center">
        <div className="lg:w-2/3 w-full flex lg:flex-row flex-col items-center lg:space-x-12 lg:space-y-0 space-y-5">
          <div className="flex flex-col lg:items-end items-center justify-center text-black lg:text-left text-center">
            <PrimaryHeader text="EXCELLENCE" />
            <span className="text-xl font-normal self-end">
              in Quality. Quality in People.
            </span>
          </div>
          <div className="bg-lemon pl-4 pr-5 py-8 text-white flex flex-col lg:items-start items-center">
            <h1 className="lg:text-6xl text-4xl tracking-tighter font-thin">
              Excellence
            </h1>
            <span className="lg:text-6xl text-4xl font-anton mt-5">
              & Augmentation
            </span>
            <p className="text-base flex flex-wrap mt-5 mb-8 lg:text-left text-center">
              We are devoted for the consistant improvement in the system of
              providing products and services to customers through on time
              delivery & enhancing customers' satisfaction by means of
              superiority.
            </p>
            <WhiteButton to="#" text="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
