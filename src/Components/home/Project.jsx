import React from 'react'
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className='project_bg'>
            <div className="container">
                <div className="team_head d-flex flex-column align-items-center gap-2">
                    <div className="d-flex gap-4">
                        <hr />
                        <h3 className='text-white'>Projects</h3>
                        <hr />
                    </div>
                    <h2 className='tit6'>Our <span>Project</span></h2>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-3 col-md-3 project">
                    <figure>
                        <img src={project2} alt="project1_img" />
                    </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 project_card">
                        <h4>Avation EMF-01</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <Link to = "/Project" className='p-0'>Learn more <FaArrowRight className='arrow-right'/></Link>
                    </div>
                    <div className="col-lg-3 col-md-3 project">
                    <figure>
                        <img src={project1} alt="project1_img" />
                    </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 project_card">
                        <h4>Avation EMF-01</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <Link to = "/Project" className='p-0'>Learn more <FaArrowRight className='arrow-right'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;