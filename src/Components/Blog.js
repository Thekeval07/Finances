import React from 'react'
import Img1 from '../image/img_3.jpg'
import Img2 from '../image/img_4.jpg'
import Img3 from '../image/img_5.jpg'

const Blog = () => {
    return (
        <div>

            <section className="site-section" id="blog-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center aos-init aos-animate" data-aos="fade">
                            <h2 className="section-title mb-3">Our Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay=""
                        >
                            <div className="h-entry">
                                <img src={Img1} alt="gfgh" className="img-fluid" />
                                <h2 className="font-size-regular">
                                    <p>Banking is good for business? Why?</p>
                                </h2>
                                <div className="meta mb-4">
                                    Ham Brook <span className="mx-2">•</span> Jan 18, 2019
                                    <span className="mx-2">•</span> <a href="#">News</a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
                                    quaerat rerum voluptatibus a eius.
                                </p>
                                <p>
                                    <a href="#">Continue Reading...</a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="h-entry">
                                <a href="single.html">
                                    <img src={Img2} alt="" className="img-fluid" />
                                </a>
                                <h2 className="font-size-regular">
                                    <p> Banking is good for business? Why?</p>
                                </h2>
                                <div className="meta mb-4">
                                    James Phelps <span className="mx-2">•</span> Jan 18, 2019
                                    <span className="mx-2">•</span> <a href="#">News</a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
                                    quaerat rerum voluptatibus a eius.
                                </p>
                                <p>
                                    <a href="#">Continue Reading...</a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="h-entry">
                                <a href="single.html">
                                    <img src={Img3} alt="" className="img-fluid" />
                                </a>
                                <h2 className="font-size-regular">
                                    <p>Banking is good for business? Why?</p>
                                </h2>
                                <div className="meta mb-4">
                                    James Phelps <span className="mx-2">•</span> Jan 18, 2019
                                    <span className="mx-2">•</span> <a href="#">News</a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                                    eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
                                    quaerat rerum voluptatibus a eius.
                                </p>
                                <p>
                                    <a href="#">Continue Reading...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog