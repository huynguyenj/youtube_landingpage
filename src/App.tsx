
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';;
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function App() {

  return (
    <>
    <div className='sidebar'>
    
      <Sidebar isBigTitle={false} Icon={HomeIcon} title='Trang chủ'/>
      <Sidebar isBigTitle={false} Icon={SlideshowOutlinedIcon} title='Shorts'/>
      <Sidebar isBigTitle={false} Icon = {SubscriptionsOutlinedIcon} title='Kênh đăng ký'/>
      <hr />
      <Sidebar isBigTitle={true} Icon={ArrowForwardIosOutlinedIcon} title='Bạn'/> 
      <Sidebar isBigTitle={false} Icon={HistoryOutlinedIcon} title='Video đã xem'/> 
      <Sidebar isBigTitle={false} Icon={PlaylistPlayOutlinedIcon} title='Danh sách phát'/>
      <Sidebar isBigTitle={false} Icon={WatchLaterOutlinedIcon} title='Xem sau'/>
      <Sidebar isBigTitle={false} Icon={ThumbUpOutlinedIcon} title='Video đã thích'/>
      <Sidebar isBigTitle={false} Icon={FileDownloadOutlinedIcon} title='Nội dung đã tải xuống'/>
      <hr />
      <Sidebar isBigTitle={true} Icon={null} title='Khám phá'/>
      <Sidebar isBigTitle={false} Icon={WhatshotOutlinedIcon} title='Thịnh hành'/>
      <Sidebar isBigTitle={false} Icon={MusicNoteOutlinedIcon} title='Âm nhạc'/>
      <Sidebar isBigTitle={false} Icon={VideogameAssetOutlinedIcon} title='Trò chơi'/>
      <Sidebar isBigTitle={false} Icon={NewspaperOutlinedIcon} title='Tin tức'/>
      <Sidebar isBigTitle={false} Icon={EmojiEventsOutlinedIcon} title='Thể thao'/>
      <hr />
      <Sidebar isBigTitle={true} Icon={null} title='Dịch vụ khác của YouTube'/>
      <Sidebar isBigTitle={false} Icon={YouTubeIcon} title='YouTube Premium'/>
      <Sidebar isBigTitle={false} Icon={PlayCircleIcon} title='YouTube music'/>


    
    </div>
     
  </>  
  )
}

export default App
