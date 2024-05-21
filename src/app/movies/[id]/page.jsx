import React from 'react'
import { IoStar } from "react-icons/io5";
import Image from 'next/image';

export default async function page({params}) {
    const API_KEY = process.env.API_KEY;
   const movieId=params.id;

   const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.
    API_KEY}`
    );
      const movie=await res.json();
  return (

    <div className='flex flex-col items-center px-10 py-5 gap-3'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path||movie.poster_path}`}
       width={400}
        height={250}
         className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300">
         </Image>
         <p className='font-bold  text-amber-400'>{movie.original_name||movie.original_title}</p>
         <p className='text-xs '>{movie.overview}</p>
         
         <p className='flex gap-1'>Rating={movie.vote_average}  <IoStar className='my-1 text-amber-500'/></p>
       
    </div>
  )
}
