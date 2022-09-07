import React from "react";

import "../styles/footer.sass";

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="socials">
      <div className="github">
        <a href="https://github.com/MayconDS " target="_blank">
          <AiFillGithub /> MayconDS
        </a>
      </div>
      <div className="instagram">
        <a href="https://www.instagram.com/mayconzzl/" target="_blank">
          <AiOutlineInstagram /> mayconzzl
        </a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/maycondouglasss/" target="_blank">
          <AiFillLinkedin /> maycondouglasss
        </a>
      </div>
    </div>
  );
};

export default Footer;
