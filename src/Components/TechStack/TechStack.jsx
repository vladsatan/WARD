import redux from "../../photos/redux-logo 2.png";
import nodeLogo from "../../photos/node-logo-png-6 1.png";
import sassLogo from "../../photos/OIP 1.png";
import jsLogo from "../../photos/javascript-300x300 1.png";
import phpLogo from "../../photos/R (2) 1.png";
import reactLogo from "../../photos/da1c1ba16e52114d1a59e9ad666a4ae6 2.png";
import globe from "../../photos/globe.png";
import gallery from "../../photos/gallery.png";
import mess from "../../photos/message.png";
import settings from "../../photos/settings.png";
import "../TechStack/TechStack.scss";

const TechStack = () => {
  const photoArray = [redux, nodeLogo, sassLogo, jsLogo, phpLogo, reactLogo];
  const tasks = [
    {
      icon: globe,
      header: "Web Develop",
      text: "24/7 maintenance and monitoring that keeps your computers, servers and systems up and running.",
    },
    {
      icon: gallery,
      header: "Web Develop",
      text: "24/7 maintenance and monitoring that keeps your computers, servers and systems up and running.",
    },
    {
      icon: mess,
      header: "Web Develop",
      text: "24/7 maintenance and monitoring that keeps your computers, servers and systems up and running.",
    },
    {
      icon: settings,
      header: "Web Develop",
      text: "24/7 maintenance and monitoring that keeps your computers, servers and systems up and running.",
    },
  ];

  return (
    <div className="Tech-container">
      <h2 className="Image-header">
        Tech <span className="Image-blue">Stack</span>
      </h2>
      <div className="Technologies">
        {photoArray.map((el) => (
          <div className="Tech-item">
            <img className="Tech-logo" src={el} alt="logo"></img>
          </div>
        ))}
      </div>
      <h2 className="Image-header">
        What we can <span className="Image-blue">do?</span>
      </h2>
      <div className="Tech-deteils">
        {tasks.map((el) => (
          <div className="Tech-deteils-item">
            <img src={el.icon}/>
            <div className="deteils-text">
                <h5>{el.header}</h5>
                <p>{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
