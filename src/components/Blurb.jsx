import React from "react";
import "../styles/app.css";

const Blurb = (content) => {
  return (
    <>
    <img
      src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/01/boston-skyline-best-views-socail.jpg"
      alt="bostonskyline"
      className="image"
    ></img>
    <div className="blurb">
      <h1> {content.title}</h1>
      <p> {content.text}</p>
    </div>
    </>
  );
};

export default Blurb;
