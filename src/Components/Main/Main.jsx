import React from "react";
import "./Main.css";
import img from "../../img/testimonials/1.jpg";
import img2 from "../../img/testimonials/2.jpg";
import img3 from "../../img/testimonials/3.jpg";
import img4 from "../../img/testimonials/4.jpg";
import img5 from "../../img/testimonials/5.jpg";
import img6 from "../../img/testimonials/6.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "The March of the Norwegians",
    location: "Norway",
    grade: "Cultural Relax",
    fees: "$1259",
    desception: "Southern Norway, or Sørlandet as it is called in Norwegian.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Absolute North",
    location: "Denmark",
    grade: "Cultural Relax",
    fees: "1705$",
    desception:
      "We enjoyed the tour, overall. We considered it a taste of Scandinavia. There wasn't..",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Land of the Northern Lights - 5 days",
    location: "Reykjavik",
    grade: "Cultural Relax",
    fees: "845$",
    desception:
      "The real down side was the weather; we were unable to view the lights. Erin was absolutely...",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "6 Day - Around Iceland Adventure",
    location: "Iceland",
    grade: "Cultural Relax",
    fees: "1705$",
    desception:
      "The waterfalls were epic, the people were epic, the food was epic and, Hodei, our...",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Nordic Capitals: Copenhagen, Oslo, Helsinki & Stockholm",
    location: "Finland",
    grade: "Cultural Relax",
    fees: "4500$",
    desception:
      "Larae was so knowledgeable about all three countries and was always upbeat and treated...",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Highlights of Scandinavia - Fishing ",
    location: "Sweden",
    grade: "Cultural Relax",
    fees: "2138$",
    desception:
      "It was fun! Did some stuff outside of my comfort zone and saw a bunch of beautiful...",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h2 className="title">Main visited destinations:</h2>
      </div>

      <div className="secContent grid">
        {data.map((data) => {
          return (
            <div key={data.id} className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitle}</h4>
                <span className="content flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{data.grade}</span>
                  </div>
                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{data.desception}</p>
                </div>
                <button className="btn flex">
                  Details <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
