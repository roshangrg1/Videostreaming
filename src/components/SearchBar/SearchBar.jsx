import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault(); // prevents from reloading

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('')
    }
  }
  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input className='search-input' type="text" placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      <button className='submit-button'><BsSearch /></button>

    </form>
  )
}

export default SearchBar