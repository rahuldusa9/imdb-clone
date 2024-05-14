"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
export default function NavBarItems({title,param}) {
    const searchParams=useSearchParams();
    const genre=searchParams.get('genre');
  return (
    <div>
      <Link className={`hover:text-amber-500 active:text-amber-800 font-semibold ${genre==param?"underline underline-offset-8 decoration-amber-300 rounded-lg":""}`} href={`/?genre=${param}` }>{title}</Link>
    </div>
  )
}
