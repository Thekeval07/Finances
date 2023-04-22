import React from 'react'
import Person from '../image/person_1.jpg.webp'
import Person2 from '../image/person_2.jpg.webp'
import Person3 from '../image/person_3.jpg.webp'
import Img1 from '../image/img_3.jpg'
import Img2 from '../image/img_4.jpg'
import Img3 from '../image/img_5.jpg'
import Img5 from '../image/hero_2.jpg'
import reactImg from '../image/hero_2.jpg'
import AboutImg from '../image/about2.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Silder from './Silder/Silder'







const About = () => {


    return (
        <>
            <div className="container-about">
                <div className="site-section mt-3 t-100 cta-big-image" id="about-section">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2
                                className="section-title-about mb-3 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay=""
                            >
                                About Us
                            </h2>
                            <p
                                className="lead aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
                                neque tempora reiciendis.
                            </p>
                        </div>
                    </div>
                    <div className="row-about">
                        <div
                            className="col-lg-6 mb-5 ml-1 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <figure className="circle-bg">
                                <img
                                    src={reactImg}
                                    alt="Free Website Template by Free-Template.co"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                        <div
                            className="col-lg-5 ml-auto aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they
                                live in Bookmarksgrove right at the coast of the Semantics, a large
                                language ocean.
                            </p>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia. It is a paradisematic country, in which
                                roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="site-section" id="next">
                <div className="container">
                    <div className="row mb-5">
                        <div
                            className="col-md-4 text-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <img
                                src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/001-wallet.svg"
                                alt="Free Website Template by Free-Template.co"
                                className="img-fluid w-25 mb-4"
                            />
                            <h3 className="card-title">Money Savings</h3>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                        <div
                            className="col-md-4 text-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <img
                                src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/004-cart.svg"
                                alt="Free Website Template by Free-Template.co"
                                className="img-fluid w-25 mb-4"
                            />
                            <h3 className="card-title">Online Shoppings</h3>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                        <div
                            className="col-md-4 text-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <img
                                src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/006-credit-card.svg"
                                alt="Free Website Template by Free-Template.co"
                                className="img-fluid w-25 mb-4"
                            />
                            <h3 className="card-title">Credit / Debit Cards</h3>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-6 mb-5 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <figure className="circle-bg">
                                <img
                                    src={AboutImg}
                                    alt="Free Website Template by Free-Template.co"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                        <div
                            className="col-lg-5 ml-auto aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="mb-4">
                                <h3 className="h3 mb-4 text-black">
                                    Banking Solutions Is Our Priority
                                </h3>
                                <p>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia.
                                </p>
                            </div>
                            <div className="mb-4">
                                <ul className="list-unstyled ul-check success">
                                    <TiTick /><li>Officia quaerat eaque neque</li>
                                    <TiTick /><li>Lorem ipsum dolor sit amet</li>
                                    <TiTick /><li>Consectetur adipisicing elit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2
                            className="section-title mb-3 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            Meet Team
                        </h2>
                        <p
                            className="lead aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            A small river named Duden flows by their place and supplies it with the
                            necessary regelialia.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-md-6 col-lg-4 mb-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay=""
                    >
                        <div className="team-member">
                            <figure>
                                <ul className="social">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagram /><br />
                                        </a>
                                    </li>
                                </ul>
                                <img src={Person} alt="Image" className="img-fluid" />
                            </figure>
                            <div className="p-3">
                                <h3>Kaiara Spencer</h3>
                                <span className="position">Accountant</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 mb-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="team-member">
                            <figure>
                                <ul className="social">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagram /><br />
                                        </a>
                                    </li>
                                </ul>
                                <img src={Person2} alt="Image" className="img-fluid" />
                            </figure>
                            <div className="p-3">
                                <h3>Dave Simpson</h3>
                                <span className="position">Bank Teller</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 mb-4 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        <div className="team-member">
                            <figure>
                                <ul className="social">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaTwitter /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn /><br />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagram /><br />
                                        </a>
                                    </li>
                                </ul>
                                <img src={Person3} alt="Image" className="img-fluid" />
                            </figure>
                            <div className="p-3">
                                <h3>Ben Thompson</h3>
                                <span className="position">Bank Teller</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ul></ul>


            <section
                className="site-section aos-init aos-animate"
                id="gallery-section"
                data-aos="fade"
            >
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3">Gallery</h2>
                        </div>
                    </div>
                    <div
                        id="posts"
                        className="row no-gutter"

                    >
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a href="images/img_1.jpg" className="item-wrap fancybox">
                                <span className="icon-search2" />
                                <img className="img-fluid" src={AboutImg} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_2.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img5} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_3.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img1} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_4.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img3} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_5.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img1} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_1.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={AboutImg} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_2.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img3} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_3.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img5} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_4.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img3} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_5.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img2} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_1.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={Img5} />
                            </a>
                        </div>
                        <div
                            className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4"

                        >
                            <a
                                href="images/img_2.jpg"
                                className="item-wrap fancybox"
                                data-fancybox="gallery2"
                            >
                                <span className="icon-search2" />
                                <img className="img-fluid" src={AboutImg} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* HOW ITS WORK */}
            <section className="site-section">
                <Silder />
                {/* <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2
                                className="section-title mb-3 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay=""
                            >
                                How It Works
                            </h2>
                            <p
                                className="lead aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
                                fugiat molestiae eligendi repudiandae error?
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-lg-center">
                        <div
                            className="col-lg-6 mb-5 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <div className="owl-carousel slide-one-item-alt owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-1080px, 0px, 0px)",
                                            transition: "all 1s ease 0s",
                                            width: 3780
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 540 }}>
                                            <img src={Img1} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 540 }}>
                                            <img src={Img2} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item active" style={{ width: 540 }}>
                                            <img src={Img3} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item" style={{ width: 540 }}>
                                            <img src={Img1} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item" style={{ width: 540 }}>
                                            <img src={Img2} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 540 }}>
                                            <img src={Img3} alt="Image" className="img-fluid" />
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 540 }}>
                                            <img src={Img1} alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots">
                                    <div className="owl-dot active">
                                        <span />
                                    </div>
                                    <div className="owl-dot">
                                        <span />
                                    </div>
                                    <div className="owl-dot">
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="custom-direction">
                                <a href="#" className="custom-prev">
                                    <span>
                                        <span className="icon-keyboard_backspace" />
                                    </span>
                                </a>
                                <a href="#" className="custom-next">
                                    <span>
                                        <span className="icon-keyboard_backspace" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 ml-auto aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="owl-carousel slide-one-item-alt-text owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-890px, 0px, 0px)",
                                            transition: "all 1s ease 0s",
                                            width: 3115
                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">02. Get an approval</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                                                    neque voluptas?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">03. Card delivery</h2>
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                    Inventore sapiente labore eius ullam? Iusto?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">
                                                    01. Online Applications
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                                                    neque voluptas?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">02. Get an approval</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                                                    neque voluptas?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">03. Card delivery</h2>
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                    Inventore sapiente labore eius ullam? Iusto?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">
                                                    01. Online Applications
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                                                    neque voluptas?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: 445 }}>
                                            <div>
                                                <h2 className="section-title mb-3">02. Get an approval</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Cumque nisi, deserunt necessitatibus odio magnam nihil illum
                                                    neque voluptas?
                                                </p>
                                                <p>
                                                    <a href="#" className="btn btn-primary mr-2 mb-2">
                                                        Learn More
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <div className="owl-prev">prev</div>
                                    <div className="owl-next">next</div>
                                </div>
                                <div className="owl-dots">
                                    <div className="owl-dot active">
                                        <span />
                                    </div>
                                    <div className="owl-dot">
                                        <span />
                                    </div>
                                    <div className="owl-dot">
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>








            <section className="site-section border-bottom bg-light" id="services-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center aos-init aos-animate" data-aos="fade">
                            <h2 className="section-title mb-3">Our Services</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Business Consulting</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione animi tempora sint hic quod!</p>
                                    <p><a href="#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Credit Card</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo beatae minus incidunt voluptates?</p>
                                    <p><a href="#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/002-rich.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Income Monitoring</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio veritatis aperiam consequuntur qui.</p>
                                    <p><a href="#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/003-notes.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Insurance Consulting</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore suscipit distinctio inventore doloribus deserunt!</p>
                                    <p><a href="#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Financial Investment</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio voluptatibus repellat hic officia quibusdam!</p>
                                    <p><a href="#">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="unit-4">
                                <div className="unit-4-icon">
                                    <img src="https://preview.colorlib.com/theme/finances/images/flaticon-svg/svg/005-megaphone.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4" />
                                </div>
                                <div>
                                    <h3>Financial Management</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iusto eaque velit saepe nobis ipsa?</p>
                                    <p><a href="">Learn More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="site-section testimonial-wrap aos-init aos-animate"
                id="testimonials-section"
                data-aos="fade"
            >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3">Happy Customers</h2>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <div className="slide-one-item home-slider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className="owl-item cloned" >
                                    <SwiperSlide>
                                        <div className="owl-item" >

                                            <div>

                                                <div className="testimonial">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                            Deleniti tenetur ad perspiciatis quam atque eius quia suscipit
                                                            repudiandae animi voluptatem.”
                                                        </p>
                                                    </blockquote>
                                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <img
                                                                src={Person}
                                                                alt="Image"
                                                                className="w-50 img-fluid mb-3"
                                                            />
                                                        </div>
                                                        <p>John Smith</p>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item" >
                                            <div>
                                                <div className="testimonial">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                            Voluptates exercitationem ut totam distinctio magnam quisquam,
                                                            unde iure. Labore!.”
                                                        </p>
                                                    </blockquote>
                                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <img
                                                                src={Person2}
                                                                alt="Image"
                                                                className="w-50 img-fluid mb-3"
                                                            />
                                                        </div>
                                                        <p>Christine Aguilar</p>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" >
                                            <div>
                                                <div className="testimonial">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            Maxime eligendi odio nihil officia quasi nostrum, ipsa est?
                                                            Culpa, ullam dolorem!”
                                                        </p>
                                                    </blockquote>
                                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <img
                                                                src={Person3}
                                                                alt="Image"
                                                                className="w-50 img-fluid mb-3"
                                                            />
                                                        </div>
                                                        <p>Robert Spears</p>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="owl-item cloned" >
                                            <div>
                                                <div className="testimonial">
                                                    <blockquote className="mb-5">
                                                        <p>
                                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                            Nihil veniam tempora beatae animi in sapiente quos maiores ex
                                                            aut.”
                                                        </p>
                                                    </blockquote>
                                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                                        <div>
                                                            <img
                                                                src={Person}
                                                                alt="Image"
                                                                className="w-50 img-fluid mb-3"
                                                            />
                                                        </div>
                                                        <p>Bruce Rogers</p>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>

                            </div>
                        </div>
                    </div>
                </Swiper>
            </section>


            {/*PRICING*/}
            <section className="site-section bg-light" id="pricing-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up">
                            <h2 className="section-title mb-3">Pricing</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div
                            className="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <div className="pricing">
                                <h3 className="text-center text-black">Basic</h3>
                                <div className="price text-center mb-4 ">
                                    <span>
                                        <span>$47</span> / year
                                    </span>
                                </div>
                                <ul className="list-unstyled ul-check success mb-5">
                                    <p>Officia quaerat eaque neque</p>
                                    <p>Possimus aut consequuntur incidunt</p>
                                    <li className="remove">Lorem ipsum dolor sit amet</li>
                                    <li className="remove">Consectetur adipisicing elit</li>
                                    <li className="remove">Dolorum esse odio quas architecto sint</li>
                                </ul>
                                <p className="text-center">
                                    <a href="#" className="btn btn-secondary">
                                        Buy Now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 mb-4 mb-lg-0 col-lg-4 pricing-popular aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="pricing">
                                <h3 className="text-center text-black">Premium</h3>
                                <div className="price text-center mb-4 ">
                                    <span>
                                        <span>$200</span> / year
                                    </span>
                                </div>
                                <ul className="list-unstyled ul-check success mb-5">
                                    <li>Officia quaerat eaque neque</li>
                                    <li>Possimus aut consequuntur incidunt</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipisicing elit</li>
                                    <li className="remove">Dolorum esse odio quas architecto sint</li>
                                </ul>
                                <p className="text-center">
                                    <a href="#" className="btn btn-primary">
                                        Buy Now
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="pricing">
                                <h3 className="text-center text-black">Professional</h3>
                                <div className="price text-center mb-4 ">
                                    <span>
                                        <span>$750</span> / year
                                    </span>
                                </div>
                                <ul className="list-unstyled ul-check success mb-5">
                                    <li>Officia quaerat eaque neque</li>
                                    <li>Possimus aut consequuntur incidunt</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipisicing elit</li>
                                    <li>Dolorum esse odio quas architecto sint</li>
                                </ul>
                                <p className="text-center">
                                    <a href="#" className="btn btn-secondary">
                                        Buy Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row site-section" id="faq-section">
                        <div className="col-12 text-center aos-init aos-animate" data-aos="fade">
                            <h2 className="section-title">Frequently Ask Questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">
                                    Can I accept both Paypal and Stripe?
                                </h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">What available is refund period?</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">
                                    Can I accept both Paypal and Stripe?
                                </h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">What available is refund period?</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">Where are you from?</h3>
                                <p>
                                    Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod
                                    maxime corporis officia et. Distinctio assumenda minima maiores.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">What is your opening time?</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">
                                    Can I accept both Paypal and Stripe?
                                </h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                            <div
                                className="mb-5 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h3 className="text-black h4 mb-4">What available is refund period?</h3>
                                <p>
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they
                                    live in Bookmarksgrove right at the coast of the Semantics, a large
                                    language ocean.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="site-section" id="about-section">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 mb-5 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <figure className="circle-bg">
                                <img
                                    src={Img3}
                                    alt="Free Website Template by Free-Template.co"
                                    className="img-fluid"
                                />
                            </figure>
                        </div>
                        <div
                            className="col-lg-5 ml-auto aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="row">
                                <div
                                    className="col-12 mb-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay=""
                                >
                                    <div className="unit-4 d-flex">
                                        <div className="unit-4-icon mr-4 mb-3">
                                            <span className="text-primary flaticon-head" />
                                        </div>
                                        <div>
                                            <h3>Bank Loan</h3>
                                            <p>
                                                Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind texts.
                                            </p>
                                            <p className="mb-0">
                                                <a href="#">Learn More</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 mb-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="unit-4 d-flex">
                                        <div className="unit-4-icon mr-4 mb-3">
                                            <span className="text-primary flaticon-smartphone" />
                                        </div>
                                        <div>
                                            <h3>Banking Consulation </h3>
                                            <p>
                                                Separated they live in Bookmarksgrove right at the coast of
                                                the Semantics, a large language ocean.
                                            </p>
                                            <p className="mb-0">
                                                <a href="#">Learn More</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About