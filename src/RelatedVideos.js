import React, { useEffect, useState } from 'react';
import './RelatedVideos.css';
import { getRelatedVideos, getVideo } from './youtube';
import RelatedVideo from './RelatedVideo'

function RelatedVideos({ videoId }){
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        getRelatedVideos(videoId)
        .then((videoData)=> {
            setVideos(videoData.items);
        })
    },[videoId])
    return (
        <div className="relatedVideos">
            <h2>Related Videos</h2>
            <div className="relatedVideos__videos">
                {videos?.map((videoData)=>{
                    const { channelTitle, title, thumbnails, publishedAt } = videoData.snippet;
                    const { videoId } = videoData.id;

                    return <RelatedVideo
                    key={publishedAt}
                    channelName={channelTitle}
                    title={title}
                    image={thumbnails.medium.url}
                    videoId={videoId}
                    publishedAt={publishedAt}/>
                })}
            </div>
        </div>
        )
}

export default RelatedVideos;