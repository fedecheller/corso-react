import { useState } from 'react'
import './NavBar.css'
import './Link'
import Link from './Link'

function NavBar() {
  const title = 'Navigation Title';

  return (
    <>
      <div className='bg-red-500 rounded-lg w-96 rotate-6'>
        {title}
       
        <ul>
            <Link code="1" desc="2" isVisited={true}>AAA</Link>
            <Link code="4" desc="3" isVisited={false}>BBB😊</Link>
        </ul>
      </div>
      
    </>
  )
}

export default NavBar