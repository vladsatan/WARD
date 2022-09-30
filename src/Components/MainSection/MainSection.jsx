import React from 'react'
import "./MainSection.scss"
import figurs from "../../Logo/figurs.svg"
import figurback from "../../Logo/figur-back.svg"

export default function MainSection() {
  return (
    <div className='MainSection'>
        <div className='MainSection_container'>

            <div className='left-s'>
                <h1>WE’RE <span>Ward INC.</span><br></br>We Are Managed Technology</h1>
                <p>We help organizations of all sizes<br></br> simplify and take control<br></br> of their IT.</p>
                <button>GET YOUR PLAN TODAY</button>
            </div>


            <div className='right-s'>
            <img src={figurs} alt="figurs" width={'120%'} />
            <img className='figur'  src={figurback} alt="figurs" width={'140%'} />
            </div>


        </div>
    </div>
  )
}
