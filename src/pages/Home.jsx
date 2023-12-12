import React, { useEffect } from 'react';
import NavBar from '../common/NavBar'
import MainContent from '../Components/home/MainContent'
import ServiceSection from '../Components/home/ServiceSection'
import Card from '../Components/home/Card'
import Counter from '../Components/home/Counter'
import AboutUs from '../Components/home/AboutUs'
import AI from '../Components/home/AI'
import TeamSection from '../Components/home/TeamSection'
import Testimonial from '../Components/home/Testimonial'
import Project from '../Components/home/Project'
import Pricing from '../Components/home/Pricing'
import FAQ from '../Components/home/FAQ'
import Contact from '../Components/home/Contact'
import Insight from '../Components/home/Insight'
import Footer from '../common/Footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="home">
                <NavBar />
                <MainContent />  
            </div>
                <ServiceSection/>
                <Card />
                <Counter />
                <AboutUs />
                <AI />
                <TeamSection />
                <Testimonial />
                <Project />
                <Pricing />
                <FAQ />
                <Contact />
                <Insight />
                <Footer />
        </>
    )
}

export default Home
