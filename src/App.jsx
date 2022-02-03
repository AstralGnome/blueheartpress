import "./style/App.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Wrapper from "./components/Wrapper"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";  
import AboutYou from "./pages/AboutYou";  
import About from "./pages/About";  
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import Banner from "./components/Banner";
function App() {
  return (
      <Router>
        <Wrapper>
          <Banner/>
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
