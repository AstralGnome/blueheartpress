
import { Grid, Button, IconButton, Typography, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
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
  const textRef         = useRef(null)

  const { userId }                             = useContext(UserIdContext);
  const { projectTitle, setProjectTitle }      = useContext(ProjectTitleContext);
  const { projectSummary, setProjectSummary }  = useContext(ProjectSummaryContext);
  const { cloudinaryUrl, setCloudinaryUrl }    = useContext(CloudinaryUrlContext);
  const { creatorName, setCreatorName}         = useContext(CreatorNameContext);

  const chooseFileHandleClick = () => {
    hiddenFileInput.current.click();
  }

  const clearText = () => {
    textRef.current.value = "";
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
  const [textField, setTextField] = useState("")
  // const [creatorFieldValues, setCreatorFieldValues] = useState('')

  const deleteCreator = (index) => {
    setCreatorName([...creatorName.filter((creator, i) => i !== index)]
    )}
  // const deleteCreator = (index) => {
  //   setCreatorName(creatorName.filter(creator => creatorName.index !== creator.index))
  // }

  // const addTextField = () => {
  //   setTextField([...textField, {
  //     id: textField
  //   }]);
  // }

  // const removeTextField = (id) => {
  //   const newFieldValue = textField.filter((creator) => creator.id !== id );
  //   setTextField(newFieldValue);
  // }

  console.log("TEXTFIELD:", textField);
  console.log("CREATOR_NAME", creatorName)
  
  return (
  <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    style={{ minHeight: '100vh' }}>
    
    <Grid
      style={{paddingTop: 10}} 
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
      {/* {textField.map((creator) =>   */}
      <Grid 
        // key={creator.id}
        container
        justifyContent="center"
        alignItems="center"
        item xs={12}>
        <TextField
            inputRef={textRef}
            style={{width: 320, paddingLeft: 10, paddingBottom:10}}
            size="small"
            variant="outlined"
            required
            onChange={(e) => {
            setTextField(e.target.value);
              }}/>
            {/* setCreatorName(...creatorName, event.target.value);
              }}/> */}
        <IconButton
          onClick={() => {
            setCreatorName(creatorName.concat(textField));
            clearText();
            setTextField();
          }}
            variant="outlined"
          >
          {textField && <CheckIcon/>}
          </IconButton>
      </Grid>
      
      <Grid>
      {creatorName.map((creatorName, index) => (
      <Grid
        key={index}
        container
        justifyContent="space-between"
        alignItems="center"
        item xs={12}
        style={{width : 325}}
        >
          <Typography key={index} style={{color: "white"}}>&#8226; {creatorName}</Typography>  
          <IconButton
            variant="outlined"
            style={{margin: 0, padding: 0}}
            onClick={() => {
              deleteCreator(index)
              console.log(index)
          }}
          >
            {creatorName.length > 0 && <RemoveIcon />}
          </IconButton>
      </Grid>
      ))}
      </Grid>
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