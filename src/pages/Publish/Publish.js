
import { Grid, Button, IconButton, Typography, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
// import CheckIcon from '@mui/icons-material/Check';
import {Image} from 'cloudinary-react'
import Axios from 'axios'
import "./Publish.css"
import { useRef } from 'react';

import { useContext } from 'react';
import {
  UserIdContext,
  ProjectTitleContext,
  CreatorNameContext,
  ProjectSummaryContext,
  CloudinaryUrlContext
  } from '../../Helper/Context';
import { useState } from 'react';



function Publish() {
  
  const hiddenFileInput = useRef(null)

  const { userId }                             = useContext(UserIdContext);
  const { projectTitle, setProjectTitle }      = useContext(ProjectTitleContext);
  const { projectSummary, setProjectSummary }  = useContext(ProjectSummaryContext);
  const { cloudinaryUrl, setCloudinaryUrl }    = useContext(CloudinaryUrlContext);
  const { creatorName, setCreatorName}         = useContext(CreatorNameContext);

  const chooseFileHandleClick = () => {
    hiddenFileInput.current.click();
  }

  const submitProject = () => {
    Axios.post("http://localhost:3001/publish", {
      project_title:   projectTitle,
      id_user_project: userId,
      project_creator: creatorName,
      project_summary: projectSummary
    }).then(response => console.log('PT Posting data', response)) 
      .catch(err => console.log(err))
  }

  const uploadImage = () => {
    
    const formData = new FormData();
    formData.append("upload_preset", "xhpu1wfy");
    formData.append("file", cloudinaryUrl);
  
    Axios.post('https://api.cloudinary.com/v1_1/astralgnome/image/upload',
    formData
    ).then(res => setCloudinaryUrl(res.data._url))
      .then(err => console.log(err))
  };

  //10 possible text fields:
  const [textFieldValues, setTextFieldValues] = useState([{id:0, value:""}])
  
  const addTextField = () => {
    setTextFieldValues([...textFieldValues, {
      id: textFieldValues.length,
      value: "",
    }]);
  }

  return (
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
            style={{width: 350}}
            size="small"
            variant="outlined"
            required
            // fullWidth
            onChange={(event) => {
              setProjectTitle(event.target.value);
            }}
        />
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}> 
      </Grid>

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
              >{"Creator(s)"}
          </Typography>
        </Grid>
      {textFieldValues.map((creator) =>  
      <Grid 
        key={creator.id}
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}>
        <TextField
            key={creator.id}
            style={{width: 350}}
            size="small"
            variant="outlined"
            required
            onChange={(event) => {
              setCreatorName(event.target.value);
              }}/>
      </Grid>
      )}

      <IconButton
        onClick={() => {
          console.log(textFieldValues)
          addTextField();
        // textInput.current.value='';
        }}
          style={{marginLeft:10}}
          variant="outlined"
        >
          <AddIcon/>
        </IconButton>

      <Divider/>

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
            >Project Summary
          </Typography>
        </Grid>
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}>  
        <TextField 
            multiline
            rows={4}
            style={{width: 350}}
            size="small"
            variant="outlined"
            required
            onChange={(event) => {
              setProjectSummary(event.target.value);
            }}
        />
        <Button
        onClick={ () => {
        submitProject();
        // textInput.current.value='';
        }}
          style={{marginLeft:10}}
          variant="outlined"
        >
          Submit
        </Button>
      </Grid>

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
            setCloudinaryUrl(event.target.files[0]);
          }}
        />

        <Typography
          noWrap
          style={{paddingLeft:5, paddingRight:5, color: "white", width:120, overflow:"hidden"}}
          >{cloudinaryUrl.name ?? `No file chosen...`}

        </Typography>

        <Button 
          onClick={uploadImage}
          variant="outlined"
        >
          Submit      
        </Button>

      </Grid>
      
      <Grid 
      style={{paddingTop: 15}}
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      item xs={12}>

        <Typography
          noWrap
          style={{
            width:255, 
            color:"white", 
            paddingRight:5, 
            paddingLeft:10
            }}
        >Name of file
        </Typography>
        
        <Image 
          style={{width:65}}
          cloudName="astralgnome" 
          publicId="https://res.cloudinary.com/astralgnome/image/upload/v1649700702/ngbbbriawov6phxxnjbr.jpg"
        /> 

        <IconButton 
          aria-label="delete" 
          // disabled 
          style={{opacity:"100%"}}  
          // onClick={console.log(cloudinaryUrl)}
          >   
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Button
            onClick={ () => {
            submitProject();
            // textInput.current.value='';
            }}
          style={{marginTop:20}}
          variant="outlined"
        >
          Submit
        </Button>

    </Grid>
  )
}

export default Publish;