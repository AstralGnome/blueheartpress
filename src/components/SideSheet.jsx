import { Paragraph, SideSheet, Position, Pane, Card, Tablist, Tab, Heading } from 'evergreen-ui';
import React from 'react';
import "../style/Slider.scss"
import {BsFillInfoCircleFill} from "react-icons/bs"
import "animate.css"

function SideSheetComponent() {
const [selectedIndex, setSelectedIndex] = React.useState(0)
const [isShown, setIsShown] = React.useState(false)
  
console.log(selectedIndex)

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
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>Strange Assassins</Heading>
            <Paragraph size={400} color="muted">Story: Keenan Reed / Art: Eugenio Belgrado</Paragraph>
          </Pane>
          <Pane display="flex" padding={8}>
            <Tablist>
              {['Summary', 'Extra Content', 'Support'].map((tab, index) => (
                <Tab
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
            backgroundColor="black"
            // elevation={0}
            // height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading color="white">Summary</Heading>
          </Card>
            {
              selectedIndex === 0 ? <Paragraph>Index 0</Paragraph>
            : selectedIndex === 1 ? <Paragraph>Index 1</Paragraph>
            : <Paragraph>Index 2</Paragraph>
            }            
        </Pane>
      </SideSheet>
      <BsFillInfoCircleFill className="SideSheetButton animate__animated animate__heartBeat animate__delay-2s animate__slower" onClick={() => setIsShown(true)}/>
    </>
  )
}

export default SideSheetComponent;