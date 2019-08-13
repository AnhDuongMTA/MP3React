import React, { Component } from "react";
import "./Content.css";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
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
              <ContentRight></ContentRight>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Content;
