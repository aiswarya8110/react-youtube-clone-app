import React, { useState, useEffect } from 'react';
import './Channel.css';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import { getChannel, getChannelVideos, getSubscribers } from './youtube';
import ChannelVideo from './ChannelVideo';
import millify from 'millify';

function Channel(){
    const { channelId } = useParams();
    const [channel, setChannel] = useState({channelName: 'Channel Name', description: 'description', image: "", totalVideos: 0, subs: 0});
    const [channelVideos, setChannelVideos] = useState([]);

    function getDescription(str, strLength){
        return strLength > 215 ? `${str.slice(0, 215)}...` : str; 
    }

    useEffect(()=>{
        getChannel(channelId)
        .then((channelDetails)=>{
            const {description, title, thumbnails } = channelDetails.items[0].snippet;
            setChannel((prev)=> {

                return {...prev, 
                    channelName: title, 
                    description: description, 
                    image: thumbnails.medium.url 
                }
            })
        })
        .then(()=>{
            getChannelVideos(channelId)
            .then((videoData)=>{
                setChannelVideos(videoData.items)
                setChannel((prev)=>{
                    return {...prev, totalVideos: videoData.pageInfo.resultsPerPage}
                })
            });
        })
        .then(()=>{
            getSubscribers(channelId)
            .then((videoData)=> setChannel((prev)=>{
                return {...prev, subs: videoData.items[0].statistics.subscriberCount}
            }))
        })
    },[])

    return <div className="channel">
        <div className="channel__details">
            <Avatar src={channel.image} alt="channel-logo" className="channel__logo"/>
            <div className="channel__detailsText">
                <h4>{channel?.channelName}</h4>
                <p>{millify(channel?.subs, {precision: 1})}subscribers . {channel?.totalVideos} videos</p>
                <p>{getDescription(channel?.description, channel?.description.length)}</p>
            </div>
        </div>
        <div className="channel__videos">
            { channelVideos?.map((videoData)=>{
                const {title, thumbnails, channelTitle, publishedAt } = videoData.snippet;
                const { videoId } = videoData.id;
            
                return (
                <ChannelVideo
                key={publishedAt}
                title={title} 
                image={thumbnails.medium.url}
                channelName={channelTitle}
                videoId={videoId}
                publishedAt={publishedAt}/>)
            })}
        </div>
    </div>
}

export default Channel;