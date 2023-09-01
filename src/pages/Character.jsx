import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Charaters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { characterId } = useParams();
  const [imageUrl, setImageUrl] = useState();
  // console.log(useParams());
  // console.log("id=>", characterId);

  // requete axios
  useEffect(() => {
    let img = "";
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--r2txk865xjj8.code.run/comics/${characterId}`
        );
        // console.log("response.data character =>", response.data.thumbnail.path);
        // console.log("data.results ==>", response.data.results);
        img =
          response.data.thumbnail.path +
          "." +
          response.data.thumbnail.extension;
        // console.log(img);
        setData(response.data);
        setIsLoading(false);
        setImageUrl(img);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="character-Info container">
      <h1 className="name-Character">{data.name}</h1>
      <div className="info">
        <img className="img-Charater" src={imageUrl} alt="" />
        <p className="description">{data.description}</p>
      </div>
      <h1>Also in these comics</h1>
      {data.comics.map(
        ({ thumbnail: { path, extension }, title, description }) => {
          // console.log(path);
          // console.log(_id);
          const imageUrl = path + "." + extension;

          return (
            <>
              <div className="character-Comics container">
                <div className="card-wrap-comics">
                  <img className="img-Charater" src={imageUrl} alt="" />
                  <p className="description">{title}</p>
                  <p className="description">{description}</p>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};

export default Charaters;
