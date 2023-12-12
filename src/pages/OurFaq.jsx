import React, { useEffect } from 'react';
import NavBar from '../common/NavBar';
import FAQ from '../Components/home/FAQ';
import Counter from '../Components/home/Counter';
import Contact from '../Components/home/Contact';
import Footer from '../common/Footer';

function OurFaq() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>FAQ's</h1>
            </div>

            <div className="about_m">
                <FAQ />
            </div>
            <div className="container faq">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What is Lorem Ipsum ?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How Robots Work ?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Did they beneficial for us ?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingfour">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                        How can I get them ?
                                    </button>
                                </h2>
                                <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What is Lorem Ipsum ?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How Robots Work ?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Did they beneficial for us ?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingfour">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                        How can I get them ?
                                    </button>
                                </h2>
                                <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Counter />
            <Contact />
            <Footer />

        </>
    )
}
export default OurFaq;