import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import oldPhone from "@iconify-icons/entypo/old-phone";
import barsIcon from "@iconify-icons/uil/bars";
import cross15 from "@iconify-icons/maki/cross-15";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="relative z-10 container font-roboto lg:px-20 px-4 mx-auto py-8">
        <div className="w-full text-xl lg:text-white text-black lg:flex justify-between items-center mb-8 hidden">
          <div className="flex items-center space-x-2">
            <Icon icon={oldPhone} />
            <p className="font-bold lg:text-white text-black">+880123456789</p>
          </div>
          <div className="flex space-x-8 text-2xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="container bg-white flex justify-between items-center">
          <Link>
            <img
              className="bg-black flex justify-center items-center py-2 px-3"
              src="/img/logoassignment.png"
              alt=""
            />
          </Link>
          <nav className="bg-white font-bold text-black font-oswald tracking-wider xl:text-md hidden xl:flex flex-wrap justify-center">
            <Link className="mr-5 hover:text-gray-400">Home</Link>
            <Link className="mr-5 hover:text-gray-400">About Us</Link>
            <Link className="mr-5 hover:text-gray-400">Our Factory</Link>
            <Link className="mr-5 hover:text-gray-400">Clientele</Link>
            <Link className="mr-5 hover:text-gray-400">Products</Link>
            <Link className="mr-5 hover:text-gray-400">Careers</Link>
            <Link className="mr-5 hover:text-gray-400">CSR</Link>
            <Link className="mr-5 hover:text-gray-400">Accreditations</Link>
            <Link className="mr-5 hover:text-gray-400">Get a Quote</Link>
            <Link className="mr-5 hover:text-gray-400">Contact Us</Link>
          </nav>
          <button
            onClick={() => setNavbarOpen(true)}
            className="cursor-pointer text-4xl leading-none xl:hidden px-4"
          >
            <Icon icon={barsIcon} className="" />
          </button>
          {navbarOpen ? (
            <div>
              <div
                className="justify-center items-center flex p-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => setNavbarOpen(false)}
              >
                <div className="relative w-full h-full">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white text-black outline-none focus:outline-none">
                    <div className="flex items-center justify-between p-5 border-b border-solid border-gray-900 rounded-t">
                      <div className="flex space-x-6 items-center">
                        <Icon icon={oldPhone} />
                        <p className="font-bold lg:text-white text-black">
                          +880123456789
                        </p>
                      </div>
                      <div
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setNavbarOpen(false)}
                      >
                        <Icon icon={cross15} className="" />
                      </div>
                    </div>
                    <nav className="bg-white font-bold text-black font-oswald tracking-wider text-xl flex flex-col items-center justify-center space-y-8">
                      <Link className="mr-5 hover:text-gray-400">Home</Link>
                      <Link className="mr-5 hover:text-gray-400">About Us</Link>
                      <Link className="mr-5 hover:text-gray-400">
                        Our Factory
                      </Link>
                      <Link className="mr-5 hover:text-gray-400">
                        Clientele
                      </Link>
                      <Link className="mr-5 hover:text-gray-400">Products</Link>
                      <Link className="mr-5 hover:text-gray-400">Careers</Link>
                      <Link className="mr-5 hover:text-gray-400">CSR</Link>
                      <Link className="mr-5 hover:text-gray-400">
                        Accreditations
                      </Link>
                      <Link className="mr-5 hover:text-gray-400">
                        Get a Quote
                      </Link>
                      <Link className="mr-5 hover:text-gray-400">
                        Contact Us
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between items-center"></div>
    </>
  );
};

export default Navbar;
