import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import "./styles/about-me.scss";

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const linkProps = [
  {
    href: "https://github.com/Jay-A-McBee",
    ariaLabel: "Link to Jay McBee's Github profile",
    target: "_blank",
    icon: faGithub
  },
  {
    href: "https://www.linkedin.com/in/jayaustinmcbee/",
    ariaLabel: "Link to Jay McBee's LinkedIn profile.",
    target: "_blank",
    icon: faLinkedin
  },
  {
    href: "mailto:jmcbee1@gmail.com",
    ariaLabel: "Link to send Jay McBee an email",
    icon: faGoogle
  }
];

export const AboutMe = () => (
  <main className="container">
    <section>
      {linkProps.map(({ icon, ...rest }, i) => (
        <Link key={i} {...rest}>
          <FontAwesomeIcon size="6x" icon={icon} />
        </Link>
      ))}
    </section>
  </main>
);
