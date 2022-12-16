import styles from "../style";
import Downloads from "./Downloads";
import Prices from "./Prices";

const Billing = () => {
  return (
    <section
      id="billing"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div
        className={styles.billing}
      >
        <div className={styles.billing1}>
          <h1 className={styles.billing2}>
            Let’s get you started with Juno!
          </h1>
        </div>
        <div className={styles.billing3}>
          <p
            className={`${styles.paragraph} ${styles.billing4}`}
          >
            Your membership gives you access to Juno's wonderful community where
            you can meet new like-minded people and exciting activities, as well
            as receive exclusive offers from our partners. At the end of your
            trial period, you can choose to pay monthly or annually. See below
            what you get for your membership.
          </p>
        </div>

        <div className={styles.billing5}>
          <Downloads />
        </div>
      </div>

      <div className={styles.billing6}>
        <div className={styles.billing7}>
          
              <div >
                <Prices price="99 kr" time="Month" option="monthly" />
              </div>
  
          <div >
                <Prices
                  price="999 kr"
                  time="Year"
                  option="monthly or annually"
                />
              </div>
          
        </div>

        <div>
          {/* gradient start */}
          <div className={styles.gradien1}/>
          <div className={styles.gradient1}/>
          {/* gradient end */}
        </div>
      </div>
    </section>
  );
};

export default Billing;
