import React from 'react'
import insight1 from "../../assets/images/insight1.png"
import insight2 from "../../assets/images/insight2.png"
import insight3 from "../../assets/images/insight3.png"
import insight4 from "../../assets/images/insight4.png"

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Insight() {
    return (
        <section className='container insights'>
            <div className='d-flex gap-4'>
                <h3 className='text-white'>Insights</h3>
                <hr />
            </div>
            <h2 className='tit4'>Tapping <span>Intelligence</span> Through Talent.</h2>
            {/* ===== Cards start ===== */}
            <div className="home_card mt d-flex">
                <div className="card1 pad">
                    <div><img src={insight1} alt="card_image" /></div>
                    <div>
                        <h4 className='text-white'>3 Cobot Success Stories</h4>
                        <p className='para3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Link to = "/blog" className='p-0'>Learn more <FaArrowRight className='arrow-right' /></Link>
                    </div>
                </div>
                <div className="card1 pad">
                    <div><img src={insight2} alt="card_image" /></div>
                    <div>
                        <h4 className='text-white'>Boost Your Cobot Safety Know.</h4>
                        <p className='para3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Link to = "/blog" className='p-0'>Learn more <FaArrowRight className='arrow-right' /></Link>
                    </div>
                </div>
            </div>
            <div className="home_card mt d-flex">
                <div className="card1 pad">
                    <div><img src={insight3} alt="card_image" /></div>
                    <div>
                        <h4 className='text-white'>Self-Driving Vehicle Success Is Tied.</h4>
                        <p className='para3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Link to = "/blog" className='p-0'>Learn more <FaArrowRight className='arrow-right' /></Link>
                    </div>
                </div>
                <div className="card1 pad">
                    <div><img src={insight4} alt="card_image" /></div>
                    <div>
                        <h4 className='text-white'>Justifying Automation Factory.</h4>
                        <p className='para3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Link to = "/blog" className='p-0'>Learn more <FaArrowRight className='arrow-right' /></Link>
                    </div>
                </div>
            </div>
            {/* ==== Cards End ==== */}

        </section>
    )
}
export default Insight;