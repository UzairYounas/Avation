import React from 'react'
import counter from "../../assets/images/counter.png"

 function Counter() {
  return (
    <section className='counter'>
      <div>
      <img src= {counter} alt="counter_image"/>
      </div>
      <div className="counter_bg">
        <div className="count_div d-flex gap-2">
            <div className="d-flex">
                <h2 className='tit3'>243</h2>
                <h2 className='tit3'>+</h2>
            </div>
            <h5 className='text-white'>Clients</h5>
        </div>
        <div className="count_div d-flex gap-2">
            <div className=" d-flex">
                <h2 className='tit3'>70</h2>
                <h2 className='tit3'>+</h2>
            </div>
            <h5 className='text-white'>Projects</h5>
        </div>
        <div className="count_div d-flex gap-2">
            <div className=" d-flex">
                <h2 className='tit3'>80</h2>
                <h2 className='tit3'>+</h2>
            </div>
            <h5 className='text-white'>Robots</h5>
        </div>
        <div className="count_div d-flex gap-2">
            <div className=" d-flex">
                <h2 className='tit3'>240</h2>
                <h2 className='tit3'>+</h2>
            </div>
            <h5 className='text-white'>Clients</h5>
        </div>
      </div>
    </section>
  )
}
export default Counter;