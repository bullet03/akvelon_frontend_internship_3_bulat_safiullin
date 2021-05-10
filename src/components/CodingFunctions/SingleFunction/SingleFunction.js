import React from "react"
import styles from "./SingleFunction.module.css"

const SingleFunction = ({ name, code }) => {
  return (
    <div className={styles.functionCard}>
      <span className={styles.functionHead}>{name}</span>
      <div className={styles.functionCode}>{code}</div>
    </div>
  );
};

export default SingleFunction;