import React, { useEffect, useState } from 'react';
import './ChannelVideo.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getVideo } from './youtube';
import millify from 'millify';

function ChannelVideo({ title, channelName, image, videoId, publishedAt }){
    const [views, setViews] = useState(0);

    useEffect(()=>{
        getVideo(videoId)
        .then((videoData)=>{
            const { viewCount } = videoData.items.length > 0 && videoData.items[0].statistics;
            setViews(viewCount || 0);
        })
    },[])

    function getTitle(str){
      return str.length > 50 ? `${str.slice(0, 50)}....` : str;
    }

    return (
        <div className="channelVideo">
            <Link to={`/video/${videoId}`}>
                <img src={image} alt={channelName} className="channelVideo__image"/>
            </Link>
            <div className="channelVideo__text">
                <h3 className="channelVideo__title">{getTitle(title)}</h3>
                <p>{millify(views, {precision: 1})} views . <Moment date={publishedAt} fromNow/></p>
            </div>
        </div>
    )
}

export default ChannelVideo;