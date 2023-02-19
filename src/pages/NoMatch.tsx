import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../styles/GeneralStyle'

const NoMatch = () => {
  const navigate = useNavigate()
  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      width='100vw'
      height='100vh'
    >
      <Typography variant='h4' mb={4}>
        404: The page you are looking for isn&apos;t here
      </Typography>
      <BackButton variant='contained' onClick={() => navigate('login')} size='large'>
        Go to Login
      </BackButton>
    </Box>
  )
}

export default NoMatch
