import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiFishing } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              {" "}
              <GiFishing className="icon" />
              Fishing.
            </h1>
          </Link>
        </div>
        <div className="navBar">
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
              <a href="#">Click me!</a>
            </button>
          </ul>
          <div className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="togglerNavBar">
          <BiDotsHorizontal className="icon-dots" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
