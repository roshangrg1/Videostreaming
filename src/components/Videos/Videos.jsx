import React from 'react'

import './Videos.css'
import VideoCard from '../VideoCard/VideoCard'
import ChannelCard from '../ChannelCard/ChannelCard'

const Videos = ({ videos, justifyContent }) => {
  if (!videos.length) return 'loading'
  console.log(videos)
  return (
    <div className='videos-container'style={{justifyContent}} >
      {videos.map((item , idx)=>(
        <div key={idx} >
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </div>
      ))}
    </div>
  )
}

export default Videos 