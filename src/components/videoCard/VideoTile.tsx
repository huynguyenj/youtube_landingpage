import { MoreVert, PlaylistAdd, WatchLater } from '@mui/icons-material'
import React from 'react'
import './VideoTile.css'

interface VideoTileProps {
    thumbnail: string;
    duration: string;
    title: string;
    views: string;
    time: string;
    img: string;
    name: string;
    desc: string;
}

const VideoTile: React.FC<VideoTileProps> = (props) => {
    return (
        <div className='videoTile'>
            <div className='image_div'>
                <div className='watchLater'>
                    <WatchLater className='videoIcon' />
                </div>

                <div className='playlistAdd'>
                    <PlaylistAdd className='videoIcon' />
                </div>

                <img className='thumbnail' src={props.thumbnail} alt='img' />

                <div className='duration'>
                    {props.duration}
                </div>
            </div>

            <div className='title_data'>
                <div className='title_div'>
                    {props.title}
                    <MoreVert className='vertBtn' />
                </div>

                <p className='views'>
                    {props.views} view &bull; {props.time}
                </p>

                <div className='data'>
                    <img src={props.img} alt='img' />
                    <p>{props.name}</p>
                </div>

                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}

export default VideoTile