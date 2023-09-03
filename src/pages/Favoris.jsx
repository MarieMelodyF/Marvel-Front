import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favorite = ({ token, setToken }) => {
  //   console.log("token fav.jsx => ", token);
  const [favoriteComics, setFavoriteComics] = useState([]);
  useEffect(() => {
    const usertoken = Cookies.get("token");
    console.log(usertoken);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--r2txk865xjj8.code.run/favoritesComcis?token=${usertoken}`
        );
        console.log("response.data =>", response.data);
        // console.log("data.results ==>", response.data);
        setFavoriteComics(response.data);
        console.log(response.data.favorite);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [favoriteComics]);
};

export default Favorite;
