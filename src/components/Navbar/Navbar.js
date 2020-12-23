import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import oldPhone from "@iconify-icons/entypo/old-phone";

const Navbar = () => {
  return (
    <>
      <div className="container font-roboto px-20 mx-auto py-8">
        <div className="w-full text-xl text-white flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Icon icon={oldPhone} />
            <p className="font-bold">+880123456789</p>
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
          <nav className="bg-white text-black font-anton tracking-wider text-xl flex flex-wrap justify-center">
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
        </div>
      </div>
      <div className="flex justify-between items-center"></div>
    </>
  );
};

export default Navbar;
