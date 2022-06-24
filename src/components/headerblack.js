import React, {Component} from "react";
import {Link} from "react-router-dom";

class HeaderBlack extends Component {


    render() {
        return (
            <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
                <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col">
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
                                    <div className="get-support clearfix get-support-color-white">
                                        <div className="get-support-icon">
                                            <i className="icon-call"/>
                                        </div>
                                        <div className="get-support-info">
                                            <h6>Get Support</h6>
                                            <h4>
                                                <a href="tel:123456789">123456789</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col header-menu-column menu-color-white">
                                <div className="header-menu d-none d-xl-block">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li className="menu-icon">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className="menu-icon">
                                                    <Link to="#">About</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/about">About Us</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-icon">
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="mobile-menu-toggle menu-btn-white menu-btn-border--- d-xl-none">
                                <a
                                    href="#ltn__utilize-mobile-menu"
                                    className="ltn__utilize-toggle"
                                >
                                    <svg viewBox="0 0 800 600">
                                        <path
                                            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                            id="top"
                                        />
                                        <path d="M300,320 L540,320" id="middle"/>
                                        <path
                                            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                            id="bottom"
                                            transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderBlack;
