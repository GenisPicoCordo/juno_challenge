import styles from "../style";

const Prices = (props) => {
  return (
    <div className={styles.prices}>
        <div className="text-center p-6">
            <span className={styles.prices1}>{props.price}</span>
            <span className={styles.prices2}>"Free"</span>
            <span className={styles.prices3}>{props.time}</span>
        </div>
        <ul className={styles.prices4}>
            <li className={styles.prices5}>
                <img
                    src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/icons/tick.svg"
                    alt="tick"
                    className="w-10 h-10"
                />
                <p>
                    Take advantage of the entire Junoversum that offers you a
                    valuable and active everyday life.
                </p>
            </li>
            <li className={styles.prices5}>
                <img
                    src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/icons/tick.svg"
                    alt="tick"
                    className="w-10 h-10"
                />
                <p>
                    Take advantage of exclusive offers and inspiring articles from
                    hand-picked partners and experts!
                </p>
            </li>
            <li className={styles.prices5}>
                <img
                    src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/icons/tick.svg"
                    alt="tick"
                    className="w-10 h-10"
                />
                <p>
                    Meet like-minded people in the Juno community, both in the app
                    and on the website!
                </p>
            </li>
            <li className={styles.prices5}>
                <img
                    src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/icons/tick.svg"
                    alt="tick"
                    className="w-10 h-10"
                />
                <p>
                    Get access to a marketplace tailored to your needs!
                </p>
            </li>
            <li className={styles.prices5}>
                <img
                src="https://juno-go.com/wp-content/themes/stillactive_new/dist/images/icons/tick.svg"
                alt="tick"
                className="w-10 h-10"
                />
            <p>
              {/* <span className="font-poppins font-normal text-dimWhite text-xl leading-[24px]"> */}
                Pay your membership {props.option} by card!
              {/* </span> */}
            </p>
            </li>
        </ul>
        <div className="m-10">
            {/* <GetStarted className=""/> */}
            <a target="_blank" href="https://juno-go.com/en/mitt-konto/?action=register">
                <button className={styles.prices6}>
                    Sing Up
                </button>
            </a>
            
        </div>
    </div>
    );
};

export default Prices;
