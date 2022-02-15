import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";  
import AboutYou from "./pages/AboutYou";  
import About from "./pages/About";  
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
// import Navbar from "./components/Navbar";
import Comic from "./pages/Comic";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<Comic/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>} component={About}/>
            <Route path="/about/me" element={<AboutMe/>}/>
            <Route path="/about/you" element={<AboutYou/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
