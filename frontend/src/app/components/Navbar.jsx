"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { MdOutlineLocationOn, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
const Navbar = () => {
  const { user } = useContext(UserContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <nav className="flex justify-between items-center mx-auto py-4 px-8 text-darkest z-50 relative">
      <div className="flex items-center gap-8 z-50 relative">
        <Link href={"/"}>
          <div className="text-3xl">Amazon-clone</div>
        </Link>
        <div
          className="
         p-1 h-full  rounded-sm">
          {user ? (
            <div>
              <div className="text-sm">{`Deliver to, ${user.username}`}</div>{" "}
              <div className="text-base leading-none font-medium">
                lorem 333333
              </div>
            </div>
          ) : (
            <div className="flex items-center hover:text-primary">
              <div className="text-3xl">
                <MdOutlineLocationOn />
              </div>
              <div>
                <div className="text-sm">Delivery to </div>{" "}
                <div className="text-base leading-none font-medium">
                  location
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center w-[40%]  h-full rounded-lg  z-50 gap-4 ">
        <button
          className="text-primary hover:bg-primary-2 hover:border-primary-2 hover:text-lightest text-nowrap border-primary border rounded-lg h-full px-4 py-4 group z-50"
          onMouseEnter={() => setIsMenuVisible(true)}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          onMouseLeave={() => setIsMenuVisible(false)}
        >
          All Category
        </button>

        <div className="flex items-center w-full   relative h-full overflow-hidden border rounded-lg  border-dark">
          <input
            placeholder="search"
            className="w-full h-full p-4 px-4 border-0 outline outline-primary"
          />{" "}
          <button className="text-neutral-500 p-4 pr-0 absolute right-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8 z-50">
        <Link href={"/page/dashboard"}
          className="text-base leading-none font-medium 
         p-1 h-full  rounded-sm">
          EN
        </Link>
        <div
          className="
         p-1 h-full  rounded-sm hover:text-primary">
          {user ? (
            <div>
              <div className="text-sm">{`Hi, ${user.username}`}</div>{" "}
              <div className="text-base leading-none font-medium">
                Account & Lists
              </div>
            </div>
          ) : (
            <Link
              className="text-base leading-none flex items-center gap-2"
              href={"/page/signup"}>
              <div className="text-3xl">
                <FaRegUserCircle />
              </div>
              <div>
                <div className="text-sm"> Account </div>{" "}
                <div className="text-base leading-none font-medium">
                  Sign up / login
                </div>
              </div>
            </Link>
          )}
        </div>
        <div
          className="flex items-center text-3xl 
         p-1 h-full  rounded-sm">
          <MdOutlineShoppingCart />
        </div>
      </div>
      <div
        className={`w-screen absolute h-screen bg-mid left-0 top-0 z-0 ${
          isMenuVisible ? "static" : "hidden"
        }`}>
        hello menu
      </div>
    </nav>
  );
};

export default Navbar;
