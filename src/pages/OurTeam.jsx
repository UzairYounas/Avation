import React, { useEffect } from 'react';
import NavBar from '../common/NavBar';
import TeamSection from '../Components/home/TeamSection';
import team4 from "../assets/images/team4.png"
import team5 from "../assets/images/team5.png"
import team6 from "../assets/images/team6.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import FAQ from '../Components/home/FAQ';
import AI from '../Components/home/AI';
import Insight from '../Components/home/Insight';
import Footer from '../common/Footer';

function OurTeam() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>Team</h1>
            </div>
            <div className='about_m'>
                <TeamSection />
            </div>
            <div className="container">
                <div className="team-card d-flex">
                    <div className="card d-flex justify-content-end align-items-center">
                        <img src={team4} alt="team1_image" />
                        <div className="card-txt d-flex flex-column align-items-center w-100">
                            <h3 className='text-white'>John Edward</h3>
                            <h4 className='text-white'>Operation Manager</h4>
                            <span className='d-flex gap-4'>
                                <a href="#"><FaInstagram color='#00FFB2' /></a>
                                <a href="#"><FaFacebookF color='#00FFB2' /></a>
                                <a href="#"><FaWhatsapp color='#00FFB2' /></a>
                            </span>
                        </div>
                    </div>
                    <div className="card d-flex justify-content-end align-items-center">
                        <img src={team5} alt="team1_image" />
                        <div className="card-txt d-flex flex-column align-items-center w-100">
                            <h3 className='text-white'>Karlin Joe</h3>
                            <h4 className='text-white'>Operation Manager</h4>
                            <span className='d-flex gap-4'>
                                <a href="#"><FaInstagram color='#00FFB2' /></a>
                                <a href="#"><FaFacebookF color='#00FFB2' /></a>
                                <a href="#"><FaWhatsapp color='#00FFB2' /></a>
                            </span>
                        </div>
                    </div>
                    <div className="card d-flex justify-content-end align-items-center">
                        <img src={team6} alt="team1_image" />
                        <div className="card-txt d-flex flex-column align-items-center w-100">
                            <h3 className='text-white'>John Edward</h3>
                            <h4 className='text-white'>Operation Manager</h4>
                            <span className='d-flex gap-4'>
                                <a href="#"><FaInstagram color='#00FFB2' /></a>
                                <a href="#"><FaFacebookF color='#00FFB2' /></a>
                                <a href="#"><FaWhatsapp color='#00FFB2' /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about_m'>
                <FAQ />
            </div>
            <div className='about_m'>
                <AI />
            </div>
            <div className='about_m'>
                <Insight />
            </div>
            <div className='about_m'>
                <Footer />
            </div>

        </>
    )
}
export default OurTeam;