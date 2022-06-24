import React, { Component } from "react";
import { Link } from "react-router-dom";

import FooterBlack from "../components/footerblack";

import loadjs from "loadjs";

class About extends Component {
  componentDidMount() {
    loadjs("./js/main.js");

    loadjs("./js/plugins.js");
  }
  render() {
    return (
      <>
        {/*<HeaderBlack />*/}
        {/*<MobileNav />*/}
        <div className="ltn__utilize-overlay" />
        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
          data-bg="img/bg/dhaka.jpeg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">

                    <h1 className="section-title white-color">About Us</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>About</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area pt-120-- pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  <img src="img/service/2.jpg" alt="About Us" />
                  <div className="about-us-img-info about-us-img-info-2">
                    <div className="about-us-img-info-inner">
                      <h1>
                        We value
                        <span />
                      </h1>
                      <h6>our users</h6>
                      {/* <span class="dots-bottom"></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div>
        {/* ABOUT US AREA END */}
        <FooterBlack />
      </>
    );
  }
}

export default About;
