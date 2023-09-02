import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../src/images/bcg-home.png";

const Home = () => {
  return (
    <>
      <main>
        <div className="background-home">
          <Link to="/comics">
            <p className="button-home">Entrez dans l'univers Marvel</p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
