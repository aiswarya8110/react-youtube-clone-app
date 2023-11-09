import React, { useEffect, useState } from 'react';
import './VideoCard.css';
import { Link } from 'react-router-dom';
import ChannelAvatar from './ChannelAvatar';
import { getVideo } from './youtube';
import Moment from 'react-moment';
import millify from 'millify';

function VideoCard({image, title, channel, channelId, videoId, publishedAt }){
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
            <div className="videoCard">
            <Link to={`/video/${videoId}`}>
             <img src={image} alt="" className="videoCard__image"/>
            </Link>
            <div className="videoCard__info">
                <Link to={`/channel/${channelId}`}>
                    <ChannelAvatar channelId={channelId}/>
                </Link>
                <div className="videoCard__text">
                    <h4>{getTitle(title)}</h4>
                    <p>{channel}</p>
                    <p>
                        {millify(views, {precision: 1})} views . <Moment fromNow>{publishedAt}</Moment>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;