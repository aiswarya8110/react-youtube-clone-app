import React, { useEffect, useState } from 'react';
import './VideoRow.css';
import { Link } from 'react-router-dom';
import { getVideo } from './youtube';
import Moment from 'react-moment';
import millify from 'millify';

function VideoRow({ description, channel, title, image, videoId, publishedAt }){
    const [videoDetails, setVideoDetails] = useState({views: 0});

    useEffect(()=>{
        getVideo(videoId)
        .then((videoData)=> {
            const { viewCount } = videoData.items.length > 0 && videoData.items[0].statistics;
            setVideoDetails((prev)=>{
                return {...prev, views: viewCount || 0}
            })
        })
    },[]);

    function getContent(str){
      return str.length > 60 ? `${str.slice(0, 60)}....` : str;
    }

    const { views } = videoDetails;

    return (
        <div className="videoRow">
            <Link to={`/video/${videoId}`}>
                <img src={image} alt="" className="videoRow__image"/>
            </Link>
            <div className="videoRow__text">
                <h3>{getContent(title)}</h3>
                <p className="videoRow__headline">
                    {channel} . {millify(views, {precision: 1})} views . <Moment fromNow>{publishedAt}</Moment>
                </p>
                <p className="videoRow__description">{getContent(description)}</p>
            </div>
        </div>
    )
}

export default VideoRow;