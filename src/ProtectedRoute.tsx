import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

type IProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: IProps) => {
  const { user } = useContext(AuthContext)
  if (!user) {
    return <Navigate to='/login' replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
