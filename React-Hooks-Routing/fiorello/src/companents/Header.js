import React from "react";
import "../assests/sass/header.scss";
import logo from "../assests/img/logo.png";
//mport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div >
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg d-flex d-lg-block justify-content-between d-xl-flex navbar-light py-3 py-lg-0">
                <p className="navbar-brand" >
                  <img src={logo} alt="logo" id="logo" />
                </p>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  id="mobile-navbar-show"
                >
                  <span
                    className="navbar-toggler-icon"
                     
                  ></span>
                </button>  
                <div
                  className="collapse navbar-collapse d-none d-lg-block"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <p className="nav-link" >
                        Home
                      </p>
                      <ul className="list-unstyled py-3">
                        <li className="">
                          <p className="px-1" >
                            Home 1
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Home 2
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Home 3
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link" href="#">
                        Pages
                      </p>
                      <ul className="list-unstyled py-3">
                        <li className="">
                          <p className="px-1" >
                            Page 1
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Page 2
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Page 3
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item shop-li">
                    <p className="nav-link">
                        Shop
                      </p> 
                      <div className="container">
                        <div className="row shop py-5">
                          <div className="col-lg-3">
                            <div className="item px-4">
                              <h5>Product Types</h5>
                              <ul className="list-unstyled py-3">
                                <li className="">
                                  <p className="px-3" >
                                    Product Types 1
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Product Types 2
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Product Types 3
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="item px-4">
                              <h5>Shop Pages</h5>
                              <ul className="list-unstyled py-3">
                                <li className="">
                                  <p className="px-3" >
                                    Shop Pages 1
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Pages 2
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Pages 3
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="item px-4">
                              <h5>Shop Types</h5>
                              <ul className="list-unstyled py-3">
                                <li className="">
                                  <p className="px-3" >
                                    Shop Types 1
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Types 2
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Types 3
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="item px-4">
                              <h5>Shop Layouts</h5>
                              <ul className="list-unstyled py-3">
                                <li className="">
                                  <p className="px-3" >
                                    Shop Layouts 1
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Layouts 2
                                  </p>
                                </li>
                                <li className="">
                                  <p className="px-3" >
                                    Shop Layouts 3
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link" >
                        Portfolio
                      </p>
                      <ul className="list-unstyled py-3">
                        <li className="">
                          <p className="px-1" >
                            Portfolio 1
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Portfolio 2
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1 mr-5">
                            Portfolio 3
                          </p>
                          <i className="fas fa-chevron-right fa-sm"></i>
                          <ul className="list-unstyled py-3">
                            <li className="">
                              <p className="px-3" >
                                Shop Layouts 1
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Shop Layouts 2
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Shop Layouts 3
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link">
                        Blog
                      </p>
                      <ul className="list-unstyled py-3">
                        <li className="">
                          <p className="px-1" >
                            Blog 1
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Blog 2
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1 mr-5" >
                            Blog 3
                          </p>
                          <i className="fas fa-chevron-right fa-sm"></i>
                          <ul className="list-unstyled py-3">
                            <li className="">
                              <p className="px-3" >
                                Blog Layouts 1
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Blog Layouts 2
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Blog Layouts 3
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <p className="nav-link" href="#">
                        Elements
                      </p>
                      <ul className="list-unstyled py-3 elements">
                        <li className="">
                          <p className="px-1" >
                            Element 1
                          </p>
                        </li>
                        <li className="">
                          <p className="px-1" >
                            Element 2
                          </p>
                        </li>
                        <li className="element">
                          <i className="fas fa-chevron-right fa-sm mr-5"></i>
                          <p className="px-1" >
                            Element 3
                          </p>
                          <ul className="list-unstyled py-3">
                            <li className="">
                              <p className="px-3" >
                                Element 1
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Element 2
                              </p>
                            </li>
                            <li className="">
                              <p className="px-3" >
                                Element 3
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item my-auto search">
                      <i className="fas fa-search" id="search"></i>
                      <ul className="list-unstyled py-3">
                        <li className="d-flex px-3">
                          <input
                            id="input-search"
                            type="text"
                            placeholder="Search"
                          ></input>
                          <i className="fas fa-search my-auto" id="search"></i>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item my-auto shop-cart">
                      <i className="fas fa-shopping-bag"></i>
                      <sup className="rounded-circle">0</sup>
                      <span>CART ($0)</span>
                      <ul className="list-unstyled py-3">
                        <li className="">No products in the cart.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="mobile-navbar position-absolute shadow-lg h-100 p-5">
            <i className="fas fa-times fa-lg" id="mobile-navbar-close"></i>
            <ul className="list-unstyled">
              <li>
                <p>
                  Home <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled">
                <li className="">
                  <p className="px-1" >
                    Home 1
                  </p>
                </li>
                <li className="">
                  <p className="px-1" >
                    Home 2
                  </p>
                </li>
                <li className="">
                  <p className="px-1" >
                    Home 3
                  </p>
                </li>
              </ul>
              <li>
                <p>
                  Pages <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled">
                <li className="">
                  <p className="px-1" >
                    Page 1
                  </p>
                </li>
                <li className="">
                  <p className="px-1" >
                    Page 2
                  </p>
                </li>
                <li className="">
                  <p className="px-1" >
                    Page 3
                  </p>
                </li>
              </ul>
              <li>
                <p>
                  Shop <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled py-3">
                <li className="">
                  <p className="px-3">
                    PRODUCT TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP PAGES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
              </ul>
              <li>
                <p>
                  Portfolio <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled py-3">
                <li className="">
                  <p className="px-3">
                    PRODUCT TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP PAGES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
              </ul>
              <li>
                <p>
                  Blog <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled py-3">
                <li className="">
                  <p className="px-3">
                    PRODUCT TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP PAGES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
              </ul>
              <li>
                <p>
                  Elements <i className="fas fa-caret-right fa-sm"></i>
                </p>
              </li>
              <ul className="list-unstyled py-3">
                <li className="">
                  <p className="px-3">
                    PRODUCT TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP PAGES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
                <li className="">
                  <p className="px-3">
                    SHOP TYPES <i className="fas fa-caret-right fa-sm"></i>
                  </p>
                </li>
                <ul className="list-unstyled py-3">
                  <li className="">
                    <p className="px-3" >
                      Product Types 1
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 2
                    </p>
                  </li>
                  <li className="">
                    <p className="px-3" >
                      Product Types 3
                    </p>
                  </li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
