import { Box } from '@mui/material';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import Wrapper from '../../components/Wrapper/Wrapper';
import "../ContentDisplay/ContentDisplay.css"


function Comic() {
  return (
    <Box className = "SVG BehindGround">
      <Wrapper>
        <Banner/>
        <ImageSlider slides={SliderData}/>
      </Wrapper>
    </Box>
  )
}

export default Comic;