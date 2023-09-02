import { Link } from "react-router-dom";
import React, { Component } from "react";
import Nav from "./Nav";
import logo from "../images/logo-marvel.png";

const Header = ({ token, setToken }) => {
  return (
    <>
      <header className="container">
        <div className="header-container">
          <Link to="/">
            <img src={logo} alt="logo marvel" />
          </Link>
          {token ? (
            <button
              className="signOut"
              onClick={() => {
                setToken("");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <div>
              <Link to="/user/signup">
                <button> S'inscrire</button>
              </Link>
              <Link to="/user/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
        </div>
        <Nav />
      </header>
    </>
  );
};
export default Header;
