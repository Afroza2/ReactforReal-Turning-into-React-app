import React, {Component} from "react";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {

        axios.get("https://www.boredapi.com/api/activity")
            .then(response => {
                console.log(response.data)

                this.setState({
                    data: response.data.activity
                })
            }).then(error => console.log(error))
    }

    render() {
        return (
            <>

                <div className="ltn__utilize-overlay"/>

                <div className="ltn__slider-area ltn__slider-3  section-bg-1">
                    <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <div className="slide-video mb-50">
                                                        <a
                                                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                                                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                                                            data-rel="lightcase:myCollection"
                                                        >
                                                            <i className="fa fa-play"/>
                                                        </a>
                                                    </div>
                                                    <h1 className="slide-title animated ">
                                                        It is your birthday
                                                    </h1>
                                                    <h6 className="slide-sub-title animated">
                                                        {" "}
                                                        That's what she said
                                                    </h6>
                                                    <div className="btn-wrapper animated">

                                                        {/*<Link*/}
                                                        {/*  to="/about"*/}
                                                        {/*  className="btn btn-transparent btn-effect-3"*/}
                                                        {/*>*/}
                                                        {/*  LEARN MORE*/}
                                                        {/*</Link>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-item-img">
                                                <img src="img/service/21.jpg" alt="#"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
                            <div className="ltn__slide-item-inner  text-right">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">

                                                    <div className="btn-wrapper animated">
                                                        {/*<Link*/}
                                                        {/*  to="/about"*/}
                                                        {/*  className="btn btn-transparent btn-effect-3"*/}
                                                        {/*>*/}
                                                        {/*  LEARN MORE*/}
                                                        {/*</Link>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-item-img slide-img-left">
                                                <img src="img/service/21.jpg" alt="#"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ltn__about-us-area pt-115 pb-95">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-center">
                                <div className="about-us-info-wrap">
                                    <div className="section-title-area ltn__section-title-2">
                                        <h6 className="section-subtitle ltn__secondary-color">
                                            About Us
                                        </h6>
                                        <h1 className="section-title">
                                            Your Satisfaction Is Our First Priority<span>.</span>
                                        </h1>

                                    </div>
                                    <div className="about-us-info-wrap-inner about-us-info-devide">

                                        <div className="list-item-with-icon">
                                            <ul>
                                                {/*<li>*/}
                                                {/*  <Link to="/contact">24/7 Online Support</Link>*/}
                                                {/*</li>*/}
                                                {/*<li>*/}
                                                {/*  <Link to="/service">Easy To Use Apps</Link>*/}
                                                {/*</li>*/}
                                                <li>
                                                    <a href="/">24/7 Online Support</a>
                                                </li>
                                                <li>
                                                    <a href="/">Easy To Use Apps</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 align-self-center">
                                <img src="img/logo.png" alt="Icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="ltn__counterup-area  bg-overlay-theme-black-80 pt-115 pb-70"
                    data-bg="img/bg/5.jpg"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle white-color">activity</h6>
                                    <h1 className="section-title white-color">
                                        Hey Mister Scott, Whatcha Gonna Do<span>?</span>
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 col-sm-6 align-self-center">
                                <div className="ltn__counterup-item-3 text-color-white">
                                    <h5>{this.state.data}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Home;
