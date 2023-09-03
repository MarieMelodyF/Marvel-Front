import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

const Login = ({ token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <div className="form">
        <form
          className="signup-input"
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              const response = await axios.post(
                `https://site--marvel-backend--r2txk865xjj8.code.run/user/login`,
                {
                  email: email,
                  password: password,
                }
              );
              console.log("log connexion", response.data);
              console.log("data.token", response.data.token);
              navigate("/characters");
              setToken(response.data.token);
            } catch (error) {
              error.response;
              console.log("=>", error.response);
              if (
                error.response.data.message ===
                "Cannot read properties of null (reading 'salt')"
              ) {
                alert(
                  "Vous avez saisi un mauvais mot de passe ou identifiant 🫤. Si vous n'avez pas de compte, merci de vous inscrire"
                );
              } else if (
                error.response.data ===
                "Le mot de passe ou l'identifiant n'est pas correct."
              ) {
                alert(
                  "Vous avez saisi un mauvais mot de passe ou identifiant 🫤. Si vous n'avez pas de compte, merci de vous inscrire"
                );
              }
            }
          }}
        >
          <h1>Log in</h1>
          <input
            type="email"
            placeholder="spiderman@marvel.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            className="form-validation"
            type="submit"
            value="Se connecter"
          >
            Log in
          </button>
        </form>
      </div>
      <Link to="/user/signup">
        <p className="subscribe">
          You dont have a account ? Come on, come to Sign up !
        </p>
      </Link>
    </div>
  );
};

export default Login;
