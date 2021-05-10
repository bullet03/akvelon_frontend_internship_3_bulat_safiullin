import React from "react";
import styles from "./SliderArrow.module.css";

const SliderArrow = ({ sign, funcToUse }) => {
  return (
    <button type="button" onClick={funcToUse} className={styles.arrow}>
      {sign}
    </button>
  );
};

export default SliderArrow;
