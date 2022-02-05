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
      <Menu.Group title="Actions">
        <Menu.Item icon={PeopleIcon}>Share...</Menu.Item>
        <Menu.Item icon={CircleArrowRightIcon}>Move...</Menu.Item>
        <Menu.Item icon={EditIcon} secondaryText="⌘R">
          Rename...
        </Menu.Item>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group title="destructive">
        <Menu.Item icon={TrashIcon} intent="danger">
          Delete...
        </Menu.Item>
      </Menu.Group>
    </Menu>
  }
>
  <IconButton className="Navbar" icon={MenuIcon}/>
</Popover>


  <div className="Navbar">
    <div className="Navbar"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>
  </div>
  </>
  )
}

export default Navbar;
