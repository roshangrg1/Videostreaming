import React from 'react'

import './Videos.css'
import VideoCard from '../VideoCard/VideoCard'
import ChannelCard from '../ChannelCard/ChannelCard'

const Videos = ({ videos }) => {
  console.log(videos)
  return (
    <div className='videos-container'>
      {videos.map((item , idx)=>(
        <div key={idx} >
          {item.id.videoId && <VideoCard video={item}/>}
          {/* {item.snippet.channelId && <ChannelCard channelDetail={item}/>} */}
        </div>
      ))}
    </div>
  )
}

export default Videos 