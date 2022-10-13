import React from "react";
import "./Feedback.scss";
import close from "../../Logo/close.svg";

export default function Feedback(props) {
  const { status, setStatus } = props;
  const handleSubmit = (e) => {
    const specificationArray = [];
    e.preventDefault();
    console.log(e.target.classification);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={status ? "feedback_container active" : "feedback_container"}
    >
      <h1>WORK WITH US</h1>
      <h2>YES WE CAN</h2>
      <p className="error-text">
        <span>*</span> indicates required fields
      </p>
      <div className="input_flex">
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input
          required={true}
          type="email"
          placeholder="E-mail *"
          name="email"
        />
        <input type="tel" placeholder="Phone Number" name="tel" />
        <input type="text" placeholder="Company name" name="company" />
        <input type="text" placeholder="Website URL" name="website" />
      </div>
      <div className="check_container">
        <div className="side">
          <h4>Business Classification</h4>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>Ecommerce</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>B2B</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>SaaS</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>Healthcare</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>Marketing agencies</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>StartUps</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="classification" id="classification" />
            <p>Other</p>
          </div>
        </div>
        <div className="side side-r">
          <h4>What are you looking for?</h4>

          <div className="box-check">
            <input type="checkbox" name="fieldType" id="fieldType" />
            <p>Design</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="fieldType" id="fieldType" />
            <p>Marketing</p>
          </div>

          <div className="box-check">
            <input type="checkbox" name="fieldType" id="fieldType" />
            <p>Development</p>
          </div>
        </div>
      </div>
      <div className="check_container text-left">
        <div className="aria-box">
          <h4>How can we help?</h4>
          <textarea
            placeholder="Tell us about your project..."
            name="help"
            id="help"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <h4>
            Expected Annual Budget <span>*</span>
          </h4>
          <textarea
            placeholder="Please Select"
            name="budget"
            id="budget"
            cols="30"
            rows="10"
            required={true}
          ></textarea>
        </div>
      </div>
      <button type="submit">SUBMIT</button>
      <div className="close" onClick={() => setStatus(!status)}>
        <img src={close} alt="" />
      </div>
    </form>
  );
}
