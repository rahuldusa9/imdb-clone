"use client";
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdLightMode,MdDarkMode} from "react-icons/md";
export default function DarkModeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme();
    const [mounted,setMounted]=useState(false);
    const currentTheme=theme=="system"?systemTheme:theme;
    useEffect(()=>{setMounted(true)},[])
  return (
    <div>
        {
            mounted&&(currentTheme=="dark"
            ?
            (
                <MdLightMode onClick={()=>setTheme("light")} 
                className='cursor-pointer text-amber-500 hover:text-white'
                />
            ):(
                <MdDarkMode onClick={()=>setTheme("dark")}
                className='cursor-pointer text-amber-500  hover:text-black'
                
                />)
            )
        }
        
        
      
    </div>
  )
}
