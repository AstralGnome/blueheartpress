import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';


function Home() {
  return (
    <div>
      <Banner/>
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Home;
