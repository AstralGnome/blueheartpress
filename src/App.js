import "./App.css"
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";  
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserSettings from "./pages/UserSettings/UserSettings";
import Navbar from "./components/Navbar/Navbar";
import ContentDisplay from "./pages/ContentDisplay/ContentDisplay";
import Home from "./pages/Home/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

import { LoginContext } from './Helper/Context'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  const [loginStatus, setLoginStatus] = useState(false);

  return (
  <ThemeProvider theme={darkTheme}>
    <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<ContentDisplay/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>} component={About}/>
            <Route path="/profile" element={<UserSettings/>}/>
            <Route path="/profile/:username" element={<UserSettings/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createaccount" element={<CreateAccount/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </Router>
    </LoginContext.Provider>
  </ThemeProvider>
  );
}

export default App;
