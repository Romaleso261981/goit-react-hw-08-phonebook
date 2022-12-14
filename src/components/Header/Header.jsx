import * as React from 'react';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authOperations';
import { selectIsLogin, selectUser } from '../../redux/selectors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navMenu, setNavMenu] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const emailUser = user.email;
  const nameUser = user.name;
  const isAuth = useSelector(selectIsLogin);

  React.useEffect(() => {
    if (isAuth) {
      setNavMenu(['Contacts']);
    } else {
      setNavMenu(['Register', 'Login']);
    }
  }, [isAuth]);

  const handleClickNavMenu = event => {
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase();
    navigate(goTo);
  };

  const handleClickMenu = event => {
    handleClickNavMenu(event);
    handleCloseUserMenu();
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    handleCloseUserMenu();
  };

  const clickToHome = () => {
    navigate('/');
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: 'rgb(25, 100 , 130)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              sx={{ color: 'white', fontSize: 20 }}
              onClick={clickToHome}
              component="button"
            >
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: 'none', sm: 'inline' },
                  fontSize: 40,
                  flexGrow: 1,
                  fontFamily: 'roboto',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                contact book
              </Typography>
            </Button>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {navMenu.map(page => (
                <Button
                  key={page}
                  onClick={handleClickNavMenu}
                  sx={{ my: 6, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {isAuth && (
              <Typography mr={2} sx={{ fontSize: 30 }}>
                Hello {nameUser}
              </Typography>
            )}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, size: 'large' }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </Tooltip>
              {isAuth ? (
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={emailUser}>
                    <Typography>{emailUser}</Typography>
                  </MenuItem>
                  <MenuItem key="Logout" onClick={handleLogOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              ) : (
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key="Register" onClick={handleClickMenu}>
                    <Typography>Register</Typography>
                  </MenuItem>
                  <MenuItem key="Login" onClick={handleClickMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Menu>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Typography component={'section'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Typography>
    </>
  );
};
export default ResponsiveAppBar;
