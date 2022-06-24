import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterBlack extends Component {
  render() {
    return (
      <footer className="ltn__footer-area ltn__footer-2 ltn__footer-color-1">


        <div className="ltn__copyright-area ltn__copyright-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link to="/">
                      <img
                        src="img/logo.png"
                        alt="Logo"
                        width={192}
                        height={52}
                      />
                    </Link>
                  </div>
                  <div className="get-support ltn__copyright-design clearfix">
                    <div className="get-support-info">
                      <h6>Copyright &amp; Design By</h6>
                      <h4>
                        <span className="current-year" />
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 align-self-center">
                <div className="ltn__copyright-menu text-right">
                  <ul>
                    <li>
                      <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy &amp; Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterBlack;
