import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';


function Home() {
  return (
    <>
    <Banner/>
      <ImageSlider slides={SliderData}/>
    </>
  )
}

export default Home;
