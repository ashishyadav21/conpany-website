"use client";

import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import classNames from 'classnames';


const Navbar = () => {
    const route = usePathname();

    console.log("route ---->", route)

    return (
        <div className='flex h-14 w-full fixed flex-col justify-center pl-[21px] pr-24 border-b-2 border-baseBorderLight bg-black'>
            <div className='flex flex-row justify-between'>
                <div className='flex items-center flex-row'>
                    <div className='ml-[20px] mr-[20px] flex flex-row items-center justify-center'>
                        My Company Logo
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <Link href="/">
                        <div className={`text-sm p-2 justify-center text-gray-500 ${route === '/' ? 'border-b-2 border-yellow-500' : ''}`}>Home</div>
                    </Link>
                    <Link href="/technology">
                        <div className={classNames('text-sm p-2 justify-center text-gray-500', route === '/technology' ? 'border-b-2 border-yellow-500' : '')}>Technology</div>
                    </Link>
                    <Link href="/services">
                        <div className={classNames('text-sm p-2 justify-center text-gray-500', route === '/services' ? 'border-b-2 border-yellow-500' : '')}>Services</div>
                    </Link>
                    <Link href="/contact-us">
                        <div className={classNames('text-sm p-2 justify-center text-gray-500', route === '/contact-us' ? 'border-b-2 border-yellow-500' : '')}>Contact us</div>
                    </Link>
                </div>

            </div >
        </div >
    )
}

export default Navbar
