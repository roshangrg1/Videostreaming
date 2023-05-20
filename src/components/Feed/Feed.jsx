import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Feed.css'
import Videos from '../Videos/Videos'

import { fetchFromApi } from '../../utils/api'
const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${ selectedCategory }`)
    .then((data)=>{
      setVideos(data.items)
    })
  }, [selectedCategory])
  return (
    <div className='feed-container'>
      <div className="left">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        <p className='copyright'>copyright @roshan Guragain</p>
      </div>
      <div className="right">
        <h4>{selectedCategory}<span style={{ color: '#3535BC' }}>Videos</span></h4>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Feed