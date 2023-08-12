import React from "react";
import { RiMailSendFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <span className="divider"></span>
      <div className="container">
        <div className="container-logo">
          <h1 className="logo">
            start <span>raona</span>
          </h1>
          <p>coding corporate futures</p>
          <p className="location">San Salvador de Jujuy | Jujuy | Argentina</p>
        </div>
        <div className="container-contact">
          <h2>Contacto</h2>
          <div className="social">
            <a
              className="link"
              target="blank"
              href={"https://github.com/JorgeDCoria/start-raona/tree/dev"}
            >
              <RiGithubFill />
            </a>

            <a
              className="link"
              target="blank"
              href={"https://www.linkedin.com/in/jorge-coria-593432285/"}
            >
              <RiLinkedinFill />
            </a>
            <a
              className="link"
              target="blank"
              href={"mailto:coriajorge.dev@gmail.com"}
            >
              <RiMailSendFill />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
