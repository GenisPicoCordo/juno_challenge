import { features } from "../constants";
import { phone } from "../assets";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`${styles.business} ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`${styles.business1} ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className={styles.business2}>
      <h4 className={styles.business3}>
        {title}
      </h4>
      <p className={styles.business4}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
    <img
          src={phone}
          alt="phone"
          className={styles.business5}
        />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;