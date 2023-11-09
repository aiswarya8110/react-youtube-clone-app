import React,{ useState, useEffect } from 'react';
import './Video.css';
import Youtube from 'react-youtube';
import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos';
import { getChannel, getVideo } from './youtube';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import millify from 'millify';

function Video(){
   const [videoDetails, setVideoDetails ] = useState({title:'', channelName: '', views: '', likes: '', channelId: ''});
   const [channelImage, setChannelImage] = useState("");
   const { videoId } = useParams();

   useEffect(()=>{
      getVideo(videoId)
      .then((videoData)=>{
         const { channelTitle, title, channelId } = videoData.items[0].snippet;
         const { likeCount, viewCount } = videoData.items[0].statistics;
         setVideoDetails((prev)=>{
            return {...prev, title: title, 
               channelName: channelTitle, 
               views: viewCount, 
               likes: likeCount,
               channelId: channelId
            }
         })

         return videoData;
      })
      .then((videoData)=>{
         getChannel(videoData.items[0].snippet.channelId)
         .then((videoData)=> setChannelImage(videoData.items[0].snippet.thumbnails.medium.url));
      })
   },[videoId])

   const { channelName, title, likes, views, channelId } = videoDetails;

   return <>
   <div className="video">
      <Youtube videoId={videoId} 
      className="video__youtube" 
      opts={{height: '500', width: '100%', playerVars:{ autoplay: 1}}}/>
      <div className="video__yotubeText">
         <h2>{title}</h2>
         <span className="video__youtubeStatistics">
            <div className="video__youtubeChannelLogoText">
               <Link to={`/channel/${channelId}`}>
                  <Avatar src={channelImage} className="video__youtubeChannelLogo"/>
               </Link>
               {channelName}
            </div>
            <div>
               {views && `${millify(views, {precision: 1})} views`}   {likes && `${millify(likes, {precision: 1})} likes`}
            </div>
         </span>
      </div>
   </div>
   <RelatedVideos videoId={videoId}/>
   </>
}

export default Video;