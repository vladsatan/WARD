import React from "react";
import "./Footer.scss";
import email from "../../Logo/mail.svg"

const Footer = () => {
  return (
    <div className="footer_container">
     
     
     <div className="contact-tel">
      <p>Give us a call</p>
      <p>+380 (99) 384 94 75</p>
     </div>


     <div className="contact-input">
      <h3>Get updates and news</h3>
     <div className="contact-input-flex">
      <input type="email" name="" id="" placeholder="Enter your email address here" />
      <div className="send-BTN"><img src={email} alt="" /></div>
     </div>
     </div>


     <div className="contact-mail">
      <p>Connect with us</p>
      <a href="mailto:wardcompanyua@gmail.com">wardcompanyua@gmail.com</a>
     </div>


    </div>
  );
};

export default Footer;
