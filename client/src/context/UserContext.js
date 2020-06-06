import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // use effect to fetch on mount to auto log in and stuff

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, authenticated, setAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
