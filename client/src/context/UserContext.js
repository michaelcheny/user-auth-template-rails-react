import React, { createContext, useState, useEffect } from "react";
import userActions from "../helpers/userActions";

export const UserContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    userActions.fetchToken().then((token) => {
      setToken(token);
      fetch("http://localhost:3001/auto-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (!Object.keys(data).includes("errors")) {
            console.log(data);
            setUser(data);
            setAuthenticated(true);
          }
        });
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
