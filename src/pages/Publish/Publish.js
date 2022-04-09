
import { Grid, Button, IconButton, Typography, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import {Image} from 'cloudinary-react'
import Axios from 'axios'
import "./Publish.css"

function Publish() {
  
  Axios.defaults.withCredentials = true;
  
  const submitProjectTitle = () => {
    Axios.post("http://localhost:3001/publish", {
      project_title: projectTitle
    }).then((response) => {
      if (response.data.message==="Nice title choice!") {

      }
    })
  }

  const [imageSelected, setImageSelected] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [creatorName, setCreatorName] = useState('')

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

  // const [pubId, setPubId] = useState("")

  return (

    //Upload Component
  <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    style={{ minHeight: '100vh' }}>
    
    <Grid
      style={{paddingTop: 30}} 
      justifyContent="center"
      item xs={12}> 
        <Typography 
          style={{
          color: 'lightgrey',
          paddingBottom: 15,
          }}
            variant="body1"
            // className="animate__animated animate__fadeInDown"
            >Project Title
        </Typography>

      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}> 

        <TextField
            // label="username"
            style={{width: 250}}
            size="small"
            variant="outlined"
            required
            // fullWidth
            onChange={(event) => {
              setProjectTitle(event.target.value)
            }}
        />

        <Button 
          style={{marginLeft:10}}
          onClick={submitProjectTitle}
          variant="outlined"
        >
          Submit      
        </Button>

      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}> 
      </Grid>

        <Typography
          style={{
          color: 'lightgrey',
          paddingBottom: 15,
          }}
            variant="body1"
          >
          {projectTitle}
        </Typography>

      <Grid
        style={{paddingTop: 30}} 
        justifyContent="center"
        item xs={12}> 
          <Typography 
            style={{
            color: 'lightgrey',
            paddingBottom: 15,
            }}
              variant="body1"
              >Creator
          </Typography>
        </Grid>
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}>  
        <TextField 
            style={{width: 250}}
            size="small"
            variant="outlined"
            required
            />
        <Button
          style={{marginLeft:10}}
          // onClick={uploadCreator}
          variant="outlined"
        >
          Submit
        </Button>
      </Grid>
      
      <Divider/>

      <Grid item xs={12}> 
        <Typography 
          style={{
          color: 'lightgrey',
          paddingTop: 30,
          paddingBottom: 15,
          }}
            variant="body1"
            // className="animate__animated animate__fadeInDown"
            >Add Files
        </Typography>
      </Grid>
                
      <Grid 
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      item xs={12}> 

        <TextField 
          style={{marginRight:10, width:253}}
          size="small"
          display="none"
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]) ;
          }}
        />

        <Button 
          onClick={uploadImage}
          variant="outlined"
        >
          Upload      
        </Button>

      </Grid>
      
      <Grid 
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      item xs={12}> 
        
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