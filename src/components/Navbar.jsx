import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";
import imgLogo from "../assets/traced-Main logo.jpeg"

const Navbar = ({ setShowCart }) => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <header className="fixed w-full z-10">
      <section>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" style={{ height: "100px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink exact to="/" className="cursor-pointer">
              <img
                src={imgLogo}
                alt="Agrocus"
                style={{ maxWidth: "100px", height: "100px" }}
              />
            </NavLink>
            <span style={{ marginLeft: "10px" }}>Lotus</span>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-semibold gap-10 text-ExtraDarkColor">
            <NavLink exact to="/" className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Home</NavLink>
            <NavLink to="/shopping" className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Menu</NavLink>
            <NavLink to="/productb" className="hover:text-black transition duration-300 ease-in-out cursor-pointer">New</NavLink>
            <NavLink to="/contact" className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Contact us</NavLink>
          </nav>
          <div className="flex items-center gap-5">
            <FaUser size={25} className="text-DarkColor" />
            <div className="text-DarkColor relative">
              <FaShoppingCart
                size={25}
                className="cursor-pointer"
                onClick={() => setShowCart(true)}
              />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <RiMenu2Line size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <NavLink exact to="/" className="hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shopping" className="hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer" onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/productb" className="hover:text-black transition duration-300 ease-in-out cursor-pointer" onClick={closeMenu}>New</NavLink>
          <NavLink to="/contact" className="hover:text-DarkColor transition duration-300 ease-in-out cursor-pointer" onClick={closeMenu}>Contact Us</NavLink>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
