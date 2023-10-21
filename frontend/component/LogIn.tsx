import React, {useState} from 'react';

import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import {useRouter} from 'next/navigation';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {login} from '@/core/Sercives/LoginService';
import LogInWithGoogle from '@/core/Sercives/SocialLoginServices';

const Login = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const Router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  function oauthSignIn() {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    console.log('hello googlr');
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    var params = {
      client_id:
        '531319829318-nm45a7bd9jvq8sonm6lsmfvhqalhe1op.apps.googleusercontent.com',
      redirect_uri: 'http://127.0.0.1:3000',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/userinfo.profile',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    };

    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  const {register, handleSubmit} = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (formData: any) => {
    try {
      let data = {...formData};
      const response = await login(data);
      console.log('re', response);
      return Router.push('/dashboard', {scroll: false});
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography
          component='h1'
          variant='h5'
          sx={{mb: '0px', textAlign: 'center', fontWeight: '700'}}>
          LOG IN
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='userName'
                label='Email'
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
                InputLabelProps={{style: {fontWeight: '600', opacity: '.5'}}}
                {...register('userName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='password'
                label='Password'
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
                InputLabelProps={{
                  style: {fontWeight: '600', opacity: '.5'},
                }}
                {...register('password')}
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
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                OR LOG IN WITH:
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
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <Box
                    onClick={oauthSignIn}
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
              <CustomActionButtonComponent>Login</CustomActionButtonComponent>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};
export default Login;
