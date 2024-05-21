import Results from '@/components/Results';
import React from 'react'

export default async function page({params}) {
    const name=params.name;
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${name}`);
    const data=await res.json();
    const results=data.results;

  return (
    <div>
      {results&&results.length===0?(
        <h1 className='text-center pt-10'>no results found</h1>
      ):(
      
        results && <Results results={results}/>
    )}
    </div>
  )
}
