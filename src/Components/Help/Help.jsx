import React from 'react'
import "./Help.scss"
import Briefcase from "../../Logo/Briefcase.svg"
import web from "../../Logo/web.svg"
import Settings from "../../Logo/Settings.svg"

export default function Help() {
  return (
    <div className='Help' id='services'>
        <div className='help_container'>
            <h1>So how can we help <span>you</span></h1>
            <div className='help_content'>
                <div className='help_flex'>

                <div className='mini-container'>
                    <img src={Briefcase} alt="" />
                    <div className='box'>
                    <img src={Briefcase} alt="" />
                        <h3 className='box-padd'>Brand Strategy</h3>
                        <p>Our marketing and design 
                           department will work together 
                           on the identity of your product 
                           for better recognition in 
                           your field. By getting this 
                           identity we win for your 
                           strengths in terms of 
                           competitiveness in 
                           your niche business</p>
                    </div>
                </div>

                <div className='mini-container'>
                    <img src={web} alt="" />
                    <div className='box'>
                    <img src={web} alt="" />
                        <h3 className='box-padd2'>Web Development</h3>
                        <p>Our team will be happy to 
                           automate your workspace 
                           for you by creating 
                           tools to help you do just that. 
                           After all, automating 
                           your business is the 
                           way to scale!</p>
                    </div>
                </div>

                <div className='mini-container'>
                    <img src={Settings} alt="" />
                    <div className='box'>
                    <img src={Settings} alt="" />
                        <h3 className='box-padd'>Digital Marketing</h3>
                        <p>The best marketing department, 
                           who have been in the market 
                           for years and have been 
                           chief marketers of large 
                           businesses and projects will 
                           work on your case using the 
                           secret keys to growing your 
                           company. This is a great 
                           opportunity to be the best 
                           among the best.</p>
                    </div>
                </div>
                </div>


            </div>
        </div>
    </div>
  )
}
