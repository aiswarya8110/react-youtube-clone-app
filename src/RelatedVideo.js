import React, { useEffect, useState } from 'react';
import { getVideo } from './youtube';
import './RelatedVideo.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import millify from 'millify';

function RelatedVideo({ image, title, channelName, videoId, publishedAt }){
    const [videoDetails, setVideoDetails] = useState({views: 0});

    useEffect(()=>{
        getVideo(videoId)
        .then((videoData)=>{
            const { viewCount } = videoData.items[0].statistics;
            setVideoDetails((prev)=>{
                return {...prev, views: viewCount}
            })
        })
    },[])

    function getTitle(str){
      return str.length > 65 ? `${str.slice(0, 65)}....` : str;
    }

    const { views } = videoDetails;

    return (
            <Link to={`/video/${videoId}`} className="relatedVideo">
                <div className="relatedVideo__details">
                    <img src={image} alt="" className="relatedVideo__image"/>
                    <div className="relatedVideo__text">
                        <h3 className="relatedVideo__title">
                            {getTitle(title)}
                        </h3>
                        <p>{channelName}</p>
                        <p>{millify(views, {precision: 1})} views . <Moment fromNow>{publishedAt}</Moment></p>
                    </div>
                </div>
            </Link>
            )
}

export default RelatedVideo;