"use client";

import { cn } from "@/lib/util";
import style from "./Navbar.module.css";
import { useState } from "react";
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

export default function Navbar() {
    // useState is used to change state, begins false so only opens upon click
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            {/* Main Navbar container */}
            <nav className="fixed w-full z-10 bg-slate-800">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        {/* First block outer part */}
                        <div className="flex items items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-xl cursor-pointer">
                                    <span className="text-rose-700">Wine</span>App
                                </h1>
                            </div>
                            {/* Hide navbar links on small screens */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link 
                                    activeClass="Cart" 
                                    to="cart" 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className="cursor-pointer text-rose-700 font-semibold px-3 py-2 text-md">
                                        Cart
                                    </Link>
                                    <Link 
                                    activeClass="Browse" 
                                    to="browse" 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className="cursor-pointer hover:bg-rose-700 text-white hover:text-black px-3 py-2 rounded-md text-sm fond-medium">
                                        Browse
                                    </Link>
                                    <Link 
                                    activeClass="Submit" 
                                    to="submit" 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className="cursor-pointer hover:bg-rose-700 text-white hover:text-black px-3 py-2 rounded-md text-sm fond-medium">
                                        Submit
                                    </Link>
                                    <Link 
                                    activeClass="Exit" 
                                    to="exit" 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className="cursor-pointer bg-rose-900 text-white hover:bg-rose-700 px-3 py-2 rounded-md text-sm fond-medium">
                                        Exit
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Responsive mobile */}
                        <div className="mr-10 flex md:hidden">
                            {/* Set prop of what happens on click on mobile */}
                            <button 
                            onClick={() =>setIsOpen(!isOpen)} 
                            type="button" 
                            className="bg-rose-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-rose-900 focus: outline-none focus:ring-off-2 focus:ring-offset-rose-900 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ):(
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M6 18L18 6M6 6l12 12" // cross shape
                                             />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Include transition from headlessui for smooth mobile experience */}
                <Transition 
                    show={isOpen} 
                    enter="transition ease-out duration-100 transform" 
                    enterFrom="opacity-0 scale-95" 
                    enterTo="opacity-100 scale-100" 
                    leave="transition ease-in duration-75 transform" 
                    leaveFrom="opacity-100 scale-100" 
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        // handle mobile menu tabs
                        <div className="md:hidden id=mobile-menu">
                            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link 
                                    href="/cart"
                                    activeClass="cart"
                                    to="cart"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-rose-900 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                        Cart
                                </Link>
                                <Link 
                                    href="/browse"
                                    activeClass="browse"
                                    to="browse"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-rose-900 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                        Browse
                                </Link>
                                <Link 
                                    href="/submit"
                                    activeClass="submit"
                                    to="submit"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-rose-900 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                        Submit
                                </Link>
                                <Link 
                                    href="/exit"
                                    activeClass="exit"
                                    to="exit"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-rose-900 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                        Exit
                                </Link>
                            </div>
                        </div>
                        )
                        }
                </Transition>
            </nav>
        </div>
    )
}