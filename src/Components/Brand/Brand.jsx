import React from 'react'
import "./Brand.scss"
import Price from "../../photos/Price.png"
import Clock from "../../photos/Clock.png"
import Stuff from "../../photos/Stuff.png"

export default function Brand() {
  return (
    <div className='Brand'>
        <div className='brand-cotainer'>
          <h1>We develop brand <span>equity</span></h1>

          <div className='brand-flex'>

            <div className='brand-box'>
              <img src={Price} alt="" />
              <h2>Quality - Price - Ratio</h2>
              <p>A growing team of professionals 
                 who take care of your investment. 
                 And allows you to get a 
                 personalized approach, as well 
                 as real quality, without spending 
                 all money in the world.</p>
            </div>

            <div className='brand-box'>
              <img src={Clock} alt="" />
              <h2>Impossible timeline?<br />
                This isn't <span>about us.</span></h2>

              <p>We want to guarantee you good 
                 timelines, giving you more 
                 opportunities to deal with other 
                 issues as quickly as possible. 
                 Because we understand how 
                 important TIME is in the 
                 business world.</p>
            </div>

            <div className='brand-box'>
              <img src={Stuff} alt="" />
              <h2>Highly professional <br />
               development team</h2>
              <p>Amazing development team will 
                 work on your project helping 
                 you to find the best result, as 
                 well as find the most individual 
                 path in which you will be better 
                 than anyone else without 
                 spending a lot of investment 
                 in different specialists.</p>
            </div>

          </div>
    </div>
 </div>
  )
}
