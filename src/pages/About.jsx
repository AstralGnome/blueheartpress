import React from 'react';
import {Link} from "react-router-dom"

function About() {
  return (
        <div>About Page
          <Link style={{display: "flex", paddingLeft: "10px", marginTop: "30px"}} to="/about/me">About Me</Link>
          <Link style={{display: "flex", paddingLeft: "10px", marginBottom: "20px", paddingTop:"10px"}} to="/about/you">About You</Link>
        </div>
    )
}

export default About;
