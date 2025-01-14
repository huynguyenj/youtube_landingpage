import "./ChannelTile.css"
import { NotificationsActive } from '@mui/icons-material'

function ChannelTile() {
  return (
    <div className='channelTile'>
            <div className='tile_left'>
                <img className='channelImg' src='https://yt3.ggpht.com/ytc/AKedOLRk8g9KQ9K5X9pD4Y5XbBZo2Ft3U3Z7uZjJZ6k=s88-c-k-c0x00ffffff-no-rj' alt='' />
            </div>
            <div className='tile_middle'>
                <p className='channelNamee'>devNtech</p>
                <p style={{fontSize:"13px", color: "#606060", letterSpacing: "0.3px"}}>185 subscribers &bull; 42 videos</p>
            </div>
            <div className='tile_right'>
                <button className='subscribe'>SUBSCRIBED</button>
                <NotificationsActive className='bellIcon'/>
            </div>
        </div>
  )
}

export default ChannelTile