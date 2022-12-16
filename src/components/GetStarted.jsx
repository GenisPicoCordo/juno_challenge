import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a target="_blank" href="https://juno-go.com/en/mitt-konto/?action=register">
    <div
      className={`${styles.flexCenter} ${styles.getStarted}`}
    >
      <div
        className={`${styles.flexCenter} ${styles.getStarted1}`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className={styles.getStarted2}>
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className={styles.getStarted3}
          />
        </div>
        <p className={styles.getStarted2}>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </a>
);

export default GetStarted;
