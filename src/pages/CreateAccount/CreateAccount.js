import React, { useState } from 'react'
import './CreateAccount.css'
import { Grid, TextField, Typography } from '@mui/material';
import SvgButton from '../../components/SvgButton/SvgButton';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Axios from 'axios';


function CreateAccount() {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const addEmployee = () => {
  Axios.post('http://localhost:3001/create', {
    first_name: firstName,
    last_name: lastName
  }).then(() => {
    alert('Success!')
  })
}

const [employeeList, setEmployeeList] = useState('')

const getEmployees = () => {
  Axios.get('http://localhost:3001/employees').then((response) => {
    setEmployeeList(response.data);
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
          setFirstName(event.target.value)
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
          setLastName(event.target.value)
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
        <Button onClick={addEmployee}>   
          <SvgButton
            >Submit 
          </SvgButton>
        </Button>
        </Box>
        <Button
          style={{width:'100%'}}
          onClick={getEmployees}
          >Display Data
        </Button>
          {employeeList.map((val, key) => {
            return (
              <div className="MappingWhite">
                <h2>{val.first_name}</h2>
                <h2>{val.last_name}</h2>
              </div>)
          })}
      </Grid>
    </Grid>
  )
}

export default CreateAccount