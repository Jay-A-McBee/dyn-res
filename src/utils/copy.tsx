import { useMemo } from "react";

type MappedLink = Record<string, { display: string; link: string }>;

const LINK_REGEX = /{link, (.*), (.*)}/gm;

const Copy = ({ val }: { val: string }) => {
  const mappedCopy = useMemo(() => {
    const matches = val.match(LINK_REGEX);
    if (matches) {
      return matches.reduce<JSX.Element[]>((acc, m, idx) => {
        const [_, display, link] = m.substring(1, m.length - 1).split(",");

        const [start, end] = val.split(m);

        if (idx === 0) {
          acc.push(
            <p key={start}>
              {start}
              <a key={display} target="_blank" href={link}>
                {display}
              </a>
              {end}
            </p>
          );
        } else {
          acc.push(
            <p key={end}>
              <a key={display} target="_blank" href={link}>
                {display}
              </a>
              {end}
            </p>
          );
        }

        return acc;
      }, []);
    }

    return <p>{val}</p>;
  }, [val]);

  return <>{mappedCopy}</>;
};

export default Copy;
