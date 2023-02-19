import { Navigate } from 'react-router-dom'

const Home = () => {
  const isLoggedIn = localStorage.getItem('user')
  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  } else {
    return <Navigate to='/profile' replace />
  }
}

export default Home
