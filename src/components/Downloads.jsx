import { apple, google } from "../assets";
import styles from "../style";

const Downloads = () => (
  <div className={`${styles.paragraph} ${styles.downloads}`}>
    <p className={styles.downloads1}>
      Download the app now and start today!
    </p>
    <div className={styles.downloads2}>
      <a target="_blank" href="https://apps.apple.com/se/app/still-active-community/id1465625466?l=en">
        <img src={apple} alt="apple" />
      </a>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.reptilehaus.stillactive.se&utm_source=website&utm_campaign=website_banner&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img src={google} alt="googleplay" />
      </a>
    </div>
  </div>
);

export default Downloads;
