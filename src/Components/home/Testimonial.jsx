import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../../assets/images/testimonial1.png"
import testimonial2 from "../../assets/images/testimonial2.png"
import testimonial3 from "../../assets/images/testimonial3.png"
import testimonial4 from "../../assets/images/testimonial4.png"
import testimonial5 from "../../assets/images/testimonial5.png"

function Testimonial() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
    };
    return (
        <div className='container'>
            <div className="team_head d-flex flex-column align-items-center gap-2">
                <div className="d-flex gap-4">
                    <hr />
                    <h3 className='text-white'>Testimonial</h3>
                    <hr />
                </div>
                <h2 className='tit6'>Succour The <span>Customer Better</span></h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <Slider {...settings}>
                <div className="testimon d-flex  px-3">
                    <div className="border-test d-flex">
                        <div className="testimonial">
                            <div className="d-flex justify-content-between">
                                <div className="clip1">
                                    <div className='clip'><img src={testimonial1} alt="testimonial1" /></div>
                                </div>
                                <div className="clip2">
                                    <figure><img src={testimonial2} alt="testimonial2_img" /></figure>
                                </div>
                            </div>
                            <h5 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. </h5>
                        </div>
                    </div>
                </div>
                <div className="testimon d-flex  px-3">
                    <div className="border-test d-flex">
                        <div className="testimonial">
                            <div className="d-flex justify-content-between">
                                <div className="clip1">
                                    <div className='clip'><img src={testimonial3} alt="testimonial1" /></div>
                                </div>
                                <div className="clip2">
                                    <figure><img src={testimonial2} alt="testimonial2_img" /></figure>
                                </div>
                            </div>
                            <h5 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. </h5>
                        </div>
                    </div>
                </div>
                <div className="testimon d-flex  px-3">
                    <div className="border-test d-flex">
                        <div className="testimonial">
                            <div className="d-flex justify-content-between">
                                <div className="clip1">
                                    <div className='clip'><img src={testimonial4} alt="testimonial1" /></div>
                                </div>
                                <div className="clip2">
                                    <figure><img src={testimonial2} alt="testimonial2_img" /></figure>
                                </div>
                            </div>
                            <h5 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. </h5>
                        </div>
                    </div>
                </div>
                <div className="testimon d-flex  px-3">
                    <div className="border-test d-flex">
                        <div className="testimonial">
                            <div className="d-flex justify-content-between">
                                <div className="clip1">
                                    <div className='clip'><img src={testimonial5} alt="testimonial1" /></div>
                                </div>
                                <div className="clip2">
                                    <figure><img src={testimonial2} alt="testimonial2_img" /></figure>
                                </div>
                            </div>
                            <h5 className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. </h5>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
};
export default Testimonial;