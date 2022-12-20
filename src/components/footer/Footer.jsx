import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Truong Giang</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/ntgiang3007/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/__.n.t.g.__/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://gitlab.com/giangcuathoidai"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-gitlab"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; NguyenTruongGiang. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
