import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const DashboardPage = () => {
  const { user, authenticated } = useContext(UserContext);
  return (
    <>
      {!authenticated ? <Redirect to="/" /> : null}
      <div>
        <h1>Hi, {user.username}</h1>
        <p>you are authenticated</p>
      </div>
    </>
  );
};

export default DashboardPage;
