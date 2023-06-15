import { useEffect, useState } from "react";
import Image from "next/image";
import headshot from "../../../public/headshot.webp";
import about from "../../../static/about.json";
import Card from "../card";
import Copy from "@/utils/copy";
import styles from "./about.module.scss";

const { description, emojis } = about;

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setCurrent((current) => {
        if (window.innerWidth <= 800) {
          return current;
        }

        return 0;
      });
    };

    window.addEventListener("resize", handleResize);

    () => window.removeEventListener("resize", handleResize);
  }, []);

  const elements = description.map((sentence) => (
    <Copy key={sentence} val={sentence} />
  ));

  const handleClick = () => {
    setCurrent((current) => {
      if (current < elements.length - 1) {
        return current + 1;
      }
      return 0;
    });
  };

  return (
    <Card>
      {isMobile ? (
        <div className={styles.container}>
          <button aria-label={"next"} onClick={handleClick}>
            {"->"}
          </button>
          <div className={styles.textContainer}>{elements[current]}</div>
          <div className={styles.emojiContainer}>
            {emojis[current].split(" ").map((em, idx) => (
              <span key={`${em}-${idx}`}>{em}</span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Image
            alt="Image of Austin McBee"
            width={350}
            height={300}
            src={headshot}
            className={styles.image}
          />
          {elements}
        </div>
      )}
    </Card>
  );
};

export default About;
