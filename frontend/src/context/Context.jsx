import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false); // Initialize with a default value, e.g., false

  // The value that will be supplied to the context
  const contextValue = {
    logged,
    setLogged
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};