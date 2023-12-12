import React, { useEffect } from 'react';
import NavBar from '../common/NavBar';
import Insight from '../Components/home/Insight';
import Whyus from '../Components/About/Whyus';
import Testimonial from '../Components/home/Testimonial';
import FAQ from '../Components/home/FAQ';
import AI from '../Components/home/AI';
import Contact from '../Components/home/Contact';
import Footer from '../common/Footer';
import ServiceSection from '../Components/home/ServiceSection';
import Card from '../Components/home/Card';

function OurServices() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>Services</h1>
            </div>
            <ServiceSection />
            <div className="about_m">
                <Card />
            </div>
            <Whyus />
            <div className="about_m">

                <Testimonial />
            </div>
            <FAQ />
            <AI />
            <Contact />
            <Footer />
        </>
    )
}

export default OurServices
