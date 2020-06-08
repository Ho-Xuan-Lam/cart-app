import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 ml-auto">
                            <h5 className="title social-section-title">Social Media</h5>
                            <div className="social-section text-md-left">
                                <ul className="text-center">
                                    <li>
                                        <a  className="btn-floating  btn-fb waves-effect waves-light">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="btn-floating  btn-ins waves-effect waves-light">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="btn-floating  btn-tw waves-effect waves-light">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className="btn-floating  btn-yt waves-effect waves-light">
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Delivery</h5>
                            <ul>
                                <li>
                                    <p>Store Delivery</p>
                                </li>
                                <li>
                                    <p>Online Delivery</p>
                                </li>
                                <li>
                                    <p>Delivery Terms &amp; Conditions</p>
                                </li>
                                <li>
                                    <p>Tracking</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Need help?</h5>
                            <ul>
                                <li>
                                    <p>FAQ</p>
                                </li>
                                <li>
                                    <p>Contact Us</p>
                                </li>
                                <li>
                                    <p>Return Policy</p>
                                </li>
                                <li>
                                    <p>Product Registration</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4">
                            <h5 className="title">Instagram Photos</h5>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container-fluid">
                        Copyright: 2020
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;