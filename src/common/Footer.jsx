import React from 'react'
import footer from "../assets/images/footer.png"
import logo from "../assets/images/logo.png"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


function Footer() {
    return (
        <>
        <footer className='home pt-4 pb-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                        <div className="team_head d-flex flex-column gap-2">
                            <div className="d-flex gap-4">
                                <h3 className='text-white'>Newsletter</h3>
                                <hr />
                            </div>
                            <h2 className='tit8'>Subscribe our <span>Newsletter</span></h2>
                        </div>
                        <form className='d-flex footer_form'>
                            <input type="text" placeholder='Enter your email address' required/>
                            <div>
                            <button type="submit">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 bg">
                        <figure><img className='w-100' src={footer} alt="footer_img" /></figure>
                    </div>
                </div>
            </div>
        </footer>
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
        </>
    )
}
export default Footer;