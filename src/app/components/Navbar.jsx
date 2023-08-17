import React from "react";
import { MdLocationOn, MdOutlineEmojiFlags, MdSearch, MdShoppingCart } from "react-icons/md";
import SelectMenu from "./SelectMenu";
const Navbar = () => {
  return (
    <nav className="flex bg-[#131921] justify-between text-white p-1">
      <div className="flex justify-center items-center">
        <div className=" hover:cursor-pointer text-xl m-2">AmZone</div>
        <div className="flex items-center m-2 hover:cursor-pointer">
          <MdLocationOn className="text-3xl" />
          <div>
            <div className="text-xs">Hello</div>
            <div>Enter Your Location</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <SelectMenu className="h-full"/>
        <input type="text" className="outline-none w-full h-8 text-black pl-2" placeholder="Search Here..."/>
        <button className="bg-orange-400 rounded-r text-2xl w-8 h-8 p-1"><MdSearch/></button>
      </div>
      <div className="flex justify-center items-center">
        <div className="m-2 hover:cursor-pointer flex justify-center items-center"><div className="text-2xl"><MdOutlineEmojiFlags/></div><div>En</div></div>
        <div className="m-2 hover:cursor-pointer"><div className="text-xs">Hello Singin</div><div className="font-semibold">Account & List </div></div>
        <div className="m-2 hover:cursor-pointer"><div className="text-xs">Returns</div><div className="font-semibold">& Orders</div></div>
        <div className="flex justify-center items-center m-2 hover:cursor-pointer">
          <span>
            <MdShoppingCart className="text-4xl" />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
