import React, { Component } from "react";
import "./StyleContentRight.css";
class ContentRight extends Component {
  render() {
    return (
      <div>
        {/* begin bai hat danh rieng cho ban */}

        <div className="private-for-you">
          <div className="playlist-for-you">
            <h3>music for you</h3>
          </div>
          <h2>Danh rieng cho ban</h2>
          <p>
            Nghe nhung ca khuc yeu thich va kham pha am nhac danh rieng cho ban
          </p>
        </div>
        
        {/* end bai hat danh rieng cho ban */}
        {/* begin chu de hot */}
        <div className="topic-hot">
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/d/1/d1c2738deec7efd1942a3027a1c436b0_1499828277.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/cover/7/c/9/5/7c95f7f7eb049f6d635df1df7a8c7284.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/cover/5/3/8/0/53801ebaa05e57320f06954927896a69.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg"
              alt=""
            />
          </div>
          <div className="nhac-hot">
            <img
              className="anh-nhac-hot"
              src="https://photo-zmp3.zadn.vn/covers/d/0/d0f7e500d9a338062095f7f66ed669ff_1516330401.jpg"
              alt=""
            />
          </div>
        </div>
        {/* end chu de hot */}


<div>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
  </div>
</div>

        

{/* begin bat hat theo tuan */}

{/* end bai hat theo tuan */}

      </div>
    );
  }
}

export default ContentRight;
