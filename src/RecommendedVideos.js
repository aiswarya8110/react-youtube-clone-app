import React, { useContext, useEffect, useState } from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import { YoutubeContext } from './youtube-context';
import { getSearchResults } from './youtube';

function RecommendedVideos(){
    const [videos, setVideos] = useState([]);
    const { selectedCategory } = useContext(YoutubeContext);

    useEffect(()=>{
        getSearchResults(selectedCategory)
        .then((videoData)=>{
            setVideos(videoData.items)
        })
    }, [selectedCategory])

    return (
       <div className="recommendedVideos">
            <h2>{selectedCategory}</h2>
            <div className="recommendedVideos__videos">
                {
                    videos?.map((video)=>{
                        const { title, thumbnails, channelTitle, channelId, publishedAt } = video.snippet;
                        const { videoId } = video.id
                        return(
                            <VideoCard
                            key={videoId}
                            image={thumbnails.medium.url}
                            title={title}
                            channel={channelTitle}
                            channelId={channelId}
                            videoId={videoId}
                            publishedAt={publishedAt}
                            />
                        )
                    })
                }
                

                {/* Dummy text */}


                {/* <VideoCard
                image="https://i3.ytimg.com/vi/6Y3zqIL23i0/hqdefault.jpg"
                title="Selena Gomez - I'm Sorry We Lied (ft. ZAYN)"
                description=""
                channel="Atlantic Music"
                channelId=""
                videoId=""/>
                <VideoCard
                image="http://i3.ytimg.com/vi/Q7AOvWpIVHU/hqdefault.jpg"
                title="Build a Mindblowing 3D Portfolio Website // Three.js Beginner’s Tutorial"
                description=""
                channel="Fireship"
                channelId=""
                videoId=""/>
                
                <VideoCard
                image="http://i3.ytimg.com/vi/2F84wucxcFQ/hqdefault.jpg"
                title="I'm Going On a Road Trip"
                description=""
                channel="Bernardo Bacalhau"
                channelId=""
                videoId=""/>
                <VideoCard
                image="http://i3.ytimg.com/vi/Q7AOvWpIVHU/hqdefault.jpg"
                title="Build a Mindblowing 3D Portfolio Website // Three.js Beginner’s Tutorial"
                description=""
                channel="Fireship"
                channelId=""
                videoId=""/>
                <VideoCard
                image="https://i3.ytimg.com/vi/6Y3zqIL23i0/hqdefault.jpg"
                title="Selena Gomez - I'm Sorry We Lied (ft. ZAYN)"
                description=""
                channel="Atlantic Music"
                channelId=""
                videoId=""/> */}
            </div>
        </div>
    )
}

export default RecommendedVideos;