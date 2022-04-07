import "./App.css"
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";  
import Contact from "./pages/Contact/Contact";
import UserSettings from "./pages/UserSettings/UserSettings";
import ContentDisplay from "./pages/ContentDisplay/ContentDisplay";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Publish from "./pages/Publish/Publish";

import { LoginContext } from './Helper/Context'
import { UsernameContext } from './Helper/Context'
import { PasswordContext } from './Helper/Context'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  const [loggedIn, setLoggedIn]   = useState(false);
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
  <UsernameContext.Provider value={{username, setUsername}}>
  <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
  <PasswordContext.Provider value={{password, setPassword}}>
    <ThemeProvider theme={darkTheme}>
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
            <Route path="/publish" element={<Publish/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </Router>
    </ThemeProvider>
  </PasswordContext.Provider>
  </LoginContext.Provider>
  </UsernameContext.Provider>
  );
}

export default App;
