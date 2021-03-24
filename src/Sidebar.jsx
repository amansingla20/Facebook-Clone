import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    let name=localStorage.getItem('userName');
    return (
        <div className='sidebar'>
            <SidebarRow src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            title={name}/>
            <SidebarRow
            Icon={LocalHospitalIcon} 
            title='Covid-19 Information Center'
            />
            <SidebarRow
            Icon={EmojiFlagsIcon} 
            title='Pages'
            />
            <SidebarRow
            Icon={PeopleIcon} 
            title='Friends'
            />
            <SidebarRow
            Icon={ChatIcon} 
            title='Messenger'
            />
            <SidebarRow
            Icon={StorefrontIcon} 
            title='Messenger'
            />
            <SidebarRow
            Icon={VideoLibraryIcon} 
            title='Videos'
            />
            <SidebarRow
            Icon={ExpandMoreIcon} 
            title='Marketplace'
            />
        </div>
    )
}

export default Sidebar
