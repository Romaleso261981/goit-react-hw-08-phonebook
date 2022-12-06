import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClickNavMenu = event => {
    const goTo = event?.currentTarget?.innerText?.toLocaleLowerCase();
    navigate(goTo);
  };
  return (
    <Box
      position="relative"
      component="div"
      sx={{
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: 35, textAlign: 'center' }}>
        Hello, to work on our site you must log in.
      </Typography>
      <Box
        component="div"
        sx={{
          '& > :not(style)': { mr: 5, width: '20%' },
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 1,
          alignItems: 'center',
        }}
      >
        <Button
          onClick={handleClickNavMenu}
          sx={{
            color: 'white',
            bgcolor: 'rgb(146, 80 , 130)',
            '&:hover': { bgcolor: 'rgb(194, 120, 118)' },
          }}
        >
          Register
        </Button>
        <Button
          sx={{
            color: 'white',
            bgcolor: 'rgb(146, 80 , 130)',
            '&:hover': { bgcolor: 'rgb(194, 120, 118)' },
          }}
          onClick={handleClickNavMenu}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
