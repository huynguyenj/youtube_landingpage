import './App.css';
import VideoCard from "./components/VideoCard";
import AdBanner from "./components/AdBanner";
import DropdownProfile from './components/DropdownProfile';

// Dynamically import all images in the 'pictures' folder
const thumbnails = import.meta.glob('./assets/images/thumbnails/*.jpg', { eager: true }) as Record<
string,
{ default: string }
>;
const banners = import.meta.glob('./assets/images/banners/*.png', { eager: true }) as Record<
string,
{ default: string }
>;

// Extract the image paths
const thumbnailPaths = Object.values(thumbnails).map((img) => img.default);
const bannerPath = Object.values(banners)[0].default;

function App() {

  return (
    
    <>
    <DropdownProfile/>
    <div className="ad-banner">
      <AdBanner bannerSource={bannerPath}/>
    </div>

    <div className='videos-container'>
      {thumbnailPaths.map((src, index) => (
        <VideoCard key={index} thumbnail={src}/>
      ))}
    </div>

    </>
  )
}

export default App
