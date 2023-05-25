import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../../utils/api';
import ChannelCard from '../ChannelCard/ChannelCard';
import Videos from '../Videos/Videos';

const ChannelDetails = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])
  return (
    <div className='channel-details-container'>
      <div className="upper-details">
        <div className="cover" style={{ height: '300px', background: '#F0DEDE' }}></div>
        <ChannelCard channelDetail={channelDetail} marginTop={'-50px'} />
      </div>
        <div className='videocontainer' >
          <Videos videos={videos} justifyContent='center'/>
        </div>
    </div>

  )
}

export default ChannelDetails