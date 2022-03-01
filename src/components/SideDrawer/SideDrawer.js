import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {BsFillInfoCircleFill} from "react-icons/bs"
import BasicTabs from '../TabPanel';

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