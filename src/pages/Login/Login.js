import React from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';

function Login() {
  return (
    <Grid style={{
      display: 'flex',
      justifyContent:'center',
      flexWrap: 'wrap',
      alignItems: 'vertical',
      }}
      >
      <Grid
        style={{ padding: 20, border: '2px solid grey', borderRadius: '10px'}}
        sx={8}
        >
        <TextField
          style={{paddingBottom: 20}}
          label="username"
          variant="outlined"
          required
          fullWidth
          />
        <TextField
          label="password"
          variant="outlined"
          required
          fullWidth
          />
      </Grid>
    </Grid>
  )
}

export default Login