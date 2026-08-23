import React from "react";
import Link from "next/link";
import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />

        {/* Right Navigation Group (Links + Button combined) */}
        <div className="hidden lg:flex items-center">
          {/* Navigation Links */}
          <div className="flex bg-white h-[10vh] px-8 items-center space-x-8 shrink-0">
            {NAVLINKS.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200 whitespace-nowrap"
              >
                {link.lable}
              </Link>
            ))}
          </div>

          {/* Button attached to links */}
          <button className="h-[10vh] px-8 bg-[#b69974] cursor-pointer text-white font-bold hover:bg-[#9f7c4e] transition-all duration-200 whitespace-nowrap shrink-0">
            Create Account
          </button>
        </div>
        {/* Hamburger menu for mobile view */}
        <div onClick={openNav} className="lg:hidden">
         <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;