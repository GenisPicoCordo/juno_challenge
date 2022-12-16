import styles from "../style";
import TestimonialsSlide from "./TestimonialsSlide";

const Testimonials = () => (
  <section
    id="clients"
    className="flex-col relative"
  >
    <div className={styles.gradient1} />

    <div className="text-center mb-6 text-gradient">
      <h2 className={styles.heading2}>Customer stories</h2>
    </div>
    <div className="w-5/6 mx-auto">
      <TestimonialsSlide />
    </div>
  </section>
);

export default Testimonials;
