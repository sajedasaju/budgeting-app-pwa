import React, {useState} from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
// @ts-ignore
import FacebookLogin from 'react-facebook-login';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import axios from 'axios';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const responseGoogle = () => {
    console.log('==============sdfsdfsdfsdf');
    // try {
    //   const response = await axios.get('http://localhost:5000/auth');
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography
          component='h1'
          variant='h5'
          sx={{mb: '0px', textAlign: 'center', fontWeight: '700'}}>
          SIGN UP
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              variant='outlined'
              InputProps={{
                sx: {
                  borderRadius: '25px',
                  backgroundColor: '#FAF9F9',

                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiInputBase-input:hover + fieldset': {
                    border: 'none',
                  },
                  '& .MuiInputBase-input:focus + fieldset': {
                    border: 'none',
                    opacity: '1',
                  },
                },
              }}
              InputLabelProps={{style: {fontWeight: '700', opacity: '.5'}}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='password'
              label='Password'
              name='password'
              autoComplete='password'
              variant='outlined'
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                sx: {
                  borderRadius: '25px',
                  backgroundColor: '#FAF9F9',

                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiInputBase-input:hover + fieldset': {
                    border: 'none',
                  },
                  '& .MuiInputBase-input:focus + fieldset': {
                    border: 'none',
                  },
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{style: {fontWeight: '700', opacity: '.5'}}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '12px', opacity: '.5'}}>
              * It must contains 8-12 characters
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{mt: '25px'}}>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              OR SIGN UP WITH:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={4}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: '#FAF9F9',
                    borderRadius: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <AppleIcon
                    sx={{height: '45px', width: '45px', color: '#121111'}}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: '#FAF9F9',
                    borderRadius: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <FacebookRoundedIcon
                    sx={{height: '45px', width: '45px', color: '#696868'}}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                onClick={responseGoogle}
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Box
                  sx={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: '#FAF9F9',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <GoogleIcon
                    sx={{height: '45px', width: '45px', color: '#7D7C7C'}}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomActionButtonComponent>
              Create Account
            </CustomActionButtonComponent>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Signup;
