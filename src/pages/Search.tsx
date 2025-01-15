import React from 'react'
import './Search.css'
import { TuneOutlined } from '@mui/icons-material'
import ChannelTile from '../components/ChannelTile'
import VideoTile from '../components/VideoTile'
import thumbnail4 from '../assets/images/thumbnails/thumbnail4.jpg'
import thumbnail1 from '../assets/images/thumbnails/thumbnail1.jpg'
import thumbnail2 from '../assets/images/thumbnails/thumbnail2.jpg'
import thumbnail3 from '../assets/images/thumbnails/thumbnail3.jpg'
import fleekazoid from '../assets/images/channel/FLEEKAZOID.png'

function Search() {
    return (
        <div className='searchPage'>
            <div className='filter'>
                <TuneOutlined className='filterIcon' />
                <h2 className='filterHeading'>FILTERS</h2>
            </div>

            <ChannelTile />
            <h4>Latest from FLEEKAZOID</h4>

            <VideoTile
                thumbnail={thumbnail4}
                duration='10:23'
                title='Top 10 Món Ăn Việt Nam Nổi Tiếng Thế Giới'
                views='1.2 Tr'
                time='2 tuần trước'
                img={fleekazoid}
                name="Ẩm Thực Việt"
                desc="Khám phá những món ăn Việt Nam nổi tiếng thế giới mà bạn không thể bỏ qua!"
            />

            <VideoTile
                thumbnail={thumbnail3}
                duration='10:23'
                title='Top 10 Món Ăn Việt Nam Nổi Tiếng Thế Giới'
                views='1.2 Tr'
                time='2 tuần trước'
                img={fleekazoid}
                name="Ẩm Thực Việt"
                desc="Khám phá những món ăn Việt Nam nổi tiếng thế giới mà bạn không thể bỏ qua!"
            />

            <VideoTile
                thumbnail={thumbnail2}
                duration='10:23'
                title='Top 10 Món Ăn Việt Nam Nổi Tiếng Thế Giới'
                views='1.2 Tr'
                time='2 tuần trước'
                img={fleekazoid}
                name="Ẩm Thực Việt"
                desc="Khám phá những món ăn Việt Nam nổi tiếng thế giới mà bạn không thể bỏ qua!"
            />

            <VideoTile
                thumbnail={thumbnail1}
                duration='10:23'
                title='Top 10 Món Ăn Việt Nam Nổi Tiếng Thế Giới'
                views='1.2 Tr'
                time='2 tuần trước'
                img={fleekazoid}
                name="Ẩm Thực Việt"
                desc="Khám phá những món ăn Việt Nam nổi tiếng thế giới mà bạn không thể bỏ qua!"
            />
        </div>
    )
}

export default Search