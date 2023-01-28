import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-bottom">
        <p className="prabhat">Developed by Prabhat Raj</p>
        <p className="copyright">copyright &copy;{currentYear}</p>
        <ul className="socials icons">
          <li>
            <a className="instagram" rel="noreferrer" target="_blank" href="https://www.instagram.com/theprabhatraj/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className="facebook" rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100058373536369">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a className="github" rel="noreferrer" target="_blank" href="https://github.com/theprabhatraj">
              <FaGithub />
            </a>
          </li>
          <li>
            <a className="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/theprabhatraj/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a className="youtube" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCTHAdzFEr4uMvCyiPEK6kzA">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
