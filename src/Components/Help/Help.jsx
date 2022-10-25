import React from 'react'
import "./Help.scss"
import help1 from "../../photos/help1.png"
import help2 from "../../photos/help2.png"
import help3 from "../../photos/help3.png"

export default function Help() {
  return (
    <div className='Help' id='services'>
        <div className='help_container'>
            <h1>So how can we help <span>you</span></h1>
             <div className='help-flex'>
              <div className='flex-box'>
                <img src={help1} alt="" />
                <h2>Brand Strategy</h2>
                <p>Our marketing and design 
                   department will work together 
                   on the identity of your product 
                   for better recognition in your 
                   field. By getting this identity 
                   we win for your strengths 
                   in terms of competitiveness 
                   in your niche business</p>
              </div>

              <div className='flex-box'>
              <img src={help2} alt="" />
                <h2>Digital Marketing</h2>
                <p>The best marketing department, 
                   who have been in the market 
                   for years and have been chief marketers of large businesses and projects will work on your case using the secret keys to growing your company. 
                   This is a great opportunity to 
                   be the best among the best.</p>
              </div>

              <div className='flex-box'>
              <img src={help3} alt="" />
                <h2>Web Development</h2>
                <p>Our team will be happy to 
                   automate your workspace 
                   for you by creating tools 
                   to help you do just that. 
                   After all, automating 
                   your business is the 
                   way to scale!</p>
              </div>
             </div>
        </div>
    </div>
  )
}
