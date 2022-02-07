import { CircleArrowRightIcon, EditIcon, GlobeIcon, HandIcon, HomeIcon, IconButton, LogOutIcon, Menu, MenuIcon, PeopleIcon, Popover, ShareIcon, TrashIcon } from 'evergreen-ui';
import React from 'react';
import { BsFillPersonFill, BsFillShareFill, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { position } from 'ui-box';
import "../style/Navbar.scss"

function Navbar() {
  return (
    <>
    <Popover
  position={position.BOTTOM_LEFT}
  content={
    <Menu >
      <div className="Menu">
        <div className="MenuHeading" title="Navigation">Navigation</div>
        <Link className="LinkText" to="/"><HomeIcon size={24} className="MenuIcon"/>Home</Link>
        <Link className="LinkText" to="/about"><HandIcon size={24} className="MenuIcon"/>About</Link>
        <Link className="LinkText" to="/contact"><GlobeIcon size={24} className="MenuIcon"/>Contact</Link>
        <div className="Spacer"></div>
      </div>
      <div className="Menu">
      <div className="MenuHeading" title="Actions">Actions</div>
        <Link className="LinkText" to="/"><ShareIcon size={24} className="MenuIcon"/>Share</Link>
        <Link className="LinkText" to="/about"><LogOutIcon size={24} className="MenuIcon"/>Logout</Link>
        <Link className="LinkText" to="/"><EditIcon size={24} className="MenuIcon"/>Edit</Link>
        <div className="Spacer"></div>
      </div>
    </Menu>
  }
>
  <IconButton className="Navbar" iconSize={"21px"} icon={MenuIcon}/>
</Popover>
  </>
  )
}

export default Navbar;
