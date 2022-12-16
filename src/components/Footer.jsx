import Downloads from "./Downloads";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={styles.footer}>
      <img
        src={logo}
        alt="juno"
        className={styles.footer1}
      />
    </div>
    <div className={`${styles.flexStart} ${styles.footer2}`}>
      <div className={styles.footer3}>
        <p className={styles.footer4}>
          Ⓒ 2022 Juno. All rights Reserved.
        </p>
        <Downloads />
      </div>

      <div className={styles.footer5}>
        {footerLinks.map((footer) => (
          <ul
            className={styles.footer6}
            key={footer.name}
            src={footer.icon}
            onClick={() => window.open(footer.link)}
          >
              {footer.name} 
          </ul>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
