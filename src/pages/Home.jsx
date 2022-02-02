import React from 'react';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';
import SideSheetComponent from '../components/SideSheet';


function Home() {
  return (
    <>
      <ImageSlider slides={SliderData}/>
    </>
  )
}

export default Home;
