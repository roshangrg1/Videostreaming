import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed-container'>
      <div className="left">
        <Sidebar/>
        <p className='copyright'>copyright @roshan Guragain</p>
      </div>
      <div className="right">
        video container
      </div>
    </div>
  )
}

export default Feed