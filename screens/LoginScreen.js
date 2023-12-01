import { useState } from 'react'
import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { login } from '../utils/auth'

function LoginScreen () {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler ({ email, password }) {
    setIsAuthenticating(true)
    await login(email, password)
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Authenticating User...' />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />
}

export default LoginScreen
