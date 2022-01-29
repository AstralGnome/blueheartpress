import React from 'react';
import Counter from '../components/Counter';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';

function Home() {
  return (
    <>
    <div>Home Page</div>
    <ImageSlider slides={SliderData}/>
    <Counter/>
  </>
  )
}

export default Home;
