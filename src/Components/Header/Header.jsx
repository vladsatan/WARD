import React, { useState } from "react";
import "./Header.scss";
import { useEffect } from "react";

export default function Header() {
  const [transparent, setTransparent] = useState(0);
  

  useEffect(() => {
    let event = window.addEventListener("scroll", () => {
      const position = window.scrollY;
      if (position > 110) {
        setTransparent(position);
      } else {
        setTransparent(null);
      }
    });
  }, []);
  return (
    <header className={transparent ? "Header-transparent" : "header"}>
      <div className="header-container">
        <a href="#about">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#techStack">Tech Stack</a>
        <a href="#strategy">Approach</a>
      </div>
    </header>
  );
}
