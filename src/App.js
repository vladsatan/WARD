import "./App.scss";
import Header from "./Components/Header/Header";
import ImageSection from "./Components/ImageSection/ImageSection";
import MainSection from "./Components/MainSection/MainSection";
import chill from "./photos/chilllll.jpg";
import girl from "./photos/3.jfif"
import Difference from './Components/Difference/Difference';
import TechStack from "./Components/TechStack/TechStack";
import Strategy from "./Components/Strategy/Strategy.jsx";

function App() {
  const sections = [
    {
      headerStart: "About ",
      headerEnd: "Ward Inc.",
      paragraf:
        "We’ve provided world-class IT Services in the DFW area for 4+ years, consistently delivering business value with the latest technology.",
      image: chill,
      color: "#43F07C",
    },
    {
      headerStart: "Managet ",
      headerEnd: "IT",
      paragraf:"By outsourcing your Business’ IT Operations to a trusted partner like Ward Inc., you obtain unlimited IT support for your employees and strategic management of all of your IT infrastructure.",
      image: girl,
      color: "rgb(170, 25, 49)",
    },
  ];

  return (
    <div className="App">
      <Header />
      <MainSection />
      {sections.map((el) => (
        <ImageSection
          headerStart={el.headerStart}
          headerEnd={el.headerEnd}
          paragraf={el.paragraf}
          image={el.image}
          color={el.color}
        />
      ))}
      <Difference/>
      <TechStack/>
      <Strategy/>
    </div>
  );
}

export default App;
