import React from 'react';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './ChannelRow.css';

function ChannelRow({image, verified, channel, subs, noOfVideos, description}){
    return (
        <div className="channelRow">
            <Avatar 
            className="channelRow__logo"
            alt={channel}
            src={image} />
            <div className="channelRow__text">
              <h4>{channel} {verified && <VerifiedIcon /> }</h4>
              <p>
                {subs} subscribers . {noOfVideos} videos  
              </p>
              <p>{description}</p>  
            </div>
        </div>
    )
}

export default ChannelRow;