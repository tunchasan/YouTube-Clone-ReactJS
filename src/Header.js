import React, {useState} from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className= "header">
            <div className= "header_left">
                <MenuIcon/>
                <Link to="/"> 
                    <img 
                        className="header_logo"
                        src='https://cdn.worldvectorlogo.com/logos/youtube-2.svg' 
                        alt=''
                    />
                </Link>
            </div>
            <div className= "header_input">
                <input
                    placeholder='Search' 
                    type='text'
                    onChange={e => setInputSearch(e.target.value)}
                    />  
                    <Link to={`/search/${inputSearch}`}>
                        <SearchIcon className= "header_inputButton"/>  
                    </Link>
            </div>
            
            <div className= "header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar 
                    alt= 'Hasan Tunc'
                    src= 'https://avatars1.githubusercontent.com/u/39636292?s=460&u=a29bef077d71d9e8eff9624c63d6451cbd8f79df&v=4'
                />
            </div>
        </div>
    );
}

export default Header;
