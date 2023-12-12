import React from 'react'
import team1 from "../../assets/images/team1.png"
import team2 from "../../assets/images/team2.png"
import team3 from "../../assets/images/team3.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

 function TeamSection() {
  return (
    <div className='container'>
        <div className="team_head d-flex flex-column align-items-center gap-2">
            <div className="d-flex gap-4">
                <hr />
                <h3 className='text-white'>Team</h3>
                <hr />
            </div>
            <h2 className='tit6'>Our Certified <span>Scientists</span> With Smart Solutions</h2>
        </div>
        <div className="team-card d-flex">
            <div className="card d-flex justify-content-end align-items-center">
                <img src= {team1} alt="team1_image"/>
                <div className="card-txt d-flex flex-column align-items-center w-100">
                    <h3 className='text-white'>John Edward</h3>
                    <h4 className='text-white'>Operation Manager</h4>
                    <span className='d-flex gap-4'>
                        <a href="#"><FaInstagram color='#00FFB2'/></a>
                        <a href="#"><FaFacebookF color='#00FFB2'/></a>
                        <a href="#"><FaWhatsapp color='#00FFB2'/></a>
                    </span>
                </div>
            </div>
            <div className="card d-flex justify-content-end align-items-center">
                <img src= {team2} alt="team1_image"/>
                <div className="card-txt d-flex flex-column align-items-center w-100">
                    <h3 className='text-white'>Karlin Joe</h3>
                    <h4 className='text-white'>Operation Manager</h4>
                    <span className='d-flex gap-4'>
                        <a href="#"><FaInstagram color='#00FFB2'/></a>
                        <a href="#"><FaFacebookF color='#00FFB2'/></a>
                        <a href="#"><FaWhatsapp color='#00FFB2'/></a>
                    </span>
                </div>
            </div>
            <div className="card d-flex justify-content-end align-items-center">
                <img src= {team3} alt="team1_image"/>
                <div className="card-txt d-flex flex-column align-items-center w-100">
                    <h3 className='text-white'>John Edward</h3>
                    <h4 className='text-white'>Operation Manager</h4>
                    <span className='d-flex gap-4'>
                        <a href="#"><FaInstagram color='#00FFB2'/></a>
                        <a href="#"><FaFacebookF color='#00FFB2'/></a>
                        <a href="#"><FaWhatsapp color='#00FFB2'/></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default TeamSection;