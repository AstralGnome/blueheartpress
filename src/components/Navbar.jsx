import { CircleArrowRightIcon, EditIcon, IconButton, Menu, MenuIcon, PeopleIcon, Popover, TrashIcon } from 'evergreen-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import { position } from 'ui-box';
import "../style/Navbar.scss"


function Navbar() {
  return (
    <>
    <Popover
  position={position.BOTTOM_LEFT}
  content={
    <Menu>
      <div className="Menu" title="Navigation">
        <Link to="/"><Menu.Item className="Menu" icon={PeopleIcon}>Home</Menu.Item></Link>
        <Link to="/about"><Menu.Item className="Menu" icon={CircleArrowRightIcon}>About</Menu.Item></Link>
        <Link to="/contact"><Menu.Item className="Menu" icon={EditIcon}>Contact</Menu.Item></Link>
      </div>
      <Menu.Group title="Actions">
        <Link to="/profile"><Menu.Item className="Menu" icon={PeopleIcon}>Logout</Menu.Item></Link>
        <Link to="/"><Menu.Item className="Menu" icon={PeopleIcon}>Share</Menu.Item></Link>
        <Menu.Item className="Menu" icon={EditIcon} intent="danger">Edit</Menu.Item>
      </Menu.Group>
    </Menu>
  }
>
  <IconButton className="Navbar" iconSize={"21px"} icon={MenuIcon}/>
</Popover>
  </>
  )
}

export default Navbar;
