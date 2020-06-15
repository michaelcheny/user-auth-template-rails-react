import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import userActions from "../helpers/userActions";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const { setUser, token, authenticated, setAuthenticated } = useContext(UserContext);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    userActions.logIn(token, input.username, input.password).then((userData) => {
      if (!Object.keys(userData).includes("errors")) {
        setUser(userData);
        setAuthenticated(true);
      } else {
        // Handle your error message rendering here
      }
    });
  };

  return (
    <div>
      {authenticated ? <Redirect to="/dashboard" /> : null}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={input.username} onChange={handleInput} />
        <input type="password" name="password" value={input.password} onChange={handleInput} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
