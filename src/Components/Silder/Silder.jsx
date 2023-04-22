import React from 'react'
import slider_img_one from '../../image/img_3.jpg';
import slider_img_two from '../../image/img_4.jpg';
import { Swiper } from 'swiper/react';
import slider_img_three from '../../image/img_5.jpg'
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { SwiperSlide } from 'swiper/react';
import SilderContain from './SilderContain/SilderContain';
import './Silder.css'
const silderData = [{
    img: slider_img_one,
    title: "01. Online Applications",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?",
    buttonText: 'Learn more'
},
{
    img: slider_img_two,
    title: "02. Get an approval",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?",
    buttonText: 'Learn more'
},
{
    img: slider_img_three,
    title: "03. Card delivery",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi, deserunt necessitatibus odio magnam nihil illum neque voluptas?",
    buttonText: 'Learn more'
}]
const Silder = () => {

    return (
        <div className='container silder-container'>
            <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".left-btn-arrow",
                    nextEl: ".right-btn-arrow ",
                }}

                modules={[Navigation, Autoplay]}
                className='mySwiper2'
            >
                {silderData.map((item, index) => {
                    return <SwiperSlide>
                        <SilderContain key={`${index}`} title={item.title} description={item.description} buttonText={item.buttonText} img={item.img} />
                    </SwiperSlide>
                })}
                <div className='bg-primary slider-btn-block custom-direction'>
                    <div className='left-btn-arrow'>
                        <BsArrowLeft />
                    </div>
                    <div className='right-btn-arrow'>
                        <BsArrowRight />
                    </div>
                </div>
            </Swiper>

        </div >
    )
}

export default Silder