import React from 'react'
import BrandImagesCarousel from '../Components/BrandImagesCarousel/BrnadImagesCarousel'
import HeroSection from '../Components/HeroSection/HeroSection'
import GroupButtons from '../Components/GroupButtons/GroupButtons'
const HomePage = () => {
  return (
    <>
    <div style={{backgroundColor:"#e8e8e8"}}> 
    <BrandImagesCarousel/>
    <HeroSection/>
    <GroupButtons/>
    </div>
    </>
  )
}

export default HomePage