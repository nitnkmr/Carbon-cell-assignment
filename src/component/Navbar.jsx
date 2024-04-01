import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="title">
          <div className="greeting">Hello,<span> Brooklyn Simmons</span></div>
          <div className="welcome">Welcome to <span>Spot trading !</span></div>
        </div>
        <div className="profile"><button>Start Trading !</button></div>
    </div>
  )
}

export default Navbar