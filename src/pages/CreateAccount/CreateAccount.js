import React, { useState } from 'react'
import './CreateAccount.css'
import { Grid, TextField, Typography } from '@mui/material';
import SvgButton from '../../components/SvgButton/SvgButton';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Axios from 'axios';


function CreateAccount() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      alert(`You've successfully created a new account!`)
      console.log(response);
    })
  }

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
        <Typography style={{
          color: 'lightgrey',
          paddingBottom: 30,
          marginTop: 'none',
          paddingTop: 'none',
          }}
            variant="h5"
            >CREATE ACCOUNT
        </Typography>
        <TextField 
          onChange={(event) => {
            setUsernameReg(event.target.value)
          }}  
          style={{
          paddingBottom: 20
          }}
            label="username"
            variant="outlined"
            required
            fullWidth
            />
        {/* Would like to hide view of password as it's being typed. Check TextField documentation. */}
        <TextField 
          onChange={(event) => {
            setPasswordReg(event.target.value)
          }} 
          style={{
          paddingBottom: 20
          }}
            label="password"
            variant="outlined"
            required
            fullWidth
          />
        <Box style={{
          paddingBottom: 10
          }}>
        
        <Button
        onClick={register}
        href={usernameReg.length > 0 && passwordReg.length > 0 ? 
        '/login' : null}
        >   
          <SvgButton
            >Submit 
          </SvgButton>
        </Button>
        </Box>
          <Typography style={{
            width: '100%',
            color: 'lightgrey',
            marginTop: 'none',
            paddingTop: 5,
            }}
            variant="body2"
            >Back to 
              <Link
                underline='hover'
                href='/login'
                > Login.
              </Link>
          </Typography>
      </Grid>
    </Grid>
  )
}

export default CreateAccount