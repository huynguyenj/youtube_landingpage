import './App.css';
import VideoCard from "./components/VideoCard";

// Dynamically import all images in the 'pictures' folder
const images = import.meta.glob('./assets/images/thumbnails/*.jpg', { eager: true }) as Record<
string,
{ default: string }
>;

// Extract the image paths
const imagePaths = Object.values(images).map((img) => img.default);

function App() {

  return (
    <>
    <div className='videos-container'>
      {imagePaths.map((src, index) => (
        <VideoCard key={index} thumbnail={src}/>
      ))}
    </div>

    </>
  )
}

export default App
