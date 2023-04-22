import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { Autoplay, Pagination, Navigation } from "swiper";

import './Header.css';
const Header = () => {


    return (

        <div>
            <div id="sticky-wrapper" class="sticky-wrapper" >
                <div className='site-wrap header-container'>
                    <div id="sticky-wrapper" className="sticky-wrapper" >
                        <header
                            className="site-navbar js-sticky-header site-navbar-target"
                            role="banner"

                        >
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-6 col-xl-2">
                                        <h1 className="mb-0 site-logo">
                                            <a href="index.html" className="h2 mb-0">
                                                Finances<span className="text-primary">.</span>{" "}
                                            </a>
                                        </h1>
                                    </div>
                                    <div className="col-12 col-md-10 d-none d-xl-block">
                                        <nav
                                            className="site-navigation position-relative text-right"
                                            role="navigation"
                                        >
                                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                                <li>
                                                    <a href="#home-section" className="nav-link active">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="has-children">
                                                    <a href="#about-section" className="nav-link">
                                                        About Us
                                                    </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <a href="#team-section" className="nav-link">
                                                                Team
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#pricing-section" className="nav-link">
                                                                Pricing
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#faq-section" className="nav-link">
                                                                FAQ
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#gallery-section" className="nav-link">
                                                                Gallery
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#services-section" className="nav-link">
                                                                Services
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#testimonials-section" className="nav-link">
                                                                Testimonials
                                                            </a>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="#">More Links</a>
                                                            <ul className="dropdown">
                                                                <li>
                                                                    <a href="#">Menu One</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Menu Two</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Menu Three</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#blog-section" className="nav-link">
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#contact-section" className="nav-link">
                                                        Contact
                                                    </a>
                                                </li>
                                                <li className="social">
                                                    <a href="#contact-section" className="nav-link">
                                                        <FaFacebookF />
                                                    </a>
                                                </li>
                                                <li className="social">
                                                    <a href="#contact-section" className="nav-link">
                                                        <FaTwitter />
                                                    </a>
                                                </li>
                                                <li className="social">
                                                    <a href="#contact-section" className="nav-link">
                                                        <FaLinkedinIn />
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div
                                        className="col-6 d-inline-block d-xl-none ml-md-0 py-3"

                                    >
                                        <a href="#" className="site-menu-toggle js-menu-toggle float-right">
                                            <span className="icon-menu h3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <ul></ul>

                        <div
                            className="site-blocks-cover overlay aos-init aos-animate"
                            style={{ backgroundImage: "url(images/hero_2.jpg)" }}

                            data-aos="fade"
                            id="home-section"
                        >
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-20 mt-lg-10 text-center">
                                        <div className="single-text owl-carousel owl-loaded owl-drag">

                                            <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                            >

                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage">
                                                        <SwiperSlide>
                                                            <div className="owl-item cloned" >
                                                                <div className="slide">
                                                                    <h1
                                                                        className="text-uppercase aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                    >
                                                                        Financing Solutions
                                                                    </h1>
                                                                    <p
                                                                        className="mb-5 desc aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                    >
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Repudiandae minima delectus accusamus accusantium deleniti
                                                                        libero excepturi porro illo.
                                                                    </p>
                                                                    <div
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                        className="aos-init aos-animate"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            target="_blank"
                                                                            className="btn  btn-primary mr-2 mb-2"
                                                                        >
                                                                            Get In Touch
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="owl-item cloned" >
                                                                <div className="slide">
                                                                    <h1
                                                                        className="text-uppercase aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                    >
                                                                        Savings Accounts
                                                                    </h1>
                                                                    <p
                                                                        className="mb-5 desc aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                    >
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Repudiandae minima delectus accusamus accusantium deleniti
                                                                        libero excepturi porro illo.
                                                                    </p>
                                                                    <div
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                        className="aos-init aos-animate"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            target="_blank"
                                                                            className="btn  btn-primary mr-2 mb-2"
                                                                        >
                                                                            Get In Touch
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="owl-item active" >
                                                                <div className="slide">
                                                                    <h1
                                                                        className="text-uppercase aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                    >
                                                                        Banking Solutions
                                                                    </h1>
                                                                    <p
                                                                        className="mb-5 desc aos-init aos-animate"
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                    >
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Repudiandae minima delectus accusamus accusantium deleniti
                                                                        libero excepturi porro illo.
                                                                    </p>
                                                                    <div
                                                                        data-aos="fade-up"
                                                                        data-aos-delay={100}
                                                                        className="aos-init aos-animate"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            target="_blank"
                                                                            className="btn  btn-primary mr-2 mb-2"
                                                                        >
                                                                            Get In Touch
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </div>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header