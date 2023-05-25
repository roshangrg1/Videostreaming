import React, { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import { useParams } from 'react-router-dom'

import { fetchFromApi } from '../../utils/api'


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])
  return (
    <div className="search-feed">

      <Videos videos={videos} justifyContent='center' />
    </div>
  )
}

export default SearchFeed