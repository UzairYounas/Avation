import React from 'react'
import faq from "../../assets/images/faq.png"

function FAQ() {
    return (
        <div className='container faq'>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-4">
                        <h3 className='text-white'>FAQ</h3>
                        <hr />
                    </div>
                    <h2 className='tit8'>How are Robots <span>Enhancing</span> Health Care?</h2>

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
                <div className="col-lg-6 col-md-6 faq_bg d-flex justify-content-center align-items-center">
                    <div className="ab_im3">
                        <div className="ab_im13">
                            <figure><img src={faq} alt="faq_image" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ;