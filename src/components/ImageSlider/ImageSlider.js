import React from 'react';
import "../../pages/ContentDisplay/ContentDisplay.css"
import "../ImageSlider/ImageSlider.css"
import {SliderData} from "./SliderData.js"
import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import {ImZoomIn, ImZoomOut} from "react-icons/im"
import SideDrawer from "../SideDrawer/SideDrawer"

const ImageSlider = ({slides}) => {
const [currentPage, setCurrentPage] = useState(0);
const [currentToggle, setToggle] = useState(true);
const length = slides.length

const nextSlide = () => {
  setCurrentPage(currentPage === length -1 ? 0 : currentPage + 1)
}
const prevSlide = () => {
  setCurrentPage(currentPage === 0 ? length -1 : currentPage - 1);
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
      <div className="PageNumber">Page {currentPage + 1} of {slides.length}</div>
      <FaArrowAltCircleRight className="RightArrow" onClick={nextSlide}/>
    </div>
    <section className="Slider">
      <div className="SliderBack"></div>
      {SliderData.map((slide, index) => {
        return (
          
          <div className={ index === currentPage ? "SlideActive" : "Slide"} key={index}>
            { index === currentPage && (<img className={currentToggle === true ? "ComicPages" : "ComicPagesLarge"} src={slide.image} alt="Strange Assassins, short comic."/>)} 
          </div>
        ) 
      })}
      
    </section>
    </div>
    </>
  )
};

export default ImageSlider;
