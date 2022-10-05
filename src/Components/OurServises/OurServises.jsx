import React from 'react'
import "./OurServises.scss"
import globe from "../../photos/globe.png"
import gallery from "../../photos/gallery.png";
import mess from "../../photos/message.png";
import settings from "../../photos/settings.png";

export default function OurServises() {
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
    <div id="services">
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
  )
}
