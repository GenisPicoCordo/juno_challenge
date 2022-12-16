import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  Testimonials,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Business />
        <Billing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
