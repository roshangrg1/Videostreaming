import React, { useEffect, useState } from 'react'
import './VideoDetails.css'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import Videos from '../Videos/Videos'
import { fetchFromApi } from '../../utils/api'

import { AiFillCheckCircle } from 'react-icons/ai'



const VideoDetails = () => {
  const [VideoDetail, setVideoDetail] = useState([])

  const [videos, setVideos] = useState([])
  const { id } = useParams()
  console.log(VideoDetail)
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id])

  if (!VideoDetail?.snippet) {
    return 'Loading'
  }
  return (
    <div className='video-details-container'>
      <div className="">
        <div className="" style={{ width: '100%', position: 'sticky', top: '100px',  }}>

          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
          <h5>{VideoDetail?.snippet?.title}</h5>
          <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
            <h6 style={{ color: '#fff' }}>{VideoDetail?.snippet?.channelTitle} <AiFillCheckCircle /></h6>
          </Link>
          <h5>{VideoDetail?.statistics?.viewCount} views</h5>
          <h5 style={{ color: '#fff' }}>{VideoDetail?.statistics?.likeCount} likes</h5>
          <div>

          </div>
        </div>
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default VideoDetails