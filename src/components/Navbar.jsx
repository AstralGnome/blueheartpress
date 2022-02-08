import { EditIcon, HandIcon, HomeIcon, IconButton, InfoSignIcon, Menu, MenuIcon, Popover, ShareIcon, StarEmptyIcon, UserIcon } from 'evergreen-ui';
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
      <div className="Menu">
        <div className="MenuHeading" title="Navigation">Navigation</div>
        <Link className="LinkText" to="/"><HomeIcon size={24} className="MenuIcon"/>Home</Link>
        <Link className="LinkText" to="/about"><InfoSignIcon size={24} className="MenuIcon"/>About</Link>
        <Link className="LinkText" to="/contact"><HandIcon size={24} className="MenuIcon"/>Contact</Link>
        <div className="Spacer"></div>
      </div>
      <div className="Menu">
      <div className="MenuHeading" title="Actions">Actions</div>
        <Link className="LinkText" to="/"><StarEmptyIcon size={24} className="MenuIcon"/>Favorite</Link>
        <Link className="LinkText" to="/"><ShareIcon size={24} className="MenuIcon"/>Share</Link>
        <Link className="LinkText" to="/about"><UserIcon size={24} className="MenuIcon"/>Logout</Link>
        <Link className="LinkText" to="/"><EditIcon size={24} className="MenuIcon"/>Edit</Link>
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
