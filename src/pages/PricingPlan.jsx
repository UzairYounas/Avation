import React, { useEffect } from 'react';
import NavBar from '../common/NavBar';
import Pricing from '../Components/home/Pricing';
import Counter from '../Components/home/Counter';
import Contact from '../Components/home/Contact';
import Footer from '../common/Footer';

function PricingPlan() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>Pricing Plan</h1>
            </div>

            <div className="about_m">
                <Pricing />
            </div>
            <Counter />
            <Contact />
            <Footer />
        </>
    )
}
export default PricingPlan;