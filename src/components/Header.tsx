import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon />
                <YouTubeIcon className="youtube-icon" sx={{ color: 'red', fontSize: '50px' }} />
            </div>
            <div className='header_input'>
                <div className='header__middle'>
                    <input 
                        className="SearchInput" 
                        placeholder="Search" 
                        type="text"
                        onFocus={(e) => {
                            e.currentTarget.style.width = '415px';
                            e.currentTarget.style.maxWidth = '600px';
                            e.currentTarget.style.boxShadow = '0 1px 6px rgba(32,33,36,0.28)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.maxWidth = '500px';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                    <SearchIcon className='header_searchBtn' />
                </div>
                <MicIcon />
            </div>
            <div className='header__right'>
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar />
            </div>



        </div>
    )
}

export default Header