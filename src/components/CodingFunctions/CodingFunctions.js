import React from "react";
import styles from "./CodingFunctions.module.css";
import taskFunctions from "../../consts/taskFunctions";

const CodingFunctions = () => {
  const [factorial, reverseBits, uniqueWords] = taskFunctions;

  return (
    <section className={styles.container}>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>Factorial</span>
        <div className={styles.functionCode}>{factorial}</div>
      </div>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>ReverseBits</span>
        <div className={styles.functionCode}>{reverseBits}</div>
      </div>
      <div className={styles.functionCard}>
        <span className={styles.functionHead}>uniqueWords</span>
        <div className={styles.functionCode}>{uniqueWords}</div>
      </div>
    </section>
  );
};

export default CodingFunctions;
