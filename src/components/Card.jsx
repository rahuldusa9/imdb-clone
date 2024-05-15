
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
export default function Card({result}) {
  return (
    <div className='group sm:m-2 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200'>
      <Link href={`/movies/${result.id}`}>
      <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path||result.poster_path}`} width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"></Image>
      <div className='p-2'>
        <p className='line-clamp-2 text-md' >{result.overview}</p>
        <h1 className='font-bold truncate'>{result.original_name||result.original_title}</h1>
        <div className='flex gap-2'>
        <p>{result.release_date||result.first_air_date}</p>
        <FiThumbsUp className="h-5 ml-4 mt-0.5"/>
        <p >{result.vote_count}</p>
        </div>
      </div>
      </Link>

    </div>
  )
}
