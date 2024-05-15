import React from 'react'
import NavBarItems from './NavBarItems'

export default function NavBar() {
  return (
    <div className='flex gap-4 p-2 justify-center dark:bg-amber-400 bg-amber-100'>
      <NavBarItems title="Trending" param="fetchTrending"/>

      <NavBarItems title="TopRated" param="fetchTopRated"/>    
    </div>
  )
}
