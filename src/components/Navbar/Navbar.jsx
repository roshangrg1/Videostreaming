import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
const Navbar = () => (

  <div className="navbar-container">
    <a href="/" className='logo-link'>
      <li className='logo'>StreamMe</li>
    </a>
    <SearchBar/>
  </div>
)
 


export default Navbar