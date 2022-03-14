import React from 'react'
import './Login.css'
import { Grid, TextField, Typography } from '@mui/material';
import SvgButton from '../../components/SvgButton/SvgButton';
import { Box } from '@mui/system';
import { Link } from '@mui/material';

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
          <Typography style={{
            width: '100%',
            color: 'lightgrey',
            marginTop: 'none',
            paddingTop: 5,
            }}
            variant="body2"
            >Don't have an account?
              <Link
                underline='hover'
                href='/createaccount'
                > Create one!
              </Link>
          </Typography>
      </Grid>
    </Grid>
  )
}

export default Login