import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import headshot from "../../../public/headshot.webp";
import styles from "./about.module.scss";
import { CircleChevronDownIcon, GithubIcon, LinkedInIcon } from "../icons";
import EmailIcon from "../icons/email";
import Resume from "../resume";

const About = () => {
  const [clickedScroll, setClickedScroll] = useState(false);

  const handleClick = () => {
    setClickedScroll(true);

    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image
          alt="Image of Austin McBee"
          width={250}
          height={250}
          src={headshot}
          className={styles.image}
        />
        <h2>Austin McBee</h2>
        <p>Software Engineer | System Tinkerer</p>
        <div className={styles.iconContainer}>
          <a target="_blank" href="https://github.com/Jay-A-McBee">
            <GithubIcon height={25} width={25} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jayaustinmcbee/">
            <LinkedInIcon height={25} width={25} />
          </a>
          <a target="_blank" href="mailto:jmcbee1@gmail.com">
            <EmailIcon height={25} width={25} />
          </a>
        </div>
        <div
          className={`${styles.mobileOnly} ${
            !clickedScroll ? styles.scrollButtonAnimation : ""
          }`}
        >
          <button onClick={handleClick}>
            <CircleChevronDownIcon height={75} width={75} />
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <Resume />
      </div>
    </div>
  );
};

export default About;
