import React, { useEffect, useState } from 'react'
import './VideoDetails.css'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import Videos from '../Videos/Videos'
import { fetchFromApi } from '../../utils/api'

import { AiFillCheckCircle, AiFillEye, AiFillLike } from 'react-icons/ai'



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
      <div className="upper" style={{ position: 'sticky', top: '8vh' }}>
        <div className="upper-content" >

          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='auto' />
          <h5 className='video-title'>{VideoDetail?.snippet?.title}</h5>
          <Link to={`/channel/${VideoDetail?.snippet?.channelId}`}>
            <div className="channel-title">
              <h6 >{VideoDetail?.snippet?.channelTitle}</h6>
              <AiFillCheckCircle style={{ color: 'rgb(53, 53, 188)' }} />
            </div>
          </Link>
          <div className="view">
            <p >{VideoDetail?.statistics?.viewCount}</p>
            <AiFillEye style={{ color: 'rgb(53, 53, 188)' }} />
          </div>
          <div className="like">
            <p >{VideoDetail?.statistics?.likeCount} </p>
            <AiFillLike style={{ color: 'rgb(53, 53, 188)' }} />
          </div>


          <div>

          </div>
        </div>
      </div>
      <div className='lower'>
        <Videos videos={videos} justifyContent='center' />
      </div>
    </div>
  )
}

export default VideoDetails