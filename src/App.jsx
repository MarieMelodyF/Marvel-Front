import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Charaters from "./pages/Characters";
import Character from "./pages/Character";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Charaters />} />
          <Route path="/comics/:characterId" element={<Character />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
