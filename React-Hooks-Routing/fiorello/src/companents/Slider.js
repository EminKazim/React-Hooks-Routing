import React from "react";
import "../assests/sass/slider.scss";
import sliderone from "../assests/img/h3-slider-background.jpg";
import slidertwo from "../assests/img/h3-slider-background-2.jpg";
import sliderthree from "../assests/img/h3-slider-background-3.jpg";
import signin from "../assests/img/h2-sign-img.png";

function Slider() {
  return (
    <div classNameName="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={sliderone} className="d-block w-100" alt=" " />
          </div>
          <div class="carousel-item">
            <img src={slidertwo} className="d-block w-100" alt=" " />
          </div>
          <div class="carousel-item">
            <img src={sliderthree} className="d-block w-100" alt=" " />
          </div>
        </div>
      </div>
      <div className="text">
        <h2>Send <span style={{color:"red"}}>flowers</span> like you mean it</h2>
        <p>
          the occasion, our flowers will make it special cursus a sit amet Where flowers are our inspiration to create lasting memories. Whatever  mauris.</p>
        <img src={signin} alt="logo" />
      </div>
    </div>
  );
}
export default Slider;
