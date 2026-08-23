import React from 'react'
import { BiSolidBusiness } from 'react-icons/bi'

const Logo = () => {
  return (

      <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#b69974] rounded-full flex items-center justify-center">
            <BiSolidBusiness className="text-white w-6 h-6" />
            <span className="text-black font-bold">C</span>
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-[#b5b68c] font-bold">Corporate</h1>
        </div>
  )
}

export default Logo
