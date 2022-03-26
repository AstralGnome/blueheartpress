import React from 'react';
import "../../pages/ContentDisplay/ContentDisplay.css"
import "../ImageSlider/ImageSlider.css"
import {SliderData} from "./SliderData.js"
import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import {ImZoomIn, ImZoomOut} from "react-icons/im"
import SideDrawer from "../SideDrawer/SideDrawer"

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

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <>
    <div className="Z">
    <div className="ToggleParent">
      <SideDrawer/>
      {currentToggle === true ? <ImZoomIn className="Toggler" onClick={Toggler} /> : <ImZoomOut className="Toggler" onClick={Toggler}/>}
    </div>
    <div className="PageControlCenter">
      <FaArrowAltCircleLeft className="LeftArrow" onClick={prevSlide}/>
      <div className="PageNumber">Page {current + 1} of {slides.length}</div>
      <FaArrowAltCircleRight className="RightArrow" onClick={nextSlide}/>
    </div>
    <section className="Slider">
      <div className="SliderBack"></div>
      {SliderData.map((slide, index) => {
        return (
          
          <div className={ index === current ? "SlideActive" : "Slide"} key={index}>
            { index === current && (<img className={currentToggle === true ? "ComicPages" : "ComicPagesLarge"} src={slide.image} alt="Strange Assassins, short comic."/>)} 
          </div>
        ) 
      })}
      
    </section>
    </div>
    </>
  )
};

export default ImageSlider;
