'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function SearchBox() {
    const [search, setSearch] = useState("")
    const router=useRouter();
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        router.push(`/search/${search}`);
    };
  return (
   <form className="flex justify-between px-4 max-w-6xl mx-auto"  onSubmit={handleSubmit}>
    <input type="text" placeholder='search for movies...' className='w-full h-14 placeholder-amber-400 rounded-md outline-none bg-transparent flex-1' 
    
    value={search}
    onChange={(e)=>setSearch(e.target.value)}

    />
    <button 
    disabled={search==""}
    className='disabled:text-gray-700 text-amber-600'>Search</button>
   </form>
  )
}
 