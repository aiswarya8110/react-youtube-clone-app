import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { getChannel } from './youtube';

function ChannelAvatar({ channelId }){
    const [imageSrc, setImageSrc] = useState("");

    useEffect(()=>{
        getChannel(channelId)
        .then((res)=>{
            setImageSrc(res.items[0].snippet.thumbnails.medium.url);
        });
    })

    return <Avatar src={imageSrc}/>
}

export default ChannelAvatar;