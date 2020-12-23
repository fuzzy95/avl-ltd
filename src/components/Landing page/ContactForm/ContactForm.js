import React from "react";
import SecondaryHeading from "../../Typographys/Headers/SecondaryHeading";

const ContactForm = () => {
  return (
    <div className="text-black bg-white font-roboto">
      <div className="container mx-auto lg:px-20 px-4 pt-12 pb-0 mt-20">
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-start items-center lg:space-x-16 space-x-0">
          <div className="lg:w-1/2 w-full">
            <SecondaryHeading text="get in touch" />
            <div className="flex sm:flex-row flex-col w-full mt-12">
              <div className="sm:w-2/5 w-full">
                <div className="sm:pr-2 pr-0 py-3 w-full">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full h-14 bg-gray-100 border-2 border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="sm:pr-2 pr-0 py-3 w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address *"
                    className="w-full h-14 bg-gray-100 border-2 border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="sm:pr-2 pr-0 py-3 w-full">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full h-14 bg-gray-100 border-2 border-gray-300 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="sm:pl-2 pl-0 py-3 sm:w-3/5 w-full">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full bg-gray-100 border-2 border-gray-300 focus:border-black h-54 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="bg-lemon py-2 rounded-full cursor-pointer mt-6">
              <div className="text-white text-base flex justify-center items-center">
                Send Message
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:mt-0 mt-24">
            <SecondaryHeading text="Our Location" />
            <div className="flex flex-col items-start space-y-6 mt-12">
              <div className="flex justify-start items-center space-x-3">
                <i className="fas text-blue text-5xl fa-map-marker-alt" />
                <p className="text-gray-600 text-base">
                  37, Khagan, Birulia, <br />
                  Savar, Dhaka, 1340
                </p>
              </div>
              <div className="flex justify-start items-center space-x-3">
                <i className="fas text-blue text-5xl fa-phone-volume" />
                <span className="text-gray-600 text-base">+88-02-7741769</span>
                <span className="text-gray-600 text-base">
                  +880-1726-958349
                </span>
              </div>
              <div className="flex justify-start items-center space-x-3">
                <i className="fab text-blue text-5xl fa-telegram-plane" />
                <p className="text-gray-600 text-base">admin@faiaz-group.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
