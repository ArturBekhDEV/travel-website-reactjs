import React from "react";
import "./Footer.css";
import videoLoop from "../../video/video.mp4";
import { GrSend } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={videoLoop} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep in touch</small>
            <h2>Contact us:</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" name="" placeholder="Enter your name" id="" />
            <input type="text" name="" placeholder="Enter your surname" id="" />
            <input type="text" name="" placeholder="Enter your email" id="" />
            <button className="btn flex" type="submit">
              Contact
              <GrSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
