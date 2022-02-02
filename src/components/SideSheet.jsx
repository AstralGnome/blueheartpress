import { Paragraph, SideSheet, Position } from 'evergreen-ui';
import React from 'react';
import "../style/Slider.scss"
import {BsFillInfoCircleFill} from "react-icons/bs"

function SideSheetComponent() {

const [isShown, setIsShown] = React.useState(false)
  
  return (
    <>
      <SideSheet position={Position.LEFT} isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <BsFillInfoCircleFill className="SideSheetButton" onClick={() => setIsShown(true)}/>
    </>
  )
}

export default SideSheetComponent;
