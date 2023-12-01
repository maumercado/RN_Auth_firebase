import { useContext, useState } from 'react'
import { Alert } from 'react-native'

import { AuthContext } from '../store/auth-context'

import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { createUser } from '../utils/auth'

function SignupScreen () {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)

  async function signupHandler ({ email, password }) {
    setIsAuthenticating(true)
    try {
      const token = await createUser(email, password)
      authCtx.authenticate(token)
    } catch (err) {
      Alert.alert('Registering User Failed!', err.message)
    }
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating User...' />
  }

  return <AuthContent onAuthenticate={signupHandler} />
}

export default SignupScreen
