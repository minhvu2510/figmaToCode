import type { NextPage } from "next";
import Background from "../components/background";
import MainFrame from "../components/main-frame";
import styles from "./index.module.css";

const ChatsMockup: NextPage = () => {
  return (
    <div className={styles.chatsMockup}>
      <div className={styles.rectangle} />
      <Background />
      <MainFrame
        ellipseFrameA="/ellipse@2x.png"
        james="James"
        thankYouThatWasVeryHelpfu="Thank you! That was very helpful!"
      />
      <div className={styles.background} />
      <MainFrame
        ellipseFrameA="/ellipse-1@2x.png"
        james="Will Kenny"
        thankYouThatWasVeryHelpfu="I know... I’m trying to get the funds."
        propWidth="unset"
        propPaddingRight="unset"
        propAlignSelf="stretch"
        propHeight="36px"
      />
      <div className={styles.background1} />
      <MainFrame
        ellipseFrameA="/ellipse-2@2x.png"
        james="Beth Williams"
        thankYouThatWasVeryHelpfu="I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm..."
        propWidth="unset"
        propPaddingRight="unset"
        propAlignSelf="stretch"
        propHeight="unset"
      />
      <div className={styles.background2} />
      <MainFrame
        ellipseFrameA="/ellipse-3@2x.png"
        james="Rev Shawn"
        thankYouThatWasVeryHelpfu="Wanted to ask if you’re available for a portrait shoot next week."
        propWidth="unset"
        propPaddingRight="unset"
        propAlignSelf="stretch"
        propHeight="unset"
      />
      <div className={styles.background3} />
    </div>
  );
};

export default ChatsMockup;
