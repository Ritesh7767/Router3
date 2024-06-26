import React from 'react'
import { Link } from 'react-router-dom'
import './Navlayout.css'

const Navlayout = () => {
  return (
    <div className='navContainer'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navlayout