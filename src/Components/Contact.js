import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
            <section
                className="site-section bg-light aos-init aos-animate"
                id="contact-section"
                data-aos="fade"
            >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3">Contact Us</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 text-center">
                            <p className="mb-4">
                                <span className="icon-phone d-block h2 text-primary"><IoLocationSharp /></span>
                                <p>
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </p>
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <p className="mb-4">
                                <span className="icon-phone d-block h2 text-primary"><IoCall></IoCall></span>
                                <a href="#">+1 232 3235 324</a>
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <p className="mb-0">
                                <span className="icon-mail_outline d-block h2 text-primary"><AiOutlineMail /></span>
                                <a href="#">youremail@domain.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <form action="#" className="p-5 bg-white">
                                <h2 className="h4 text-black mb-5">Contact Form</h2>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">
                                            First Name
                                        </label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" htmlFor="lname">
                                            Last Name
                                        </label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="email">
                                            Email
                                        </label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="subject">
                                            Subject
                                        </label>
                                        <input type="subject" id="subject" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={3}
                                            className="form-control"
                                            placeholder="Write your notes or questions here..."
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <button type="button" class="btn btn-primary"> Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact