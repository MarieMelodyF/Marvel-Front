import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favorite = ({ token, setToken }) => {
  const [favorites, setFavorites] = useState(Cookies.get("favorites") || null);
  const favoris = JSON.parse(favorites);

  const [favoritesCharacters, setfavoritesCharacters] = useState(
    Cookies.get("favoritesCharacters") || null
  );
  const favorisCharacters = JSON.parse(favoritesCharacters);

  return (
    <div className="container">
      <h1>Vos favoris</h1>
      <div className="favComics">
        <div className="list-comics">
          <h1>Comics favorites</h1>
          {favoris.map((infos, index) => (
            <div key={index}>
              <div className="favoris">
                <p>{infos.title}</p>
                <img src={infos.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="list-characters">
          <h1>Characters favorites</h1>

          {favorisCharacters.map((info, index) => (
            <div key={index}>
              <div className="favoris">
                <p>{info.name}</p>
                <img className="favoris" src={info.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
