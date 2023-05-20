import React from 'react'
import { Link } from 'react-router-dom'
import './ChannelCard.css'
import { AiFillCheckCircle } from 'react-icons/ai'
const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <div className="channel-card" style={{marginTop}} >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="card-content">
          <div className="img-container">
          <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt="" />
          </div>
          
          <h5>{channelDetail?.snippet?.title} <AiFillCheckCircle/></h5>
          {channelDetail?.statistics?.subscriberCount && (
            <p style={{color:'#fff'}}>{channelDetail?.statistics?.subscriberCount } subscriber</p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard