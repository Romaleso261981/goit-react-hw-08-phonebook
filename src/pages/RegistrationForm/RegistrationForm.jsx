import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import {  IconButton, InputAdornment, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useForm } from 'react-hook-form';
import { registrationUser } from '../../redux/auth/operations';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            password: '',
    }});

    const onSubmit = dataUser => {
        dispatch(registrationUser(dataUser));
        reset();
    };
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    
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
            <Typography sx={{ fontSize: 28, textAlign: 'center' }} >Sign up</Typography>
            <Typography sx={{ fontSize: 14, textAlign: 'center' }} >using your email address</Typography>
            <TextField 
                {...register("name")}
                color="secondary"
                label="Name"
                autoFocus
            />
            <TextField
                {...register("email")}
                color="secondary"
                label="Email"
                error={errors?.email?.message ? true : false}
                helperText={errors?.email?.message}
                // required
            />
            <TextField
                {...register("password")}
                color="secondary"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? (
                        <VisibilityOff />
                        ) : (
                        <Visibility />
                        )}
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />
                        <LoadingButton
                type='submit'
                sx={{bgcolor: 'rgb(146, 80 , 130)', '&:hover': { bgcolor: 'rgb(194, 120, 118)'}, }}            
                disabled={false}
                loadingPosition="start"
                startIcon={<HowToRegIcon />}
                variant="contained"
            >
            Sing up
            </LoadingButton>
        </Box>
    )
}

export default RegistrationForm;