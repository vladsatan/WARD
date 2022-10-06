import React from 'react'
import "./Difference.scss"
import differBack from "../../Logo/differ-back.svg"
import alarm from "../../Logo/alarm.svg"
import analyticsReference from "../../Logo/analytics-reference.svg"
import bot from "../../Logo/bot.svg"


export default function Difference() {
  return (
    <section className='difference'>
        <div className='difference-container'>
            <h1><span>Ward Inc.</span> Difference</h1>
            <div className='flex-diff'>
            <img className='differ-img' src={differBack} alt='differBack' width={'100%'} />
                <div className='box'>
                    <img src={analyticsReference} alt="analyticsReference" />
                    <h2>Better value for your money</h2>
                    <p>We have a transparent pricing model <br />
                       and charge only for the work we do. <br />
                       On a tight budget? Reach out, <br />
                       and we'll try to adjust to your needs.</p>
                </div>


                <div className='box'>
                    <img src={alarm} alt="alarm" />
                    <h2>Impossible? We’re on it</h2>
                    <p>We succeed where others have <br />
                       let you and your business down.<br />
                       We have years of experience<br /> 
                       in a wide spectrum of technologies,<br />
                       industries and application types.</p>
                </div>


                <div className='box'>
                    <img src={bot} alt="bot" />
                    <h2>Certified Professionals</h2>
                    <p id="techStack">We make sure our team <br />
                       carries the perfect combination <br />
                       of theoretical and field expertise, <br />
                       so rest assured your IT Operations <br />
                       are always in qualified hands..</p>
                </div>
                
            </div>

        </div>
    </section>
  )
}
