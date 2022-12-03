import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { register, reset} = useForm({
        mode: 'onChange',
});
    
    const onSubmit = (userData) => {
        console.log('onSubmit');
        console.log(userData);
        dispatch(registerUser(userData))
        reset();
    };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        '& > :not(style)': { mb: 2, width: '100%' },
        maxWidth: 400,
        minHeight: 150,
        margin: '20px auto',
        borderRadius: 2,
        boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Typography sx={{ fontSize: 28, textAlign: 'center' }}>
        Registration
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: 'center' }}>
        Enter your name email and password
      </Typography>
      <TextField
        sx={{ color: 'rgb(194, 120, 118)', width: '80%' }}
              label="name"
              {...register("name")}
      />
      <TextField
        sx={{ color: 'rgb(194, 120, 118)', width: '80%' }}
              label="email"
              {...register("email")}
      />
      <TextField
        sx={{ color: 'rgb(194, 120, 118)', width: '80%' }}
              label="password"
              {...register("password")}
      />
      
      <LoadingButton
        type="submit"
        sx={{
          bgcolor: 'rgb(146, 80 , 130)',
          '&:hover': { bgcolor: 'rgb(194, 120, 118)' },
        }}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Register
      </LoadingButton>
    </Box>
  );
};
