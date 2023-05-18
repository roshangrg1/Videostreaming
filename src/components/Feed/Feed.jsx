import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Feed.css'
import Videos from '../Videos/Videos'

const Feed = () => {
  return (
    <div className='feed-container'>
      <div className="left">
        <Sidebar/>
        <p className='copyright'>copyright @roshan Guragain</p>
      </div>
      <div className="right">
        <h4>Crypto<span style={{color:'#3535BC'}}>Videos</span></h4>
        <Videos/>
      </div>
    </div>
  )
}

export default Feed