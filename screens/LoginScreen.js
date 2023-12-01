import { useState } from 'react'
import { Alert } from 'react-native'
import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { login } from '../utils/auth'

function LoginScreen () {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler ({ email, password }) {
    setIsAuthenticating(true)
    try {
      await login(email, password)
    } catch (err) {
      Alert.alert('Authentication Failed!', err.message)
    }
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Authenticating User...' />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />
}

export default LoginScreen
