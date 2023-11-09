import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    const [inputValue, setInputValue] = useState("");

    return <div className="header">
        <div className="header__left">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""/>
        </div>
        <div className="header__input">
            <input type="text" value={inputValue} placeholder="Search" onChange={(e)=> setInputValue(e.target.value)}/>
            <Link to={`/search/${inputValue}`}>
                <SearchIcon  className="header__inputButton"/>
            </Link> 
        </div>
    </div>
}

export default Header;