import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favorite = ({ token, setToken }) => {
  //   console.log("token fav.jsx => ", token);
  const [favoriteComics, setFavoriteComics] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      `https://site--marvel-backend--r2txk865xjj8.code.run/favoritesComcis?token=${token}`
    );
    setFavorite(response.data);
    console.log(response.data.favorite);
  });
  return (
    <div>
      <span>En cours de chargement... </span>
    </div>
  );
};

export default Favorite;
