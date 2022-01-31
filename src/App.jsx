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
import Footer from "./components/Footer";
function App() {
  return (
      <body> 
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
        <Footer/>
      </Router>
      </body>
  );
}

export default App;
