import { useState, createContext } from "react";

export const AuthContext = createContext({
  currentUser: null,
  isAutheticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const isAutheticated = currentUser !== null;

  const loginUser = (user) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, isAutheticated, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
