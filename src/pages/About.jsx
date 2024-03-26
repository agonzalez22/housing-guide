import React from "react";
import Blurb from "../components/Blurb";
import Accordion_ from "../components/Accordion_";

export default function About() {
  return (
    <>
      <div id="parent">
        <div>
          <div className="image-container-about">
            <img
              src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/01/boston-skyline-best-views-socail.jpg"
              alt="bostonskyline"
              className="image"
            ></img>
          </div>
        </div>
        <h2 className='image-text'>About</h2>
        <hr className='image-text'/ >
        <p className='image-text'>Partnered with the BHC, our team at Scout Labs is dedicated to creating an effective homebuying guide for first time home buyers in Boston! </p>
        <div className="blurb">
          <Accordion_ />
        </div>
      </div>
      <Accordion_ />
    </>
  );
}
