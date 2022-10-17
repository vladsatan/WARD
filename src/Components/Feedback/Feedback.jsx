import React from "react";
import "./Feedback.scss";
import close from "../../Logo/close.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function Feedback(props) {
  const { status, setStatus, setSubmit} = props;


  const [firstNameS,setFirstName] = useState('')
  const [lastNameS,setLastName] = useState('')
  const [emailS,setEmail] = useState('')
  const [telS,setTel] = useState('')
  const [companyS,setCompany] = useState('')
  const [websiteS,setWebsite] = useState('')
  const [helpS,setHelp] = useState('')
  const [budgetS,setBudget] = useState('')

  const [classificationS,setClassification] = useState('')
  const [fieldNodesS,setFieldNodes] = useState('')

  const [classificationArrayS,setClassificationArray] = useState([])
  const [fieldTypeS,setFieldType] = useState([])

   useEffect(()=>{

    if(classificationS.chec === true){
      const array = []
      array.push(classificationS)
      const newArray = array.concat(classificationArrayS)
      setClassificationArray(newArray)
      console.log(classificationArrayS);
    } 
    
    else if(classificationS.chec === false) {
      setClassificationArray(array=>array.filter(e=>e.text != classificationS.text))
      console.log(classificationArrayS);
    }

   },[classificationS])


   useEffect(()=>{

    if(fieldNodesS.chec === true){
      const array = []
      array.push(fieldNodesS)
      const newArray = array.concat(fieldTypeS)
      setFieldType(newArray)
      console.log(fieldTypeS);
    } 
    
    else if(fieldNodesS.chec === false) {
      setFieldType(array=>array.filter(e=>e.text != fieldNodesS.text))
      console.log(fieldTypeS);
    }

   },[fieldNodesS])

  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const resultArrayClassification = classificationArrayS.map(e=>e.text)
    const resultArrayType = fieldTypeS.map(e=>e.text)

    const classificationArray = resultArrayClassification;
    const fieldType = resultArrayType;
    const firstName = firstNameS;
    const lastName = lastNameS;
    const email = emailS;
    const tel = telS;
    const company = companyS;
    const website = websiteS;
    const help = helpS;
    const budget = budgetS;



    const request = {
      classificationArray: classificationArray,
      fieldType: fieldType,
      firstName: firstName,
      lastName: lastName,
      email: email,
      tel: tel,
      company: company,
      website: website,
      help: help,
      budget: budget,
    };


  fetch("https://wardapi.herokuapp.com/email", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  })   .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

       setSubmit(true)
       setStatus(false)

       setFirstName('')
       setLastName('')
       setEmail('')
       setTel('')
       setCompany('')
       setWebsite('')
       setHelp('')
       setBudget('')

       setClassification('')
       setFieldNodes('')

       setClassificationArray([])
       setFieldType([])
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
        <input type="text" placeholder="First Name" name="firstName" onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" name="lastName" onChange={(e)=>setLastName(e.target.value)} />
        <input
          required={true}
          type="email"
          placeholder="E-mail *"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="tel" placeholder="Phone Number" name="tel" onChange={(e)=>setTel(e.target.value)} />
        <input type="text" placeholder="Company name" name="company" onChange={(e)=>setCompany(e.target.value)} />
        <input type="text" placeholder="Website URL" name="website" onChange={(e)=>setWebsite(e.target.value)} />
      </div>
      <div className="check_container">
        <div className="side">
          <h4>Business Classification</h4>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="Ecommerce"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>Ecommerce</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="B2B"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>B2B</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="SaaS"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>SaaS</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="Healthcare"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>Healthcare</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="Marketing agencies"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>Marketing agencies</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="StartUps"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>StartUps</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setClassification({chec: e.target.checked, text: e.target.value})}
              value="Other"
              type="checkbox"
              name="classification"
              id="classification"
            />
            <p>Other</p>
          </div>
        </div>
        <div className="side side-r">
          <h4>What are you looking for?</h4>

          <div className="box-check">
            <input
            onChange={(e)=>setFieldNodes({chec: e.target.checked, text: e.target.value})}
              value="Design"
              type="checkbox"
              name="fieldType"
              id="fieldType"
            />
            <p>Design</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setFieldNodes({chec: e.target.checked, text: e.target.value})}
              value="Marketing"
              type="checkbox"
              name="fieldType"
              id="fieldType"
            />
            <p>Marketing</p>
          </div>

          <div className="box-check">
            <input
            onChange={(e)=>setFieldNodes({chec: e.target.checked, text: e.target.value})}
              value="Development"
              type="checkbox"
              name="fieldType"
              id="fieldType"
            />
            <p>Development</p>
          </div>
        </div>
      </div>
      <div className="check_container text-left">
        <div className="aria-box">
          <h4>How can we help?</h4>
          <textarea
          onChange={(e)=>setHelp(e.target.value)}
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
          onChange={(e)=>setBudget(e.target.value)}
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
