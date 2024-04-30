/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Config";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    const unSunbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    });
    () => unSunbscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ isUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
