import styles from "../style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";

import { testimonial3, testimonial4, testimonial5 } from "../assets";

export default function TestimonialsSlide() {
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.testimonialSlide1}>
            <div className="md:flex">
              <div className="ss:flex ml-10">
                <p className={styles.testimonialSlide2}>
                  "It was easy and felt safe to book and pay, appreciate that I
                  got a good deal!"
                </p>
              </div>
              <div className="md:shrink-0">
                <img
                  className="object-cover md:h-full"
                  src={testimonial3}
                  alt="Happy customer"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testimonialSlide1}>
            <div className="md:flex">
              <div className="ss:flex ml-10">
                <p className={styles.testimonialSlide2}>
                  "Got fast and nice help on the website. Professional
                  organisers! Recommended!"
                </p>
              </div>
              <div className="md:shrink-0">
                <img
                  className="object-cover md:h-full"
                  src={testimonial4}
                  alt="Happy customer"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.testimonialSlide1}>
            <div className="md:flex">
              <div className="ss:flex ml-10">
                <p className={styles.testimonialSlide2}>
                  "Thank you Juno for making it so easy to book and get the help
                  we needed."
                </p>
              </div>
              <div className="md:shrink-0">
                <img
                  className="object-cover md:h-full"
                  src={testimonial5}
                  alt="Happy customer"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
