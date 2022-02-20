// import { EditIcon, HandIcon, HomeIcon, IconButton, InfoSignIcon, Menu, MenuIcon, PersonIcon, Popover, ShareIcon, StarEmptyIcon, UserIcon } from 'evergreen-ui';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { position } from 'ui-box';
// import "../style/Navbar.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import "../style/Navbar.css"
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment >
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            className="Navbar" 
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className="MenuIcon" sx={{ width: 32, height: 32 }}><MdMenu className="MenuIcon" /></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Link className="LinkText" to="/user">
          <MenuItem>
            <ListItemIcon>
            <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}

//     <>
//     <Popover
//   position={position.BOTTOM_LEFT}
//   content={
//     <Menu>
//       <div className="Menu">
//         <div className="MenuHeading" title="Navigation">Navigation</div>
//         <Link className="LinkText" to="/"><HomeIcon size={24} className="MenuIcon"/>Home</Link>
//         <Link className="LinkText" to="/about"><InfoSignIcon size={24} className="MenuIcon"/>About</Link>
//         <Link className="LinkText" to="/contact"><HandIcon size={24} className="MenuIcon"/>Contact</Link>
//         <Link className="LinkText" to="/user"><PersonIcon size={24} className="MenuIcon"/>User Page</Link>
//         <div className="Spacer"></div>
//       </div>
//       <div className="Menu">
//       <div className="MenuHeading" title="Actions">Actions</div>
//         <Link className="LinkText" to="/user"><StarEmptyIcon size={24} className="MenuIcon"/>Favorite</Link>
//         <Link className="LinkText" to="/user"><ShareIcon size={24} className="MenuIcon"/>Share</Link>
//         <Link className="LinkText" to="/user"><UserIcon size={24} className="MenuIcon"/>Logout</Link>
//         <Link className="LinkText" to="/user"><EditIcon size={24} className="MenuIcon"/>Edit</Link>
//         <div className="Spacer"></div>
//       </div>
//     </Menu>
//   }
// >
//   <IconButton className="Navbar" iconSize={25} icon={MenuIcon}/>
// </Popover>
//   </>