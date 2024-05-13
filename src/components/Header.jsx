import React from 'react'

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

import MenuItems from './MenuItems';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="left flex gap-6 ">
        <MenuItems title="home" address="/" Icon={AiFillHome}/>
        <MenuItems title="about" address="/" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="right"></div>
        <Link href={"/"} className='flex gap-1 items-center '>
    <span className='text-2xl px-1 py-1 rounded-lg bg-amber-500'>IMDb</span>
    <span className='text-xl hidden sm:inline '>clone</span>
   </Link>
    </div>
  )
}
