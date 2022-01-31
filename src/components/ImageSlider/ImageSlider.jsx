import React from 'react';
import "../../style/ComicPages.scss"
import "../../style/Slider.scss"
import {SliderData} from "./SliderData.js"
import { useState } from 'react/cjs/react.development';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import "animate.css";

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
const [currentToggle, setToggle] = useState(true);
const length = slides.length

const nextSlide = () => {
  setCurrent(current === length -1 ? 0 : current + 1)
}
const prevSlide = () => {
  setCurrent(current === 0 ? length -1 : current - 1);
}

const Toggler = () => {
  if (currentToggle === true) {
    setToggle(false)
  } else if (currentToggle === false) {
    setToggle(true)
  }
}

console.log(currentToggle)

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <>
    <button className="leftArrow" onClick={Toggler}>Toggle</button>
    <div className="PageControlCenter">
      <FaArrowAltCircleLeft className="LeftArrow" onClick={prevSlide}/>
      <div className="PageNumber">Page {current + 1}</div>
      <FaArrowAltCircleRight className="RightArrow" onClick={nextSlide}/>
    </div>
    <section className="Slider">
      {SliderData.map((slide, index) => {
        return (
          
          <div className={ index === current ? "SlideActive" : "Slide"} key={index}>
            { index === current && (<img className={currentToggle === true ? "ComicPages" : "ComicPagesLarge"} src={slide.image} alt="Strange Assassins, short comic."/>)} 
          </div>
        ) 
      })}
      
    </section>
    <div className="PageControlCenter">
      <FaArrowAltCircleLeft className="LeftArrow" onClick={prevSlide}/>
      <div className="PageNumber">Page {current + 1}</div>
      <FaArrowAltCircleRight className="RightArrow" onClick={nextSlide}/>
    </div>
    </>
  )
};

export default ImageSlider;
