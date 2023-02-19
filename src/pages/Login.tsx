import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import React, { useContext, useEffect } from 'react'
import logo from '../asset/logo.svg'
import monitor from '../asset/monitor_img.svg'
import manage from '../asset/manage_img.svg'
import delegate from '../asset/delegate_img.svg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {
  HeadingTextBox,
  LeftBodyBox,
  LoginContainer,
  LoginleftContainer,
  LoginRightContainer,
  LogoBox,
  TextFieldBox,
} from '../styles/LoginStyle'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { user, setUser } = useContext(AuthContext)
  const [showPassword, setShowPassword] = React.useState(false)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setUser({ username: 'username', id: 1 })
  }

  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user, navigate])

  return (
    <LoginContainer>
      <Grid container spacing={0} height='100%'>
        <Grid item xs={0} md={5.16} height='100%'>
          <LoginleftContainer>
            <LogoBox>
              <img src={logo} alt='logo' />
            </LogoBox>
            <HeadingTextBox>
              <Typography variant='h4' mb={1}>
                Hi there, see what’s new
              </Typography>
              <Typography variant='body1' mb={3}>
                Here’s how Foodcourt helps you manage your daily operations and ensure your riders
                are efficient
              </Typography>
            </HeadingTextBox>
            <LeftBodyBox>
              <Box display='flex' alignItems='center' mb={4} columnGap={2}>
                <Box>
                  <img src={monitor} alt='monitor icon' />
                </Box>
                <Box>
                  <Typography variant='body1' sx={{ color: '#858585' }} mb={0.5} fontWeight={500}>
                    Monitor your Earnings
                  </Typography>
                  <Box maxWidth='296px'>
                    {' '}
                    <Typography
                      variant='body1'
                      sx={{ color: '#A3A3A3' }}
                      lineHeight='19px'
                      fontSize='12px'
                    >
                      Easily see how much your businesses are earning on each transaction and watch
                      your earnings rise.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' mb={4} columnGap={2}>
                <Box>
                  <img src={manage} alt='manage icon' />
                </Box>
                <Box>
                  <Typography variant='body1' sx={{ color: '#858585' }} mb={0.5} fontWeight={500}>
                    Manage your Businesses
                  </Typography>
                  <Box maxWidth='296px'>
                    {' '}
                    <Typography
                      variant='body1'
                      sx={{ color: '#A3A3A3' }}
                      lineHeight='19px'
                      fontSize='12px'
                    >
                      Easily see how much your businesses are earning on each transaction and watch
                      your earnings rise.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                mb={4}
                columnGap={2}
                style={{ background: '#F8F8F6', borderRadius: '20px' }}
              >
                <Box>
                  <img src={delegate} alt='delegate icon' />
                </Box>
                <Box>
                  <Typography variant='body1' sx={{ color: '#858585' }} mb={0.5} fontWeight={500}>
                    Delegate to Staff
                  </Typography>
                  <Box maxWidth='296px'>
                    {' '}
                    <Typography
                      variant='body1'
                      sx={{ color: '#A3A3A3' }}
                      lineHeight='19px'
                      fontSize='12px'
                    >
                      Easily see how much your businesses are earning on each transaction and watch
                      your earnings rise.
                    </Typography>
                  </Box>
                </Box>
                <CheckCircleOutlineIcon />
              </Box>
            </LeftBodyBox>
          </LoginleftContainer>
        </Grid>
        <Grid item xs={12} md={6.84} height='100%'>
          <LoginRightContainer>
            <Box>
              <Typography variant='h6'>Login to your dashboard</Typography>
              <Typography variant='body1' mb={{ xs: 4, sm: 6 }}>
                Provide details to login to your account{' '}
              </Typography>
              <TextFieldBox>
                <Typography variant='body1' fontWeight={500} my={1}>
                  Email / Username
                </Typography>
                <TextField
                  variant='outlined'
                  fullWidth
                  type='text'
                  value={'username'}
                  placeholder='Cokitchen222@gmail.co'
                />
              </TextFieldBox>
              <TextFieldBox>
                <Typography variant='body1' fontWeight={500} my={1}>
                  Password
                </Typography>
                <FormControl>
                  {' '}
                  <OutlinedInput
                    id='outlined-adornment-password'
                    type={showPassword ? 'text' : 'password'}
                    value={'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </TextFieldBox>
              <Button variant='contained' fullWidth sx={{ mt: 4 }} onClick={handleSubmit}>
                Login
              </Button>
            </Box>
          </LoginRightContainer>
        </Grid>
      </Grid>
    </LoginContainer>
  )
}

export default Login
