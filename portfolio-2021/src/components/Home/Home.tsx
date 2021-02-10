import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="name">
          <h1>
            Rebecca <br /> Womack
          </h1>
          <p>software developer</p>
          <a href="google.com">about</a>
          <br />
          <a href="google.com">projects</a>
          <br />
          <a href="google.com">blog</a>
          {/* cat pics */}
        </div>
        <div className="image">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGHR48LYJ8DLQ/profile-displayphoto-shrink_800_800/0/1554680788318?e=1618444800&v=beta&t=sRcIuopWDNQJZIvW8DxeHn2RpB_qyZQ7Qr2FoDfl0K4"></img>
        </div>
      </div>
    );
  }
}

export default Home;
