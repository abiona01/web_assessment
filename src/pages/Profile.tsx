import { Box, Grid, Typography, CircularProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import logo from '../asset/logo.svg'
import timer from '../asset/timer.svg'
import {
  BodyContainer,
  ComingSoonBox,
  CompanyInfoBox,
  IconBox,
  NotificationBox,
  NotificationListBox,
  ProfileContainer,
  TopContainer,
} from '../styles/ProfileStyle'
import { useQuery } from '@apollo/client'
import companyQuery from '../query'
import { ICompany } from '../interface'

const Profile = () => {
  const { loading, error, data } = useQuery(companyQuery)
  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' width='100vw' height='100vh'>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography variant='h4' color='error'>
          There&apos;s an error, please try again later
        </Typography>
      </Box>
    )
  }
  const { cto, ceo, name }: ICompany = data.company
  return (
    <ProfileContainer>
      <TopContainer>
        <img src={logo} alt='logo' />
      </TopContainer>
      <BodyContainer>
        <Grid
          container
          spacing={{ xs: 0, sm: 2, md: 3.5, lg: 5 }}
          rowGap={5}
          width='100%'
          height='100%'
        >
          <Grid item xs={12} sm={7} md={7} lg={8.52} height='100%'>
            <CompanyInfoBox>
              <Box display='flex' alignItems='center' columnGap={2}>
                <Avatar>CN</Avatar>
                <Typography variant='h4'>{name}</Typography>
              </Box>
              <Box mt={6}>
                <Typography variant='body2' fontSize='12px' mb={0.5}>
                  CEO
                </Typography>
                <Typography variant='body1' mb={0.5}>
                  {ceo}
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography variant='body2' fontSize='12px' mb={0.5}>
                  CTO
                </Typography>
                <Typography variant='body1' mb={0.5}>
                  {cto}
                </Typography>
              </Box>
            </CompanyInfoBox>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={3.48} height='100%'>
            <NotificationBox>
              <ComingSoonBox display='flex' columnGap={1}>
                <img src={timer} alt='timer icon' />
                <Typography variant='body1'>Coming soon</Typography>
              </ComingSoonBox>
              <NotificationListBox>
                <Box display='flex' columnGap={2} mb={2} alignItems='center'>
                  <IconBox>
                    <Typography>????</Typography>
                  </IconBox>
                  <Box>
                    <Box width='194px' height='14px' mb={0.5} />
                    <Box width='132px' height='14px' />
                  </Box>
                </Box>
                <Box display='flex' columnGap={2} mb={2} alignItems='center'>
                  <IconBox>
                    <Typography>???</Typography>
                  </IconBox>
                  <Box>
                    <Box width='194px' height='14px' mb={0.5} />
                    <Box width='132px' height='14px' />
                  </Box>
                </Box>
                <Box display='flex' columnGap={2} mb={2} alignItems='center'>
                  <IconBox>
                    <Typography>????</Typography>
                  </IconBox>
                  <Box>
                    <Box height='14px' mb={0.5} />
                    <Box height='14px' />
                  </Box>
                </Box>
              </NotificationListBox>
              <Typography variant='h4' align='center' mt={4}>
                ???? Notifications
              </Typography>
              <Typography variant='body1' align='center' mt={2} px={1}>
                Receive notifcations about your rider performance, efficiency reviews and a lot more
              </Typography>
            </NotificationBox>
          </Grid>
        </Grid>
      </BodyContainer>
    </ProfileContainer>
  )
}

export default Profile
