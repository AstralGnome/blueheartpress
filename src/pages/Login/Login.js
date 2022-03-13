import React from 'react'
import './Login.css'
import { Grid, TextField, Typography } from '@mui/material';
import SvgButton from '../../components/SvgButton/SvgButton';
import { Box } from '@mui/system';

function Login() {
  
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
            >LOG IN
        </Typography>
        <TextField style={{
          paddingBottom: 20
          }}
            label="username"
            variant="outlined"
            required
            fullWidth
            />
        {/* Would like to hide view of password as it's being typed. Check TextField documentation. */}
        <TextField style={{
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
          <SvgButton>Submit</SvgButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login