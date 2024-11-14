import React from "react";
import myImage from "./joy.png";
import "./info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno" className="--info-image" />
      <h1>Syed Joy</h1>
      <h2>Software Engineer</h2>
      <p>
        <a
          href="https://syeadjoy.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="--info-portfolio"
        >
          Syedjoy.dev(click)
        </a>
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:syeadjoy0@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/syed-ashik-mahamud-joy-20a479210/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
