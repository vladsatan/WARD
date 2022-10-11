import "./App.scss";
import MainSection from "./Components/MainSection/MainSection";
import AboutUs from "./Components/AboutUs/AboutUs";
import Solution from "./Components/Solution/Solution";
import Brand from "./Components/Brand/Brand";
import TechStack from "./Components/TechStack/TechStack";
import Help from "./Components/Help/Help";
import Cases from "./Components/Cases/Cases";
import Feedback from "./Components/Feedback/Feedback";
import { useState } from "react";
import ClientsSay from "./Components/ClientsSay/ClientsSay";


function App() {

  const [isFeetback, setIsFeetback] = useState(false);

  return (
    <div className="App" >
      <div className='logoName'><h1>Ward inc.</h1></div>
      <MainSection setStatus={setIsFeetback} />
      <AboutUs />
      <Solution />
      <Brand />
      <Help />
      <TechStack />
      <ClientsSay/>
      <Cases />
      <Feedback status={isFeetback} setStatus={setIsFeetback} />
      <div className="flag" onClick={()=>setIsFeetback(!isFeetback)}>HIRE US</div>
    </div>
  );
}

export default App;
