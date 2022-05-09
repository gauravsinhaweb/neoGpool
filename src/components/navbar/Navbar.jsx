import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiLightBulb,
  HiOutlineLightBulb,
  HiOutlineLogout,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="w-screen flex flex-row items-center p-1 justify-between bg-gray-900 shadow-xs">
        <div className="ml-8 text-lg text-white  hidden md:flex">
          <Link to="/">
            <div className="font-bold  text-xl cursor-pointer opacity-90 hover:opacity-100">
              <span>neoGpool</span>
            </div>
          </Link>
        </div>

        <div className="flex text-2xl flex-row-reverse mr-4 ml-4 md:hidden">
          <GiHamburgerMenu />
        </div>
        <div className="flex flex-row mr-8 hidden md:flex">
          <div
            title="Explore"
            className="text-yellow-300 text-3xl hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
          >
            <Link to="/">
              <HiLightBulb />
            </Link>
          </div>
          <div
            title="Explore"
            className="text-white text-3xl hover:text-white text-2xl text-center px-2 py-2 m-2  cursor-pointer"
          >
            <Link to="/">
              <HiOutlineLightBulb />
            </Link>
          </div>

          <div
            title="History"
            className="text-gray-300 hover:text-white text-2xl text-center pl-12 mr-4 py-2 m-2  cursor-pointer"
          >
            <Link to="/login">
              <FaUserCircle />
            </Link>
          </div>
          <div
            title="History"
            className="text-gray-300 hover:text-white text-2xl text-center pl-12 mr-4 py-2 m-2  cursor-pointer"
          >
            <HiOutlineLogout />
          </div>
        </div>
      </nav>
    </>
  );
};
