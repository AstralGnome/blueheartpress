import React from 'react';
import "../../style/ComicPages.css"
import "../../style/Slider.css"
import {SliderData} from "./SliderData.js"
import { useState } from 'react/cjs/react.development';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length

const nextSlide = () => {
  setCurrent(current === length -1 ? 0 : current + 1)
}
const prevSlide = () => {
  setCurrent(current === 0 ? length -1 : current - 1);
}

console.log(current)

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <>
      <FaArrowAltCircleLeft className="LeftArrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="RightArrow" onClick={nextSlide}/>
    
    <section className="Slider">
      {SliderData.map((slide, index) => {
        return (
          
          <div className={ index === current ? "SlideActive" : "Slide"} key={index}>
            { index === current && (<img className="ComicPages" src={slide.image} alt="Strange Assassins, short comic."/>)} 
          </div>
        ) 
      })}
    </section>
    </>
  )
};

export default ImageSlider;
