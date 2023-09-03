import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favorite = ({ token, setToken }) => {
  //   console.log("token fav.jsx => ", token);
  const [favorites, setFavorites] = useState(Cookies.get("favorites") || null);
  console.log("fav", favorites); // recup id, title, img
  // console.log("SPLIT", favorites.split(","));
  // console.log("SPLIT", favorites.split(",")[2]);
  const img = favorites.split(",")[1];
  // console.log("img", img);
  const title = favorites.split(",")[2];
  // console.log("title", title);
  return (
    <div>
      <h1>Vos favoris</h1>
      {/* {favorites.map((imageUrl, title) => {
        return console.log(imageUrl);
        console.log(title);
      })} */}
    </div>
  );
};
export default Favorite;
