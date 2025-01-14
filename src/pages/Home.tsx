import React from 'react'
import VideoCard from "../components/VideoCard";

function Home({src,index}:{src:string,index:number}) {
  return (
    <div className='home_page'>
        <VideoCard key={index} thumbnail={src}/>
    </div>
  )
}

export default Home