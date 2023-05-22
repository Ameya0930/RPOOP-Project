import React from 'react'

export default function Navbar() {
  return (
    <nav className='nav'>
      <a href='/'className='site-title'>Recommendation System </a>
      <ul>
        <li className='active'>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/Contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

