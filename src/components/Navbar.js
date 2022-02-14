import { HandIcon, HomeIcon, IconButton, InfoSignIcon, Menu, MenuIcon, PersonIcon, Popover } from 'evergreen-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import { position } from 'ui-box';
import "../style/Navbar.css"

function Navbar() {
  return (
    <>
    <Popover
  position={position.BOTTOM_LEFT}
  content={
    <Menu>
      <div className="Menu">
        <div className="MenuHeading" title="Navigation">Navigation</div>
        <Link className="LinkText" to="/"></Link>
        <Link className="LinkText" to="/about"></Link>
        <Link className="LinkText" to="/contact"></Link>
        <Link className="LinkText" to="/user"></Link>
        <div className="Spacer"></div>
      </div>
      <div className="Menu">
      <div className="MenuHeading" title="Actions">Actions</div>
        <Link className="LinkText" to="/user"></Link>
        <Link className="LinkText" to="/user"></Link>
        <Link className="LinkText" to="/user"></Link>
        <Link className="LinkText" to="/user"></Link>
        <div className="Spacer"></div>
      </div>
    </Menu>
  }
>
  <IconButton className="Navbar" iconSize={25} icon={MenuIcon}/>
</Popover>
  </>
  )
}

export default Navbar;
