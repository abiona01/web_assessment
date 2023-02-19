import { Navigate } from 'react-router-dom'

type IProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: IProps) => {
  const isLoggedIn = localStorage.getItem('user')
  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
