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
      headerStart: "Managet ",
      headerEnd: "IT",
      paragraf:"By outsourcing your Business’ IT Operations to a trusted partner like Ward Inc., you obtain unlimited IT support for your employees and strategic management of all of your IT infrastructure.",
      image: girl,
      color: "#D3095D",
    }
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
