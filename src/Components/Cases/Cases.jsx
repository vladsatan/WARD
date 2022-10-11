import React from 'react'
import "./Cases.scss"
import obloko1 from "../../Logo/oblako1.svg"
import obloko2 from "../../Logo/oblako2.svg"
import obloko3 from "../../Logo/oblako3.svg"
import bgtext from "../../Logo/bgtext.svg"
import man from "../../Logo/man.svg"
import sloy1 from "../../photos/sloy1.png"
import sloy2 from "../../photos/sloy2.png"
import sloy3 from "../../photos/sloy3.png"
import case1 from "../../Logo/case1.svg"
import case2 from "../../Logo/case2.svg"
import case3 from "../../Logo/case3.svg"
import case4 from "../../Logo/case4.svg"
import case5 from "../../Logo/case5.svg"
import case6 from "../../Logo/case6.svg"
import sky from "../../Logo/sky.svg"

export default function Cases() {
  return (
    <div className='Cases' id='strategy'>
      <div className='cases-container'>
        <div className='sky'>
          <img src={sky} alt="" />
        </div>
 
      <div className="cases-bg-container">
        <div className="sloy1"><img src={sloy1} alt=""/></div>
        <div className="sloy2"><img src={sloy2} alt=""/></div>
        <div className="sloy3"><img src={sloy3} alt=""/></div>
        <div className="man-container">
          <div className="oblako1"><img src={obloko1} alt=""/></div>
          <div className="oblako2"><img src={obloko2} alt=""/></div>
          <div className="oblako3"><img src={obloko3} alt=""/></div>
          <div className="text"><img src={bgtext} alt=""/></div>
          <div className="man"><img src={man} alt=""/></div>
        </div>
    </div>

     <div className='content-part'>


      <div className='left-cases'>


        <div className='case-l'>
          <img src={case1} alt="case1" />
          <h3>Target audience research</h3>
          <p>Our analytics team studies your potential audience and your target market</p>
        </div>

        <div className='case-l'>
          <img src={case2} alt="case2" />
          <h3>Market analysis of competitors</h3>
          <p>Complete study of competitors' sites to understand what is important in your niche</p>
        </div>
        <div className='case-l'>
          <img src={case3} alt="case3" />
          <h3>Collaborate as part of a team</h3>
          <p>Communicating with you to make sure you reflect your vision as much as possible in the project</p>
        </div>
      </div>


      <div className='right-cases'>


        <div className='case-r'>
          <img src={case4} alt="case4" />
          <h3>Great ideas as your personality</h3>
          <p>Web design and development team, make your vision into something unique and special just for you.</p>
        </div>

        <div className='case-r'>
        <img src={case5} alt="case5" />
          <h3>Make it glam</h3>
          <p>Fill your site with brilliant content that will make your audience choose you</p>
        </div>


        <div className='case-r'>
        <img src={case6} alt="case6" />
          <h3>Complete statement</h3>
          <p>We won't sleep until our work is done perfectly for you</p>
        </div>


      </div>
     </div>
         
      </div>
    </div>
  )
}
