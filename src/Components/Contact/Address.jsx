import React from 'react'
import pricing from '../../assets/images/pricing.png'
import address2 from '../../assets/images/address2.png'
import address3 from '../../assets/images/address3.png'

 function Address() {
  return (
    <div className='container d-flex justify-content-between flex-md-row flex-sm-column flex-column gap-3'>
      <div className="address-box">
        <figure><img src={pricing} alt="" /></figure>
        <h2 className='tit10'>Location</h2>
        <h5>Plaza X , XY Floor, XYZ Street, XYZ</h5>
      </div>
      <div className="address-box">
        <figure><img src={address2} alt="" /></figure>
        <h2 className='tit10'>Phone</h2>
        <h5>0 123 456 789</h5>
      </div>
      <div className="address-box">
        <figure><img src={address3} alt="" /></figure>
        <h2 className='tit10'>Mail</h2>
        <h5>Yourname@Email.Com</h5>
      </div>
    </div>
  )
}
export default Address;