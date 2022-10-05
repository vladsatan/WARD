import React from 'react'
import "./Header.scss"

export default function Header() {
  return (
    <header>
        <div className='header-container'>
                <a href='#'>ABOUT US</a>
                <a href='#services'>Our Services</a>
                <a href='#techStack'>Tech Stack</a>
                <a href='#strategy'>Strategy</a>
        </div>
    </header>
  )
}
