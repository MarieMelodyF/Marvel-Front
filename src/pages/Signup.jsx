import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.post(
        `https://site--marvel-backend--r2txk865xjj8.code.run/user/signup`,
        {
          username: username,
          email: email,
          password: password,
        }
      );
      alert("Votre inscription a été effectuée ! ");
      console.log("response.data =>", response.data);
      console.log("Submit ==> ", data);

      const token = response.data.token;
      setToken(token);
      // Navigate("/characters");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <form>
          <input
            onChange={handleUsernameChange}
            type="text"
            name="username"
            id="CaptainMarvel"
            value={username}
            placeholder="Captain Marvel"
          />
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            // value={email}
            placeholder="captainmarvel@marvel.com"
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            // value={password}
            placeholder="Password"
          />
        </form>
        <div></div>
        <button
          onClick={handleSubmit}
          className="form-validation"
          type="submit"
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
};

export default Signup;
