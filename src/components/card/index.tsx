import { PropsWithChildren } from "react";
import styles from "./card.module.scss";

const Card = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
