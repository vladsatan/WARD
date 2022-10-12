import React from 'react'
import "./Brand.scss"
import price from "../../Logo/price.svg"
import clock from "../../Logo/Clock.svg"
import team from "../../Logo/team.svg"
import back from "../../photos/equityBack.svg"

export default function Brand() {
  return (
    <div className='Brand'>
        <div className='brand-cotainer'>


    <h1 className='equity_ti'>We develop brand equity.</h1>
            <div className='equity_flex'>
              <div className="equity_back"/>

            <div className='equity_container'>
                <img src={price} alt="" />
                <h2 className='equity_tittle_span'>Quality - Price - Ratio</h2>
                <p>A growing team of professionals
                   who take care of your investment. <br />
                   And allows you to get a 
                   personalized approach, 
                   as well as real quality, 
                   without spending 
                   all money in the world.</p>
            </div>

            <div className='equity_container'>
                <img src={clock} alt="" />
                <h2 className='equity_tittle'>Impossible timeline? This isn't <span>about us.</span></h2>
                <p>We want to guarantee you good timelines, 
                   giving you more opportunities to 
                   deal with other issues as quickly 
                   as possible. 
                   Because we understand 
                   how important <span>TIME</span><br /> is in the business world.
</p>
            </div>

            <div className='equity_container'>
                <img src={team} alt="" />
                <h2 className='equity_tittle'>Highly professional development team</h2>
                <p>Amazing development team
                   will work on your project helping
                   you to find the best result, <br />
                   as well as find the most individual 
                   path in which you will be better 
                   than anyone else without spending 
                   a lot of investment 
                   in different specialists.</p>
            </div>

            </div>
    </div>


    </div>
  )
}
