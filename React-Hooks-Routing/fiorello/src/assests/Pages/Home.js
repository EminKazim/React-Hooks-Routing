import React from "react";
import Header from "../../companents/Header";
import Slider from "../../companents/Slider";
import Category from "../../companents/Category";
import Valentin from "../../companents/Valentin";
function Home() {
  return (
    <div className="container mt-3">
      <div className="row">
        <Header />
        <Slider/>
        <Category/>
        <Valentin/>
      </div>
    </div>
  );
}

export default Home;
