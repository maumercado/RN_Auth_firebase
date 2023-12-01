import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider(props) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const contextValue = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export default AuthContextProvider
