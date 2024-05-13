import Link from 'next/link'
import React from 'react'

export default function MenuItems({title,address,Icon}) {
  return (
   
   <Link className=' text-amber-500 hover:text-gray-800' href={address}>
    <Icon className="text-2xl sm:hidden"/>
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
   </Link>
  
  )
}
