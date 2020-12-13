import React, { Component } from "react";
import "../styles/landing-page.scss";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="home-container">
        <section className="section intro-section">
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
        </section>
        <section className="name-section">
          <div className="section-container">
            <div className="intro-text">
              <div className="name fancy">my name is</div>
              <div className="dotted">Chisa</div>
            </div>
          </div>
        </section>
        <section className="about-intro-section">
          <div className="section-container">
            <div className="about-intro-text">
              A <strong>Visual and Brand Identity Graphic Designer</strong> from
              Nigeria with over 3 years of experience. Also a Civil Engineer by
              education(B.Eng in Civil Engineering; Structures)
            </div>
          </div>
        </section>
      </div>
    );
  }
}
