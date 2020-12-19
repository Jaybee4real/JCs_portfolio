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
            <div className="about-intro-text text">
              A <strong>Visual and Brand Identity Graphic Designer</strong> from
              Nigeria with over 3 years of experience. Also a Civil Engineer by
              education(B.Eng in Civil Engineering; Structures)
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="dotted">About</div>
          <div className="fancy">me</div>

          <div className="text">
            Being Fueled by the desire to build buisnesses and brands, i'm very{" "}
            <strong>
              passionate about reflecting thier stories and core values using
              branding and visual design
            </strong>
            <br />
            <br />
            To do this, I collaborate one-on-one with brands that possess unique
            goals (like you!) to create beatifully designed visual identities,
            print collateral and websites to help evaluate thier brand
            awareness.
            <br />
            <br />
            Possessing a unique blend of problem solving and technical as well
            as artistic skills,{" "}
            <strong>
              my design approach & creative process is well thought out and
              peculiar.
            </strong>
            <br />
            <br />
            Also as a <strong>great communicator,</strong> i am quick to grasp
            the bigger picture and ardent creator of limitless aestetics.
            <br />
            My goal is depth and consistency and every brand deserves attention
            to detail to ensure it is beautifully and thoroughly presented.
          </div>
        </section>
        <section className="services-section">
          <div className="fancy">my</div>
          <div className="dotted">Services</div>

          <div className="text">
            Despite having veratile in the graphic design sphere, i have been
            able to carve a niche for myself and this has made me effective in
            giving the best of the services i offer.
            <br />
            <br />
            The design services i specialize in are:
          </div>
          <ul className="list-container">
            <li>UI/UX DESIGN</li>
            <li>BRAND IDENTITY DESIGN</li>
            <li>PACKAGING DESIGN</li>
            <li>ILLUSTRATIONS</li>
            <li>SOCIAL MEDIA TEMPLATES</li>
            <li>MARKET COLLATERAL DESIGN</li>
            <li>PRESENTATIONS</li>
          </ul>
        </section>
        <section className="process-section">
          <div className="fancy">my</div>
          <div className="dotted">process</div>
          <div className="text">
            This is a quick and brief breakdown of my effective design proccess:
            <br />
            <br />
            <div className="text-heading">BRAND DISCOVERY</div>
            Gaining clarity by asking the critical questions needed to
            understand and build your unique brand.
            <br />
            <br />
            <div className="text-heading">RESEARCH</div>
            Carrying out indepth studies into the design problem to get a
            methodical and well structured approach towards creating distinct
            designs thus setting the brand ahead of your competitions.
            <br />
            <br />
            <div className="text-heading">
              VISUALIZATION & CONCEPT DEVELOPMENT
            </div>
            Ideating and developing design concepts discovered during the
            research which are research which are then finessed to fit design
            goals your brand seeks to achieve and are presented for reviews and
            feedbacks.
            <br />
            <br />
            <div className="text-heading">REVISION</div>
            Implementing necessary changes and making revisions over the choosen
            design concept, within the given agreement.
            <br />
            <br />
            <div className="text-heading">COMPLETION</div>
            And now the final piece to the puzzle is being placed!. After
            finalizing your visual brand, i bring things to fruition. This
            involves the submission of design in thier respective formats and
            all other deliverables.
          </div>
        </section>
        <section className="ready-to-create-section">
          <div className="section-container">
            <div className="fancy">ready to</div>
            <div className="dotted">create</div>
          </div>
        </section>
        <section className="contact-section">
          <div className="dotted">reach</div>
          <div className="fancy">out</div>
          <div className="text">
            Get access to my design portfolio via the link on my bio. Also feel
            free to send in a Direct Message.
            <br />
            <br />
            Connect On
            <br />
            Instagram: @<strong>jobosonchisa</strong>
            <br />
            Twitter: @<strong>jobosonchisa</strong>
            <br />
            LinkedI: @<strong>Chisaokwu Joboson</strong>
            <br />
            Behance: @<strong>Chisaokwu Joboson</strong>
            <br />
            <br />
            <br />
            I look forward to working with you and creating lasting brand magic
            <br />
            <br />
            I'm also an email away: <strong>hello@jobosonchisa.com</strong>
          </div>
        </section>
      </div>
    );
  }
}
