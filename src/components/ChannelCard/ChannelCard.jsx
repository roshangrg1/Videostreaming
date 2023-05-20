import React from 'react'
import { Link } from 'react-router-dom'
import './ChannelCard.css'
import { AiFillCheckCircle } from 'react-icons/ai'
const ChannelCard = ({channelDetail}) => {
  return (
    <div className="channel-card" >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} className='channel-card-item'>
        <div className="card-content">
          <div className="img-container">
          <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt="" />
          </div>
          
          <h5>{channelDetail?.snippet?.title} <AiFillCheckCircle/></h5>
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard