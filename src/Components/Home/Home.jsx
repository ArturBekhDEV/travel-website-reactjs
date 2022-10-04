import React from "react";
import "./Home.css";
import testImage from "../../img/1.jpg";
import ControlledCarousel from "../Home/Carousel";
const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <img src={testImage} alt="#" /> */}
      {/* <ControlledCarousel />;
       */}
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">text</span>
        </div>
        <h1 className="homeTitle">Search your holiday</h1>
      </div>
    </section>
  );
};

export default Home;
