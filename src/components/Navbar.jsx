import React, { useState } from "react";
import { IoFastFoodOutline, IoCartOutline } from "react-icons/io5";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsWallet, BsSave } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar max-w-[1640] mx-auto flex justify-between items-center p-4">
      <div className="logo flex items-center cursor-pointer">
        <div
          onClick={() => setNav(!nav)}
          className=" logo flex justify-between cursor-pointer"
        >
          <AiOutlineMenu size={30} className="menu m-1" />
          <IoFastFoodOutline size={30} />
          <h1 className="name text-2xl sm:text-3xl lg:text-4xl px-3 font-bold">
            Take Eats
          </h1>
        </div>
        <div className="delivery-pickup hidden lg:flex items-center bg-gray-200 p-1 text-[14px] rounded-full">
          <p className="delivery bg-indigo-900 text-white p-2 rounded-full">
            Delivery
          </p>
          <p className="pickup p-2 rounded-full">Pick Up</p>
        </div>
      </div>

      {/* Search Bar */}

      <div className="Searchbar bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="search-input p-2 w-full focus:outline-none bg-transparent"
          type="text"
          placeholder="Search Favorite !"
        />
      </div>

      {/** Item cart */}
      <button className="btn-cart bg-indigo-900 border-none text-white hidden md:flex items-center py-2 rounded-full">
        <IoCartOutline size={20} className="mr-2" />
        Cart
      </button>

      {/* Responsive mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/*side bar */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">Take Eats</h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <IoCartOutline size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <AiOutlineHeart size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <BsWallet size={25} className="mr-4" />
              Wallte
            </li>
            <li className="text-xl py-4 flex">
              <BsSave size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <IoCartOutline size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <AiOutlineUserAdd size={25} className="mr-4" />
              Invites
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineHelpOutline size={25} className="mr-4" />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
