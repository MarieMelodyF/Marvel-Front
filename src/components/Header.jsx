import { Link } from "react-router-dom";
import React, { Component } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="container">
        <div className="header-container">
          <Link to="/">
            <img src="/src/images/logo-marvel.png" alt="" />
          </Link>

          <Link to="/user/signup">
            <button> S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};
export default Header;
