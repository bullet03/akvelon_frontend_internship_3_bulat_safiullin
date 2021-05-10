import React from "react";
import styles from "./RegistrationButton.module.css";

const RegistrationButton = ({ onButtonSubmit, userInfo }) => {
  return (
    <button
      type="button"
      onClick={() => onButtonSubmit(userInfo)}
      className={styles.buttonSignUp}
    >
      Sign Up
    </button>
  );
};

export default RegistrationButton;
