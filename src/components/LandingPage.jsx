import React, { Component } from "react";
import "../styles/landing-page.scss";

export default class LandingPage extends Component {
  
  render() {
    return (
      <div className="home-container">
        <div className="text">
          <div className="dotted">Hello</div>
          <div className="fancy">There</div>
        </div>
        <div className="image-container">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>
      
    );

  }
}
