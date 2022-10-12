import "./App.scss";
import React from "react";
import { useState } from "react";
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const ClientsSay = React.lazy(() =>
  import("./Components/ClientsSay/ClientsSay")
);
const Feedback = React.lazy(() => import("./Components/Feedback/Feedback"));
const Cases = React.lazy(() => import("./Components/Cases/Cases"));
const Help = React.lazy(() => import("./Components/Help/Help"));
const TechStack = React.lazy(() => import("./Components/TechStack/TechStack"));
const Brand = React.lazy(() => import("./Components/Brand/Brand"));
const Solution = React.lazy(() => import("./Components/Solution/Solution"));
const AboutUs = React.lazy(() => import("./Components/AboutUs/AboutUs"));
const MainSection = React.lazy(() =>
  import("./Components/MainSection/MainSection")
);
import ClientsSay from "./Components/ClientsSay/ClientsSay";
import wardLogo from "./wardLogo.svg"


function App() {
  const [isFeetback, setIsFeetback] = useState(false);

  return (
    <div className="App">
      <div className="logoName">
          <img src={wardLogo} />
      </div>
      <MainSection setStatus={setIsFeetback} />
      <AboutUs />
      <Solution />
      <Brand />
      <Help />
      <TechStack />
      <ClientsSay />
      <Cases />
      <Feedback status={isFeetback} setStatus={setIsFeetback} />
      <Footer />

      <div className="flag" onClick={() => setIsFeetback(!isFeetback)}>
        HIRE US
      </div>
    </div>
  );
}

export default App;
