import * as React from 'react';
import { useState } from "react"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Link } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const tabData = [
    {
    id: "1",
    content: "DUMMY TEXT, BY LORD DUNSANY: Charon leaned forward and rowed. All things were one with his weariness. It was not with him a matter of years or of centuries, but of wide floods of time, and an old heaviness and a pain in the arms that had become for him part of the scheme that the gods had made and was of a piece with Eternity. If the gods had even sent him a contrary wind it would have divided all time in his memory into two equal slabs. So grey were all things always where he was that if any radiance lingered a moment among the dead, on the face of such a queen perhaps as Cleopatra, his eyes could not have perceived it. It was strange that the dead nowadays were coming in such numbers. They were coming in thousands where they used to come in fifties. It was neither Charon's duty nor his wont to ponder in his grey soul why these things might be. Charon leaned forward and rowed. Then no one came for a while."
    },
    {
    id: "2",
    content: 
    <>
      <Typography component="span">CONCEPT ART, FOR INSTANCE</Typography>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra1.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra2.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra3.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra4.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra5.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra6.jpg" alt="intriguing "></Grid>
      <Grid component="img" className= "ExtraContent" src="../Images/ExtraContent/Extra7.jpg" alt="intriguing "></Grid>
    </>
    },
    {
    id: "3",
    content: 
    <>
      <Typography component="span">CROWDFUND EXAMPLE LINK</Typography>
      <iframe className="Support" title="Girl" width="480" height="270" src="https://www.kickstarter.com/projects/156287353/the-tomorrow-girl-dresden-codak-volume-1/widget/video.html" frameBorder="0" scrolling="no"></iframe>
      <Link component="span" href='http://kck.st/13cegZV'>Click to Support!</Link>
    </>
  
    }
  ];
  
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    //Vmax is a very useful width property that takes into account the percentage width of the viewing area!
    <>
    <Box sx={{ width: '35vmax' }}>
      <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Extra Content" {...a11yProps(1)} />
          <Tab label="Support" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel key={tabData[0].id} value={value} index={0}>
        {tabData[0].content}
      </TabPanel>
      <TabPanel key={tabData[1].id} value={value} index={1}>
        {tabData[1].content}
      </TabPanel>
      <TabPanel key={tabData[2].id} value={value} index={2}>
        {tabData[2].content}
      </TabPanel>
    </Box>
    </>
  );
}