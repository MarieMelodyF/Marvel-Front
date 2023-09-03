import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Charaters from "./pages/Characters";
import Character from "./pages/Character";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Favoris from "./pages/Favoris";

function App() {
  const [token, setToken] = useState(Cookies.get("token"));
  const [favorisComics, setFavorisComics] = useState([]);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
    } else {
      Cookies.remove("token");
    }
  }, [token]);
  // console.log("token app.jsx => ", token);

  return (
    <>
      <Router>
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Charaters />} />
          <Route path="/comics/:characterId" element={<Character />} />
          <Route
            path="/user/signup"
            element={<Signup token={token} setToken={setToken} />}
          />
          <Route
            path="/user/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/favoris"
            element={
              <Favoris
                token={token}
                setToken={setToken}
                favorisComics={favorisComics}
                setFavorisComics={setFavorisComics}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
