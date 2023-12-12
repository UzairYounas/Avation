import React from 'react'
import project3 from '../../assets/images/project3.png'
import ab_i1 from '../../assets/images/ab_i1.png'
import ab_i2 from '../../assets/images/ab_i2.png'
import project2 from '../../assets/images/project2.png'
import porject4 from '../../assets/images/project4.png'
import project5 from '../../assets/images/project5.png'

import logo from "../../assets/images/logo.png"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function OurProject() {
    return (
        <>
        <div className='project_page'>
            <section className="container">
                <div className="team_head d-flex flex-column justify-content-center align-items-center text-center gap-2">
                    <div className="d-flex gap-4">
                        <hr />
                        <h3 className='text-white'>Projects</h3>
                        <hr />
                    </div>
                    <h2 className='tit8'>Our <span>Project</span></h2>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 project-bg d-flex justify-content-center">
                        <figure><img src={project3} alt="project3_img" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-6 project_box">
                        <h3 className='tit9' style={{color : '#00FFB2'}}>Avation EMF-01</h3>
                        <p className='text-white pt-4 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i1} alt="ab_i1_img" /></figure>
                            <h4 className='text-white'>Smart Solutions</h4>
                        </div>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i2} alt="ab_i2_img" /></figure>
                            <h4 className='text-white'>Certified Expert</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <div className='project_page pro-bg'>
            <section className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 project_box">
                        <h3 className='tit9' style={{color : '#00FFB2'}}>Avation EMF-02</h3>
                        <p className='text-white pt-4 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i1} alt="ab_i1_img" /></figure>
                            <h4 className='text-white'>Smart Solutions</h4>
                        </div>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i2} alt="ab_i2_img" /></figure>
                            <h4 className='text-white'>Certified Expert</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 project-bg d-flex justify-content-center">
                        <figure><img src={project2} alt="project2_img" /></figure>
                    </div>
                </div>
            </section>
        </div>
        
        <div className='project_page'>
            <section className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 project-bg d-flex justify-content-center">
                        <figure><img src={porject4} alt="porject4_img" /></figure>
                    </div>
                    <div className="col-lg-6 col-md-6 project_box">
                        <h3 className='tit9' style={{color : '#00FFB2'}}>Avation EMF-03</h3>
                        <p className='text-white pt-4 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i1} alt="ab_i1_img" /></figure>
                            <h4 className='text-white'>Smart Solutions</h4>
                        </div>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i2} alt="ab_i2_img" /></figure>
                            <h4 className='text-white'>Certified Expert</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div className='project_page pro-bg'>
            <section className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 project_box">
                        <h3 className='tit9' style={{color : '#00FFB2'}}>Avation EMF-04</h3>
                        <p className='text-white pt-4 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i1} alt="ab_i1_img" /></figure>
                            <h4 className='text-white'>Smart Solutions</h4>
                        </div>
                        <div className='d-flex align-items-center gap-lg-4 gap-md-3 gap-sm-3 gap-2'>
                            <figure><img src={ab_i2} alt="ab_i2_img" /></figure>
                            <h4 className='text-white'>Certified Expert</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 project-bg d-flex justify-content-center">
                        <figure><img src={project5} alt="project5_img" /></figure>
                    </div>
                </div>
            </section>
        </div>

        {/* ======= Footer Section start ======= */}
        <div className="container pt-lg-5 pt-md-4 pt-sm-4 pt-4 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                <div className="d-flex flex-md-row flex-sm-column flex-column gap-md-0 gap-sm-3 gap-3 justify-content-between text-center  align-items-center">
                    <a href="#" className='p-0'>
                        <figure><img className='w-100' src={logo} alt="logo_img" /></figure>
                    </a>
                    <ul className='list-inline d-flex flex-wrap justify-content-center gap-3 gap-md-3 gap-sm-2 gap-2'>
                        <li className="list-inline-item">
                            <a href="#">Company</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Contact us</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Cookie Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>
                <hr className='footer-hr'/>
                <div className="copyright d-flex flex-md-row flex-sm-column flex-column gap-md-0 gap-sm-3 justify-content-between align-items-center text-center">
                    <div className="d-flex gap-3">
                        <a className='p-0' href="#"><FaInstagram /></a>
                        <a className='p-0' href="#"><FaFacebookF /></a>
                        <a className='p-0' href="#"><FaWhatsapp /></a>
                    </div>
                    <p className='text-white'>Copyright © 2023 Avation, All rights reserved. Powered by Evonicmedia</p>
                </div>
        </div>
        {/* ======= Footer Section End ======= */}
        </>
        
    )
}
export default OurProject;