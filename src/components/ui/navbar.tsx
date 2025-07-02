'use client'
import { poppins, poppinsSB } from "@/fonts/font"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
    <nav className="relative z-40">
      <div className="fixed top-0 right-0 left-0">
        <div className={`${poppins.className} flex justify-between px-10 border border-b-[#2D2D2D] border-2 py-4 bg-[#030F0F] rounded-b-xl shadow-lg/10`}>
          <Link href="/#top" className={`${poppinsSB.className} sm:text-[15px] text-[14px] md:text-[16px] lg:text-[18px] text-white lg:mt-[2px] md:mt-[4px] sm:mt-[4px] mt-[4px]`}>
            EZee-WEB
          </Link>
          <div className="flex justify-between lg:w-120 sm:mt-1 sm:w-80 w-45 text-white lg:flex md:flex hidden">
            <Link href="/#home" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">
              Home
            </Link>
            <Link href="/#about" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">
              About
            </Link>
            <Link href="/#product" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">
              Product
            </Link>
            <Link href="/#contact" className="transition ease-in-out duration-200 hover:scale-110 sm:text-[13px] text-[11px] md:text-[16px] lg:text-[16px]">
              Contact
            </Link>
          </div>
          <Menu size={24} onClick={handleClick} className="mt-[2px] flex lg:hidden md:hidden" color="#E8F7F6" />
        </div>

        <div className="relative z-50">
          <div
            className={`
              fixed top-0 left-0 w-full bg-[#030F0F] border border-b-[#2D2D2D] text-[#030F0F] px-10 py-5 rounded-b-lg
              ${poppins.className} text-[16px] shadow-xl/20
              transform transition-all duration-300 ease-in-out
              ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
            `}
          >
            <div className="flex justify-between mb-2 text-white">
              <Link href="/#top">Home</Link>
              <X onClick={handleClick} size={24} color="#E8F7F6" />
            </div>
            <div className="mb-2 text-white">
              <Link href="/#about">About</Link>
            </div>
            <div className="mb-2 text-white">
              <Link href="/#product">Product</Link>
            </div>
            <div className="mb-2 text-white">
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}