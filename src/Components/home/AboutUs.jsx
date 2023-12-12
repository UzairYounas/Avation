import React from 'react'
import av_1 from "../../assets/images/ab_i1.png"
import av_2 from "../../assets/images/ab_i2.png"
import ab_img1 from "../../assets/images/ab_im1.png"
import ab_img2 from "../../assets/images/ab_im2.png"
import ab_img3 from "../../assets/images/ab_im3.png"
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <section>
            <div className="container">
                <div className="row about">
                    {/* ========= Left Col ========= */}
                    <div className="col-lg-6 col-md-6">
                        <div className='d-flex gap-4'>
                            <h3 className='text-white'>About Us</h3>
                            <hr />
                        </div>
                        <h2 className='tit4'>Empowering <span>People</span> By Keeping Them Well</h2>
                        <p className='para4' style={{margin : '30px 0 63px 0'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s .</p>
                        <div className="about_icon">
                            <figure><img src={av_1} alt="About_image" /></figure>
                            <div>
                                <h3 className='text-white'>Smart Solutions</h3>
                                <p className='para4'>Lorem Ipsum is simply dummy text of the printing and typesetting industr.</p>
                            </div>
                        </div>
                        <div className="about_icon">
                            <figure><img src={av_2} alt="About_image" /></figure>
                            <div>
                                <h3 className='text-white'>Certified Expert</h3>
                                <p className='para4'>Lorem Ipsum is simply dummy text of the printing and typesetting industr.</p>
                            </div>
                        </div>
                        <Link to = "/About">
                            <button>
                                About Us
                            </button>
                        </Link>
                    </div>
                    {/* ========== Right Col ============ */}
                    <div className="col-lg-6 col-md-6 bg d-flex align-items-center">
                        <div>
                            <div className="ab_im2">
                                <figute className="ab_im">
                                <img src={ab_img1} alt="about_image1" />
                                </figute>
                            </div>
                            <div className="ab_im2">
                                <figute className="ab_im">
                                <img src={ab_img2} alt="about_image1" />
                                </figute>
                            </div>
                        </div>
                        <div className="ab_im3">
                            <div className="ab_im13">
                                <figure><img src={ab_img3} alt="about_image2" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;