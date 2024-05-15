import React from 'react'
import Card from './Card'
export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 px-2'>
      {
        results.map((result)=>(
           <Card result={result}/>
        ))
      }
    </div>
  )
}
