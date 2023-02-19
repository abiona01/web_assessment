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
  useEffect(() => {
    if (!user) return
    const timer = setTimeout(() => {
      setUser(null)
    }, 120000)
    return () => clearTimeout(timer)
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
