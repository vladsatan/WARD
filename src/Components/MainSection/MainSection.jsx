import React from "react";
import "./MainSection.scss";
import robot from "../../photos/robotMain.png"
import Header from "../Header/Header";

export default function MainSection(props) {

  const {setStatus,logoPH} = props;

  return (
    <>
      <Header />

      <div className="MainSection">
        <div className="MainSection_container">
          <div className="left-s">
            <div className="logoPhone"><img src={logoPH} alt="" width={'70px'} /></div>
            <h1>
            WE HELP BRANDS OF <span>ALL SIZES</span><br /> increase their <span>visibility</span><br /> and <span>profitability</span>
           </h1>

            <p>
            The Ward Company.<br/>We are engineering<br/> & design company<br/> from the future!
            </p>
            <button onClick={()=>setStatus(true)}>HIRE US</button>
          </div>

          <div className="right-s">
        <img src={robot} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

