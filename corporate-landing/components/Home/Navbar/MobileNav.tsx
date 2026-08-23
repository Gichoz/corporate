
import { NAVLINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showMobileNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showMobileNav, closeNav }: Props) => {
   const navOpenStyle = showMobileNav ? 'translate-x-0' : '-translate-x-full';
  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen lg:hidden ${navOpenStyle}`}></div>

      {/* Mobile Navigation Menu */}
      <div className={`text-white fixed top-0 left-0 justify-center flex flex-col h-full w-[80%] sm:w-[60%] space-y-6 bg-[#9f7c4e] z-1050 lg:hidden transition-transform duration-500 ${navOpenStyle}`}>
        {NAVLINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[25px] ml-12 border-b-[1.5px] pb-1 border-white hover:text-[#dfc39f] transition-all duration-200">
              {link.lable}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose 
          className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer hover:text-[#dfc39f] transition-all duration-200" 
          onClick={closeNav} 
        />
      </div>
    </>
  )
}

export default MobileNav