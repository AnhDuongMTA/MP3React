import React, { Component } from "react";
import "./Content.css";
import ContentLeft from "./ContentLeft/ContentLeft";
class Content extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-lg-8">
              
            <ContentLeft></ContentLeft>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4">
              <h1>col2</h1>
              <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis totam quisquam nihil, natus voluptatibus magnam unde?
                Perspiciatis, dolorem eveniet deleniti repellendus magni,
                corrupti neque, nulla labore quia libero laudantium ullam.
              </h1>
              <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis totam quisquam nihil, natus voluptatibus magnam unde?
                Perspiciatis, dolorem eveniet deleniti repellendus magni,
                corrupti neque, nulla labore quia libero laudantium ullam.
              </h1>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Content;
