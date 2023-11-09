import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

function Sidebar(){
    return <div className="sidebar">
        <SidebarRow title="New" selected Icon={YouTubeIcon}/>
        <SidebarRow title="Music" Icon={MusicNoteIcon}/>
        <SidebarRow title="Education" Icon={SchoolIcon}/>
        <SidebarRow title="Coding" Icon={CodeIcon}/>
        <SidebarRow title="Live" Icon={LiveTvIcon}/>
        <SidebarRow title="Gaming" Icon={SportsEsportsIcon}/>
        <SidebarRow title="Sports" Icon={SportsCricketIcon}/>
        <SidebarRow title="Comedy" Icon={TheaterComedyIcon}/>
        <SidebarRow title="Fashion" Icon={CheckroomIcon}/>
        <SidebarRow title="Beauty" Icon={FaceRetouchingNaturalIcon}/>
    </div>
}

export default Sidebar;