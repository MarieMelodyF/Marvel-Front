import { Link } from "react-router-dom";
import React, { Component } from "react";
import Nav from "./Nav";
import logo from "/public/logo-marvel.png";

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
              Log Out
            </button>
          ) : (
            <div>
              <Link to="/user/signup">
                <button>Sign up</button>
              </Link>
              <Link to="/user/login">
                <button>Log in</button>
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
