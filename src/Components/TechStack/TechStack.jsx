import React from 'react'
import "./TechStack.scss"
import redux from "../../Logo/redux-logo.png"
import php from "../../Logo/php-logo.png"
import node from "../../Logo/node-logo.png"
import javaskript from "../../Logo/javascript-logo.png"
import sass from "../../Logo/sass-logo.png"
import react from "../../Logo/react-logo.png"

export default function TechStack() {
  return (
    <div className='TechStack' id='techStack'>
        <div className='TechStack_container'>
            <h1>Tech Stack</h1>
            <div className='big_stack_container'>
             <a target={"_blank"} rel="noreferrer" href="https://redux.js.org/"><div className='stack_container1'><img className='stack-logos' src={redux} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://www.php.net/"><div className='stack_container2'><img className='stack-logos' src={php} alt="" /></div></a> 
            <a target={"_blank"} rel="noreferrer" href="https://nodejs.org/en/"><div className='stack_container3'><img className='stack-logos' src={node} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://javascript.info/"><div className='stack_container4'><img className='stack-logos' src={javaskript} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://sass-lang.com/"><div className='stack_container5'><img className='stack-logos' src={sass} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://reactjs.org/"><div className='stack_container6'><img className='stack-logos' src={react} alt="" /></div></a>
            </div>
        </div>
    </div>
  )
}

