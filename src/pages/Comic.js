import { Box } from '@mui/material';
import React from 'react';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';
import Wrapper from '../components/Wrapper';
import "../style/Comic.css"


function Comic() {
  return (
    <Box className = "SVG">
      <Wrapper>
        <Banner/>
        <ImageSlider slides={SliderData}/>
      </Wrapper>
    </Box>
  )
}

export default Comic;