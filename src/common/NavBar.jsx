
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

let NavBar = () => {
    const [status, setStatus] = React.useState(false)
    return (
        <header>
            {/* // <!-- ====== Navbar section ======= --> */}
            {/* // <!-- ===== logo ===== --> */}

            <nav className="navbar navbar-expand-lg">
                <div className="container pt-3">

                    {/* <!-- site logo --> */}

                    <Link to = "/" class="navbar-brand p-0"><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" onClick={() => setStatus(true)} type="button">
                        <FaBars color="#ffffff" />
                    </button>
                    <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                        {/* <!-- menu --> */}
                        <ul className="navbar-nav d-flex gap-5 align-items-center">
                            <li className="nav-item"><NavLink to = "/" class="nav-link p-0 active">Home</NavLink></li>
                            <li className="nav-item"><NavLink to = "/about" class="nav-link p-0">About us</NavLink></li>
                            <li className="nav-item"><NavLink to = "/service" class="nav-link p-0">Services</NavLink></li>
                            <li className="nav-item"><NavLink to = "/contact" class="nav-link p-0">Contact</NavLink></li>
                            <li className="nav-item dropdown">
                                <a class="nav-link mx-2 dropdown-toggle p-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><NavLink to = "/project" className="dropdown-item">Project</NavLink></li>
                                    <li><NavLink to = "/team" className="dropdown-item">Team</NavLink></li>
                                    <li><NavLink to = "/faq" className="dropdown-item">FAQ</NavLink></li>
                                    <li><NavLink to = "/testimonial" className="dropdown-item">Testimonial</NavLink></li>
                                    <li><NavLink to = "/pricing" className="dropdown-item">Pricing plan</NavLink></li>
                                    <li><NavLink to = "/blog" className="dropdown-item">Blog</NavLink></li>
                                    <li><NavLink to = "/coming_soon" className="dropdown-item">Coming soon</NavLink></li>
                                    <li><NavLink to = "/404" className="dropdown-item">404</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item-last">
                                {/* <!-- header buttons --> */}
                                <NavLink to = "/contact" className="nav-link btn-hover">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Sidebar --> */}
            {
                status ? (<aside id="mySidepanel" className="sidepanel">
                    <div class="sidebar">
                        <a class="p-0" href="index.html"><img src={logo} alt="logo" /></a>
                        <button className="closebtn" onClick={() => setStatus(false)}>
                            <IoClose color="#ffffff" />
                        </button>
                    </div>
                    <div>
                        {/* <!-- side menus --> */}
                        <ul>
                            <li class="nav-item"><NavLink to = "/" className="nav-link">Home</NavLink></li>
                            <li class="nav-item"><NavLink to = "/about" className="nav-link">About us</NavLink></li>
                            <li class="nav-item"><NavLink to = "/service" className="nav-link">Services</NavLink></li>
                            <li class="nav-item"><NavLink to = "/contact" className="nav-link">Contact</NavLink></li>
                            <li className="pages"><a href="#" className="text-decoration-none">More</a></li>
                            <li className="collapse_btn nav-item d-flex justify-content-between flex-row-reverse">
                                <a className="nav-link plus_collapse" data-bs-toggle="collapse" href="#pages" role="button" aria-expanded="false" aria-controls="pages">
                                    <FaPlus color="#ffffff" />
                                </a>
                                <div className="collapse" id="pages">
                                    <ul>
                                        <li className="nav-item"><NavLink to = "/faq" class="nav-link">FAQ</NavLink></li>
                                        <li className="nav-item"><NavLink to = "/testimonial" class="nav-link">Testimonial</NavLink></li>
                                        <li className="nav-item"><NavLink to = "/pricing" class="nav-link">Pricing Plan</NavLink></li>
                                        <li className="nav-item"><NavLink to = "/blog" class="nav-link">Blog</NavLink></li>
                                        <li className="nav-item"><NavLink to = "/coming_soon" class="nav-link">Coming Soon</NavLink></li>
                                        <li clasnName="nav-item"><NavLink to = "/404" class="nav-link">404</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>) : null
            }

        </header>
    )
};

export default NavBar ;