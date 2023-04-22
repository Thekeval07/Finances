import React from 'react'



const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-5">
                                    <h2 className=" mb-4">About Us</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                                        facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                                        veritatis aliquam.
                                    </p>
                                </div>
                                <div className="col-md-3 ml-auto">
                                    <h2 className="footer-heading mb-4">Quick Links</h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <p href="#about-section" className="smoothscroll">
                                                Terms
                                            </p>
                                        </li>
                                        <li>
                                            <p href="#about-section" className="smoothscroll">
                                                Policy
                                            </p>
                                        </li>
                                        <li>
                                            <p href="#about-section" className="smoothscroll">
                                                About Us
                                            </p>
                                        </li>
                                        <li>
                                            <p href="#services-section" className="smoothscroll">
                                                Services
                                            </p>
                                        </li>
                                        <li>
                                            <p href="#testimonials-section" className="smoothscroll">
                                                Testimonials
                                            </p>
                                        </li>
                                        <li>
                                            <p href="#contact-section" className="smoothscroll">
                                                Contact Us
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                            <form action="#" method="post" className="footer-subscribe">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control border-secondary text-white bg-transparent"
                                        placeholder="Enter Email"
                                        aria-label="Enter Email"
                                        aria-describedby="button-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-primary text-black"
                                            type="button"
                                            id="button-addon2"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <p>
                                    Copyright © 2023 All rights reserved | This template is made with{" "}
                                    <i className="icon-heart-o" aria-hidden="true" /> by{" "}
                                    <p href="https://colorlib.com">
                                        Colorlib
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer