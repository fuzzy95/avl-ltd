import React from "react";
import BlackButton from "../../Typographys/Buttons/BlackButton";
import PrimaryHeader from "../../Typographys/Headers/PrimaryHeader";
import { Icon } from "@iconify/react";
import briefcaseIcon from "@iconify-icons/bi/briefcase";
import bulbOutline from "@iconify-icons/ion/bulb-outline";
import heartIcon from "@iconify-icons/bi/heart";
import wallet2Icon from "@iconify-icons/bi/wallet2";
import TartiaryHeading from "../../Typographys/Headers/TartiaryHeading";

const AboutUsComponent = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <Icon className="text-white lg:text-8xl md:text-7xl text-6xl" icon={icon} />
    <TartiaryHeading text={text} />
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-yellow skew lg:mt-24 -mt-4">
      <div className="container mx-auto lg:px-20 px-4 skewrev pt-20 lg:pb-0 pb-20">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
          <div className="lg:w-1/4 w-full lg:mx-0 flex flex-col lg:items-start items-center text-black">
            <PrimaryHeader text="ABOUT US" />
            <p className="text-white lg:text-lg text-base mb-14 mt-14 lg:w-4/5 w-full lg:text-left text-center">
              We are devoted for the consistent improvement in the system of
              providing products and services to customers through on time
              delivery & enhancing customers' satisfaction by means of
              superiority.
            </p>
            <BlackButton text="Learn More" to="#" />
            <img
              className="lg:mt-32 mt-16 lg:w-auto w-32"
              src="/img/aboutusimage.png"
              alt="aboutsectionimage"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center lg:items-end items-center space-y-20">
            <div className="flex lg:space-x-48 space-x-32 lg:mr-36 mr-0">
              <AboutUsComponent icon={briefcaseIcon} text="Make Business" />
              <AboutUsComponent icon={bulbOutline} text="Agency Ideas" />
            </div>
            <div className="flex lg:space-x-48 space-x-32">
              <AboutUsComponent icon={heartIcon} text="Our Hardwork" />
              <AboutUsComponent icon={wallet2Icon} text="Make Money" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
