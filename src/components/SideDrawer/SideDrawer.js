import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';   
import Typography from '@mui/material/Typography';   
import Drawer from '@mui/material/Drawer';
import {BsFillInfoCircleFill} from "react-icons/bs"
import BasicTabs from '../TabPanel/TabPanel';
import "../TabPanel/TabPanel.css";

export default function SideDrawer() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => () => {
    setState( open );
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(true)}
      onKeyDown={toggleDrawer(true)}
    >
    <Typography variant="h6" sx={{marginTop: 1, marginLeft: 2}}>Strange Assassins</Typography>
    <Typography variant="subtitle1" sx={{ marginLeft: 2}}>by Keenan Reed and Eugenio Belgrado</Typography>
      <BasicTabs/>
    </Box>
  );
  
  return (
    <>
      <BsFillInfoCircleFill className="SideSheetButton animate__animated animate__heartBeat animate__delay-2s animate__slower" onClick={toggleDrawer(true)}/>
      <Drawer open={state} onClose={toggleDrawer(false)}>{list()}</Drawer>
    </>
    
  );
}