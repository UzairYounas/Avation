import React from 'react'
import card1 from "../../assets/images/card1.png"
import card1_1 from "../../assets/images/card1_1.png"
import card2 from "../../assets/images/card2.png"
import card2_2 from "../../assets/images/card2_2.png"
import card3 from "../../assets/images/card3.png"
import card3_3 from "../../assets/images/card3_3.png"
import card4 from "../../assets/images/card4.png"

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

 function Card() {
  return (
      <div className="container">
        <div className="home_card mt d-flex">
            <div className="card1">
                <div><img src= {card1} alt="card_image"/></div>
                <div>
                    <div className='d-flex'>
                    <img src= {card1_1} alt="card_image2"/>
                    <h3 className='text-white'>Automation</h3>
                    </div>
                    <p className='para2'>Lorem Ipsum is simply dummy text of the printing.</p>
                    <Link to = "/service">Learn more <FaArrowRight className='arrow-right'/></Link>
                </div>
            </div>
            <div className="card1">
                <div><img src= {card2} alt="card_image"/></div>
                <div>
                    <div>
                    <img src= {card2_2} alt="card_image2"/>
                    <h3 className='text-white'>Machine Learning</h3>
                    </div>
                    <p className='para2'>Lorem Ipsum is simply dummy text of the printing.</p>
                    <Link to = "/service">Learn more <FaArrowRight className='arrow-right'/></Link>
                </div>
            </div>
        </div>
        <div className="home_card mt d-flex">
            <div className="card1">
                <div><img src= {card3} alt="card_image"/></div>
                <div>
                    <div>
                    <img src= {card3_3} alt="card_image2"/>
                    <h3 className='text-white'>Cyber Security</h3>
                    </div>
                    <p className='para2'>Lorem Ipsum is simply dummy text of the printing.</p>
                    <Link to = "/service">Learn more <FaArrowRight className='arrow-right'/></Link>
                </div>
            </div>
            <div className="card1">
                <div><img src= {card4} alt="card_image"/></div>
                <div>
                    <div>
                    <img src= {card2_2} alt="card_image2"/>
                    <h3 className='text-white'>Cloud Computing</h3>
                    </div>
                    <p className='para2'>Lorem Ipsum is simply dummy text of the printing.</p>
                    <Link to = "/service">Learn more <FaArrowRight className='arrow-right'/></Link>
                </div>
            </div>
        </div>
      </div>
  )
}
export default Card ;