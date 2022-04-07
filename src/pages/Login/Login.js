import React, { useContext, useEffect } from 'react'
import './Login.css'
import { Grid, TextField, Typography } from '@mui/material';
import SvgButton from '../../components/SvgButton/SvgButton';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import 'animate.css';
import { LoginContext } from "../../Helper/Context"
import { UsernameContext } from "../../Helper/Context"
import { PasswordContext } from "../../Helper/Context"

import Axios from 'axios'

function Login() {

  const { username, setUsername } = useContext(UsernameContext);
  const { password, setPassword } = useContext(PasswordContext);
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  
  Axios.defaults.withCredentials = true;
  
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {

      if (response.data.message === "Incorrect password.") {
        alert(response.data.message)
        setLoggedIn(false)
      } 
      else if (response.data.message === "User doesn't exist.") {
        alert(response.data.message)
        setLoggedIn(false)
      } else {
        localStorage.setItem('token', response.data.token)
        setLoggedIn(true)
        alert('Login successful.')
        console.log(password);
      }
      //remove this console log before going into production
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true)
      setLoggedIn(true);
    });
  })


  //Can add this to the Submit button in order to verify Auth.
  // const userAuthenticated = () => {
  //   Axios.get("http://localhost:3001/isUserAuth", {
  //     headers: {
  //       'x-access-token': localStorage.getItem('token'),
  //   },
  // }).then((response) => {
  //     console.log(response)
  //   })
  // }
  
  return (
    <Grid style={{
      paddingTop: 50,
      display: 'flex',
      justifyContent:'center',
      flexWrap: 'wrap',
      alignItems: 'vertical',
      }}
      >
      <Grid style={{
        width: '20%',
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        alignItems: 'vertical',
        paddingTop: 25,
        padding: 20,
        border: '3px solid #0067a5',
        borderRadius: '2px'
        }}
        >
        <Typography 
          style={{
          color: 'lightgrey',
          paddingBottom: 30,
          marginTop: 'none',
          paddingTop: 'none',
          }}
            variant="h5"
            className="animate__animated animate__fadeInDown"
            >LOG IN
        </Typography>
        <TextField style={{
          paddingBottom: 20
          }}
            label="username"
            variant="outlined"
            required
            fullWidth
            onChange={(event) => {
              setUsername(event.target.value)
            }}
            />
        {/* Would like to hide view of password as it's being typed. Check TextField documentation. */}
        <TextField style={{
          paddingBottom: 20
          }}
            label="password"
            variant="outlined"
            required
            fullWidth
            onChange={(event) => {
              setPassword(event.target.value) 
            }}
          />
        <Box style={{
          paddingBottom: 10
          }}>
        <Button
          onClick={login}
        >
          <SvgButton>Submit</SvgButton>
        </Button>
        </Box>
          <Typography style={{
            width: '100%',
            color: 'lightgrey',
            marginTop: 'none',
            paddingTop: 5,
            }}
            variant="body2"
            >{loggedIn === true ? `You're presently logged in.` : `Don't have an account?`}
              {loggedIn === false ? <Link
                underline='hover'
                href='/createaccount'
                > Create one!
              </Link>: ""}
          </Typography>
      </Grid>
    </Grid>
  )
}

export default Login;