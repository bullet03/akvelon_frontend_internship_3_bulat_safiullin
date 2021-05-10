import React from "react";
import styles from "./FormInput.module.css"

const FormInput = ({ text, type, onChange }) => {
  return (
    <div className={styles.fieldContainer}>
      <span>{text}</span>
      <div>
        <input type={type} onChange={onChange} />
      </div>
    </div>
  );
};

export default FormInput;