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

function App() {
  const [token, setToken] = useState(Cookies.get("token"));

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
