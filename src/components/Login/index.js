import React from "react";

const Login = () => {
    return (
    <>
        <h1>Login</h1>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"></input>
        <label for="pass">Password (8 characters minimum):</label>
        <input type="password" id="pass" name="password" minlength="8" required></input>
    </>
    );
  };
  
  export default Login; 