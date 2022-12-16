import styles from "../style";
import GetStarted from "./GetStarted";
import Downloads from "./Downloads";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  return (
    <section id="hero" className={`${styles.hero}  ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} ${styles.hero1} `}>
        <div className={styles.hero2}>
          <h1 className={styles.hero3}>
            Juno connects, <br className="sm:block hidden" />
            <span className="text-gradient">activates</span>
          </h1>
        </div>

        <h1 className={styles.hero4}>and inspires.</h1>
        <p className={`${styles.paragraph} ${styles.hero5} `}>
          Join our wonderful community where you will meet like-minded people
          and participate in different activities, according to your interests.
          Together we create a valuable everyday life!
        </p>
        <div className={styles.hero6}>
          <GetStarted />
        </div>
        <div className={styles.hero7}>
          <Downloads />
        </div>
      </div>
      <div className={styles.hero8}>
        <HeroSlide />
      </div>

      <div>
        <div className={styles.gradient} />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Downloads />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <HeroSlide />
      </div>
    </section>
  );
};

export default Hero;
