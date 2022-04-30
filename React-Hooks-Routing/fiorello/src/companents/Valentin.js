import React from "react";
import "../assests/sass/valentin.scss";
import video from "../assests/img/h3-video-img.jpg";
function Valentin() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="valentin">
            <div className="col-6">
              <img src={video} alt="video" />
            </div>
            <div className="col-6">
              <h4>Suprise Your <span style={{color:"red"}}>Valentine!</span>Let us arrange a smile.</h4>
              <h4>
                Where flowers are our inspiration to create lasting memories.
                Whatever the occasion...
              </h4>
              <ul>
                <li>
                  <i style={{ color: "red" }} class="fas fa-heart"></i>
                  <span> Hand picked just for you.</span>
                </li>
                <li>
                  <i style={{ color: "red" }} class="fas fa-heart"></i>
                  <span> Hand picked just for you.</span>
                </li>
                <li>
                  <i style={{ color: "red" }} class="fas fa-heart"></i>
                  <span> Hand picked just for you.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valentin;
