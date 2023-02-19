import React, { useState, createContext, useEffect } from 'react'
import { IUser } from '../interface'

interface IProps {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

const AuthContext = createContext<IProps>({} as IProps)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)

  const value = {
    user,
    setUser,
  }
  const isLoggedIn = localStorage.getItem('user')
  useEffect(() => {
    if (!isLoggedIn) return
    setInterval(() => {
      setUser(null)
      localStorage.removeItem('user')
      window.location.href = '/login'
    }, 120000)
  }, [isLoggedIn])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
