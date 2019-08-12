import React, { Component } from "react";
import "./StyleBanner.css";
class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
            <img
              className="banner-image"
              src="https://hinhnendep.xyz/wp-content/uploads/2016/08/hinh-anh-bien-dep-nhat-the-gioi-1.jpg"
              alt=""
            />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
