import React, { useEffect } from 'react';
import NavBar from '../common/NavBar';
import OurProject from '../Components/ProjectUs/OurProject';

function ProjectUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className='contact-bg'>
                <NavBar />
            </div>
            <div className='about_h1 d-flex justify-content-center align-items-center'>
                <h1 className='tit1'>Project</h1>
            </div>
            <OurProject />
        </>
    )
}
export default ProjectUs;