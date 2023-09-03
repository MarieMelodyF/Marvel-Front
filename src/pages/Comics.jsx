import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import Cookies from "js-cookie";
import { json } from "react-router-dom";
// import { Link } from "react-router-dom";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState();
  const [limit, setLimit] = useState(100);
  const [favorites, setFavorites] = useState([]);

  // requete axios
  useEffect(() => {
    let count = "";
    const fetchData = async () => {
      try {
        const title = search || "";
        // console.log(title);
        const response = await axios.get(
          `https://site--marvel-backend--r2txk865xjj8.code.run/comics?&title=${title}&skip=${skip}`
        );
        // console.log("response.data =>", response.data);
        // console.log("data.results ==>", response.data.results);
        count = response.data.count;
        // console.log("count", count) OK;
        setData(response.data);
        setIsLoading(false);
        setCount(count);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, skip]);

  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <>
      <div className="search-bar">
        {skip === 0 ? (
          <button className="hide-button">0</button>
        ) : (
          <button
            className="charac-skip"
            onClick={() => {
              setSkip(skip - limit);
              // console.log("skip -", skip);
            }}
          >
            PREVIOUS
          </button>
        )}

        {/* barre de recherche */}
        <input
          className="search-input"
          type="text"
          // value={search}
          placeholder="search a comics..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {skip > count - limit ? (
          <button className="hide-button">0</button>
        ) : (
          <button
            className="charac-skip"
            onClick={() => {
              setSkip(skip + limit);
              // console.log("skip -", skip);
            }}
          >
            {" "}
            NEXT
          </button>
        )}
      </div>

      <div className="card-comics container">
        {data.results.map(
          ({ thumbnail: { path, extension }, _id, title, description }) => {
            const imageUrl = path + "." + extension;

            return (
              <main key={_id}>
                <div className="card-wrap">
                  <div className="cart-img">
                    <p className="description-comics">{title}</p>
                    <div>
                      <img
                        className="img-comics"
                        src={imageUrl}
                        key={_id}
                        alt=""
                      />
                      <div
                        className="favoris"
                        onClick={() => {
                          const newFavorites = [...favorites];
                          newFavorites.push(imageUrl, title);
                          setFavorites(newFavorites);
                          console.log("favorites click", favorites);
                        }}
                      >
                        <i className="fa-solid fa-star fa-xl fa-border "></i>
                      </div>
                    </div>
                  </div>
                  <p className="description-comics">{description}</p>
                </div>
              </main>
            );
          }
        )}
      </div>
    </>
  );
};

export default Comics;
