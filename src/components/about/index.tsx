import { useState, useRef } from "react";
import Image from "next/image";

import styles from "./about.module.scss";
import { CircleChevronDownIcon, GithubIcon, LinkedInIcon } from "../icons";
import EmailIcon from "../icons/email";
import Resume from "../resume";

const About = () => {
  const [clickedScroll, setClickedScroll] = useState(false);

  const resumeContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClickedScroll(true);

    if (resumeContainerRef.current) {
      resumeContainerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Image
          alt="Image of Austin McBee"
          width={256}
          height={256}
          sizes="(max-width: 800px) 50vw, 25vw"
          src="/headshot.webp"
          className={styles.image}
          priority
        />
        <h2>Austin McBee</h2>
        <p>Software Engineer | System Tinkerer</p>
        <div className={styles.iconContainer}>
          <a
            target="_blank"
            aria-label="Github profile link"
            href="https://github.com/Jay-A-McBee"
          >
            <GithubIcon height={25} width={25} />
          </a>
          <a
            target="_blank"
            aria-label="Linkedin profile link"
            href="https://www.linkedin.com/in/jayaustinmcbee/"
          >
            <LinkedInIcon height={25} width={25} />
          </a>
          <a
            target="_blank"
            aria-label="Jay Austin McBee email link"
            href="mailto:jmcbee1@gmail.com"
          >
            <EmailIcon height={25} width={25} />
          </a>
        </div>
        <div
          className={`${styles.mobileOnly} ${
            !clickedScroll ? styles.scrollButtonAnimation : ""
          }`}
        >
          <button aria-label="scroll down button" onClick={handleClick}>
            <CircleChevronDownIcon height={50} width={50} />
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <Resume ref={resumeContainerRef} />
      </div>
    </div>
  );
};

export default About;
