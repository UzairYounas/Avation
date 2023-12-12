import React from 'react'
import artificial from "../../assets/images/artificial.png"
import { Link } from 'react-router-dom';

 function AI() {
  return (
    <section className='artificial'>
      <div className="row w-100 m-0">
        <div className="col-lg-6 col-md-6">
            <figure><img src={artificial} alt="artificial_image" /></figure>
        </div>
        <div className="col-lg-6 col-md-6 d-flex justify-content-center flex-column">
            <h2 className='tit5'>
                Artificial Intelligence Is The New Big Thing In <span> Technology</span>
            </h2>
            <div>
                <Link to = "/Contact" style={{padding : "16px 38px 16px 38px"}}>Discover more</Link>
            </div>
        </div>
      </div>
    </section>
  )
}
export default AI;