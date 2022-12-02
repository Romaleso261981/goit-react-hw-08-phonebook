import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {Link, LinkHome} from './LogIn.styled';

export default function ButtonAppBar() {

    // const handleSubmitForm = event => {
    //     event.preventDefault();
    //     console.log("handleSubmitForm");
    // };
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          
                  <nav>
                <LinkHome to='/'>Home</LinkHome>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
}