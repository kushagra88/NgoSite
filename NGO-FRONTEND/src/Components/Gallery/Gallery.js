import React from "react";
// import "../assets/css/bootstrap.min.css";
// import "../assets/css/style.css";
// import "../assets/css/all.min.css";

function Gallery() {
  return (
    <div className="events">
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Our Gallery</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <i className="fas fa-angle-double-right"></i> Gallery
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery-filter d-none d-sm-block p-2">
          <button
            className="btn btn-default filter-button m-1"
            data-filter="all"
          >
            All
          </button>
          <button
            className="btn btn-default filter-button m-1"
            data-filter="hdpe"
          >
            Finance
          </button>
          <button
            className="btn btn-default filter-button m-1"
            data-filter="sprinkle"
          >
            Digital Marketing
          </button>
          <button
            className="btn btn-default filter-button m-1"
            data-filter="spray"
          >
            {" "}
            Money
          </button>
          <button
            className="btn btn-default filter-button m-1"
            data-filter="irrigation"
          >
            Business Analysis
          </button>
        </div>
        <br />
        <div className="row">
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
            <img src="./images/image_01.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter sprinkle">
            <img src="./images/image_02.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
            <img src="./images/image_03.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
            <img src="./images/image_04.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
            <img src="./images/image_05.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
            <img src="./images/image_06.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
            <img src="./images/image_07.jpg" alt="Child Education in Africa" />
          </div>
          <div className="gallery_product col-lg-3 col-md-4 col-sm-3 col-xs-6 filter irrigation">
            <img src="./images/image_08.jpg" alt="Child Education in Africa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
