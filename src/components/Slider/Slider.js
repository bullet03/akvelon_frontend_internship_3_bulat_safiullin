import { useState } from "react"
import sliderImages from '../../consts/sliderImages.js'
import styles from './Slider.module.css'
import SliderArrow from "./SliderArrow"

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.slider}>
        <SliderArrow
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          sliderImages={sliderImages}
          sign={"<"}
          func="showPrev"
        />
        <img
          src={sliderImages[imageIndex]}
          alt="nature"
          className={styles.picture}
        />
        <SliderArrow
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          sliderImages={sliderImages}
          sign={">"}
          func="showNext"
        />
      </div>
    </section>
  );
}

export default Slider