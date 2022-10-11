import React from 'react'
import "./AboutUs.scss"
import earth from "../../Logo/earth.svg"
import aboutPhoto from "../../Logo/Photo-about.svg"

export default function AboutUs() {
  return (
    <div className='AboutUs' id='about'>
        <div className='about-container'>
            <img className='earth' src={earth} alt="" />
            <h2>“Your brand should not face long-term damage as a result of a poor website.”</h2>
            <div className='about-flex'>
                <div className='about_text'>
                    <h1>About <span>The Ward</span></h1>
                    <p className='grey'>The Ward team of devoted specialists who offers systematic approach to brand strategy, development, digital design, and online marketing.</p>
                    <p className='grey_1'>We thrive to work with brands that inspire and excite our team.</p>
                    <p className='grey_2'>Together, we are working to grow enlightened and progressive brands.</p>
                </div>
                <div className='about_img'>
                    <img src={aboutPhoto} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
