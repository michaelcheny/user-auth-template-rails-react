import React, { useState } from "react";

const LoginPage = () => {
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInput}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
