import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PersonAdd from '@mui/icons-material/PersonAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import IcecreamIcon from '@mui/icons-material/Icecream';
import PersonRemove from '@mui/icons-material/PersonRemove';
import Settings from '@mui/icons-material/Settings';
import "../Navbar/Navbar.css"
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LoginContext } from '../../Helper/Context'
import { UsernameContext } from '../../Helper/Context'
import { useContext } from 'react'

// const express       = require('express');
// const app           = express();
// app.use(express.json());

export default function Navbar() {
  
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  const { username }              = useContext(UsernameContext)

  //This logout does NOT result in auth:false!
  //https://stackoverflow.com/questions/16360293/how-to-log-out-from-basicauth-express
  const logOut = () => {
    // app.get('/logout', (req, res) => {
    //   res.status(401).end()
    // })
    setLoggedIn(false)
  }

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
        {/* Add title property to Tooltip to create little messages on hover. */}
        {/* <Tooltip> */}
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
        {/* </Tooltip> */}
      </Box>
      <Menu
        disableScrollLock={true}
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
      {/* Rather than wrapping the menu Item in React Router Dom Link I took a shortcut and used the component property in MUI's MenuItem. Hope that doesn't cause any routing issues; if it does I should try and remember to come back and check these links first! */}
        <MenuItem component={Link} to={"/"}>
          <HomeIcon sx={{paddingRight: "10px"}}/> Home
        </MenuItem>
        {/* <Link className="LinkText" to="/user"> */}
        <MenuItem component={Link} to={"/user"}>
          <ListItemIcon>
            <IcecreamIcon fontSize="small" />
          </ListItemIcon>
          Peruse
        </MenuItem>
        {/* </Link> */}
        
        <Divider />

        {loggedIn &&
        <MenuItem component={Link} to={"/user"}>
          <Avatar fontSize="small"/> {username}
        </MenuItem>
        }
        
        { loggedIn &&
        <MenuItem component={Link} to={"/publish"}>
          <ListItemIcon>
            <AutoStoriesIcon fontSize="small" />
          </ListItemIcon>
          Publish
        </MenuItem>
        }
        
        {loggedIn ?
        <MenuItem onClick={logOut} component={Link} to={"/login"}>
          <ListItemIcon>
            <PersonRemove fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        :
        <MenuItem component={Link} to={"/login"}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
        }

        { loggedIn &&
        <MenuItem component={Link} to={"/user"}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
}