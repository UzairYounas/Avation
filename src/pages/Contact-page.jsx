import React, { useEffect } from 'react';
import NavBar from '../common/NavBar'
import Address from '../Components/Contact/Address';
import Contact from '../Components/home/Contact';
import Footer from '../common/Footer';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>Contact</h1>
            </div>
            <div className='about_m'>
                <Address />
            </div>
            <div className='about_m'>
                <Contact />
            </div>
            <div className='about_m'>
                <Footer />
            </div>
        </>
    )
}
export default ContactUs;