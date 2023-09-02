import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
      navigate("/characters");
      setToken(token);
    } catch (error) {
      console.log(error.response);
      alert("Vous devez remplir tout les champs 😉 !");

      if (
        error.response.data.message ===
        "Email already exist ! Use your account 🚀"
      ) {
        setErrorMessage("Email already exist ! Use your account 🚀");
        alert("Email already exist ! Use your account 🚀");
      } else if (
        error.response.data.message ===
        "This username already exist ! Choose another username 🤟🏼 !"
      ) {
        alert("This username already exist ! Choose another username 🤟🏼 !");
      }
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
            value={email}
            placeholder="captainmarvel@marvel.com"
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
          />
        </form>
        <div></div>
      </div>
      <Link to="/characters">
        <button
          onClick={handleSubmit}
          className="form-validation"
          type="submit"
        >
          S'inscrire
        </button>
      </Link>
      <Link to="/user/login">
        <p>Already registered ? use login</p>
      </Link>
    </div>
  );
};

export default Signup;
