import React from 'react'
import "./TechStack.scss"
import redux from "../../Logo/redux-logo.svg"
import php from "../../Logo/php-logo.svg"
import node from "../../Logo/node-logo.svg"
import javaskript from "../../Logo/javascript-logo.svg"
import sass from "../../Logo/sass-logo.svg"
import react from "../../Logo/react-logo.svg"

export default function TechStack() {
  return (
    <div className='TechStack' id='techStack'>
        <div className='TechStack_container'>
            <h1><span>Tech</span> Stack</h1>
            <div className='big_stack_container'>
             <a target={"_blank"} rel="noreferrer" href="https://redux.js.org/"><div className='stack_container1'><img src={redux} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://www.php.net/"><div className='stack_container2'><img src={php} alt="" /></div></a> 
            <a target={"_blank"} rel="noreferrer" href="https://nodejs.org/en/"><div className='stack_container3'><img src={node} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://javascript.info/"><div className='stack_container4'><img src={javaskript} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://sass-lang.com/"><div className='stack_container5'><img src={sass} alt="" /></div></a>
            <a target={"_blank"} rel="noreferrer" href="https://reactjs.org/"><div className='stack_container6'><img src={react} alt="" /></div></a>
            </div>
        </div>
    </div>
  )
}

