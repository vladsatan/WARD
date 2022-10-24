import React from 'react'
import "./AboutUs.scss"
import aboutPhoto from "../../photos/about.png"

export default function AboutUs() {
  return (
    <div className='AboutUs' id='about'>
        <div className='about-container'>
           <div className='about-flex'>
            <div className='about-photo'><img src={aboutPhoto} alt="" /></div>
            <div className='about-contant'>
                <h1>About <span>us</span></h1>
                <p>The Ward team of devoted specialists 
                   who offers systematic approach to brand 
                   strategy, development, digital design, 
                   and online marketing.</p>

                <p>We thrive to work with brands 
                   that inspire and excite our team.</p>

                <p>Together, we are working to grow 
                   enlightened and progressive brands.</p>
            </div>
           </div>
        </div>
    </div>
  )
}
