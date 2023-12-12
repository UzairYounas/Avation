import React from 'react'
import { Link } from "react-router-dom";
import comingSoon from '../assets/images/coming_soon.png'

function ComingSoon() {
  return (
    <div className='container page_com'>
      <div className="row gap-md-0 gap-sm-5 gap-5">
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-sm-start align-items-center gap-1">
            <h1 className='tit8'>Coming <span>Soon</span></h1>
            <div>
                <Link className='back-home' to = "/" style={{padding: '16px 38px 16px 38px'}}>Go Back to Home Page</Link>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 d-flex align-items-center">
            <figure><img className='w-100' src={comingSoon} alt="" /></figure>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
