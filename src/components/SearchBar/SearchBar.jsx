import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

import './SearchBar.css'

const SearchBar = () => {
  return (
    <form className ="searchbar-container" onSubmit={()=> {}}>
        <input className='search-input' type="text" placeholder='Search'/>
        <button className='submit-button'><BsSearch/></button>
        
    </form>
  )
}

export default SearchBar