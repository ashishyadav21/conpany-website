"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

const Navbar = () => {
    const route = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full fixed flex flex-col justify-center bg-black border-b-2 border-baseBorderLight z-50">
            <div className="flex items-center justify-between h-14 px-4 lg:px-24">
                <div className="flex items-center">
                    <div className="text-white text-lg font-bold">
                        My Company Logo
                    </div>
                </div>

                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="hidden lg:flex flex-row">
                    <Link href="/">
                        <div className={`text-sm p-2 text-gray-500 hover:text-yellow-500 ${route === "/" ? "border-b-2 border-yellow-500" : ""}`}>Home</div>
                    </Link>
                    <Link href="/technology">
                        <div className={classNames("text-sm p-2 text-gray-500 hover:text-yellow-500", route === "/technology" ? "border-b-2 border-yellow-500" : "")}>Technology</div>
                    </Link>
                    <Link href="/services">
                        <div className={classNames("text-sm p-2 text-gray-500 hover:text-yellow-500", route === "/services" ? "border-b-2 border-yellow-500" : "")}>Services</div>
                    </Link>
                    <Link href="/contact-us">
                        <div className={classNames("text-sm p-2 text-gray-500 hover:text-yellow-500", route === "/contact-us" ? "border-b-2 border-yellow-500" : "")}>Contact us</div>
                    </Link>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden flex flex-col items-start bg-black text-gray-500 w-full">
                    <Link href="/">
                        <div onClick={toggleMenu} className={`text-sm p-2 w-full text-left hover:bg-gray-800 hover:text-yellow-500 ${route === "/" ? "border-b-2 border-yellow-500" : ""}`}>Home</div>
                    </Link>
                    <Link href="/technology">
                        <div onClick={toggleMenu} className={classNames("text-sm p-2 w-full text-left hover:bg-gray-800 hover:text-yellow-500", route === "/technology" ? "border-b-2 border-yellow-500" : "")}>Technology</div>
                    </Link>
                    <Link href="/services">
                        <div onClick={toggleMenu} className={classNames("text-sm p-2 w-full text-left hover:bg-gray-800 hover:text-yellow-500", route === "/services" ? "border-b-2 border-yellow-500" : "")}>Services</div>
                    </Link>
                    <Link href="/contact-us">
                        <div onClick={toggleMenu} className={classNames("text-sm p-2 w-full text-left hover:bg-gray-800 hover:text-yellow-500", route === "/contact-us" ? "border-b-2 border-yellow-500" : "")}>Contact us</div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
