import Link from "next/link";
import React from "react";

const BottomNavbarLink = ({ icon: Icon, link, active }) => {
  return (
    <li className="h-full flex justify-center items-center list-none relative">
      <Link href={link || "#"}>
        <a
          className={`cursor-pointer transition-opacity duration-100 ease-linear
        ${active ? "opacity-100" : "opacity-40"}`}
        >
          <Icon className="h-6" />
        </a>
      </Link>

      {active && (
        <div className="absolute left-0 top-0 w-full flex justify-center">
          <div className="w-[45px] h-[5px] rounded-[5px] bg-skin-secondary transition-all duration-[400ms] ease-linear z-10"></div>
          <div className="absolute left-0 top-[5px] w-[100%] h-[80px] light-ray"></div>
        </div>
      )}
    </li>
  );
};

export default BottomNavbarLink;
