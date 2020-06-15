import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import userActions from "../helpers/userActions";

const DashboardPage = () => {
  const { user, setUser, token, setToken, authenticated, setAuthenticated } = useContext(UserContext);

  const handleLogout = () => {
    setUser("");
    userActions.logOut(token);
    setAuthenticated(false);
    userActions.fetchToken((token) => setToken(token));
  };

  return (
    <>
      {!authenticated ? <Redirect to="/" /> : null}
      <div>
        <h1>Hi, {user.username}</h1>
        <p>you are authenticated</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default DashboardPage;
