import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="container nav_content">
        <div className="nav_logo">
          <h4>my-<span className='logo_span'>Cloth</span></h4>
        </div>
        <div className="nav_links">
          <a href="#home">Home</a>
          <a href="/">Colection</a>
          <a href="/">Contact</a>
        </div>
        <div className="nav_login">
          <a href="/" className='signUp'>SIGNUP</a>
          <a href="/" className='logIn'>LOGIN</a>
        </div>
      </div>
    </div>
  )
}

export default Nav