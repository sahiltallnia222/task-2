import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    <div className='con'>
      <div>

      </div>
      <div className='links'>
        <div><Link to='/' className='link'>Home</Link></div>
        <div className='account'>
        <Link to='/register' className='link'>Sign up</Link>
        <Link to='/login' className='link'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar