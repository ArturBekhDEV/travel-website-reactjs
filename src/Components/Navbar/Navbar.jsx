import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiFishing } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { useState } from "react";
const Navbar = () => {
  const [navbarActive, setnavbarActive] = useState("navBar");

  const showNav = () => {
    setnavbarActive("navBar active");
  };
  const removeNav = (e) => {
    setnavbarActive("navBar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              {" "}
              <GiFishing className="icon" />
              Trevel North.
            </h1>
          </Link>
        </div>
        <div className={navbarActive}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navList">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navList">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navList">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navList">
                Price
              </a>
            </li>
            <button className="btn">
              <a href="#">Contact </a>
            </button>
            <div onClick={removeNav} className="closeNavBar">
              <AiFillCloseCircle className="icon" />
            </div>
          </ul>
        </div>

        <div onClick={showNav} className="togglerNavBar">
          <BiDotsHorizontal className="icon-dots" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
