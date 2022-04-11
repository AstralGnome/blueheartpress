
import { Grid, Button, IconButton, Typography, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import {Image} from 'cloudinary-react'
import Axios from 'axios'
import "./Publish.css"
import { useRef } from 'react';

function Publish() {
  
  // Axios.defaults.withCredentials = true;
  
  const hiddenFileInput = useRef(null)
  const textInput       = useRef(null)
  
  const chooseFileHandleClick = () => {
    hiddenFileInput.current.click();
  }
  
  const submitProjectTitle = () => {
    Axios.post("http://localhost:3001/publish", {
      project_title: projectTitle
    })
  }

  const [imageSelected, setImageSelected] = useState('')
  // const [loading, setLoading]          = useState(false)
  const [projectTitle, setProjectTitle]   = useState('')
  // const [creatorName, setCreatorName]  = useState('')

  const uploadImage = () => {
    
    const formData = new FormData();
    formData.append("upload_preset", "xhpu1wfy");
    formData.append("file", imageSelected);
  
    Axios.post('https://api.cloudinary.com/v1_1/astralgnome/image/upload',
    formData
    ).then(res => setImageSelected(res.data.secure_url))
      .then(err => console.log(err))
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
            inputRef={textInput}
            // fullWidth
            onChange={(event) => {
              setProjectTitle(event.target.value)
            }}
        />

        <Button 
          variant="outlined"
          style={{
            marginLeft:10
            }}
          onClick={ () => {
            submitProjectTitle();
            console.log('hit');
            textInput.current.value='';
            }}
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
        
        <Button
          onClick={chooseFileHandleClick}
          variant="outlined">
          Choose file
        </Button>

        <input 
          style={{marginRight:10, width:253, display: "none"}}
          size="small"
          type="file"
          ref={hiddenFileInput}
          onChange={(event) => {
            setImageSelected(event.target.files[0]) ;
          }}
        />

        <Typography
          noWrap
          style={{paddingLeft:5, paddingRight:5, color: "white", width:120, overflow:"hidden"}}
          >{imageSelected.name ?? `No file chosen...`}

        </Typography>

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
        
        <Image 
          style={{width:65}}
          cloudName="astralgnome" 
          publicId="https://res.cloudinary.com/astralgnome/image/upload/v1649700702/ngbbbriawov6phxxnjbr.jpg"
        /> 

        <IconButton 
          aria-label="delete" 
          // disabled 
          style={{opacity:"100%"}}  
          onClick={console.log(imageSelected.name)}
          >   
          <DeleteIcon />
        </IconButton>
      
      </Grid>

    </Grid>
  )
}

export default Publish;