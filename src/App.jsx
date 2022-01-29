import "./style/App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";  
import AboutYou from "./pages/AboutYou";  
import About from "./pages/About";  
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";

// const routes = {
//   "/": () =><Home />,
//   "/about*": () =><About />,
//   "/contact/:name": ({name}) =><Contact name={name}/>
// }

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about/me" element={<AboutMe/>}/>
            <Route path="/about/you" element={<AboutYou/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          
      </Wrapper>
    </Router>
  );
}

export default App;
