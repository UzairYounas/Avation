import React from "react";
import web_title_btn from "../../assets/images/web_title_btn.png";
import { FaArrowRight } from "react-icons/fa6";
// import web_title_bg from "../assets/images/web_title_bg.png";
import web_title from "../../assets/images/web_title.png";
import { Link } from "react-router-dom";

let MainContent = () => {
    return(
        <section className="main">
            <div className="container">
                <div className="row banner">
                    <div className="col-lg-6 col-md-6">
                        <h1 className="tit1">Let's Horizon <span>Robotics </span>Handle It.</h1>
                        <p className="para1">lorem ipsum dolor sit amet, consectetur adipicsing elit, sed do eisumod tempor incidedent ut labore at dolore magna aliqua.</p>
                        <Link to = "/about" className="button d-flex align-items-center text-decoration-none">
                        <img src={web_title_btn} alt="circle" />
                        <FaArrowRight className="arrow" style={{color:"#6663d4f5"}} />
                        <p className="p2">Learn More</p>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div>
                            {/* <figure> */}
                                <img src= {web_title} alt="robot"/>
                            {/* </figure> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default MainContent