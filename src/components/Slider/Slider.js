import { useState } from "react"
import sliderImages from '../../consts/sliderImages.js'
import styles from './Slider.module.css'

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNext = () => {
    if (imageIndex === sliderImages.length - 1) {
      return;
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  const showPrev = () => {
    if (imageIndex === 0) {
      return;
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.slider}>
        <button type="button" onClick={showPrev} className={styles.leftArrow}>
          {"<"}
        </button>
        <img
          src={sliderImages[imageIndex]}
          alt="nature"
          className={styles.picture}
        />
        <button type="button" onClick={showNext} className={styles.rightArrow}>
          {">"}
        </button>
      </div>
    </section>
  );
}

export default Slider