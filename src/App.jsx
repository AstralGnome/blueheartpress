import "./style/App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";

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
