import React, { Component } from "react";
import { Link } from "react-router-dom";

class MobileNav extends Component {
  render() {
    return (
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/">
                <img
                  src="img/logo.png"
                  alt="Logo"
                  width="192"
                  height="52"
                />
              </Link>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li className="menu-icon">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-icon">
                <Link to="#">About</Link>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>

                </ul>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;
