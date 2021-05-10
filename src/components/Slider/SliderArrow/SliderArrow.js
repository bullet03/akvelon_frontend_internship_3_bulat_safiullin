import styles from "./SliderArrow.module.css"

const SliderArrow = (props) => {
  const { imageIndex, setImageIndex, sliderImages, sign, func } = props;

  const showNext = () => {
    if (imageIndex === sliderImages.length - 1) {
      return;
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const showPrev = () => {
    if (imageIndex === 0) {
      return;
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const funcToUse = () => {
    if (func === "showNext") {
      showNext();
    } else {
      showPrev();
    }
  };

  return (
    <button type="button" onClick={funcToUse} className={styles.arrow}>
      {sign}
    </button>
  );
}

export default SliderArrow;