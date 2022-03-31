import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer id="contact">
      <ul>
        <li>
          <a
            href="http://www.linkedin.com/in/montensia/"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />

            <span className="nav-text">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:montensia@gmail.com" className="footer-link">
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="nav-text">Email</span>
          </a>
        </li>
      </ul>
      <p>Created by Montensia Banks &copy; 2022</p>
    </footer>
  );
};

export default Footer;
