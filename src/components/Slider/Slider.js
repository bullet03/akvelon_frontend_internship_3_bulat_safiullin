import React, { useState } from "react"
import sliderImages from '../../consts/sliderImages.js'
import styles from './Slider.module.css'
import SliderArrow from "./SliderArrow"

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNext = () => {
    if (imageIndex !== sliderImages.length - 1) {
      setImageIndex(imageIndex + 1);
    } 
  };

  const showPrev = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.slider}>
        <SliderArrow
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          sliderImages={sliderImages}
          sign={"<"}
          funcToUse={showPrev}
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
          funcToUse={showNext}
        />
      </div>
    </section>
  );
}

export default Slider