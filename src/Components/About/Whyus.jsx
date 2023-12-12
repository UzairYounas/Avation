import React from 'react'

function Whyus() {
    return (
        <section className='why_bg'>
            <div className="container">
                <div className="team_head d-flex flex-column gap-2">
                    <div className="d-flex gap-4">
                        <h3 className='text-white'>Why Us</h3>
                        <hr />
                    </div>
                    <h2 className='tit8'>Our <span>Approach</span></h2>
                </div>
                <div className="why_box d-flex flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-3 gap-sm-5 gap-5">
                    <div className="box_div d-flex gap-2">
                        <div className="d-flex">
                            <h4>Mission</h4>
                        </div>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="box_div d-flex gap-2">
                        <div className="d-flex">
                            <h4>Vision</h4>
                        </div>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="box_div d-flex gap-2">
                        <div className="d-flex">
                            <h4>Goal</h4>
                        </div>
                        <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Whyus;