import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./main-frame.module.css";

export type MainFrameType = {
  ellipseFrameA?: string;
  james?: string;
  thankYouThatWasVeryHelpfu?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPaddingRight?: CSSProperties["paddingRight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
};

const MainFrame: NextPage<MainFrameType> = ({
  ellipseFrameA,
  james,
  thankYouThatWasVeryHelpfu,
  propWidth,
  propPaddingRight,
  propAlignSelf,
  propHeight,
}) => {
  const jamesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      paddingRight: propPaddingRight,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPaddingRight, propAlignSelf]);

  const thankYouThatStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.mainFrame}>
      <img
        className={styles.ellipseFrameA}
        loading="eager"
        alt=""
        src={ellipseFrameA}
      />
      <div className={styles.frameJames}>
        <b className={styles.james} style={jamesStyle}>
          {james}
        </b>
        <div className={styles.thankYouThat} style={thankYouThatStyle}>
          {thankYouThatWasVeryHelpfu}
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
