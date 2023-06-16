import { useMemo } from "react";
import styles from "./copy.module.scss";

const LINK_REGEX = /{link, (.*), (.*)}/gm;
const HIGHLIGHT_REGEX = /<highlight>(.*)<highlight>/;
const HIGHLIGHT_REGEX_GLOBAL = new RegExp(HIGHLIGHT_REGEX, "g");

const Copy = ({ text, nested }: { text: string; nested?: boolean }) => {
  const mappedCopy = useMemo(() => {
    const linkMatches = text.match(LINK_REGEX);
    const highlightMatches = text.match(HIGHLIGHT_REGEX_GLOBAL);

    if (nested && !linkMatches && !highlightMatches) {
      return text;
    }

    if (linkMatches) {
      return linkMatches.reduce<JSX.Element[]>((acc, m, idx) => {
        const [_, display, link] = m.substring(1, m.length - 1).split(",");

        const [start, end] = text.split(m);

        acc.push(
          <p key={start}>
            {highlightMatches ? <Copy text={start} nested /> : start}
            <a key={display} target="_blank" href={link}>
              {display}
            </a>
            {highlightMatches ? <Copy text={end} nested /> : end}
          </p>
        );

        return acc;
      }, []);
    } else if (highlightMatches) {
      return highlightMatches.reduce<JSX.Element[]>((acc, m, idx) => {
        const [, matchedText] = m.match(HIGHLIGHT_REGEX) ?? [];

        const [start, end] = text.split(m);

        acc.push(
          nested ? (
            <span key={start}>
              <Copy key={start} text={start} nested />
              <span className={styles.textHighlight}>{matchedText}</span>
              <Copy text={end} nested />
            </span>
          ) : (
            <p key={start}>
              <Copy text={start} nested />
              <span className={styles.textHighlight}>{matchedText}</span>
              <Copy text={end} nested />
            </p>
          )
        );

        return acc;
      }, []);
    }

    return <p key={text}>{text}</p>;
  }, [text, nested]);

  return <>{mappedCopy}</>;
};

export default Copy;
