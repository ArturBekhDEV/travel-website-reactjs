import React from "react";
import "./app.css";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<NavBar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
