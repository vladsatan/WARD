import React from 'react'
import "./Feedback.scss"
import close from "../../Logo/close.svg"

export default function Feedback(props) {
    const {status,setStatus} = props;
  return (
    <div className={status? 'feedback_container active':'feedback_container'}>
        <h1>WORK WITH US</h1>
        <h2>YES WE CAN</h2>
        <p className='error-text'><span>*</span> indicates required fields</p>
        <div className='input_flex'>
            <input type={'text'} placeholder='First Name' />
            <input type={'text'} placeholder='Last Name' />
            <input required type={'email'} placeholder='E-mail *' />
            <input type={'tel'} placeholder='Phone Number' />
            <input type={'text'} placeholder='Company name' />
            <input type={'text'} placeholder='Website URL' />
            <div className='close' onClick={()=>setStatus(!status)}><img src={close} alt=""/></div>
        </div>
        <div className='check_container'>
            <div className='side'>
                <h4>Business Classification</h4>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Ecommerce</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>B2B</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>SaaS</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Healthcare</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Marketing agencies</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>StartUps</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Other</p>
                </div>

              </div>
            <div className='side side-r'>
               <h4>What are you looking for?</h4>

               <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Design</p>
                </div>

                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Marketing</p>
                </div>


                <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <p>Development</p>
                </div>
            </div>
        </div>
        <div className='check_container text-left'>
            <div className='aria-box'>
                <h4>How can we help?</h4>
                <textarea placeholder='Tell us about your project...' name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <h4>Expected Annual Budget <span>*</span></h4>
                <textarea placeholder='Please Select' name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <button>SUBMIT</button>
        
    </div>
  )
}
