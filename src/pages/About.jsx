import React, { useEffect } from 'react';
import NavBar from '../common/NavBar'
import AboutUs from '../Components/home/AboutUs';
import Whyus from '../Components/About/Whyus';
import TeamSection from '../Components/home/TeamSection';
import AI from '../Components/home/AI';
import Contact from '../Components/home/Contact';
import Project from '../Components/home/Project';
import Insight from '../Components/home/Insight';
import Footer from '../common/Footer';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='about_bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>About Us</h1>
            </div>
            <div className='about_m'>
                <AboutUs />
            </div>
            <Whyus />
            <div className='about_m'>
                <TeamSection />
            </div>
            <div className='about_m'>
                <AI />
            </div>
            <div className='about_m'>
                <Contact />
            </div>
            <div className='about_m'>
                <Project />
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
export default About;