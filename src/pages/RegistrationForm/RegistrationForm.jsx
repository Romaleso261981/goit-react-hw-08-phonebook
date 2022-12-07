import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registrationUser } from '../../redux/auth/authOperations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = dataUser => {
    dispatch(registrationUser(dataUser));
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& > :not(style)': { mb: 2, width: '100%' },
        maxWidth: 400,
        minHeight: 150,
        margin: '20px auto',
        borderRadius: 2,
        boxShadow: '0px 0px 15px 1px rgba(143, 144, 139, 0.6)',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <p>{errors?.number?.message}</p>
      <Typography sx={{ fontSize: 35, textAlign: 'center' }}>
        Register
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: 'center' }}>
        using your email address
      </Typography>
      <TextField
        {...register('name', {
          required: 'This field is required',
          maxLength: 20,
        })}
        color="secondary"
        label="Name"
        autoFocus
        error={errors?.name?.message ? true : false}
        helperText={errors.name?.message}
        required
      />
      <TextField
        {...register('email', {
          required: 'This field is required',
        })}
        color="secondary"
        label="Email"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register('password', {
          required: 'This field is required',
          minLength: {
            value: 6,
            message: 'Min length password is 6',
          },
        })}
        color="secondary"
        type="text"
        label="Password"
        error={errors?.password?.message ? true : false}
        helperText={errors?.password?.message}
      />
      <LoadingButton
        type="submit"
        sx={{
          bgcolor: 'rgb(146, 80 , 130)',
          '&:hover': { bgcolor: 'rgb(194, 120, 118)' },
        }}
        loadingPosition="start"
        startIcon={<HowToRegIcon />}
        variant="contained"
      >
        Sing up
      </LoadingButton>
    </Box>
  );
};

export default RegistrationForm;
