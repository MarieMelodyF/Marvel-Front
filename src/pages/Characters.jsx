import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Charaters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [count, setCount] = useState();
  const [page, setPage] = useState();
  // console.log("state count", count);
  // console.log("state skip", skip);
  // console.log("test", page / 100);

  // requete axios
  useEffect(() => {
    let count = "";
    let page = "";
    console.log("page", page);
    const fetchData = async () => {
      try {
        const name = search || "";

        const response = await axios.get(
          `https://site--marvel-backend--r2txk865xjj8.code.run/characters?&name=${name}&skip=${skip}&page=${page}` //&skip=${skip}&limit=${limit}`
        );
        // console.log("response.data =>", response.data.count);
        count = response.data.count;
        page = response.data.count / 100;
        // console.log(page);
        // console.log("count=>", count);
        // console.log("data.results ==>", response.data.results);
        setData(response.data);
        setIsLoading(false);
        setCount(count);
        setPage(count);
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
          placeholder="search a characters..."
          onChange={(event) => {
            setSearch(event.target.value);
            // console.log(event.target.value);
          }}
        />
        {skip > count - limit ? (
          <button className="hide-button">0</button>
        ) : (
          <button
            className="charac-skip"
            onClick={() => {
              setSkip(skip + limit);
              console.log("skip +", skip);
            }}
          >
            NEXT
          </button>
        )}
      </div>
      {/* <span>{(page / limit).toFixed(0)} pages</span> */}

      <div className="card-Characters container">
        {data.results.map(
          ({ thumbnail: { path, extension }, _id, name }, index) => {
            // console.log(thumbnail);
            //   console.log(_id);

            const imageUrl = path + "." + extension;
            const id = _id;
            //   console.log(id);

            return (
              <Link to={`/comics/${_id}`} key={index}>
                <main key={id}>
                  <div className="card-wrap">
                    <h3 className="description-comics">{name}</h3>
                    <div className="favoris">
                      <img className="img-Charaters" src={imageUrl} alt="" />
                      <i className="fa-solid fa-star fa-xl fa-border "></i>
                    </div>
                  </div>
                </main>
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Charaters;
