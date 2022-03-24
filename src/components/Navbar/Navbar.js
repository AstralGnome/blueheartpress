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
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import "../Navbar/Navbar.css"
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
        <MenuItem component={Link} to={"/user"}>
          <Avatar /> Experience
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to={"/login"}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Log In
        </MenuItem>
        {/* <Link className="LinkText" to="/user"> */}
          <MenuItem component={Link} to={"/user"}>
            <ListItemIcon>
            <Logout fontSize="small" />
            </ListItemIcon>
            Browse
          </MenuItem>
        {/* </Link> */}
        <MenuItem component={Link} to={"/user"}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}