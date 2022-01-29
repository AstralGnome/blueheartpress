import React from 'react';
import "../../style/ComicPages.css"
import {SliderData} from "./SliderData.js"
import { useState } from 'react/cjs/react.development';

const ImageSlider = () => {
const [current, setCurrent] = useState(0);


  return (
    <>
      {SliderData.map((slide, index) => {

        return (
          <img className="ComicPages" src={slide.image} alt="Strange Assassins, short comic."/>
        )
      })}
    </>
  )
};

export default ImageSlider;
