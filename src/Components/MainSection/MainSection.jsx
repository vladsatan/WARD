import React from "react";
import "./MainSection.scss";
import cub from "../../anim/cub.png";
import cvadrat from "../../anim/cvadrat.svg";
import ellipse from "../../anim/Ellipse.svg";
import line from "../../anim/Line.svg";
import pizza from "../../anim/pizza.svg";
import bigelipse from "../../anim/bigelipse.svg";
import figurback from "../../Logo/figur-back.svg";
import Header from "../Header/Header";

export default function MainSection() {
  return (
    <>
      <Header />

      <div className="MainSection">
        <div className="MainSection_container">
          <div className="left-s">
            <h1>
              WE’RE <span>Ward INC.</span>
              <br></br>We Are Managed Technology
            </h1>

            <div className="anim-cont disnun">
              <div className="cub">
                <img src={cub} alt="cub" />
              </div>
              <img className="line" src={line} alt="line" />
              <img className="cvadrat" src={cvadrat} alt="cvadrat" />
              <img className="ellipse" src={ellipse} alt="ellipse" />
              <img className="pizza" src={pizza} alt="pizza" />
              <img className="bigelipse" src={bigelipse} alt="bigelipse" />
              <img
                className="figur"
                src={figurback}
                alt="figurs"
                width={"100%"}
              />
            </div>

            <p>
              We help organizations of all sizes<br></br> simplify and take
              control<br></br> of their IT.
            </p>
            <button>GET YOUR PLAN TODAY</button>
          </div>

          <div className="right-s">
            <div className="anim-cont">
              <div className="cub">
                <img src={cub} alt="cub" />
              </div>
              <img className="line" src={line} alt="line" />
              <img className="cvadrat" src={cvadrat} alt="cvadrat" />
              <img className="ellipse" src={ellipse} alt="ellipse" />
              <img className="pizza" src={pizza} alt="pizza" />
              <img className="bigelipse" src={bigelipse} alt="bigelipse" />
              <img
                className="figur"
                src={figurback}
                alt="figurs"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
