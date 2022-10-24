import React from "react";
import "./Solution.scss";
import robotSolution from "../../photos/robotSolution.png"
import metalGears from "../../photos/metalGears.png"

export default function Solution() {
  return (
    <div className="solution">
      <div className="solution_container">
      <h1>OUR <span>SOLUTION</span></h1>

      <div className="solution-flex">
      <div className="solution-cont">
          <p>Ward wants you to stand out with a strong <br />
             brand image that shapes how people perceive <br />
             you and your business experience.</p>
          <p>Our team create websites and e-commerce <br />
             platforms that effectively convey who you are, <br />
             show why you're essential.</p>
          <p>Generate the highest conversion rates, promote company <br />
             growth and profitability, and stand out visually through <br />
             mind-blowing brand concept and design.</p>
        </div>

        <div className="solution-img">
          <img className="robotSolution" src={robotSolution} alt="" />
          <img className="metalGears" src={metalGears} alt="" />
        </div>
      </div>
       
  
        </div>

      </div>
  );
}
