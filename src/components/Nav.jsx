import { Link } from "react-router-dom";
import React, { Component } from "react";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link className="button-nav" to="/comics">
        <button>Comics</button>
      </Link>
      <Link className="button-nav" to="/characters">
        <button>Characters</button>
      </Link>
    </div>
  );
};

export default Nav;
