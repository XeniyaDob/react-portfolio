import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        className="heartbeat"
        href="https://www.linkedin.com/in/xeniya-dobrogorskaya/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className="heartbeat"
        href="https://github.com/XeniyaDob"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        className="heartbeat"
        href="mailto:xeniya.dobrogorskaya@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
