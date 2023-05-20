import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'

import './VideoCard.css'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippetLink
  return (
    <div className='video-card-container'>
      <Link to={videoId ? `/video/${videoId}` : "notfound"} >
        <img src={snippet?.thumbnails?.high?.url} alt="" style={{ height: '180px', width: '300px' }} />
      </Link>
      <div className="video-content" >
        <Link to={videoId ? `/video/${videoId}` : "notfound"} style={{marginBottom:'20px'}} >
          <h5>{snippet?.title.slice(0, 60) || 'demo failed to load'}</h5>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "notfound"}  style={{marginBottom:'20px'}} >
          <p>{snippet?.channelTitle || 'demo failed to load'}
            <AiFillCheckCircle /></p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard