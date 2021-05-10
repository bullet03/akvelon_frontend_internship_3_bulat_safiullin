import React from "react";
import styles from "./CodingFunctions.module.css";
import taskFunctions from "../../consts/taskFunctions";
import SingleFunction from "./SingleFunction"

const CodingFunctions = () => {
  const [factorial, reverseBits, uniqueWords] = taskFunctions;

  return (
    <section className={styles.container}>
      <SingleFunction name="Factorial" code={factorial} />
      <SingleFunction name="ReverseBits" code={reverseBits} />
      <SingleFunction name="UniqueWords" code={uniqueWords} />
    </section>
  );
};

export default CodingFunctions;
