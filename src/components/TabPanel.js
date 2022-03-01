import * as React from 'react';
import { useState } from "react"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  const itemOne = "Fun Dummy Text by Lord Dunsany: Charon leaned forward and rowed. All things were one with his weariness. It was not with him a matter of years or of centuries, but of wide floods of time, and an old heaviness and a pain in the arms that had become for him part of the scheme that the gods had made and was of a piece with Eternity. If the gods had even sent him a contrary wind it would have divided all time in his memory into two equal slabs. So grey were all things always where he was that if any radiance lingered a moment among the dead, on the face of such a queen perhaps as Cleopatra, his eyes could not have perceived it. It was strange that the dead nowadays were coming in such numbers. They were coming in thousands where they used to come in fifties. It was neither Charon's duty nor his wont to ponder in his grey soul why these things might be. Charon leaned forward and rowed. Then no one came for a while. It was not usual for the gods to send no one down from Earth for such a space. But the gods knew best. Then one man came alone. And the little shade sat shivering on a lonely bench and the great boat pushed off. Only one passenger: the gods knew best. And great and weary Charon rowed on and on beside the little, silent, shivering ghost. And the sound of the river was like a mighty sigh that Grief in the beginning had sighed among her sisters, and that could not die like the echoes of human sorrow failing on earthly hills, but was as old as time and the pain in Charon's arms. Then the boat from the slow, grey river loomed up to the coast of Dis and the little, silent shade still shivering stepped ashore, and Charon turned the boat to go wearily back to the world. Then the little shadow spoke, that had been a man. I am the last, he said.No one had ever made Charon smile before, no one before had ever made him weep...Come with me thence or linger with me there and either we shall come to romantic lands which the men of the caravans only speak of in song; or else we shall listlessly walk in a land so lovely that even the butterflies that float about it when they see their images flash in the sacred pools are terrified by their beauty, and each night we shall hear the myriad nightingales all in one chorus sing the stars to death. Do this and I will send heralds far from here with tidings of thy beauty; and they shall run and come to Séndara and men shall know it there who herd brown sheep; and from Séndara the rumour shall spread on, down either bank of the holy river of Zoth, till the people that make wattles in the plains shall hear of it and sing; but the heralds shall go northward along the hills until they come to Sooma. And in that golden city they shall tell the kings, that sit in their lofty alabaster house, of thy strange and sudden smiles. And often in distant markets shall thy story be told by merchants out from Sooma as they sit telling careless tales to lure men to their wares."
  const itemTwo = [
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra1.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra2.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra3.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra4.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra5.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra6.jpg" alt="intriguing "></img>,
  <img class= "ExtraContent" src="../Images/ExtraContent/Extra7.jpg" alt="intriguing "></img>
    ]
  const itemThree = [<iframe class="Support" title="Girl" width="480" height="270" src="https://www.kickstarter.com/projects/156287353/the-tomorrow-girl-dresden-codak-volume-1/widget/video.html" frameborder="0" scrolling="no"></iframe>, <a href='http://kck.st/13cegZV'>Click to Support!</a>]
  
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    //Vmax is a very useful width property that takes into account the percentage width of the viewing area!
    <Box sx={{ width: '35vmax' }}>
      <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Extra Content" {...a11yProps(1)} />
          <Tab label="Support" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {itemOne}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {itemTwo}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {itemThree}
      </TabPanel>
    </Box>
  );
}