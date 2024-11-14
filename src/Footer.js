import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li className="whatsapp">
          <a href="https://wa.me/8801762259976" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li className="facebook">
          <a href="https://www.facebook.com/syedjoyyy/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com/syeadjoy/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/Syed-Ashik-Mahamud" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/syed-ashik-mahamud-joy-20a479210/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
