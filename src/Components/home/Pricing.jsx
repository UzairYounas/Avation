import React from 'react'
import pricing from "../../assets/images/pricing.png"
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='container pricing'>
            <div className="team_head d-flex flex-column align-items-center gap-2">
                <div className="d-flex gap-4">
                    <hr />
                    <h3 className='text-white'>Pricing Plan</h3>
                    <hr />
                </div>
                <h2 className='tit6'>Our <span>Pricing Plan</span></h2>
            </div>
            <div className="d-flex flex-md-row flex-column align-items-center justify-content-center gap-5">
                {/* ====== Basic Plan ======= */}
                <div className="border-price">
                    <div className="pricing_card d-flex flex-column align-items-center justify-content-center">
                        <figure><img src={pricing} alt="pricing_img" /></figure>
                        <h3>Basic</h3>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <h2 className='tit7'>$2.99</h2>
                        <div>
                            <Link to = "/pricing" className='getquo'>Get a Quote</Link>
                        </div>
                    </div>
                </div>
                {/* ====== Premium Plan ======= */}
                <div className="border-price">
                    <div className="pricing_card d-flex flex-column align-items-center justify-content-center">
                        <figure><img src={pricing} alt="pricing_img" /></figure>
                        <h3>Premium</h3>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <div className="d-flex gap-3 my-1">
                        <FaCheck className='check'/>
                        <p>Lorem Ipsum dolor sit</p>
                        </div>
                        <h2 className='tit7'>$4.99</h2>
                        <div>
                            <Link to = "/pricing" className='getquo'>Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;