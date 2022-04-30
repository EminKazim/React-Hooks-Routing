import React from "react";
import "../assests/sass/category.scss";
import shop14 from "../assests/img/shop-14-img.jpg";
import shop13 from "../assests/img/shop-13-img.jpg";
import shop12 from "../assests/img/shop-12-img.jpg";
import shop11 from "../assests/img/shop-11-img.jpg";

function Category() {
  return (
    <div className="container">
      <div className="row">
          <div className="categories">
            <ul>
              <li>ALL</li>
              <li>PAPULAR</li>
              <li>WINTER</li>
              <li>VARIOUS</li>
              <li>EXORIC</li>
              <li>GREENS</li>
              <li>CACTUSES</li>
            </ul>
            <div className="filter">
              <p>FILTER</p>
            </div>
          </div>
          <div className="images">
            <div className="Col-3">
              <img src={shop14} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop13} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop12} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop11} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop11} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop13} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop11} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="Col-3">
              <img src={shop14} alt="logo" />
              <p>MAJESTY PALM</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
