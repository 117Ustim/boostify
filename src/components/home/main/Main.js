import WeAreProduct from "./weAreProduct/WeAreProduct";
import styles from "./main.module.scss";

import SliderMain from "./sliderMain/SliderMain";
import WeAreOperators from "./weAreOperators/WeAreOperators";
import WhyProduct from "./whyProduct/WhyProduct";
import GuidingScaling from "./guidingScaling/GuidingScaling";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <WeAreProduct />

        <div className={styles.swiper_slider}>
          <SliderMain />
        </div>
        <WeAreOperators />
        <WhyProduct />
        <GuidingScaling />
      </div>
    </>
  );
}
