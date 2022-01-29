import React from 'react';
import {SliderData} from "./SliderData.js"
import ComicPages from "../../style/ComicPages.css"

const ImageSlider = () => {
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
