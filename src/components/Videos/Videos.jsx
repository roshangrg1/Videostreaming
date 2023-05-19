import React from 'react'

import VideoCard from '../VideoCard/VideoCard'
import ChannelCard from '../ChannelCard/ChannelCard'

const Videos = ({ videos }) => {
  console.log(videos)
  return (
    <div >
      {videos.map((item , idx)=>(
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {/* {item.snippet.channelId && <ChannelCard channelDetail={item}/>} */}
        </div>
      ))}
    </div>
  )
}

export default Videos 