import React from 'react';
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import "../style/Home.css"
// import HeartImage from "../assets/HeartOutline2.png" 


function Home () {
  return (
    <div className ="HomeStyle">
        <Navbar>
      <Wrapper>
        <div className="Home">
        </div>
      </Wrapper>
        </Navbar>
    </div>
  )
}

export default Home;
