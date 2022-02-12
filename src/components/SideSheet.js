import { Paragraph, SideSheet, Position, Pane, Card, Tablist, Tab, Heading } from 'evergreen-ui';
import React from 'react';
import "../style/Slider.css"
import {BsFillInfoCircleFill} from "react-icons/bs"
import "animate.css"
import "../style/SideSheet.css"

function SideSheetComponent() {
const [selectedIndex, setSelectedIndex] = React.useState(0)
const [isShown, setIsShown] = React.useState(false)
  
const ExtraContent = [<Heading color="white">Concept Art</Heading>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra1.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra2.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra3.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra4.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra5.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra6.jpg" alt="intriguing "></img>,
<img class= "ExtraContent" src="../Images/ExtraContent/Extra7.jpg" alt="intriguing "></img>]
const Support = [<iframe class="Support" title="Girl" width="480" height="270" src="https://www.kickstarter.com/projects/156287353/the-tomorrow-girl-dresden-codak-volume-1/widget/video.html" frameborder="0" scrolling="no"></iframe>, <a href='http://kck.st/13cegZV'>Click to Support!</a>]
const Summary = [<Heading color="white">Summary</Heading>, "The Words of Lord Dunsany: Charon leaned forward and rowed. All things were one with his weariness. It was not with him a matter of years or of centuries, but of wide floods of time, and an old heaviness and a pain in the arms that had become for him part of the scheme that the gods had made and was of a piece with Eternity. If the gods had even sent him a contrary wind it would have divided all time in his memory into two equal slabs. So grey were all things always where he was that if any radiance lingered a moment among the dead, on the face of such a queen perhaps as Cleopatra, his eyes could not have perceived it. It was strange that the dead nowadays were coming in such numbers. They were coming in thousands where they used to come in fifties. It was neither Charon's duty nor his wont to ponder in his grey soul why these things might be. Charon leaned forward and rowed. Then no one came for a while. It was not usual for the gods to send no one down from Earth for such a space. But the gods knew best. Then one man came alone. And the little shade sat shivering on a lonely bench and the great boat pushed off. Only one passenger: the gods knew best. And great and weary Charon rowed on and on beside the little, silent, shivering ghost. And the sound of the river was like a mighty sigh that Grief in the beginning had sighed among her sisters, and that could not die like the echoes of human sorrow failing on earthly hills, but was as old as time and the pain in Charon's arms. Then the boat from the slow, grey river loomed up to the coast of Dis and the little, silent shade still shivering stepped ashore, and Charon turned the boat to go wearily back to the world. Then the little shadow spoke, that had been a man. I am the last, he said.No one had ever made Charon smile before, no one before had ever made him weep...Come with me thence or linger with me there and either we shall come to romantic lands which the men of the caravans only speak of in song; or else we shall listlessly walk in a land so lovely that even the butterflies that float about it when they see their images flash in the sacred pools are terrified by their beauty, and each night we shall hear the myriad nightingales all in one chorus sing the stars to death. Do this and I will send heralds far from here with tidings of thy beauty; and they shall run and come to Séndara and men shall know it there who herd brown sheep; and from Séndara the rumour shall spread on, down either bank of the holy river of Zoth, till the people that make wattles in the plains shall hear of it and sing; but the heralds shall go northward along the hills until they come to Sooma. And in that golden city they shall tell the kings, that sit in their lofty alabaster house, of thy strange and sudden smiles. And often in distant markets shall thy story be told by merchants out from Sooma as they sit telling careless tales to lure men to their wares."]

  return (
    <>
      <SideSheet 
          position={Position.LEFT}
          isShown={isShown} 
          onCloseComplete={() => setIsShown(false)} 
          preventBodyScrolling 
          containerProps={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column'
          }}>
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="black">
          <Pane className="SideHeading" padding={16} borderBottom="muted">
            <Heading size={600} color="white">Strange Assassins</Heading>
            <Paragraph size={400} color="white">Story: Keenan Reed / Art: Eugenio Belgrado</Paragraph>
          </Pane>
          <Pane display="flex" padding={8} background="black">
            <Tablist>
              {['Summary', 'Extra Content', 'Support'].map((tab, index) => (
                <Tab
                  className="EverGreenTab"
                  appearance="primary"
                  // color="white"
                  key={tab}
                  isSelected={selectedIndex === index}
                  onSelect={() => setSelectedIndex(index)}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="black" padding={16}>
          <Card
            // elevation={0}
            // height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
          </Card>
            {
              selectedIndex === 0 ? <Paragraph color="white">{Summary}</Paragraph>
            : selectedIndex === 1 ? <Paragraph color="white">{ExtraContent}</Paragraph>
            : <Paragraph color="white">{Support}</Paragraph>
            }            
        </Pane>
      </SideSheet>
      <BsFillInfoCircleFill className="SideSheetButton animate__animated animate__heartBeat animate__delay-2s animate__slower" onClick={() => setIsShown(true)}/>
    </>
  )
}

export default SideSheetComponent;