import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>Fishing.</h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
