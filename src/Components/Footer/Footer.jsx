import React from "react";
import "./Footer.scss";
import email from "../../Logo/mail.svg"
import { useState } from "react";
import check from "../../photos/check.png"

const Footer = () => {
  const [secEmail,setSecEmail] = useState('')
  const [checked, setChecked] = useState(false)

  const handleSend =()=>{

    const request = {
      email: secEmail
    }

    setChecked(true)

    fetch("https://wardapi.herokuapp.com/onlyemail", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    })   .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));



  }

  return (
    <footer>
    <div className="footer_container">
     
     
     <div className="contact-tel">
      <p>Give us a call</p>
      <p>+380 (99) 384 94 75</p>
     </div>


     <div className="contact-input">
      <h3>Get updates and news</h3>
     <div className="contact-input-flex">
      <input type="email" name="" id="" placeholder="Enter your email address here" onChange={(e)=>setSecEmail(e.target.value)} />
      <div className="send-BTN" onClick={handleSend}>
        {checked? <img src={check} width={'50px'} alt="" /> :  <img src={email} alt="" />}

        </div>
     </div>
     </div>


     <div className="contact-mail">
      <p>Connect with us</p>
      <a href="mailto:wardcompanyua@gmail.com">wardcompanyua@gmail.com</a>
     </div>


    </div>
    </footer>
  );
};

export default Footer;
