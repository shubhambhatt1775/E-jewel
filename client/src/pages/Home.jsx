import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import MapView from '../components/MapView'
import VideoPlayer from '../components/VideoPlayer'
import { assets } from "../assets/assets";


const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner/>
      <VideoPlayer src={assets.video} />
      <MapView style={{margin:"0"}}/>
      <NewsLetter />
    </div>
  )
}

export default Home
