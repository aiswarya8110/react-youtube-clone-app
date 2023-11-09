import React, { useContext } from 'react';
import './SidebarRow.css';
import { Link } from 'react-router-dom';
import { YoutubeContext } from './youtube-context';


function SidebarRow({ title, Icon, selected }){
    const { setSelectedCategory, selectedCategory }=useContext(YoutubeContext);

    return (
        <Link to="/" className="sidebarRow">
            <div onClick={()=> setSelectedCategory(title)} 
            className={`sidebarRow__iconsAndTitle ${selectedCategory === title && "selected"}`}>
                <Icon className="sidebarRow__icon"/>
                <h2 className="sidebarRow__title">{title}</h2>
            </div>
        </Link>
    )
}

export default SidebarRow;