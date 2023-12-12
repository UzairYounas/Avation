 import React from 'react'

import service from "../../assets/images/service.png";

 function ServiceSection() {
return (
    <div>
      <div className="container">
        <div className="row service">
            <div className="col-lg-6 col-md-6">
                <div>
                    <img src= {service} alt="service"/>
                </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='d-flex gap-4 mb-2'>
                <h3 className='text-white'>Services</h3>
                <hr />
              </div>
              <h2 className='tit2'>Promising Care; <span>Right At Home</span></h2>
              <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ServiceSection;