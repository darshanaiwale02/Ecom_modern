import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-PrimaryColor text-ExtraDarkColor rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div>
          <h1 className="font-semibold text-3xl pb-4">Lotus</h1>
          <div className="flex gap-5 ml-3">
            <FaFacebook
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiTwitterXLine
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
            <RiInstagramFill
              size={32}
              className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Shop</h1>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/shopping"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Menu
            </Link>
            <Link
              to="/productb"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              New
            </Link>
            <Link
              to="/contact"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Company</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="/about"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/news"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              News
            </Link>
            <Link
              to="/support"
              className="hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <h1>Vighnahartha Agro Products</h1>
            <p>171/3, Haplewasti, Fursungi,</p>
            <p>Tal. Haveli Dist. Pune</p>
            <p>vighnaharthaproducts@gmail.com</p>
            <p>+91 9657525353</p>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright
          <span className="text-black"> </span> | All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
