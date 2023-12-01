import { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {}
})

function AuthContextProvider (props) {
  const [authToken, setAuthToken] = useState()

  function authenticate (token) {
    setAuthToken(token)
    AsyncStorage.setItem('token', token)
  }

  function logout () {
    setAuthToken(null)
  }

  const contextValue = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider
