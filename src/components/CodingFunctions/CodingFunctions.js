import styles from "./CodingFunctions.module.css";
import factorial from '../../utils/factorial';
import reverseBits from '../../utils/reverseBits';
import uniqueWords from '../../utils/uniqueWords';

const CodingFunctions = () => {

  return (
    <section className={styles.container}>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>Factorial</span>
        <div className={styles.functionCode}>
          {`
  const factorial = (num) => {
      let result = 1;
      for (let i = 1; i <= num; i += 1) {
        result = result * i;
      }
      return result;
  };

            *can also use recursion
          `}
        </div>
      </div>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>ReverseBits</span>
        <div className={styles.functionCode}>
          {`
    const reverseBits = (num) => {
        const binary = num.toString(2);
        const reverseBinary = binary.split("").reverse().join("");
        const result = parseInt(reverseBinary, 2);
        return result;
    }

    *can also use set and for
          `}
        </div>
      </div>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>uniqueWords</span>
        <div className={styles.functionCode}>
          {`
  const uniqueWords = (str) => {
      const arrFromStr = str.split(" ");
      const result = arrFromStr.filter(
        (word, index, array) => array.indexOf(word) === index
      );
      return result.join(" ");
  };
          `}
        </div>
      </div>
    </section>
  );
}

export default CodingFunctions;