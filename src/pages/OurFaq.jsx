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
                                <h2 class="accordion-header" id="flush-headingNine">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                        What is Lorem Ipsum ?
                                    </button>
                                </h2>
                                <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTen">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                        How Robots Work ?
                                    </button>
                                </h2>
                                <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingEle">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEle" aria-expanded="false" aria-controls="flush-collapseEle">
                                        Did they beneficial for us ?
                                    </button>
                                </h2>
                                <div id="flush-collapseEle" class="accordion-collapse collapse" aria-labelledby="flush-headingEle" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwe">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwe" aria-expanded="false" aria-controls="flush-collapseTwe">
                                        How can I get them ?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwe" class="accordion-collapse collapse" aria-labelledby="flush-headingTwe" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFive">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What is Lorem Ipsum ?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSix">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        How Robots Work ?
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        Did they beneficial for us ?
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body papra3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingEight">
                                    <button class="accordion-button collapsed tit9" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                        How can I get them ?
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
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