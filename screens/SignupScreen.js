import { useState } from 'react'
import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { createUser } from '../utils/auth'

function SignupScreen () {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signupHandler ({ email, password }) {
    setIsAuthenticating(true)
    try {
      await createUser(email, password)
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
