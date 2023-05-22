import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'

import './VideoCard.css'

 const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
const demoVideoUrl = '/video/GDa8kZLNhJ4';



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippetLink
  return (
    <div className='video-card-container'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
        <img src={snippet?.thumbnails?.high?.url} alt=""  />
      </Link>
      <div className="video-content" >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}  >
          <h5>{snippet?.title.slice(0, 60) || 'demo failed to load'}</h5>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <p>{snippet?.channelTitle || 'demo failed to load'}
            <AiFillCheckCircle /></p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard