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
    userActions.logIn(token, input.username, input.password).then((userData) => {
      if (!Object.keys(userData).includes("error")) {
        setUser(userData);
        setAuthenticated(true);
        setInput({ username: "", password: "" });
      } else {
        // Handle your error message rendering here
        console.log(userData);
        setInput({ username: "", password: "" });
      }
    });
  };

  return (
    <div>
      {authenticated ? <Redirect to="/dashboard" /> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleInput}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
