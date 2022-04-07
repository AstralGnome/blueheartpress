
import { Grid, Button, IconButton, Typography, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from 'axios'
import { useState } from 'react';
import {Image} from 'cloudinary-react'

import "./Publish.css"

function Publish() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xhpu1wfy");
  
    Axios.post("https://api.cloudinary.com/v1_1/astralgnome/image/upload",
    formData
    ).then((response) => {
      console.log(response)
    })
  };

  const [pubId, setPubId] = useState("")

  return (

    //Upload Component
  <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>

  <Grid xs={12}> 
      <Typography 
        style={{
        color: 'lightgrey',
        paddingBottom: 30,
        }}
          variant="body1"
          // className="animate__animated animate__fadeInDown"
          >Project Title
      </Typography>
    </Grid>
    <Grid xs={12}> 
      <TextField style={{
        paddingBottom: 20
        }}
          label="username"
          variant="outlined"
          required
          // fullWidth
          // onChange={(event) => {
          //   setUsername(event.target.value)
          // }}
          />
    </Grid>
    <Divider/>
    
    <Grid xs={12}> 
      <Typography 
        style={{
        color: 'lightgrey',
        paddingBottom: 30,
        }}
          variant="body1"
          // className="animate__animated animate__fadeInDown"
          >Project Title
      </Typography>
    </Grid>
              
    <Grid 
    container
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    xs={12}> 
      <input style={{color:"white"}} type="file" onChange={(event) => {
          setImageSelected(event.target.files[0]) ;
        }}
      />
      <Button 
        onClick={uploadImage}
        variant="outlined"
      >
        Upload      
      </Button>
      <IconButton 
        aria-label="delete" 
        // disabled 
        style={{opacity:"100%"}}  
        onClick={console.log(imageSelected)}
        >   
        <DeleteIcon />
      </IconButton>

      <Image 
        style={{width:28, height:28}}
        cloudName="astralgnome" 
        publicId="https://res.cloudinary.com/astralgnome/image/upload/v1649278239/vwyhzqdsi4ggdhxkkpok.jpg"
      /> 
    </Grid>

      
  </Grid>
  )
}

export default Publish;