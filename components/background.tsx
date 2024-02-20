import type { NextPage } from "next";
import styles from "./background.module.css";

const Background: NextPage = () => {
  return (
    <header className={styles.background}>
      <div className={styles.background1} />
      <div className={styles.timeStampFrame}>
        <div className={styles.time}>9:27</div>
        <img className={styles.uiIcon} alt="" src="/ui@2x.png" />
      </div>
      <div className={styles.parentContainer}>
        <div className={styles.header}>Chats</div>
      </div>
    </header>
  );
};

export default Background;
