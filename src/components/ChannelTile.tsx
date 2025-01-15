import "./ChannelTile.css";
import { ArrowDropDown, NotificationsActive } from '@mui/icons-material';
import React from 'react';
import fleekazoid from '../assets/images/channel/FLEEKAZOID.png'

const ChannelTile: React.FC = () => {
    return (
        <div className='channelTile'>
            <div className='tile_left'>
                <img className='channelImg' src={fleekazoid} alt='' />
            </div>

            <div className='tile_middle'>
                <p className='channelName'>FLEEKAZOID</p>
                <p style={{ fontSize: "13px", color: "#606060", letterSpacing: "0.3px" }}>
                    @FLEEKAZOID &bull; 298k subscribers
                </p>
                <p style={{ fontSize: "13px", color: "#606060", letterSpacing: "0.3px" }}>
                    We make gaming reviews with too many memes
                </p>
            </div>

            <div className='tile_right'>
                <button className='subscribe'>
                    <NotificationsActive className='bellIcon' />
                    Subscribed
                    <ArrowDropDown className="dropdownIcon" />
                </button>
            </div>
        </div>
    );
}

export default ChannelTile;
