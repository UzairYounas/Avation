import React from 'react'
import contact from "../../assets/images/contact.png"

function Contact() {
    return (
        <section className='container'>
            <div className="row" style={{ margin: "100px 0" }}>
                <div className="col-lg-6 col-md-6 position-relative d-flex align-items-center">
                    <div className='contact_bg'></div>
                    <figure><img style={{ width: "100%" }} src={contact} alt="contact_img" /></figure>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex gap-4 cont">
                        <h3 className='text-white'>Contact</h3>
                        <hr />
                    </div>
                    <h2 className='tit8'>Be Well, Stay Clam and <span>Keep In Touch</span></h2>
                    <form className="robot_form">
                        <div className="d-flex">
                            <input type="text" placeholder='First Name' required/>
                            <input type="text" placeholder='Last Name' required/>
                        </div>
                        <div className="d-flex">
                            <input type="email" placeholder='Email Address' required/>
                            <input type="password" placeholder='Phone Number' required/>
                        </div>
                        <textarea placeholder='Message' rows="6"></textarea>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;