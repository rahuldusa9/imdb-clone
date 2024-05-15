"use client"
import React from 'react'
import { useEffect } from 'react';

export default function error({error,reset}) {
    useEffect(() => {
        console.log(error);
   
       }, [error])
       
  return (
    <div className='text-center mt-9'> 
      <h1>Something went wrong</h1>
      <p>If it is from our side we will resolve it soon</p>
      <p>if its from your side click bottom</p>
      <button onClick={()=>reset()} className='hover:text-amber-500'>reset</button>
    </div>
  )
}
