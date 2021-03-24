import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
function Header() {
    let name = localStorage.getItem('userName');
    return (
        <div className = 'header'>
            <div className="headerLeft">
                <Link to='/'>
                <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' 
                alt = 'fblogo' className='fblogo'/>
                </Link>
                <div className="headerInput">
                <SearchIcon />
                <input type="text" 
                placeholder='Search Facebook...'
                />
                </div>
            </div>
            <div className="headerMiddle">
                <div className="headerOption active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className="headerOption">
                    <FlagIcon fontSize='large' />
                </div>
                <div className="headerOption">
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className="headerOption">
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className="headerOption">
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                    <h4>{name}</h4>
                </div>
                <IconButton >
                    <AddIcon fontSize='large'/>
                </IconButton>
                <IconButton>
                    <ForumIcon fontSize='large'/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon fontSize='large'/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
