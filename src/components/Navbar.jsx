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
      <Menu.Group title="Navigation">
        <Link to="/"><Menu.Item icon={PeopleIcon}>Home</Menu.Item></Link>
        <Link to="/about"><Menu.Item icon={CircleArrowRightIcon}>About</Menu.Item></Link>
        <Link to="/contact"><Menu.Item icon={EditIcon}>Contact</Menu.Item></Link>
      </Menu.Group>
      <Menu.Group title="Actions">
        <Link to="/profile"><Menu.Item icon={PeopleIcon}>Logout</Menu.Item></Link>
        <Link to="/"><Menu.Item icon={PeopleIcon}>Share</Menu.Item></Link>
        <Menu.Item icon={EditIcon} intent="danger">Edit</Menu.Item>
      </Menu.Group>
      <Menu.Divider />
    </Menu>
  }
>
  <IconButton className="Navbar" iconSize={"21px"} icon={MenuIcon}/>
</Popover>
  </>
  )
}

export default Navbar;
