import * as React from "react";
import { Link } from "react-router-dom";
import FooterBlack from "../components/footerblack";
import HeaderBlack from "../components/headerblack";
import loadjs from "loadjs";
import MobileNav from "../components/mobilenav";

class Contact extends React.Component {
  componentDidMount() {
    loadjs(
      "./js/main.js");

    loadjs("./js/plugins.js");
    loadjs("./js/google-map.js")
    loadjs("./js/maplace-active.js")
  }

  render() {
    return (
      <>
        <HeaderBlack />
        <MobileNav />
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

                    <h1 className="section-title white-color">Contact Us</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}

        {/* CONTACT ADDRESS AREA START */}
        <div className="ltn__contact-address-area mb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="img/icons/10.png" alt="Icon" />
                  </div>
                  <h3>Email Address</h3>
                  <p>company@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="img/icons/11.png" alt="Icon" />
                  </div>
                  <h3>Phone Number</h3>
                  <p>+123456789</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="img/icons/12.png" alt="Icon" />
                  </div>
                  <h3>Office Address</h3>
                  <p>
                    221B Baker Street
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT ADDRESS AREA END */}



        <FooterBlack />
      </>
    );
  }
}

export default Contact;
