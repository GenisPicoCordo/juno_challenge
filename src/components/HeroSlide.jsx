// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";

import { hike, lunch_drinks, yoga } from '../assets';
import styles from "../style";

export default function HeroSlide() {
  return (
    <>
      <Swiper 
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation]}
        className="hero_slide"
      >
        <SwiperSlide>
          <img className={styles.heroSlide} src={hike} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.heroSlide}  src={lunch_drinks} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.heroSlide}  src={yoga} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
