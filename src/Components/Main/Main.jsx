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
  // {
  //   id: 1,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
  // {
  //   id: 2,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
  // {
  //   id: 3,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
  // {
  //   id: 4,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
  // {
  //   id: 5,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
  // {
  //   id: 6,
  //   imgSrc: img,
  //   destTitle: "The March of the Norwegians",
  //   location: "Norway",
  //   grade: "Cultural Relax",
  //   desception:
  //     "Southern Norway, or Sørlandet as it is called in Norwegian, is Norway’s most popular summer destination among Norwegians. Every year they descend in great number to the southernmost part of Norway, but the outside world is completely oblivious to this. Have a peek at Norway’s best-kept secret.",
  // },
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
              <div className="imageDive">
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
