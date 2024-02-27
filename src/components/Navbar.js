import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav'>
        <div className='nav-div'>
                <div>
                    <Link to="/" className="no-link"><p>Chitra</p></Link>
            </div>
        </div>
    </div>
    </div>
  )
}
