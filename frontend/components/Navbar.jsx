import Image from "next/image";
import React from "react";
import { PlusIcon, TrendingUpIcon, SearchIcon } from "@heroicons/react/outline";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="relative w-screen flex flex-wrap items-center justify-center py-3 px-28 bg-[#232226]">
        <div className="flex justify-between items-center w-full container p-0">
          <div className="text-2xl font-medium h-full p-1 w-48 cursor-pointer">
            <span className="text-skin-base">Code</span>
            <span className="text-skin-inverted">Verse</span>
          </div>

          <div className="flex justify-center border-none bg-skin-color7 w-auto rounded-full p-1">
            <div className="content-center grid text-skin-base bg-skin-color7 ml-3 p-2">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for posts, people or topics ..."
              className=" mx-3 w-96  text-skin-base bg-skin-color7 border-none outline-none"
            />
          </div>

          <div className="flex justify-end items-center w-48 space-x-8">
            <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
              <PlusIcon className="h-5" />
            </button>
            <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
              <TrendingUpIcon className="h-5" />
            </button>
            <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
              <Image
                src="/dummyProfileImg.jpg"
                alt="profile image"
                width={180}
                height={180}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
