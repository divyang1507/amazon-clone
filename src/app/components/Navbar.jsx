import React from "react";
import { MdLocationOn, MdOutlineEmojiFlags, MdOutlineMenu, MdSearch, MdShoppingCart } from "react-icons/md";
import SelectMenu from "./SelectMenu";
const Navbar = () => {
  return (
    <>
    <nav>
    <div id="nav-1" className="flex bg-[#131921] justify-between text-white">
      <div id="nav1-Left" className="flex justify-center items-center">
        <div className=" hover:cursor-pointer hover:outline outline-2 outline-white text-xl p-2">AmZone</div>
        <div className="flex items-center p-2 hover:cursor-pointer hover:outline outline-2 outline-white">
          <MdLocationOn className="text-3xl" />
          <div>
            <div className="text-xs">Hello</div>
            <div>Enter Your Location</div>
          </div>
        </div>
      </div>
      <div id="nav1-search" className="flex justify-center items-center ">
        <SelectMenu className="h-full"/>
        <input type="text" className="outline-none w-full h-8 text-black pl-2" placeholder="Search Here..."/>
        <button className="bg-orange-400 rounded-r text-2xl w-8 h-8 p-1"><MdSearch/></button>
      </div>
      <div id="nav1-right" className="flex justify-center items-center">
        <div className="p-2 hover:outline outline-2 outline-white hover:cursor-pointer flex justify-center items-center"><div className="text-2xl"><MdOutlineEmojiFlags/></div><div>En</div></div>
        <div className="p-2 hover:outline outline-2 outline-white hover:cursor-pointer"><div className="text-xs">Hello Singin</div><div className="font-semibold">Account & List </div></div>
        <div className="p-2 hover:outline outline-2 outline-white hover:cursor-pointer"><div className="text-xs">Returns</div><div className="font-semibold">& Orders</div></div>
        <div className="flex justify-center items-center hover:outline outline-2 outline-white p-2 hover:cursor-pointer">
          <span>
            <MdShoppingCart className="text-4xl" />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </div>
    <div id="nav-2" className="flex bg-[#232f3e] justify-between text-white font-light text-sm">
     <div className="flex"> <div className="flex justify-center items-center hover:cursor-pointer hover:outline outline-2 p-1 outline-orange-400"><MdOutlineMenu/>All</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Amazon miniTV</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Sell</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Best Seller</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Today Deals</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Mobiles</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Electronics</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">New Release</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Prime</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Home & Kitchen</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Fashion</div>
      <div className="hover:cursor-pointer hover:outline outline-2 p-1 outline-white">Customer Services</div>
      </div>
    <div className="hover:outline outline-2 p-1 outline-white hover:cursor-pointer">New Launches from Mobiles Electronics & More | Shop now</div>
    </div>
    </nav>
    </> );
};

export default Navbar;
